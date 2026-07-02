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

# Target directories
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
AUDIO_VERBS = os.path.join(PROJECT_ROOT, "audio", "verbs")
AUDIO_ADJECTIVES = os.path.join(PROJECT_ROOT, "audio", "adjectives")

os.makedirs(AUDIO_VERBS, exist_ok=True)
os.makedirs(AUDIO_ADJECTIVES, exist_ok=True)

# 1. Load existing database words to avoid duplicates
verbs_path = os.path.join(PROJECT_ROOT, "js", "data", "verbs.js")
adjectives_path = os.path.join(PROJECT_ROOT, "js", "data", "adjectives.js")

def load_existing():
    existing_verbs = set()
    existing_adjectives = set()
    
    with open(verbs_path, "r", encoding="utf-8") as f:
        content = f.read()
        existing_verbs.update(re.findall(r'word:\s*"([^"]+)"', content))
        existing_verbs.update(re.findall(r'"word":\s*"([^"]+)"', content))
        
    with open(adjectives_path, "r", encoding="utf-8") as f:
        content = f.read()
        existing_adjectives.update(re.findall(r'word:\s*"([^"]+)"', content))
        existing_adjectives.update(re.findall(r'"word":\s*"([^"]+)"', content))
        
    return existing_verbs, existing_adjectives

verbs_db, adjs_db = load_existing()

def clean_db_word(w):
    return w.lower().replace("(sech)", "").replace("sech", "").strip()

verbs_db_clean = {clean_db_word(w) for w in verbs_db}
adjs_db_clean = {clean_db_word(w) for w in adjs_db}

# Extracted Verb Candidates from Sproochentest.md
verbs_candidates = [
    "afferen", "araumen", "aschlofen", "astellen", "ausgesinn", "austauschen", "auswielen", "bauen", 
    "behalen", "béien", "bekennen", "benotzen", "beréieren", "beschreiwen", "bléien", "broden", 
    "buchen", "campéieren", "deelen", "denken", "desinfizéieren", "doen", "entdecken", "entscheeden", 
    "entspanen", "entwéckelen", "erausginn", "eraussichen", "erlaben", "erzielen", "feelen", "fidderen", 
    "flécken", "fänken", "genéissen", "gewannen", "hiewen", "investéieren", "iwwerleeën", "iwwerweisen", 
    "kléngen", "kontrolléieren", "kéieren", "këmmeren", "langweilen", "loossen", "mierken", 
    "motivéieren", "méien", "nodenken", "notéieren", "ofbauen", "opbauen", "opbotzen", "opferen", 
    "opginn", "ophalen", "oplueden", "opwuessen", "parken", "passen", "produzéieren", "reagéieren", 
    "ruffen", "salzen", "schafen", "scheien", "schenken", "schleideren", "schloen", "schléissen", 
    "schmaachen", "schweessen", "schützen", "séien", "sëtzen", "trainéieren", "ubidden", "unhunn", 
    "verbesseren", "verbréngen", "verdéngen", "versichen", "virbereeden", "virstellen", "wielen", 
    "wieren", "wuessen", "wäissen", "wëschen", "änneren", "ëmtauschen"
]

# Extracted Adjective Candidates from Sproochentest.md
adjectives_candidates = [
    "absolut", "aggressiv", "agreabel", "aktuell", "alldeeglech", "allgemeng", "autonom", "bekannt", 
    "bequeem", "bescht", "besonnesch", "besser", "clever", "direkt", "dreckeg", "effizient", "egal", 
    "ekologesch", "elektronesch", "emotional", "energesch", "engagéiert", "englesch", "europäesch", 
    "excellent", "extra", "fair", "fantastesch", "fit", "fräi", "fréi", "fäerdeg", "geféierlech", 
    "geléiert", "gemeinsam", "gemittlech", "genee", "gewéinlech", "gratis", "grondverschidden", 
    "gréng", "grëndlech", "haaptsächlech", "hëllefräich", "indesch", "kierperlech", "kill", "klassesch", 
    "kloer", "komesch", "komplett", "kreativ", "kënschtlech", "langweileg", "lass", "lénks", "liicht", 
    "live", "lénk", "lëtzebuergesch", "mätscheg", "mental", "momentan", "méiglech", "natierlech", 
    "national", "nice", "normal", "nostalgesch", "nächst", "néideg", "offensichtlech", "ongesond", 
    "onheemlech", "onkomplizéiert", "online", "onperséinlech", "opmierksam", "original", "perfekt", 
    "perséinlech", "populär", "praktesch", "presséiert", "prett", "prezis", "produktiv", "prompt", 
    "propper", "rar", "real", "realistesch", "regulär", "relativ", "relax", "réimesch", "sat", 
    "schlëmm", "schei", "seelen", "selbstänneg", "selwecht", "sonneg", "sozial", "spezifesch", 
    "staatlech", "sécher", "süchteg", "talentéiert", "tierkesch", "total", "traditionell", "ursprénglech", 
    "ustrengend", "vegetaresch", "verschidden", "verständlech", "voll", "waasserdicht", "warscheinlech", 
    "wéi", "weider", "wierklech", "witzeg", "wonnerbar", "wonnerschéin", "wäit", "wëll", "zefridden", 
    "zimmlech", "zoustänneg", "zouverlässeg", "zukünfteg", "éierlech", "ëmweltfrëndlech"
]

