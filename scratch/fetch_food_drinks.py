import os
import re
import json
import sys
import urllib.request
import urllib.parse
import urllib.error

# Force UTF-8 output on Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_API = "https://lod.lu/api/lb/entry"
BASE_URL = "https://lod.lu"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) LetzGender/1.0"

# Target output directories
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
AUDIO_DIR = os.path.join(PROJECT_ROOT, "audio", "food_drinks")

raw_words_data = [
    ("App", "f", "Appen", "Application / App", ""),
    ("Auer", "f", "Aueren", "Hour / Clock / O'clock", "Text uses it for time designation (um 7 oder 8 Auer)."),
    ("Äppelkompott", "m. / n.", "kee Pluriel", "Apple compote", "Uncountable mass noun; accepts both genders."),
    ("Battin", "f", "Battinnen", "Can / Bottle of beer", ""),
    ("Blatzalot", "m", "Blatzaloten", "Lettuce", "Compound noun (Blat + Zalot)."),
    ("Blummenkohl", "m", "kee Pluriel", "Cauliflower", "Uncountable culinary loan word."),
    ("Brokoli", "m", "kee Pluriel", "Broccoli", "Uncountable culinary asset."),
    ("Brokoliszalot", "m", "Brokoliszaloten", "Broccoli salad", ""),
    ("Brout", "n", "Broter", "Bread", "Variant spelling Brood exists; Brout is standard."),
    ("Burger", "m", "Burgeren", "Burger", ""),
    ("Chrëschtmaart", "m", "Chrëschtmäert", "Christmas market", "Text uses the plural Chrëschtmäert."),
    ("Croissant", "m", "Croissanten", "Croissant", "French loan word with standard German/Lux plural inflection."),
    ("Dag", "m", "Deeg", "Day", ""),
    ("Ee", "n", "Eier", "Egg", ""),
    ("Fësch", "m", "Fësch", "Fish", "Singular and plural forms are completely identical."),
    ("Fleesch", "n", "kee Pluriel", "Meat", "Uncountable mass noun."),
    ("Freideg", "m", "Freideger", "Friday", ""),
    ("Frënd", "m", "Frënn", "Friend", ""),
    ("Fruucht", "f", "Friichten", "Fruit", "The text includes both the singular and the plural form."),
    ("Fussball", "m", "kee Pluriel", "Football / Soccer", "Uncountable context (sport discipline)."),
    ("Gedrénks", "n", "Gedrénks", "Drink / Beverage", "Has an uncountable collective sense AND a countable sense."),
    ("Geméis", "n", "Geméiser", "Vegetable(s)", "Often used collectively but does carry a physical plural."),
    ("Geméiszort", "f", "Geméiszorten", "Type of vegetable", ""),
    ("Gläichgewiicht", "n", "kee Pluriel", "Balance", "Abstract concept noun."),
    ("Gromper", "f", "Gromperen", "Potato", ""),
    ("Gromperekichelchen", "m", "Gromperekichelcher", "Potato pancake", "Text references the plural Gromperekichelcher."),
    ("Gulasch", "m. / n.", "Gulaschen", "Goulash", "Accepts dual genders."),
    ("Gurk", "f", "Gurken", "Cucumber", ""),
    ("Handy", "m", "Handyen", "Mobile phone", ""),
    ("Haaptmolzecht", "f", "Haaptmolzechten", "Main meal", ""),
    ("Iessen", "n", "Iessen (or Iesse)", "Food / Meal / Diet", "Has an uncountable sense (nutrition) and a countable sense (meals)."),
    ("Intelligenz", "f", "kee Pluriel", "Intelligence", "Abstract noun."),
    ("Internet", "n", "kee Pluriel", "Internet", ""),
    ("Jughurt", "m", "Jughurten", "Yogurt", "Alternate spelling Joghurt is equally accepted."),
    ("Kaffi", "m", "Kaffien", "Coffee / Breakfast", "Used contextually for the drink and for breakfast (beim Kaffi)."),
    ("Kalorie", "f", "Kalorien", "Calorie", "Text utilizes the plural Kalorien."),
    ("Kebab", "m", "Kebabben", "Kebab", ""),
    ("Kéis", "m", "Keisen", "Cheese", ""),
    ("KI", "f", "kee Pluriel", "AI", "Acronym for Kënschtlech Intelligenz."),
    ("Kniddel", "f", "Kniddelen", "Dumpling", "Text lists plural Kniddelen."),
    ("Kornischong", "f", "Kornischongen", "Gherkin / Pickle", "Text uses plural Kornischongen."),
    ("Leit", "pl. only", "Plural tantum", "People", "Exists solely as a plural noun in the language."),
    ("Liiblingsgedrénks", "n", "Liiblingsgedrénks", "Favorite drink", "Follows the internal structural constraints of Gedrénks."),
    ("Liiblingsiesse", "n", "Liiblingsiessen", "Favorite food / meal", "Follows the internal structural constraints of Iessen."),
    ("Liiblingsiessenssaach", "f", "Liiblingsiessenssaachen", "Favorite food item", "Compound noun resolving to the base token Saach."),
    ("Mëtteg", "m", "Mëtteger", "Midday / Noon", "Used in the adverbial idiom ze Mëtteg (for lunch)."),
    ("Mëttegiessen", "n", "Mëttegiessen", "Lunch (meal)", "Resolves structurally to Iessen."),
    ("Mol", "n", "Moler / Mol", "Time / Instance", "Wéi vill Mol can use either plural variation."),
    ("Moolzecht", "f", "Moolzechten", "Meal", ""),
    ("Mount", "m", "Méint", "Month", "Text contains the mutated plural form Méint."),
    ("Noss", "f", "Nëss", "Nut", "Text leverages the mutated plural form Nëss."),
    ("Nomëtteg", "m", "Nomëtteger", "Afternoon", ""),
    ("Nuddel", "f", "Nuddelen", "Noodle / Pasta", "Text presents the plural form Nuddelen."),
    ("Oliv", "f", "Oliven", "Olive", "The true lemma is Oliv. Oliven is strictly the plural."),
    ("Owend", "m", "Owender", "Evening", ""),
    ("Owesiessen", "n", "Owesiessen", "Dinner / Supper", "Resolves structurally to Iessen."),
    ("Owessnack", "m", "Owessnacken", "Evening snack", ""),
    ("Paangech", "m", "Paangecher", "Pancake", "Text presents the plural form Paangecher."),
    ("Paprika", "m", "Paprikaen", "Bell pepper", ""),
    ("Patt", "m", "Pätt", "Drink / Round of drinks", "Plural is Pätt. (Patten/Patte belongs to a different word)."),
    ("Plattform", "f", "Plattformen", "Platform", "Used here for digital media providers."),
    ("Poulet", "m", "Pouleten", "Chicken", ""),
    ("Protein", "m. / n.", "Proteinnen", "Protein", "LOD puts masculine first, followed by neuter."),
    ("Proteinshake", "m", "Proteinshaken", "Protein shake", "Hybrid spelling compound resolving to Shake (m.)."),
    ("Räis", "m", "kee Pluriel", "Rice", "Uncountable mass food product."),
    ("Rees", "f", "Reesen", "Trip / Journey", "Text applies the plural Reesen (traveling videos)."),
    ("Rezept", "n", "Rezepter", "Recipe", ""),
    ("Saach", "f", "Saachen", "Thing / Object", "Used in ongesond Saachen (unhealthy things)."),
    ("Samschdeg", "m", "Samschdeger", "Saturday", ""),
    ("Saumon", "m", "Saumonen", "Salmon", ""),
    ("Schueberfouer", "f", "kee Pluriel", "Schueberfouer", "Proper noun designating the annual Luxembourg City fair."),
    ("Snack", "m", "Snacks / Snacken", "Snack", "LOD formally sanctions both plural structural choices."),
    ("Speck", "m", "kee Pluriel", "Bacon", "Uncountable savory ingredient item."),
    ("Spezialitéit", "f", "Spezialitéiten", "Specialty", "Text relies on the plural form Spezialitéiten."),
    ("Spinat", "m", "kee Pluriel", "Spinach", "Uncountable green vegetable."),
    ("Spruddelwaasser", "n", "kee Pluriel", "Sparkling water", ""),
    ("Stuff", "f", "Stuffen", "Living room / Pub", "Used here in a local name (Brideler Stuff)."),
    ("Téi", "m", "Téier", "Tea", ""),
    ("Technologie", "f", "Technologien", "Technology", ""),
    ("Verwuerelter", "pl. only", "Plural tantum", "Traditional pastries", "Traditional fried dough knot pastries, cataloged as plural."),
    ("Video", "m", "Videoen", "Video", ""),
    ("Viennoisserie", "f", "Viennoisserien", "Pastry / Viennoisserie", ""),
    ("Waasser", "n", "Waasserer", "Water", ""),
    ("Weekend", "m", "Weekender", "Weekend", ""),
    ("Wëssenschaft", "f", "Wëssenschaften", "Science", ""),
    ("Witz", "m", "Witzen", "Joke", "Used idiomatically in Witz beisäit (joking aside)."),
    ("Woch", "f", "Wochen", "Week", ""),
    ("Zäit", "f", "Zäiten", "Time", "Used here for duration availability (Zäit fir ze kachen)."),
    ("Zalot", "f", "Zaloten", "Salad / Lettuce", ""),
    ("Zocker", "m", "kee Pluriel", "Sugar", "Uncountable compound."),
    ("Zort", "f", "Zorten", "Sort / Type / Kind", "Used in the text as a component of Geméiszorte."),
    ("Zucchini", "f. / m.", "Zucchini / Zucchinin", "Zucchini / Courgette", "Accepts both genders and alternate plural markers.")
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
    # Also support mp3 if it's there
    all_audio_mp3 = re.findall(r"uploads/(?!examples/)[^\s\"']+\.mp3", data_str)
    if all_audio_mp3:
        return f"{BASE_URL}/{all_audio_mp3[0]}"
    return None

def fetch_audio_url(word):
    # If the word has a slash or special chars, clean it up or try components
    clean_word = word.split('/')[0].split('(')[0].strip()
    candidates = [f"{clean_word.upper()}{s}" for s in ("1", "2", "3", "")]
    for lod_id in candidates:
        url = f"{BASE_API}/{urllib.parse.quote(lod_id)}"
        data = api_request(url)
        if data and "entry" in data:
            audio_url = find_pronunciation_audio(data)
            if audio_url:
                return audio_url, lod_id
    
    # Try case-sensitive query or lower if upper failed
    for lod_id in [f"{clean_word}{s}" for s in ("1", "2", "3", "")]:
        url = f"{BASE_API}/{urllib.parse.quote(lod_id)}"
        data = api_request(url)
        if data and "entry" in data:
            audio_url = find_pronunciation_audio(data)
            if audio_url:
                return audio_url, lod_id

    # Fallback to searching without the suffix if still not found
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
        return 'f' # treat plural tantum as f for article reasons
    return 'm'

def get_article(word, gender):
    if gender in ('f', 'n'):
        return "d'"
    # Masculine (m) Eifeler Regel
    # Vowels (A, E, I, O, U, Y, Ä, Ö, Ü, É, È, Ê, Ë) and H, D, N, T, Z
    first_char = word[0].upper()
    if first_char in ('A', 'E', 'I', 'O', 'U', 'Y', 'H', 'D', 'N', 'T', 'Z', 'Ä', 'Ö', 'Ü', 'É', 'È', 'Ê', 'Ë'):
        return "den"
    return "de"

def format_plural(pl_str):
    pl_str = pl_str.strip()
    if pl_str in ("kee Pluriel", "Plural tantum", "-", "kee Singulier"):
        return "-"
    # Clean up options like "Iessen (or Iesse)" or "Zucchini / Zucchinin" by picking the first one
    pl_val = pl_str.split('/')[0].split('(')[0].strip()
    if pl_val.lower().startswith("d'"):
        return pl_val
    return f"d'{pl_val}"

processed_words = []

print("Starting audio fetching and word parsing...")
for idx, (word, gender_raw, plural_raw, definition, specifics) in enumerate(raw_words_data):
    print(f"[{idx+1}/{len(raw_words_data)}] Processing: {word} ... ", end="", flush=True)
    
    # 1. Resolve fields
    gender = get_gender_char(gender_raw)
    article = get_article(word, gender)
    plural = format_plural(plural_raw)
    
    # 2. Fetch audio
    audio_url, lod_id = fetch_audio_url(word)
    audio_path = ""
    
    if audio_url:
        ext = audio_url.rsplit('.', 1)[-1]
        filename = f"{word.lower()}_{lod_id.lower()}.{ext}"
        # replace any special chars in filename
        filename = re.sub(r"[^a-z0-9_.]", "", filename)
        dest_path = os.path.join(AUDIO_DIR, filename)
        
        if os.path.exists(dest_path):
            audio_path = f"audio/food_drinks/{filename}"
            print(f"Audio exists: {audio_path}")
        else:
            if download_file(audio_url, dest_path):
                audio_path = f"audio/food_drinks/{filename}"
                print(f"Downloaded audio -> {audio_path}")
            else:
                print("Failed to download audio")
    else:
        # Retry with base word if it's a compound noun
        # Let's see if we can search for the last word segment (e.g. Brokoliszalot -> Zalot)
        # We try to split by lowercase-uppercase boundary or just common suffixes
        base_retry = None
        if "szalot" in word.lower():
            base_retry = "Zalot"
        elif "kompott" in word.lower():
            base_retry = "Kompott"
        elif "maart" in word.lower():
            base_retry = "Maart"
        elif "gedrénks" in word.lower():
            base_retry = "Gedrénks"
        elif "iessen" in word.lower():
            base_retry = "Iessen"
        elif "iessenssaach" in word.lower():
            base_retry = "Saach"
        elif "kichelchen" in word.lower():
            base_retry = "Kichelchen"
        elif "shake" in word.lower():
            base_retry = "Shake"
        elif "snack" in word.lower():
            base_retry = "Snack"
        elif "zort" in word.lower():
            base_retry = "Zort"
        elif "waasser" in word.lower():
            base_retry = "Waasser"
            
        if base_retry:
            print(f"Retry using base '{base_retry}'...", end="", flush=True)
            audio_url_b, lod_id_b = fetch_audio_url(base_retry)
            if audio_url_b:
                ext = audio_url_b.rsplit('.', 1)[-1]
                filename = f"{word.lower()}_{lod_id_b.lower()}.{ext}"
                filename = re.sub(r"[^a-z0-9_.]", "", filename)
                dest_path = os.path.join(AUDIO_DIR, filename)
                if download_file(audio_url_b, dest_path):
                    audio_path = f"audio/food_drinks/{filename}"
                    print(f"Downloaded base audio -> {audio_path}")
                else:
                    print("Failed to download base audio")
            else:
                print("Base audio not found")
        else:
            print("Audio not found")

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
 * Topic: Iessen & Drénken (Food & Drinks)
 * 92 nouns representing foods, drinks, meals, and related concepts.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "food_drinks",
  name: "Iessen & Drénken",
  nameEn: "Food & Drinks",
  icon: "🍔",
  words: """ + json.dumps(processed_words, indent=2, ensure_ascii=False) + """
});
"""

# Save to js/data/food_drinks.js
output_js_path = os.path.join(PROJECT_ROOT, "js", "data", "food_drinks.js")
with open(output_js_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("\nDone! Generated js/data/food_drinks.js successfully.")
