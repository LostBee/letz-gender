import os
import re
import json
import urllib.request
import urllib.parse
import sys

# Force UTF-8 output on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_API = "https://lod.lu/api/lb/entry"
BASE_URL = "https://lod.lu"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) LetzGender/1.0"

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
AUDIO_DIR = os.path.join(PROJECT_ROOT, "audio", "verbs")

os.makedirs(AUDIO_DIR, exist_ok=True)

missing_verbs = [
    "(sech) bestueden", "(sech) fillen", "(sech) leeën", "(sech) ofdrechnen", "(sech) ofmellen",
    "(sech) setzen", "(sech) stellen", "(sech) umellen", "(sech) undoen", "(sech) wäschen",
    "anhänken", "daueren", "droen", "eraklammen", "erausgoen", "gefalen", "halen", "heemkommen",
    "hänken", "leien", "mathuelen", "ofhuelen", "ophiewen", "opspieren", "opstoen", "paken",
    "presentéieren", "reenen", "reesen", "schneien", "schécken", "sech freeën", "sech iren",
    "sech tummelen", "spullen", "staubsaugen", "stoen", "strecken", "treffen (sech)", "ufänken",
    "uruffen", "verbannen", "verdroen", "zerstéieren", "zielen", "zouspären", "zréckruffen"
]