# Filter duplicates
unique_verbs = [w for w in verbs_candidates if clean_db_word(w) not in verbs_db_clean]
unique_adjs = [w for w in adjectives_candidates if clean_db_word(w) not in adjs_db_clean]

print(f"To process: {len(unique_verbs)} new verbs, {len(unique_adjs)} new adjectives.")

def api_request(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except:
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

def download_file(url, dest_path):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        with urllib.request.urlopen(req, timeout=12) as resp:
            with open(dest_path, "wb") as f:
                f.write(resp.read())
        return True
    except:
        return False

def query_word_lod(word):
    candidates = [f"{word.upper()}1", f"{word.upper()}2", word.upper(), word]
    for lod_id in candidates:
        url = f"{BASE_API}/{urllib.parse.quote(lod_id)}"
        data = api_request(url)
        if data and "entry" in data:
            return data["entry"], lod_id
    return None, None

# --- A. Process Verbs ---
processed_verbs_js = []
print("\nProcessing Verbs...")
for idx, w in enumerate(unique_verbs):
    print(f"  [{idx+1}/{len(unique_verbs)}] Verb: {w} ... ", end="", flush=True)
    entry, lod_id = query_word_lod(w)
    
    definition = "to do"
    pp = "gemaach"
    aux = "hunn"
    present = { "ech": "", "du": "", "hien/hatt/et": "", "mir": "", "dir": "", "si": "" }
    example = ""
    audio_path = ""
    
    if entry:
        # Extract translations
        try:
            for ms in entry.get("microStructures", []):
                for gu in ms.get("grammaticalUnits", []):
                    for m in gu.get("meanings", []):
                        tl = m.get("targetLanguages", {})
                        if "en" in tl:
                            parts = tl["en"].get("parts", [])
                            if parts:
                                definition = parts[0].get("content", "")
                                break
                    if definition: break
                if definition: break
        except: pass
        
        # Extract examples
        try:
            for ms in entry.get("microStructures", []):
                for gu in ms.get("grammaticalUnits", []):
                    for m in gu.get("meanings", []):
                        exs = m.get("examples", [])
                        if exs:
                            example = exs[0].get("content", "")
                            break
                    if example: break
                if example: break
        except: pass
        
        # Conjugations
        tables = entry.get("tables", {})
        vc = tables.get("verbConjugation", {}) if tables else {}
        if vc:
            pp = vc.get("pastParticiple", pp)
            aux = vc.get("auxiliaryVerb", aux)
            pres_t = vc.get("indicative", {}).get("present", {})
            if pres_t:
                present["ech"] = pres_t.get("p1", "")
                present["du"] = pres_t.get("p2", "")
                present["hien/hatt/et"] = pres_t.get("p3", "")
                present["mir"] = pres_t.get("p4", "")
                present["dir"] = pres_t.get("p5", "")
                present["si"] = pres_t.get("p6", "")
        
        # Audio
        audio_url = find_pronunciation_audio(entry)
        if audio_url:
            ext = audio_url.rsplit('.', 1)[-1]
            filename = f"{w.lower()}_{lod_id.lower()}.{ext}"
            filename = re.sub(r"[^a-z0-9_.]", "", filename)
            dest = os.path.join(AUDIO_VERBS, filename)
            if download_file(audio_url, dest):
                audio_path = f"audio/verbs/{filename}"
                print("Done", end="")
            else:
                print("Audio DL Failed", end="")
        else:
            print("LOD Audio Not Found", end="")
    else:
        print("LOD Entry Not Found", end="")
        
    # Format JS entry
    conj_str = f"ech: \"{present['ech']}\", du: \"{present['du']}\", \"hien/hatt/et\": \"{present['hien/hatt/et']}\", mir: \"{present['mir']}\", dir: \"{present['dir']}\", si: \"{present['si']}\""
    v_js = f"""  {{
    word: "{w}", definition: "{definition}",
    type: "verb", themes: [],
    conjugation: {{
      present: {{ {conj_str} }},
      pastParticiple: "{pp}", auxiliary: "{aux}"
    }},
    mnemonic: "", example: "{example}" """
    if audio_path:
        v_js += f', audio: "{audio_path}"'
    v_js += "\n  }"
    processed_verbs_js.append(v_js)
    print()

# Append to verbs.js
if processed_verbs_js:
    with open(verbs_path, "r", encoding="utf-8") as f:
        content = f.read().rstrip()
    if content.endswith(");"):
        pos = content.rfind(");")
        new_verbs = ",\n" + ",\n".join(processed_verbs_js) + "\n"
        content_updated = content[:pos].rstrip()
        if content_updated.endswith(","):
            content_updated = content_updated[:-1]
        content_updated = content_updated + new_verbs + ");\n"
        with open(verbs_path, "w", encoding="utf-8") as f:
            f.write(content_updated)
        print("Successfully updated verbs.js")

# --- B. Process Adjectives ---
processed_adjectives_js = []
print("\nProcessing Adjectives...")
for idx, w in enumerate(unique_adjs):
    print(f"  [{idx+1}/{len(unique_adjs)}] Adjective: {w} ... ", end="", flush=True)
    entry, lod_id = query_word_lod(w)
    
    definition = "adjective"
    example = ""
    audio_path = ""
    
    if entry:
        try:
            for ms in entry.get("microStructures", []):
                for gu in ms.get("grammaticalUnits", []):
                    for m in gu.get("meanings", []):
                        tl = m.get("targetLanguages", {})
                        if "en" in tl:
                            parts = tl["en"].get("parts", [])
                            if parts:
                                definition = parts[0].get("content", "")
                                break
                    if definition: break
                if definition: break
        except: pass
        
        try:
            for ms in entry.get("microStructures", []):
                for gu in ms.get("grammaticalUnits", []):
                    for m in gu.get("meanings", []):
                        exs = m.get("examples", [])
                        if exs:
                            example = exs[0].get("content", "")
                            break
                    if example: break
                if example: break
        except: pass
        
        audio_url = find_pronunciation_audio(entry)
        if audio_url:
            ext = audio_url.rsplit('.', 1)[-1]
            filename = f"{w.lower()}_{lod_id.lower()}.{ext}"
            filename = re.sub(r"[^a-z0-9_.]", "", filename)
            dest = os.path.join(AUDIO_ADJECTIVES, filename)
            if download_file(audio_url, dest):
                audio_path = f"audio/adjectives/{filename}"
                print("Done", end="")
            else:
                print("Audio DL Failed", end="")
        else:
            print("LOD Audio Not Found", end="")
    else:
        print("LOD Entry Not Found", end="")
        
    adj_type = "adjective/adverb" if "adverb" in clean_db_word(w) else "adjective"
    
    a_js = f"""  {{
    word: "{w}",
    definition: "{definition}",
    type: "{adj_type}",
    mnemonic: "",
    example: "{example}" """
    if audio_path:
        a_js += f', audio: "{audio_path}"'
    a_js += "\n  }"
    processed_adjectives_js.append(a_js)
    print()

# Append to adjectives.js
if processed_adjectives_js:
    with open(adjectives_path, "r", encoding="utf-8") as f:
        content = f.read().rstrip()
    if content.endswith(");"):
        pos = content.rfind(");")
        new_adjs = ",\n" + ",\n".join(processed_adjectives_js) + "\n"
        content_updated = content[:pos].rstrip()
        if content_updated.endswith(","):
            content_updated = content_updated[:-1]
        content_updated = content_updated + new_adjs + ");\n"
        with open(adjectives_path, "w", encoding="utf-8") as f:
            f.write(content_updated)
        print("Successfully updated adjectives.js")

print("\nDatabase update finished successfully.")
