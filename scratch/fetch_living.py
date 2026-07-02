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

AUDIO_LIVING = os.path.join(PROJECT_ROOT, "audio", "living")
AUDIO_VERBS = os.path.join(PROJECT_ROOT, "audio", "verbs")
AUDIO_ADJECTIVES = os.path.join(PROJECT_ROOT, "audio", "adjectives")

os.makedirs(AUDIO_LIVING, exist_ok=True)
os.makedirs(AUDIO_VERBS, exist_ok=True)
os.makedirs(AUDIO_ADJECTIVES, exist_ok=True)

# 1. Nouns list
nouns_data = [
    ("Appartement", "n", "Appartementer", "apartment", ""),
    ("Gaart", "m", "Gäert", "garden", ""),
    ("Wunneng", "f", "Wunnengen", "apartment / dwelling", ""),
    ("Zort", "f", "Zorten", "sort / type", ""),
    ("Stil", "m", "Stiler", "style", ""),
    ("Haus", "n", "Haiser", "house", ""),
    ("Besëtzer", "m", "Besëtzer", "owner", ""),
    ("Logatär", "m", "Logatären", "tenant", ""),
    ("Viertel", "m", "Viertelen", "quarter / neighborhood", ""),
    ("Strooss", "f", "Stroossen", "street", ""),
    ("Liiblingszëmmer", "n", "Liiblingszëmmer", "favorite room", ""),
    ("Noper", "m", "Noperen", "neighbor", ""),
    ("Hausdéier", "n", "Hausdéieren", "pet", ""),
    ("Quartier", "m", "Quartieren", "neighborhood", ""),
    ("Duerf", "n", "Dierfer", "village", ""),
    ("Aktivitéit", "f", "Aktivitéiten", "activity", ""),
    ("Bësch", "m", "Bëscher", "forest / wood", ""),
    ("Beispill", "n", "Beispiller", "example", ""),
    ("Mountainbike", "m", "Mountainbiken", "mountain bike", ""),
    ("Kiermes", "f", "Kiermesen", "fair / kermess", ""),
    ("Gemeng", "f", "Gemengen", "municipality / commune", ""),
    ("Restaurant", "m", "Restauranten", "restaurant", ""),
    ("Stuff", "f", "Stuffen", "living room / pub", ""),
    ("Géigend", "f", "Géigenden", "region / area", ""),
    ("Botzfra", "f", "Botzfraen", "cleaning lady", ""),
    ("Stot", "m", "Stoter", "household", ""),
    ("Alldag", "m", "kee Pluriel", "everyday life", ""),
    ("Geschier", "n", "kee Pluriel", "dishes / tableware", ""),
    ("Kleeder", "pl. only", "Plural tantum", "clothes", ""),
    ("Land", "n", "Länner", "country / countryside", ""),
    ("Mëtt", "f", "Mëtten", "middle", ""),
    ("Stad", "f", "Stied", "town / city", ""),
    ("Supermarché", "m", "Supermarchéën", "supermarket", ""),
    ("Produkt", "n", "Produkter", "product", ""),
    ("Meenung", "f", "Meenungen", "opinion", ""),
    ("Verbindung", "f", "Verbindungen", "connection / connectivity", ""),
    ("Transport", "m", "Transporten", "transport", ""),
    ("Bus", "m", "Bussen", "bus", ""),
    ("Tram", "m", "Trammen", "tram", ""),
    ("Nopeschfest", "n", "Nopeschfester", "neighborhood festival", ""),
    ("Post", "f", "kee Pluriel", "post / mail", ""),
    ("Blumm", "f", "Blummen", "flower", ""),
    ("Gemengenhaus", "n", "Gemengenhaiser", "town hall", ""),
    ("Märei", "f", "Märeien", "town hall / mayorality", ""),
    ("Dokument", "n", "Dokumenter", "document", ""),
    ("Beiekolonie", "f", "Beiekolonien", "honeybee colony", ""),
    ("Bauerenhaff", "m", "Bauerenhäff", "farmhouse / farm", ""),
    ("Bushaltestell", "f", "Bushaltestellen", "bus stop", ""),
    ("Tankstell", "f", "Tankstellen", "petrol station", ""),
    ("Recyclingstut", "f", "Recyclingstuten", "recycling bag", ""),
    ("Nummer", "f", "Nummeren", "number", ""),
    ("Penthouse", "n", "Penthousen", "penthouse", ""),
    ("Stack", "m", "Stäck", "floor", ""),
    ("Parkplaz", "f", "Parkplazen", "parking space", ""),
    ("Eck", "n", "Ecker", "corner", ""),
    ("Wand", "f", "Wänn", "wall", ""),
    ("Fënster", "f", "Fënsteren", "window", ""),
    ("Kichen", "f", "Kichenen", "kitchen", ""),
    ("Schlofzëmmer", "n", "Schlofzëmmer", "bedroom", ""),
    ("Buedzëmmer", "n", "Buedzëmmer", "washroom/bathroom", ""),
    ("Musek", "f", "kee Pluriel", "music", ""),
    ("Pak", "m", "Paketen", "package/parcel", ""),
    ("Hunneg", "m", "kee Pluriel", "honey", ""),
    ("Fierschter", "m", "Fierschteren", "forester", ""),
    ("Mamer", "n", "kee Pluriel", "Mamer (town)", ""),
    ("Beggen", "n", "kee Pluriel", "Beggen (town)", ""),
    ("Bridel", "n", "kee Pluriel", "Bridel (town)", ""),
    ("Kopstal", "n", "kee Pluriel", "Kopstal (town)", ""),
    ("Steinsel", "n", "kee Pluriel", "Steinsel (town)", "")
]

