/**
 * Topic: Fleamaart (Flea Market)
 * 44 nouns — adjectives, adverbs, and plural-only entries excluded.
 *
 * To add a new topic, copy this file, change the data, and add
 * a <script> tag for it in index.html before app.js.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "fleamarket",
  name: "Fleamaart",
  nameEn: "Flea Market",
  icon: "🛒",
  words: [
    // --- Venue & Setup ---
    { word: "Floumaart",        article: "de",  plural: "d'Floumäert",           gender: "m", definition: "flea market" },
    { word: "Stand",             article: "de",  plural: "d'Stänn",              gender: "m", definition: "stand / stall / booth" },
    { word: "Bud",               article: "d'",  plural: "d'Buden",              gender: "f", definition: "stall / booth / cabin" },
    { word: "Zelt",              article: "d'",  plural: "d'Zelter",             gender: "n", definition: "tent" },
    { word: "Zeltstaang",        article: "d'",  plural: "d'Zeltstaangen",       gender: "f", definition: "tent pole" },

    // --- Containers ---
    { word: "Këscht",            article: "d'",  plural: "d'Këschten",           gender: "f", definition: "box / crate" },
    { word: "Cageot",            article: "de",  plural: "de Cageoten",          gender: "m", definition: "crate" },
    { word: "Kartrong",          article: "de",  plural: "de Kartrongen",        gender: "m", definition: "cardboard / cardboard box" },

    // --- Furniture & Displays ---
    { word: "Kleederstänner",    article: "de",  plural: "de Kleederstänneren",  gender: "m", definition: "coat stand" },
    { word: "Mantelbriet",       article: "de",  plural: "de Mantelbrieder",     gender: "n", definition: "coat hanger / clothes hanger" },
    { word: "Gestell",           article: "de",  plural: "de Gesteller",         gender: "m", definition: "rack / shelves / frame" },
    { word: "Stull",             article: "de",  plural: "d'Stull",              gender: "m", definition: "chair" },
    { word: "Hocker",            article: "den", plural: "den Hocker",           gender: "m", definition: "stool" },

    // --- Antiques & Art ---
    { word: "Antiquitéit",       article: "d'",  plural: "d'Antiquitéiten",      gender: "f", definition: "antique" },
    { word: "Antiquaire",        article: "den", plural: "den Antiquairen",      gender: "m", definition: "antique dealer" },
    { word: "Molerei",           article: "d'",  plural: "d'Molereien",          gender: "f", definition: "painting" },
    { word: "Uelegbild",         article: "en",  plural: "d'Uelegbiller",        gender: "n", definition: "oil painting" },
    { word: "Bijou",             article: "de",  plural: "de Bijouen",           gender: "m", definition: "jewel / piece of jewellery" },

    // --- Household & Objects ---
    { word: "Geschier",          article: "de",  plural: "de Geschierer",        gender: "n", definition: "crockery / cutlery / tableware" },
    { word: "Käerz",             article: "d'",  plural: "d'Käerzen",            gender: "f", definition: "candle" },
    { word: "Käerzestänner",     article: "de",  plural: "de Käerzestänneren",   gender: "m", definition: "candlestick / candle holder" },
    { word: "Spigel",            article: "de",  plural: "de Spigelen",          gender: "m", definition: "mirror" },
    { word: "Teppech",           article: "de",  plural: "de Teppecher",         gender: "m", definition: "carpet / rug / mat" },

    // --- Clothing & Accessories ---
    { word: "Kleedersammlung",   article: "d'",  plural: "d'Kleedersammlungen",  gender: "f", definition: "old clothes collection" },
    { word: "Kleedergeschäft",   article: "de",  plural: "de Kleedergeschäfter", gender: "n", definition: "clothes shop" },
    { word: "Kleederbuttek",     article: "de",  plural: "de Kleederbutteker",   gender: "m", definition: "clothes shop" },
    { word: "Hutt",              article: "den", plural: "d'Hitt",               gender: "m", definition: "hat" },

    // --- Electronics & Devices ---
    { word: "Auer",              article: "d'",  plural: "d'Auren",              gender: "f", definition: "watch / clock" },
    { word: "Luucht",            article: "d'",  plural: "d'Luuchten",           gender: "f", definition: "light / lamp" },
    { word: "Schreifmaschinn",   article: "d'",  plural: "d'Schreifmaschinnen",  gender: "f", definition: "typewriter" },
    { word: "Fotoapparat",       article: "de",  plural: "de Fotoapparaten",     gender: "m", definition: "camera" },
    { word: "Telefon",           article: "den", plural: "den Telefonen",        gender: "m", definition: "phone / telephone" },

    // --- Miscellaneous items ---
    { word: "Plack",             article: "d'",  plural: "d'Placken",            gender: "f", definition: "record / vinyl / plaque / sign" },
    { word: "Kuerf",             article: "de",  plural: "d'Kierf",              gender: "m", definition: "basket / shopping basket" },
    { word: "Spillsaach",        article: "d'",  plural: "d'Spillsaachen",       gender: "f", definition: "toy" },
    { word: "Postkaart",         article: "d'",  plural: "d'Postkaarten",        gender: "f", definition: "postcard" },
    { word: "Schëld",            article: "d'",  plural: "d'Schëlder",           gender: "n", definition: "sign / label / tag / shield" },

    // --- Materials ---
    { word: "Holz",              article: "d'",  plural: "d'Hëlzer",             gender: "n", definition: "wood" },
    { word: "Metall",            article: "d'",  plural: "d'Metaller",           gender: "n", definition: "metal" },
    { word: "Glas",              article: "d'",  plural: "d'Glieser",            gender: "n", definition: "glass / lens" },

    // --- People ---
    { word: "Verkeefer",         article: "de",  plural: "de Verkeefer",         gender: "m", definition: "salesperson / seller" },
    { word: "Verkeeferin",       article: "d'",  plural: "d'Verkeeferinnen",     gender: "f", definition: "saleswoman / seller" },
    { word: "Client",            article: "de",  plural: "de Clienten",          gender: "m", definition: "customer / patron" },
    { word: "Cliente",           article: "d'",  plural: "d'Clienten",           gender: "f", definition: "customer / patron" },
  ]
});
