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

# Target directories
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)

AUDIO_LANGUAGES = os.path.join(PROJECT_ROOT, "audio", "languages")
AUDIO_VERBS = os.path.join(PROJECT_ROOT, "audio", "verbs")
AUDIO_ADJECTIVES = os.path.join(PROJECT_ROOT, "audio", "adjectives")

os.makedirs(AUDIO_LANGUAGES, exist_ok=True)
os.makedirs(AUDIO_VERBS, exist_ok=True)
os.makedirs(AUDIO_ADJECTIVES, exist_ok=True)

# 1. Nouns list
nouns_data = [
    ("Mammesprooch", "f", "Mammesproochen", "mother tongue", ""),
    ("Hindi", "n", "kee Pluriel", "Hindi", ""),
    ("Sprooch", "f", "Sproochen", "language", ""),
    ("Englesch", "n", "kee Pluriel", "English", ""),
    ("Punjabi", "n", "kee Pluriel", "Punjabi", ""),
    ("Lëtzebuergesch", "n", "kee Pluriel", "Luxembourgish", ""),
    ("Schoul", "f", "Schoulen", "school", ""),
    ("Sanskrit", "n", "kee Pluriel", "Sanskrit", ""),
    ("Latäin", "n", "kee Pluriel", "Latin", ""),
    ("Indien", "n", "kee Pluriel", "India", ""),
    ("Frënd", "m", "Frënn", "friend", ""),
    ("Joer", "n", "Joer", "year", ""),
    ("Nationalitéit", "f", "Nationalitéiten", "nationality", ""),
    ("Bauer", "m", "Baueren", "farmer", ""),
    ("Imker", "m", "Imkeren", "beekeeper", ""),
    ("Ament", "m", "Amenter", "moment / present", ""),
    ("Iwwersetzer", "m", "Iwwersetzer", "translator", ""),
    ("Alldag", "m", "kee Pluriel", "everyday life", ""),
    ("Podcast", "m", "Podcasts", "podcast", ""),
    ("Vokabular", "m", "Vokabularen", "vocabulary", ""),
    ("Buch", "n", "Bicher", "book", ""),
    ("Opnam", "f", "Opnamen", "recording", ""),
    ("Kand", "n", "Kanner", "child", ""),
    ("Duerf", "n", "Dierfer", "village", ""),
    ("Dialekt", "m", "Dialekten", "dialect", ""),
    ("Staddialekt", "m", "Staddialekten", "city dialect", ""),
    ("Elteren", "pl. only", "Plural tantum", "parents", ""),
    ("Aarbecht", "f", "Aarbechten", "work", ""),
    ("Kommunikatioun", "f", "Kommunikatiounen", "communication", ""),
    ("Privatcours", "m", "Privatcoursen", "private course", ""),
    ("Klang", "m", "Kläng", "sound", ""),
    ("Mëschung", "f", "Mëschungen", "mixture / blend", ""),
    ("Woch", "f", "Wochen", "week", ""),
    ("Cours", "m", "Coursen", "course", ""),
    ("Enseignant", "m", "Enseignanten", "teacher", ""),
    ("Kolleg", "m", "Kollegen", "colleague / friend", ""),
    ("Kontakt", "m", "Kontakten", "contact", ""),
    ("Supermarché", "m", "Supermarchéën", "supermarket", ""),
    ("Präis", "m", "Präisser", "price", ""),
    ("Kaart", "f", "Kaarten", "card", ""),
    ("Dag", "m", "Deeg", "day", ""),
    ("Zukunft", "f", "kee Pluriel", "future", ""),
    ("Imkereibetrib", "m", "Imkereibetriber", "beekeeping business", ""),
    ("Häerz", "n", "Häerzer", "heart", ""),
    ("Franséisch", "n", "kee Pluriel", "French", "")
]

# 2. Verbs list (1 new one)
verbs_data = [
    ("ausbauen", "to expand / enlarge", "ausgebaut", "hunn", "ech: 'bauen aus', du: 'baus aus', \"hien/hatt/et\": 'baut aus', mir: 'bauen aus', dir: 'baut aus', si: 'bauen aus'", "Mir plangen, eisen Imkereibetrib auszebauen.")
]

