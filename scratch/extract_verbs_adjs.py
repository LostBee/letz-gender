import os
import re
import json
import urllib.request
import urllib.parse

# Force UTF-8 output on Windows
import sys
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
doc_path = os.path.join(PROJECT_ROOT, "Topics - Sproochentest.md")
data_dir = os.path.join(PROJECT_ROOT, "js", "data")
BASE_API = "https://lod.lu/api/lb/entry"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) LetzGender/1.0"

# 1. Load existing database words to avoid duplicates
def load_existing():
    existing_verbs = set()
    existing_adjectives = set()
    
    # Read verbs.js
    with open(os.path.join(data_dir, "verbs.js"), "r", encoding="utf-8") as f:
        content = f.read()
        existing_verbs.update(re.findall(r'word:\s*"([^"]+)"', content))
        existing_verbs.update(re.findall(r'"word":\s*"([^"]+)"', content))
        # also match reflexive verbs like "(sech) wäschen"
        # We can clean them up for lookup: e.g. "sech wäschen" or "wäschen" -> "wäschen"
        
    # Read adjectives.js
    with open(os.path.join(data_dir, "adjectives.js"), "r", encoding="utf-8") as f:
        content = f.read()
        existing_adjectives.update(re.findall(r'word:\s*"([^"]+)"', content))
        existing_adjectives.update(re.findall(r'"word":\s*"([^"]+)"', content))
        
    return existing_verbs, existing_adjectives

verbs_db, adjs_db = load_existing()

# Standardize words for comparison (remove "sech " or "sech" prefix, clean parens)
def clean_db_word(w):
    w = w.lower().replace("(sech)", "").replace("sech", "").strip()
    return w

verbs_db_clean = {clean_db_word(w) for w in verbs_db}
adjs_db_clean = {clean_db_word(w) for w in adjs_db}

print(f"Loaded existing DB: {len(verbs_db_clean)} verbs, {len(adjs_db_clean)} adjectives.")

# 2. Tokenize the document
with open(doc_path, "r", encoding="utf-8") as f:
    text = f.read()

# Find all words
raw_words = re.findall(r"\b[a-zA-ZäöüéèàçëïäöüÄÖÜéÉëË\'\-]+\b", text)
unique_words = sorted(list(set(w.lower() for w in raw_words if len(w) > 2)))

print(f"Total unique words in document (len > 2): {len(unique_words)}")

# Stop words to skip (English and very basic Luxembourgish pronouns/prepositions)
english_stop_words = {
    "the", "and", "a", "of", "to", "in", "is", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "i", 
    "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", 
    "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", 
    "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "has", "look", "more", 
    "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "been", "call", "who", "its", "now", 
    "find", "long", "down", "day", "did", "get", "come", "made", "may", "part", "also", "new", "take", "only", "about", "very",
    "must", "any", "right", "too", "same", "our", "work", "well", "even", "place", "where", "before", "inside", "open", "keep",
    "alone", "future", "rent", "know", "daily", "collect", "recent", "recently", "gave", "times", "talk", "after", "morning",
    "afternoon", "night", "week", "weekend", "yesterday", "tomorrow", "hour", "hours", "village", "city", "town", "country",
    "street", "apartment", "house", "garden", "forest", "park", "restaurant", "food", "drinks", "lunch", "dinner", "breakfast",
    "football", "music", "guitar", "novel", "novelists", "books", "audiobooks", "design", "professional", "commune", "scenic",
    "beautiful", "quiet", "loud", "clean", "dirty", "easy", "hard", "difficult", "heavy", "light", "tiring", "healthy",
    "different", "same", "same", "same", "same", "same", "same", "same"
}

