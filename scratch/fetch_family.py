import os
import re
import json
import sys
import urllib.request
import urllib.parse

# Force UTF-8 output on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_API = "https://lod.lu/api/lb/entry"
BASE_URL = "https://lod.lu"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) LetzGender/1.0"

# Target output directories
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
AUDIO_DIR = os.path.join(PROJECT_ROOT, "audio", "family")

raw_words_data = [
    ("Affer", "n", "Affer", "Sacrifice / Victim", "Singular and plural are completely identical."),
    ("Amsterdam", "n", "kee Pluriel", "Amsterdam", "Proper geographic noun."),
    ("Athen", "n", "kee Pluriel", "Athens", "Proper geographic noun."),
    ("Besuch", "m", "Besucher", "Visit / Guest", "Used idiomatically in text as op Besuch."),
    ("Bopa", "m", "Bopaen", "Grandfather / Grandpa", ""),
    ("Bouf", "m", "Bouwen", "Boy / Son", "LOD Trap: Note the complete consonant shift to -w- in the plural."),
    ("Bréissel", "n", "kee Pluriel", "Brussels", "Proper geographic noun."),
    ("Certificat", "n. / m.", "Certificaten", "Certificate", "LOD lists neuter first, but masculine is also accepted."),
    ("Dichter", "m", "Dichter", "Poet", "Singular and plural forms are completely identical."),
    ("Duerf", "n", "Dierfer", "Village", "Implements vowel mutation (Umloo) in the plural."),
    ("Elteren", "pl. only", "Plural tantum", "Parents", "Only exists as a plural entity."),
    ("Europa", "n", "kee Pluriel", "Europe", "Proper geographic noun."),
    ("Ex-Kommando", "m", "Ex-Kommandoen", "Ex-commando", "Inherits from Kommando (m./n.)."),
    ("Famill", "f", "Familljen", "Family", ""),
    ("Familljemember", "m", "Familljememberen", "Family member", "Compound noun ending in Member."),
    ("Frankfurt", "n", "kee Pluriel", "Frankfurt", "Proper geographic noun."),
    ("Fräizäit", "f", "kee Pluriel", "Free time / Leisure", "Abstract concept; no plural."),
    ("Frënd", "m", "Frënn", "Friend", ""),
    ("Gebuertstag", "m", "Gebuertstage", "Birthday", "Alternate plural Gebuertsteg is obsolete/rare in standard text."),
    ("Geschwëster", "pl. only", "Plural tantum", "Siblings", "Only exists as a plural entity."),
    ("Gittar", "f", "Gittaren", "Guitar", ""),
    ("Grousselteren", "pl. only", "Plural tantum", "Grandparents", "Only exists as a plural entity."),
    ("Handy", "m", "Handyen", "Mobile phone", ""),
    ("Hindi", "n", "kee Pluriel", "Hindi", "Languages are grammatically neuter."),
    ("Iessen", "n", "Iessen", "Food / Meal", "Root noun carries identical singular/plural morphology."),
    ("Liiblingsiessen", "n", "kee Pluriel", "Favorite food / meal", "Follows the internal structural constraints of Iessen."),
    ("Indien", "n", "kee Pluriel", "India", "Proper geographic noun."),
    ("Januar", "m", "kee Pluriel", "January", "Months carry no standard plural marker."),
    ("Joer", "n", "Joer", "Year", "Singular and plural are completely identical."),
    ("Jong", "m", "Jongen", "Boy / Son", "Used here in dem Jong vu menger Schwëster."),
    ("Jonggesell", "m", "Jonggesellen", "Bachelor", ""),
    ("Kaddo", "m", "Kaddos", "Gift / Present", "LOD Trap: Takes a structural -s ending."),
    ("Kand", "n", "Kanner", "Child", "Text switches between singular and plural forms."),
    ("Kéier", "f", "Kéieren", "Time / Instance / Turn", "Used in eng oder zwou Kéieren."),
    ("Koppel", "f", "Koppelen", "Couple", ""),
    ("Kultur", "f", "Kulturen", "Culture", ""),
    ("Land", "n", "Länner", "Country", "Transforms via vowel mutation in plural."),
    ("Léierin", "f", "Léierinnen", "Female teacher", "Feminine professional noun profile."),
    ("Lëtzebuerg", "n", "kee Pluriel", "Luxembourg", "Proper geographic noun."),
    ("Liewen", "n", "kee Pluriel", "Life", "Substantivized abstract noun."),
    ("Mamm", "f", "Mammen", "Mother / Mum", ""),
    ("Marketing", "m", "kee Pluriel", "Marketing", "Anglophone business loan; no plural."),
    ("Meenung", "f", "Meenungen", "Opinion", ""),
    ("Moment", "m", "Momenter", "Moment", ""),
    ("Monni", "m", "Monnien", "Uncle", ""),
    ("Mount", "m", "Méint", "Month", "Text contains the mutated plural form Méint."),
    ("Papp", "m", "Pappen", "Father / Dad", ""),
    ("Paräis", "n", "kee Pluriel", "Paris", "Proper geographic noun."),
    ("Partner", "m", "Partneren / Partner", "Partner (male)", "LOD officially authorizes both plural structural choices."),
    ("Partnerin", "f", "Partnerinnen", "Partner (female)", ""),
    ("Poet", "m", "Poeten", "Poet", ""),
    ("Rei", "f", "Reien", "Row / Order", "Used idiomatically in an der Rei (all right)."),
    ("Säit", "f", "Säiten", "Side / Page", "Used contextually for lineage (op der Mamm hirer Säit)."),
    ("Sanskrit", "n", "kee Pluriel", "Sanskrit", "Ancient language entity; neuter."),
    ("Saach", "f", "Saachen", "Thing / Aspect", ""),
    ("Schwëster", "f", "Schwësteren", "Sister", ""),
    ("Sprooch", "f", "Sproochen", "Language", ""),
    ("Suen", "pl. only", "Plural tantum", "Money", "Money as an asset is always plural in Luxembourgish."),
    ("Summer", "m", "Summeren / Summer", "Summer", "LOD authorizes both plural forms."),
    ("Tatta", "f", "Tattaen", "Aunt", ""),
    ("Vakanz", "f", "Vakanzen", "Vacation / Holiday", ""),
    ("Visite", "f", "Visiten", "Visit", ""),
    ("Wien", "n", "kee Pluriel", "Vienna", "Proper geographic noun."),
    ("Zukunft", "f", "kee Pluriel", "Future", "Time concept noun; no plural.")
]