def api_request(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        return None

def find_pronunciation_audio(data):
    data_str = json.dumps(data)
    all_audio = re.findall(r"uploads/(?!examples/)[^\s\"']+\.m4a", data_str)
    if all_audio:
        return f"{BASE_URL}/{all_audio[0]}"
    return None

def normalize_accented_char(word):
    replacements = {'é': 'e', 'ë': 'e', 'ä': 'a', 'ü': 'u', 'è': 'e', 'ê': 'e', 'â': 'a', 'û': 'u', 'î': 'i', 'ô': 'o'}
    word = word.lower()
    for k, v in replacements.items():
        word = word.replace(k, v)
    return word

def fetch_entry(base_word):
    # Try combinations of suffixes
    candidates = []
    # Try with original accents first
    for s in ("1", "2", "3", ""):
        candidates.append(f"{base_word.upper()}{s}")
    # Try normalized (no accents)
    norm = normalize_accented_char(base_word)
    if norm != base_word.lower():
        for s in ("1", "2", "3", ""):
            candidates.append(f"{norm.upper()}{s}")
            
    # Custom overrides/corrections for specific verbs if needed
    if base_word == "freeën":
        candidates.insert(0, "FREEEN1")
    if base_word == "iren" or base_word == "ieren":
        candidates.insert(0, "IEREN2")
        candidates.insert(1, "IEREN1")
    if base_word == "leeën":
        candidates.insert(0, "LEEN1")
    if base_word == "zouspären":
        candidates.insert(0, "ZOUSPAREN1")

    for lod_id in candidates:
        url = f"{BASE_API}/{urllib.parse.quote(lod_id)}"
        data = api_request(url)
        if data and "entry" in data:
            entry = data["entry"]
            # Ensure it is a verb and has conjugation tables
            if entry.get("partOfSpeech") == "VRB" and "tables" in entry and "verbConjugation" in entry["tables"]:
                return data, lod_id
    return None, None

def get_english_definition(data):
    try:
        definitions = []
        ms = data["entry"].get("microStructures", [])
        for structure in ms:
            for gu in structure.get("grammaticalUnits", []):
                for meaning in gu.get("meanings", []):
                    en_parts = meaning.get("targetLanguages", {}).get("en", {}).get("parts", [])
                    m_defs = []
                    for part in en_parts:
                        if part.get("type") == "translation":
                            m_defs.append(part.get("content"))
                    if m_defs:
                        definitions.append(" / ".join(m_defs))
        if definitions:
            # Return first distinct definitions combined
            return definitions[0]
    except Exception:
        pass
    return ""

def get_example_sentence(data):
    try:
        ms = data["entry"].get("microStructures", [])
        for structure in ms:
            for gu in structure.get("grammaticalUnits", []):
                for meaning in gu.get("meanings", []):
                    examples = meaning.get("examples", [])
                    for ex in examples:
                        parts = ex.get("parts", [])
                        for part in parts:
                            if part.get("type") == "text":
                                word_parts = part.get("parts", [])
                                sentence_words = []
                                for wp in word_parts:
                                    content = wp.get("content", "")
                                    if wp.get("joinWithPreviousWord", False) or content in [".", ",", "?", "!"]:
                                        if sentence_words:
                                            sentence_words[-1] = sentence_words[-1] + content
                                        else:
                                            sentence_words.append(content)
                                    else:
                                        sentence_words.append(content)
                                sentence = " ".join(sentence_words)
                                # Clean up extra spaces before punctuation
                                sentence = re.sub(r'\s+([.,?!])', r'\1', sentence)
                                return sentence
    except Exception:
        pass
    return ""

def download_audio(url, dest_name):
    dest_path = os.path.join(AUDIO_DIR, dest_name)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            with open(dest_path, "wb") as f:
                f.write(resp.read())
        return True
    except Exception as e:
        print(f"  [!] Failed to download audio: {e}")
        return False

def clean_conjugation_value(val):
    if not val:
        return ""
    # Remove slash options if any, e.g. "agehaangen / agehaang" -> "agehaangen"
    if "/" in val:
        val = val.split("/")[0].strip()
    return val

def process_verb(verb):
    # Extract base word
    base_word = verb.replace("(sech) ", "").replace("sech ", "").replace(" (sech)", "").strip()
    
    # Custom mappings of base words before querying
    if base_word == "iren":
        base_word = "ieren"
    elif base_word == "tummelen":
        base_word = "tommelen"
    elif base_word == "zréckruffen":
        base_word = "zeréckruffen"
    
    print(f"Processing: {verb} (base: {base_word})...")
    data, lod_id = fetch_entry(base_word)
    if not data:
        print(f"  [X] NOT FOUND on lod.lu")
        return None
    
    print(f"  Found entry: {lod_id}")
    
    # Conjugation Table
    table = data["entry"].get("tables", {}).get("verbConjugation", {})
    if not table:
        # Some words might have multiple tables or it is stored differently
        print(f"  [!] No conjugation table found for {lod_id}")
        return None
    
    indicative = table.get("indicative", {})
    present = indicative.get("present", {})
    
    p1 = clean_conjugation_value(present.get("p1"))
    p2 = clean_conjugation_value(present.get("p2"))
    p3 = clean_conjugation_value(present.get("p3"))
    p4 = clean_conjugation_value(present.get("p4"))
    p5 = clean_conjugation_value(present.get("p5"))
    p6 = clean_conjugation_value(present.get("p6"))
    
    past_participle = clean_conjugation_value(table.get("pastParticiple"))
    auxiliary = clean_conjugation_value(table.get("auxiliaryVerb"))
    
    definition = get_english_definition(data)
    example = get_example_sentence(data)
    
    # Audio
    audio_url = find_pronunciation_audio(data)
    audio_path = ""
    if audio_url:
        filename = audio_url.rsplit("/", 1)[-1]
        print(f"  Downloading audio from {audio_url}...")
        if download_audio(audio_url, filename):
            audio_path = f"audio/verbs/{filename}"
            print(f"  Saved audio to {audio_path}")
    else:
        print("  No pronunciation audio found")

    # Map back to verb name (if it's reflexive or not)
    # The conjugations might already have reflexive pronouns (mech, dech, etc.)
    # Let's verify p1. If the verb in PDF is reflexive but p1 doesn't have mech, we can append it.
    # But as we saw, LOD API includes "duschen (mech)" etc.
    
    js_obj = {
        "word": verb,
        "definition": definition,
        "type": "verb",
        "themes": [],
        "conjugation": {
            "present": {
                "ech": p1,
                "du": p2,
                "hien/hatt/et": p3,
                "mir": p4,
                "dir": p5,
                "si": p6
            },
            "pastParticiple": past_participle,
            "auxiliary": auxiliary
        },
        "mnemonic": "",
        "example": example,
        "audio": audio_path
    }
    
    return js_obj

def main():
    success_verbs = []
    failed_verbs = []
    
    for verb in missing_verbs:
        try:
            res = process_verb(verb)
            if res:
                success_verbs.append(res)
            else:
                failed_verbs.append(verb)
        except Exception as e:
            print(f"Error processing {verb}: {e}")
            failed_verbs.append(verb)
        print("-" * 40)
        
    # Write to a temporary file
    temp_out = os.path.join(PROJECT_ROOT, "tools", "extracted_verbs.json")
    with open(temp_out, "w", encoding="utf-8") as f:
        json.dump(success_verbs, f, indent=2, ensure_ascii=False)
        
    print(f"\nCompleted: {len(success_verbs)} succeeded, {len(failed_verbs)} failed.")
    if failed_verbs:
        print("Failed verbs:", failed_verbs)

if __name__ == "__main__":
    main()