# 3. Adjectives list (7 new ones)
adjectives_data = [
    ("eegen", "own", "adjective", "Ech lauschtere meng eegen Opnamen."),
    ("staark", "strong", "adjective", "Mäin Hindi hat e staarken Dialekt."),
    ("fléissend", "fluent", "adjective", "Ech schwätze fléissend Englesch."),
    ("privat", "private", "adjective", "Ech hat Privatcoursen."),
    ("däitsch", "German", "adjective", "D'Lëtzebuergescht huet vill däitsch Wierder."),
    ("franséisch", "French", "adjective", "Et wier gutt, Franséisch ze léieren."),
    ("integréiert", "integrated", "adjective", "Ech wëll hei integréiert sinn.")
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

# --- A. Process Languages Nouns ---
processed_nouns = []
print("Fetching audio and parsing nouns for 'Languages'...")
for idx, (word, gender_raw, plural_raw, definition, _) in enumerate(nouns_data):
    print(f"  [{idx+1}/{len(nouns_data)}] Noun: {word} ... ", end="", flush=True)
    gender = get_gender_char(gender_raw)
    article = get_article(word, gender)
    plural = format_plural(plural_raw)
    
    audio_url, lod_id = fetch_audio_url_word1_only(word)
    audio_path = ""
    if audio_url:
        ext = audio_url.rsplit('.', 1)[-1]
        filename = f"{word.lower()}_{lod_id.lower()}.{ext}"
        filename = re.sub(r"[^a-z0-9_.]", "", filename)
        dest_path = os.path.join(AUDIO_LANGUAGES, filename)
        if os.path.exists(dest_path) or download_file(audio_url, dest_path):
            audio_path = f"audio/languages/{filename}"
            print("Done")
        else:
            print("Failed Download")
    else:
        print("LOD Audio Not Found")
        
    noun_obj = {
        "word": word,
        "article": article,
        "plural": plural,
        "gender": gender,
        "definition": definition
    }
    if audio_path:
        noun_obj["audio"] = audio_path
    processed_nouns.append(noun_obj)

# Write languages.js
languages_js_content = """/**
 * Topic: Sproochen (Languages)
 * Nouns representing languages, linguistic terms, and learning.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "languages",
  name: "Sproochen",
  nameEn: "Languages",
  icon: "🗣️",
  words: """ + json.dumps(processed_nouns, indent=2, ensure_ascii=False) + """
});
"""
with open(os.path.join(PROJECT_ROOT, "js", "data", "languages.js"), "w", encoding="utf-8") as f:
    f.write(languages_js_content)
print("Generated languages.js successfully.")


# --- B. Process Verbs ---
processed_verbs_js = []
print("\nFetching audio and parsing verbs...")
for idx, (word, definition, pp, aux, conj_str, example) in enumerate(verbs_data):
    print(f"  [{idx+1}/{len(verbs_data)}] Verb: {word} ... ", end="", flush=True)
    audio_url, lod_id = fetch_audio_url_word1_only(word)
    audio_path = ""
    if audio_url:
        ext = audio_url.rsplit('.', 1)[-1]
        filename = f"{word.lower()}_{lod_id.lower()}.{ext}"
        filename = re.sub(r"[^a-z0-9_.]", "", filename)
        dest_path = os.path.join(AUDIO_VERBS, filename)
        if os.path.exists(dest_path) or download_file(audio_url, dest_path):
            audio_path = f"audio/verbs/{filename}"
            print("Done")
        else:
            print("Failed Download")
    else:
        print("LOD Audio Not Found")
        
    verb_entry = f"""  {{
    word: "{word}", definition: "{definition}",
    type: "verb", themes: [],
    conjugation: {{
      present: {{ {conj_str} }},
      pastParticiple: "{pp}", auxiliary: "{aux}"
    }},
    mnemonic: "", example: "{example}" """
    if audio_path:
        verb_entry += f', audio: "{audio_path}"'
    verb_entry += "\n  }"
    processed_verbs_js.append(verb_entry)

# Append to verbs.js
verbs_path = os.path.join(PROJECT_ROOT, "js", "data", "verbs.js")
with open(verbs_path, "r", encoding="utf-8") as f:
    verbs_content = f.read()

verbs_content_clean = verbs_content.rstrip()
if verbs_content_clean.endswith(");"):
    insert_pos = verbs_content_clean.rfind(");")
    new_verbs_block = ",\n" + ",\n".join(processed_verbs_js) + "\n"
    updated_verbs = verbs_content_clean[:insert_pos].rstrip()
    if updated_verbs.endswith(","):
        updated_verbs = updated_verbs[:-1]
    updated_verbs = updated_verbs + new_verbs_block + ");\n"
    with open(verbs_path, "w", encoding="utf-8") as f:
        f.write(updated_verbs)
    print("Appended new verbs to verbs.js.")


# --- C. Process Adjectives ---
processed_adjectives_js = []
print("\nFetching audio and parsing adjectives...")
for idx, (word, definition, adj_type, example) in enumerate(adjectives_data):
    print(f"  [{idx+1}/{len(adjectives_data)}] Adjective: {word} ... ", end="", flush=True)
    audio_url, lod_id = fetch_audio_url_word1_only(word)
    audio_path = ""
    if audio_url:
        ext = audio_url.rsplit('.', 1)[-1]
        filename = f"{word.lower()}_{lod_id.lower()}.{ext}"
        filename = re.sub(r"[^a-z0-9_.]", "", filename)
        dest_path = os.path.join(AUDIO_ADJECTIVES, filename)
        if os.path.exists(dest_path) or download_file(audio_url, dest_path):
            audio_path = f"audio/adjectives/{filename}"
            print("Done")
        else:
            print("Failed Download")
    else:
        print("LOD Audio Not Found")
        
    adj_entry = f"""  {{
    word: "{word}",
    definition: "{definition}",
    type: "{adj_type}",
    mnemonic: "",
    example: "{example}" """
    if audio_path:
        adj_entry += f', audio: "{audio_path}"'
    adj_entry += "\n  }"
    processed_adjectives_js.append(adj_entry)

# Append to adjectives.js
adjectives_path = os.path.join(PROJECT_ROOT, "js", "data", "adjectives.js")
with open(adjectives_path, "r", encoding="utf-8") as f:
    adjectives_content = f.read()

adjectives_content_clean = adjectives_content.rstrip()
if adjectives_content_clean.endswith(");"):
    insert_pos = adjectives_content_clean.rfind(");")
    new_adjs_block = ",\n" + ",\n".join(processed_adjectives_js) + "\n"
    updated_adjs = adjectives_content_clean[:insert_pos].rstrip()
    if updated_adjs.endswith(","):
        updated_adjs = updated_adjs[:-1]
    updated_adjs = updated_adjs + new_adjs_block + ");\n"
    with open(adjectives_path, "w", encoding="utf-8") as f:
        f.write(updated_adjs)
    print("Appended new adjectives to adjectives.js.")

print("\nAll database updates finished successfully.")