# 2. Verbs list (7 new ones)
verbs_data = [
    ("mouen", "to rent / lease", "gemount", "hunn", "ech: 'mouen', du: 'mous', \"hien/hatt/et\": 'mout', mir: 'mouen', dir: 'mout', si: 'mouen'", "Ech hunn d'Appartement gemount."),
    ("wanderen", "to hike / wander", "gewandert", "sinn", "ech: 'wanderen', du: 'wanders', \"hien/hatt/et\": 'wandert', mir: 'wanderen', dir: 'wandert', si: 'wanderen'", "Ech gi gär am Bësch wanderen."),
    ("feieren", "to celebrate", "gefeiert", "hunn", "ech: 'feieren', du: 'feiers', \"hien/hatt/et\": 'feiert', mir: 'feieren', dir: 'feiert', si: 'feieren'", "Mir feieren d'Nopeschfest."),
    ("nätzen", "to water / wet", "genëtzt", "hunn", "ech: 'nätzen', du: 'nätzt', \"hien/hatt/et\": 'nätzt', mir: 'nätzen', dir: 'nätzt', si: 'nätzen'", "Ech nätzen d'Blummen."),
    ("plangen", "to plan", "geplangt", "hunn", "ech: 'plangen', du: 'plangs', \"hien/hatt/et\": 'plangt', mir: 'plangen', dir: 'plangt', si: 'plangen'", "Ech plangen e Bauerenhaff ze kafen."),
    ("ziichten", "to grow / breed / cultivate", "geziicht", "hunn", "ech: 'ziichten', du: 'ziichts', \"hien/hatt/et\": 'ziicht', mir: 'ziichten', dir: 'ziicht', si: 'ziichten'", "Hien ziicht Hunnegbeien."),
    ("joggen", "to jog", "gejoggt", "sinn", "ech: 'joggen', du: 'joggs', \"hien/hatt/et\": 'joggt', mir: 'joggen', dir: 'joggt', si: 'joggen'", "Ech gi moies am Bësch joggen.")
]

# 3. Adjectives list (10 new ones)
adjectives_data = [
    ("hell", "bright / light", "adjective", "D'Appartement ass hell."),
    ("miwweléiert", "furnished", "adjective", "Et ass komplett miwweléiert."),
    ("roueg", "quiet / peaceful", "adjective/adverb", "D'Géigend ass roueg."),
    ("laut", "loud / noisy", "adjective/adverb", "D'Strooss ass net laut."),
    ("eleng", "alone", "adjective/adverb", "Ech wunnen eleng."),
    ("ëffentlech", "public", "adjective", "D'Verbindung mam ëffentlechen Transport ass gutt."),
    ("friddlech", "peaceful", "adjective/adverb", "Lëtzebuerg ass friddlech."),
    ("lokal", "local", "adjective", "Et gëtt e lokale Christmasmaart."),
    ("deeglech", "daily", "adjective/adverb", "Mir begéinen eis deeglech."),
    ("biologesch", "organic", "adjective", "Ech kafen biologesch Produkter.")
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

# --- A. Process Living Nouns ---
processed_nouns = []
print("Fetching audio and parsing nouns for 'Living'...")
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
        dest_path = os.path.join(AUDIO_LIVING, filename)
        if os.path.exists(dest_path) or download_file(audio_url, dest_path):
            audio_path = f"audio/living/{filename}"
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

# Write living.js
living_js_content = """/**
 * Topic: Wunnen (Living)
 * Nouns representing housing, neighborhood, and domestic activities.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "living",
  name: "Wunnen",
  nameEn: "Living",
  icon: "🏠",
  words: """ + json.dumps(processed_nouns, indent=2, ensure_ascii=False) + """
});
"""
with open(os.path.join(PROJECT_ROOT, "js", "data", "living.js"), "w", encoding="utf-8") as f:
    f.write(living_js_content)
print("Generated living.js successfully.")


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
        
    # Construct verb conjugation object representation
    # present: { ech: "...", du: "...", "hien/hatt/et": "...", mir: "...", dir: "...", si: "..." }
    # To format it cleanly in JS output:
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

# Locate the last `);\n` or `);` to append right before it
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
else:
    print("[Error] Failed to find the ending ); of verbs.js")


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
else:
    print("[Error] Failed to find the ending ); of adjectives.js")

print("\nAll database updates finished successfully.")
