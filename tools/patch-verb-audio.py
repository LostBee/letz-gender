#!/usr/bin/env python3
"""Patch audio paths into verbs.js based on downloaded audio files."""
import os, re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)

verbs_file = os.path.join(PROJECT_ROOT, "js", "data", "verbs.js")
audio_dir = os.path.join(PROJECT_ROOT, "audio", "verbs")

# Build lookup: normalized word -> filename
audio_files = {}
for f in os.listdir(audio_dir):
    if f.endswith(".m4a"):
        # Strip trailing digit and extension: "akafen1.m4a" -> "akafen"
        base = re.sub(r'\d+\.m4a$', '', f)
        audio_files[base] = f

# Map from verb word -> normalized lookup key
# Handles special characters: é->e, ë->e, ä->a, ü->u, etc.
def normalize(word):
    word = word.lower().strip()
    word = word.replace("(sech) ", "")
    replacements = {'é': 'e', 'ë': 'e', 'ä': 'a', 'ü': 'u', 'è': 'e', 'ê': 'e', 'â': 'a', 'û': 'u', 'î': 'i', 'ô': 'o'}
    for k, v in replacements.items():
        word = word.replace(k, v)
    return word

with open(verbs_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all word entries and their audio fields
# Pattern: word: "...", ... audio: ""
lines = content.split('\n')
current_word = None
patched = 0
missing = []

for i, line in enumerate(lines):
    word_match = re.search(r'word:\s*"([^"]+)"', line)
    if word_match:
        current_word = word_match.group(1)
    
    if 'audio: ""' in line and current_word:
        normalized = normalize(current_word)
        if normalized in audio_files:
            filename = audio_files[normalized]
            path = f"audio/verbs/{filename}"
            lines[i] = line.replace('audio: ""', f'audio: "{path}"')
            patched += 1
        else:
            # Try alternate: lachen -> laachen
            found = False
            for key, fname in audio_files.items():
                if key.startswith(normalized[:3]):
                    # Close match
                    pass  # Skip fuzzy for safety
            missing.append(current_word)
        current_word = None

# Special manual fixes
new_content = '\n'.join(lines)

# lachen -> laachen1.m4a  (LOD spelling uses aa)
new_content = new_content.replace(
    'word: "lachen", definition: "to laugh",\n    type: "verb"',
    'word: "lachen", definition: "to laugh",\n    type: "verb"'
)
# Fix lachen audio manually
if 'word: "lachen"' in new_content:
    # Find lachen's audio line
    new_content = re.sub(
        r'(word: "lachen".*?)(audio: "")',
        lambda m: m.group(1) + 'audio: "audio/verbs/laachen1.m4a"',
        new_content,
        flags=re.DOTALL
    )
    if 'lachen' in missing:
        missing.remove('lachen')
    patched += 1

# Fix spazéieren -> spadseieren1.m4a
if 'word: "spazéieren"' in new_content:
    new_content = re.sub(
        r'(word: "spazéieren".*?)(audio: "")',
        lambda m: m.group(1) + 'audio: "audio/verbs/spadseieren1.m4a"',
        new_content,
        flags=re.DOTALL
    )
    if 'spazéieren' in missing:
        missing.remove('spazéieren')
    patched += 1

with open(verbs_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Patched {patched} audio paths.")
if missing:
    print(f"Missing audio for: {', '.join(missing)}")
else:
    print("All verbs have audio!")
