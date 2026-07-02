import os
import re

# Resolve paths
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_dir = os.path.join(PROJECT_ROOT, "js", "data")

def load_existing_words():
    existing_verbs = set()
    existing_adjectives = set()
    existing_nouns = set()

    for filename in os.listdir(data_dir):
        if not filename.endswith(".js"):
            continue
        path = os.path.join(data_dir, filename)
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
            
            # Simple regex search for word: "..."
            words = re.findall(r'word:\s*"([^"]+)"', content)
            # also JSON format words: "word": "..."
            words_json = re.findall(r'"word":\s*"([^"]+)"', content)
            all_found = set(words + words_json)
            
            if filename == "verbs.js":
                existing_verbs.update(all_found)
            elif filename == "adjectives.js":
                existing_adjectives.update(all_found)
            else:
                existing_nouns.update(all_found)
                
    return existing_verbs, existing_adjectives, existing_nouns

verbs_db, adjs_db, nouns_db = load_existing_words()

print(f"Existing in DB: {len(verbs_db)} verbs, {len(adjs_db)} adjectives, {len(nouns_db)} nouns.")

# Candidate words from the text snippet:
candidate_nouns = [
    # (Word, Gender, Plural, English, Specifics/Notes)
    ("Appartement", "n", "Appartementer", "apartment", "From: 'wunnen an engem Appartement'"),
    ("Gaart", "m", "Gäert", "garden", "From: 'mat engem Gaart'"),
    ("Wunneng", "f", "Wunnengen", "apartment / dwelling", "From: 'Wat fir eng Zort Wunneng...'"),
    ("Zort", "f", "Zorten", "sort / type", "From: 'Wat fir eng Zort...'"),
    ("Stil", "m", "Stiler", "style", "From: 'De Stil ass immens modern'"),
    ("Haus", "n", "Haiser", "house", "From: 'an Ärem Haus'"),
    ("Besëtzer", "m", "Besëtzer", "owner", "From: 'Sidd Dir Besëtzer...'"),
    ("Logatär", "m", "Logatären", "tenant", "From: 'oder Logatär'"),
    ("Viertel", "m", "Viertelen", "quarter / neighborhood", "From: 'wéi engem Viertel'"),
    ("Strooss", "f", "Stroossen", "street", "From: 'wéi enger Strooss'"),
    ("Liiblingszëmmer", "n", "Liiblingszëmmer", "favorite room", "From: 'Liiblingszëmmer doheem'"),
    ("Noper", "m", "Noperen", "neighbor", "From: 'know your neighbours'"),
    ("Hausdéier", "n", "Hausdéieren", "pet", "From: 'Hutt Dir Hausdéieren'"),
    ("Quartier", "m", "Quartieren", "neighborhood", "From: 'an Ärem Quartier'"),
    ("Duerf", "n", "Dierfer", "village", "From: 'oder Duerf'"),
    ("Aktivitéit", "f", "Aktivitéiten", "activity", "From: 'wat fir Aktivitéiten'"),
    ("Bësch", "m", "Bëscher", "forest / wood", "From: 'e Bësch'"),
    ("Beispill", "n", "Beispiller", "example", "From: 'zum Beispill'"),
    ("Mountainbike", "m", "Mountainbiken", "mountain bike", "From: 'Mountainbike fuere'"),
    ("Kiermes", "f", "Kiermesen", "fair / kermess", "From: 'Kiermes um Briddel'"),
    ("Gemeng", "f", "Gemengen", "municipality / commune", "From: 'Gemeng of Kopstal'"),
    ("Restaurant", "m", "Restauranten", "restaurant", "From: 'a few restaurants'"),
    ("Stuff", "f", "Stuffen", "living room / pub", "From: 'Brideler Stuff'"),
    ("Géigend", "f", "Géigenden", "region / area", "From: 'roueger oder lauter Géigend'"),
    ("Botzfra", "f", "Botzfraen", "cleaning lady", "From: 'Hutt Dir eng Botzfra'"),
    ("Stot", "m", "Stoter", "household", "From: 'am Stot'"),
    ("Alldag", "m", "kee Pluriel", "everyday life", "From: 'am Alldag'"),
    ("Geschier", "n", "Geschierer", "dishes / tableware", "From: 'spullen d\'Geschier'"),
    ("Kleeder", "pl. only", "Plural tantum", "clothes", "From: 'wäschen d\'Kleeder'"),
    ("Land", "n", "Länner", "country / countryside", "From: 'wunne gär um Land'"),
    ("Mëtt", "f", "Mëtten", "middle", "From: 'an der Mëtt vu'"),
    ("Stad", "f", "Stied", "town / city", "From: 'grousse Stied'"),
    ("Supermarché", "m", "Supermarchéën", "supermarket", "From: 'Hutt Dir e Supermarché'"),
    ("Produkt", "n", "Produkter", "product", "From: 'Produkter'"),
    ("Meenung", "f", "Meenungen", "opinion", "From: 'no menger Meenung'"),
    ("Verbindung", "f", "Verbindungen", "connection / connectivity", "From: 'Verbindung mam'"),
    ("Transport", "m", "Transporten", "transport", "From: 'ëffentlechen Transport'"),
    ("Bus", "m", "Bussen", "bus", "From: 'Bus'"),
    ("Tram", "m", "Trammen", "tram", "From: 'Tram'"),
    ("Nopeschfest", "n", "Nopeschfester", "neighborhood festival", "From: 'Nopeschfest'"),
    ("Post", "f", "kee Pluriel", "post / mail", "From: 'd\'Post huelen'"),
    ("Blumm", "f", "Blummen", "flower", "From: 'd\'Blummen nätzen'"),
    ("Gemengenhaus", "n", "Gemengenhaiser", "town hall", "From: 'd\'Gemengenhaus'"),
    ("Märei", "f", "Märeien", "town hall / mayorality", "From: 'd\'Märei'"),
    ("Dokument", "n", "Dokumenter", "document", "From: 'some documents'"),
    ("Beiekolonie", "f", "Beiekolonien", "honeybee colony", "From: 'honeybee colonies'"),
    ("Bauerenhaff", "m", "Bauerenhäff", "farmhouse / farm", "From: 'buy a farmhouse'")
]

