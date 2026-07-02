import os
import json
import re

# Resolve paths
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
js_file_path = os.path.join(PROJECT_ROOT, "js", "data", "food_drinks.js")

with open(js_file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract the words list JSON
# We can find the array starting after "words: "
match = re.search(r"words:\s*(\[.*\])\s*\}\);", content, re.DOTALL)
if not match:
    print("[Error] Could not find words array in food_drinks.js")
    exit(1)

words = json.loads(match.group(1))

missing_files = []
total_with_audio = 0

for item in words:
    if "audio" in item:
        total_with_audio += 1
        local_path = os.path.join(PROJECT_ROOT, item["audio"].replace("/", os.sep))
        if not os.path.exists(local_path):
            missing_files.append((item["word"], item["audio"]))

print(f"Total words: {len(words)}")
print(f"Words with audio: {total_with_audio}")
print(f"Missing audio files: {len(missing_files)}")

if missing_files:
    print("\n[!] Missing Files List:")
    for w, path in missing_files:
        print(f"  - {w}: {path}")
else:
    print("\n[✓] All referenced audio files exist on disk!")
