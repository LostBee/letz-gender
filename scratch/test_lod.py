import urllib.request
import json
import sys

# Force UTF-8 output on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

def test_word(word):
    url = f"https://lod.lu/api/lb/entry/{word}1"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            print(f"--- {word} ---")
            # print first level keys
            print("Keys:", list(data.keys()))
            if "entry" in data:
                entry = data["entry"]
                print("Entry Keys:", list(entry.keys()))
                print("Lemma:", entry.get("lemma"))
                # Print some other info
                for k in ["gender", "article", "plural", "noun", "categories"]:
                    if k in entry:
                        print(f"{k}: {entry[k]}")
                # Print sample sections of interest
                print(json.dumps(entry, indent=2)[:1000])
    except Exception as e:
        print(f"Error for {word}: {e}")

test_word("APP")
test_word("AUER")
test_word("APEL")