lux_stop_words = {
    "ech", "du", "hien", "hatt", "et", "mir", "dir", "si", "an", "am", "zu", "op", "mat", "fir", "dat", "datt", "ass", "sinn", 
    "hunn", "huet", "mee", "well", "oder", "vun", "zanter", "eng", "engem", "enger", "eise", "iech", "sech", "elo", "schonn", 
    "nach", "net", "guer", "och", "firwat", "wéi", "wéini", "wou", "wat", "wiem", "all", "allen", "alles", "ganz", "immens", 
    "gär", "gäre", "gären", "bal", "ëmmer", "dacks", "ze", "esou", "dofir", "awer", "lescht", "leschten", "leschter", 
    "leschteg", "leschte", "lesct", "enges", "engerlei", "een", "ee", "zwee", "dräi", "véier", "fënnef", "sechs", "siwen", 
    "aacht", "néng", "zeng", "ronn", "ongeféier", "menger", "mäin", "meng", "méi", "manner", "meeschten", "meeschtens", 
    "selwer", "dobäi", "dofir", "doraus", "dovunner", "dovun", "dëst", "dëse", "dëser", "dësem", "heescht", "huen", 
    "haten", "hate", "war", "waren", "ginn", "gott", "gouf", "goufen", "ginn", "sinn", "si", "sidd", "bass", "ass", "si",
    "och", "bal", "bal", "bal", "hei", "do", "lo", "looss", "loosst", "no", "bei", "beim", "aus", "vu", "vun", "virun", 
    "hanner", "hannert", "ënner", "ënnert", "tëscht", "tëschent", "w.e.g", "weg", "wannechgelift", "merci", "äddi"
}

stop_words = english_stop_words.union(lux_stop_words)

filtered_words = [w for w in unique_words if w not in stop_words and not w.isdigit()]
print(f"Filtered to potential Luxembourgish words: {len(filtered_words)}")

# 3. Query LOD for classification
def api_request(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception:
        return None

def check_word_on_lod(word):
    """Checks the word on LOD API and returns its part of speech and base lemma if found."""
    # Try upper and suffix 1
    candidates = [f"{word.upper()}1", f"{word.upper()}2", word.upper(), word]
    for lod_id in candidates:
        url = f"{BASE_API}/{urllib.parse.quote(lod_id)}"
        data = api_request(url)
        if data and "entry" in data:
            entry = data["entry"]
            pos = entry.get("partOfSpeechLabel", entry.get("partOfSpeech", ""))
            lemma = entry.get("lemma", word)
            
            # Check if this entry has verbConjugation or typical POS
            if "VRB" in pos or pos.startswith("VRB"):
                return "verb", lemma, entry
            if "ADJ" in pos or pos.startswith("ADJ"):
                return "adjective", lemma, entry
            if "SUBST" in pos or pos.startswith("SUBST"):
                return "noun", lemma, entry
            
            # Check if it has verbConjugation table anyway
            if "tables" in entry and "verbConjugation" in entry["tables"]:
                return "verb", lemma, entry
    return None, None, None

new_verbs = {}
new_adjs = {}

print("\nQuerying LOD API for classification (this might take a minute)...")
for idx, w in enumerate(filtered_words):
    if idx % 10 == 0 and idx > 0:
        print(f"  Processed {idx}/{len(filtered_words)} words...")
    
    pos, lemma, entry = check_word_on_lod(w)
    if not pos:
        continue
        
    lemma_clean = clean_db_word(lemma)
    
    if pos == "verb":
        if lemma_clean not in verbs_db_clean and lemma_clean not in new_verbs:
            # Extract details
            definition = ""
            # Try to get German/English translation
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
            except:
                pass
            
            new_verbs[lemma_clean] = {
                "word": lemma,
                "definition": definition,
                "entry": entry
            }
    elif pos == "adjective":
        if lemma_clean not in adjs_db_clean and lemma_clean not in new_adjs:
            definition = ""
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
            except:
                pass
            
            new_adjs[lemma_clean] = {
                "word": lemma,
                "definition": definition,
                "entry": entry
            }

print("\n=== EXTRACTED NEW VERBS ===")
for k, v in new_verbs.items():
    print(f"  Verb: {v['word']} ({v['definition']})")

print("\n=== EXTRACTED NEW ADJECTIVES ===")
for k, v in new_adjs.items():
    print(f"  Adjective: {v['word']} ({v['definition']})")
