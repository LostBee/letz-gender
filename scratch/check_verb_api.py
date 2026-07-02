import urllib.request
import json
import sys

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

def test_verb(verb):
    url = f"https://lod.lu/api/lb/entry/{verb.upper()}1"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            print(f"=== Verb: {verb} ===")
            if "entry" in data:
                entry = data["entry"]
                print("Part of speech:", entry.get("partOfSpeechLabel"))
                # Print inflection structures
                for ms in entry.get("microStructures", []):
                    if "inflection" in ms:
                        print("Inflection forms keys:", list(ms["inflection"].keys()))
                        if "forms" in ms["inflection"]:
                            print("Forms:")
                            for f in ms["inflection"]["forms"]:
                                print(f"  {f}")
                    if "grammaticalUnits" in ms:
                        for gu in ms["grammaticalUnits"]:
                            if "conjugation" in gu:
                                print("Conjugation:")
                                print(json.dumps(gu["conjugation"], indent=2))
    except Exception as e:
        print(f"Error: {e}")

test_verb("WANDEREN")
test_verb("FEIEREN")