candidate_verbs = [
    # (Word, Translation, PastParticiple, Auxiliary)
    ("wunnen", "to live / reside", "gewunnt", "hunn"),
    ("kafen", "to buy", "kaaft", "hunn"),
    ("mouen", "to rent / lease", "gemount", "hunn"), # or lounen
    ("lounen", "to rent", "gelount", "hunn"),
    ("wanderen", "to hike / wander", "gewandert", "sinn"),
    ("fueren", "to drive / ride", "gefuer", "sinn"),
    ("staubsaugen", "to vacuum", "gestaubsaugt", "hunn"),
    ("hëllefen", "to help", "gehollef", "hunn"),
    ("maachen", "to do / make", "gemaach", "hunn"),
    ("spullen", "to wash dishes / rinse", "gespullt", "hunn"),
    ("wäschen", "to wash", "gewäsch", "hunn"),
    ("feieren", "to celebrate", "gefeiert", "hunn"),
    ("huelen", "to take", "geholl", "hunn"),
    ("nätzen", "to water / wet", "genëtzt", "hunn"),
    ("goen", "to go", "gaangen", "sinn"),
    ("schneiden", "to cut", "geschnidden", "hunn")
]

candidate_adjectives = [
    # (Word, Translation, Type)
    ("hell", "bright / light", "adjective"),
    ("miwweléiert", "furnished", "adjective"),
    ("modern", "modern", "adjective"),
    ("roueg", "quiet / peaceful", "adjective/adverb"),
    ("laut", "loud / noisy", "adjective/adverb"),
    ("eleng", "alone", "adjective/adverb"),
    ("bëlleg", "cheap", "adjective/adverb"),
    ("deier", "expensive", "adjective/adverb"),
    ("ëffentlech", "public", "adjective"),
    ("kleng", "small", "adjective/adverb"),
    ("grouss", "big / large", "adjective/adverb"),
    ("friddlech", "peaceful", "adjective/adverb"),
    ("schéin", "beautiful", "adjective/adverb")
]

print("\n--- DUPLICATE CHECK FOR VERBS ---")
for v in candidate_verbs:
    if v[0] in verbs_db:
        print(f"  [DUP] Verb '{v[0]}' is already in the database!")
    else:
        print(f"  [NEW] Verb '{v[0]}' is new.")

print("\n--- DUPLICATE CHECK FOR ADJECTIVES ---")
for a in candidate_adjectives:
    if a[0] in adjs_db:
        print(f"  [DUP] Adjective '{a[0]}' is already in the database!")
    else:
        print(f"  [NEW] Adjective '{a[0]}' is new.")