def api_request(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception:
        return None

def find_pronunciation_audio(data):
    data_str = json.dumps(data)
    all_audio = re.findall(r"uploads/(?!examples/)[^\s\"']+\.m4a", data_str)
    if all_audio:
        return f"{BASE_URL}/{all_audio[0]}"
    all_audio_mp3 = re.findall(r"uploads/(?!examples/)[^\s\"']+\.mp3", data_str)
    if all_audio_mp3:
        return f"{BASE_URL}/{all_audio_mp3[0]}"
    return None

def fetch_audio_url_word1_only(word):
    """Optimized search strategy: Only check WORD1 suffix, nothing else."""
    clean_word = word.split('/')[0].split('(')[0].strip()
    lod_id = f"{clean_word.upper()}1"
    url = f"{BASE_API}/{urllib.parse.quote(lod_id)}"
    data = api_request(url)
    if data and "entry" in data:
        audio_url = find_pronunciation_audio(data)
        if audio_url:
            return audio_url, lod_id
    return None, None

def download_file(url, dest_path):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        with urllib.request.urlopen(req, timeout=15) as resp:
            with open(dest_path, "wb") as f:
                f.write(resp.read())
        return True
    except Exception:
        return False

def get_gender_char(g_str):
    g_str = g_str.lower().strip()
    if 'f' in g_str:
        return 'f'
    if 'n' in g_str:
        return 'n'
    if 'm' in g_str:
        return 'm'
    if 'pl' in g_str:
        return 'f'
    return 'm'

def get_article(word, gender):
    if gender in ('f', 'n'):
        return "d'"
    # Masculine (m) Eifeler Regel
    first_char = word[0].upper()
    if first_char in ('A', 'E', 'I', 'O', 'U', 'Y', 'H', 'D', 'N', 'T', 'Z', 'Ä', 'Ö', 'Ü', 'É', 'È', 'Ê', 'Ë'):
        return "den"
    return "de"

def format_plural(pl_str):
    pl_str = pl_str.strip()
    if pl_str in ("kee Pluriel", "Plural tantum", "-", "kee Singulier"):
        return "-"
    pl_val = pl_str.split('/')[0].split('(')[0].strip()
    if pl_val.lower().startswith("d'"):
        return pl_val
    return f"d'{pl_val}"

processed_words = []

print("Starting audio fetching and word parsing (My Family)...")
for idx, (word, gender_raw, plural_raw, definition, specifics) in enumerate(raw_words_data):
    print(f"[{idx+1}/{len(raw_words_data)}] Processing: {word} ... ", end="", flush=True)
    
    # 1. Resolve fields
    gender = get_gender_char(gender_raw)
    article = get_article(word, gender)
    plural = format_plural(plural_raw)
    
    # 2. Fetch audio using WORD1 strategy
    audio_url, lod_id = fetch_audio_url_word1_only(word)
    audio_path = ""
    
    if audio_url:
        ext = audio_url.rsplit('.', 1)[-1]
        filename = f"{word.lower()}_{lod_id.lower()}.{ext}"
        filename = re.sub(r"[^a-z0-9_.]", "", filename)
        dest_path = os.path.join(AUDIO_DIR, filename)
        
        if os.path.exists(dest_path):
            audio_path = f"audio/family/{filename}"
            print(f"Audio exists: {audio_path}")
        else:
            if download_file(audio_url, dest_path):
                audio_path = f"audio/family/{filename}"
                print(f"Downloaded audio -> {audio_path}")
            else:
                print("Failed to download audio")
    else:
        print("Audio not found in WORD1")

    # 3. Create word record
    word_obj = {
        "word": word,
        "article": article,
        "plural": plural,
        "gender": gender,
        "definition": definition
    }
    if audio_path:
        word_obj["audio"] = audio_path
        
    processed_words.append(word_obj)

# 4. Generate JavaScript content
js_content = """/**
 * Topic: Meng Famill (My Family)
 * 64 nouns representing family members, life stages, and related terms.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "family",
  name: "Meng Famill",
  nameEn: "My Family",
  icon: "👨‍👩‍👧‍👦",
  words: """ + json.dumps(processed_words, indent=2, ensure_ascii=False) + """
});
"""

# Save to js/data/family.js
output_js_path = os.path.join(PROJECT_ROOT, "js", "data", "family.js")
with open(output_js_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("\nDone! Generated js/data/family.js successfully.")
