import os
import json
import re

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def check_living():
    path = os.path.join(PROJECT_ROOT, "js", "data", "living.js")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    match = re.search(r"words:\s*(\[.*\])\s*\}\);", content, re.DOTALL)
    words = json.loads(match.group(1))
    missing = []
    for w in words:
        if "audio" in w:
            local = os.path.join(PROJECT_ROOT, w["audio"].replace("/", os.sep))
            if not os.path.exists(local):
                missing.append((w["word"], w["audio"]))
    print(f"Living nouns: checked {len(words)}, missing {len(missing)} files.")
    return missing

def check_new_verbs():
    path = os.path.join(PROJECT_ROOT, "js", "data", "verbs.js")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    # We find all audio: "audio/verbs/..." in the file
    audios = re.findall(r'audio:\s*"audio/verbs/([^"]+)"', content)
    missing = []
    for fn in audios:
        local = os.path.join(PROJECT_ROOT, "audio", "verbs", fn)
        if not os.path.exists(local):
            missing.append(fn)
    print(f"Verbs: checked {len(audios)} audio paths, missing {len(missing)} files.")
    return missing

def check_new_adjectives():
    path = os.path.join(PROJECT_ROOT, "js", "data", "adjectives.js")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    audios = re.findall(r'audio:\s*"audio/adjectives/([^"]+)"', content)
    missing = []
    for fn in audios:
        local = os.path.join(PROJECT_ROOT, "audio", "adjectives", fn)
        if not os.path.exists(local):
            missing.append(fn)
    print(f"Adjectives: checked {len(audios)} audio paths, missing {len(missing)} files.")
    return missing

m1 = check_living()
m2 = check_new_verbs()
m3 = check_new_adjectives()

if not m1 and not m2 and not m3:
    print("\nAll audio paths verified successfully on disk!")
else:
    print("\nSome audio paths are missing!")
