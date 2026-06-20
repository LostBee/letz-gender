/**
 * Topic: Fleamaart (Flea Market)
 * 44 nouns — adjectives, adverbs, and plural-only entries excluded.
 * Audio files are in audio/fleamarket/.
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
    { word: "Floumaart",        article: "de",  plural: "d'Floumäert",           gender: "m", definition: "flea market",                       audio: "audio/fleamarket/floumaart1.mp3" },
    { word: "Stand",             article: "de",  plural: "d'Stänn",              gender: "m", definition: "stand / stall / booth",              audio: "audio/fleamarket/stand1.mp3" },
    { word: "Bud",               article: "d'",  plural: "d'Buden",              gender: "f", definition: "stall / booth / cabin",              audio: "audio/fleamarket/bud1.mp3" },
    { word: "Zelt",              article: "d'",  plural: "d'Zelter",             gender: "n", definition: "tent" },
    { word: "Zeltstaang",        article: "d'",  plural: "d'Zeltstaangen",       gender: "f", definition: "tent pole" },

    // --- Containers ---
    { word: "Këscht",            article: "d'",  plural: "d'Këschten",           gender: "f", definition: "box / crate",                       audio: "audio/fleamarket/kescht1.mp3" },
    { word: "Cageot",            article: "de",  plural: "de Cageoten",          gender: "m", definition: "crate",                              audio: "audio/fleamarket/cageot1.mp3" },
    { word: "Kartrong",          article: "de",  plural: "de Kartrongen",        gender: "m", definition: "cardboard / cardboard box",          audio: "audio/fleamarket/kartrong1.mp3" },

    // --- Furniture & Displays ---
    { word: "Kleederstänner",    article: "de",  plural: "de Kleederstänneren",  gender: "m", definition: "coat stand",                        audio: "audio/fleamarket/kleederstanner1.mp3" },
    { word: "Mantelbriet",       article: "de",  plural: "de Mantelbrieder",     gender: "n", definition: "coat hanger / clothes hanger",       audio: "audio/fleamarket/mantelbriet1.mp3" },
    { word: "Gestell",           article: "de",  plural: "de Gesteller",         gender: "m", definition: "rack / shelves / frame",             audio: "audio/fleamarket/gestell1.mp3" },
    { word: "Stull",             article: "de",  plural: "d'Stull",              gender: "m", definition: "chair" },
    { word: "Hocker",            article: "den", plural: "den Hocker",           gender: "m", definition: "stool",                              audio: "audio/fleamarket/hocker1.mp3" },

    // --- Antiques & Art ---
    { word: "Antiquitéit",       article: "d'",  plural: "d'Antiquitéiten",      gender: "f", definition: "antique",                            audio: "audio/fleamarket/antiquiteit1.mp3" },
    { word: "Antiquaire",        article: "den", plural: "den Antiquairen",      gender: "m", definition: "antique dealer",                     audio: "audio/fleamarket/antiquaire1.mp3" },
    { word: "Molerei",           article: "d'",  plural: "d'Molereien",          gender: "f", definition: "painting",                           audio: "audio/fleamarket/molerei1.mp3" },
    { word: "Uelegbild",         article: "en",  plural: "d'Uelegbiller",        gender: "n", definition: "oil painting" },
    { word: "Bijou",             article: "de",  plural: "de Bijouen",           gender: "m", definition: "jewel / piece of jewellery",         audio: "audio/fleamarket/bijou1.mp3" },

    // --- Household & Objects ---
    { word: "Geschier",          article: "de",  plural: "de Geschierer",        gender: "n", definition: "crockery / cutlery / tableware",     audio: "audio/fleamarket/geschier1.mp3" },
    { word: "Käerz",             article: "d'",  plural: "d'Käerzen",            gender: "f", definition: "candle",                             audio: "audio/fleamarket/kaerz1.mp3" },
    { word: "Käerzestänner",     article: "de",  plural: "de Käerzestänneren",   gender: "m", definition: "candlestick / candle holder",        audio: "audio/fleamarket/kaerzestanner1.mp3" },
    { word: "Spigel",            article: "de",  plural: "de Spigelen",          gender: "m", definition: "mirror" },
    { word: "Teppech",           article: "de",  plural: "de Teppecher",         gender: "m", definition: "carpet / rug / mat" },

    // --- Clothing & Accessories ---
    { word: "Kleedersammlung",   article: "d'",  plural: "d'Kleedersammlungen",  gender: "f", definition: "old clothes collection",             audio: "audio/fleamarket/kleedersammlung1.mp3" },
    { word: "Kleedergeschäft",   article: "de",  plural: "de Kleedergeschäfter", gender: "n", definition: "clothes shop",                       audio: "audio/fleamarket/kleedergeschaft1.mp3" },
    { word: "Kleederbuttek",     article: "de",  plural: "de Kleederbutteker",   gender: "m", definition: "clothes shop",                       audio: "audio/fleamarket/kleederbuttek1.mp3" },
    { word: "Hutt",              article: "den", plural: "d'Hitt",               gender: "m", definition: "hat",                                audio: "audio/fleamarket/hutt1.mp3" },

    // --- Electronics & Devices ---
    { word: "Auer",              article: "d'",  plural: "d'Auren",              gender: "f", definition: "watch / clock",                      audio: "audio/fleamarket/auer1.mp3" },
    { word: "Luucht",            article: "d'",  plural: "d'Luuchten",           gender: "f", definition: "light / lamp",                       audio: "audio/fleamarket/luucht1.mp3" },
    { word: "Schreifmaschinn",   article: "d'",  plural: "d'Schreifmaschinnen",  gender: "f", definition: "typewriter",                         audio: "audio/fleamarket/schreifmaschinn1.mp3" },
    { word: "Fotoapparat",       article: "de",  plural: "de Fotoapparaten",     gender: "m", definition: "camera",                             audio: "audio/fleamarket/fotoapparat1.mp3" },
    { word: "Telefon",           article: "den", plural: "den Telefonen",        gender: "m", definition: "phone / telephone" },

    // --- Miscellaneous items ---
    { word: "Plack",             article: "d'",  plural: "d'Placken",            gender: "f", definition: "record / vinyl / plaque / sign",     audio: "audio/fleamarket/plack1.mp3" },
    { word: "Kuerf",             article: "de",  plural: "d'Kierf",              gender: "m", definition: "basket / shopping basket",           audio: "audio/fleamarket/kuerf1.mp3" },
    { word: "Spillsaach",        article: "d'",  plural: "d'Spillsaachen",       gender: "f", definition: "toy",                                audio: "audio/fleamarket/spillsaach1.mp3" },
    { word: "Postkaart",         article: "d'",  plural: "d'Postkaarten",        gender: "f", definition: "postcard",                           audio: "audio/fleamarket/postkaart1.mp3" },
    { word: "Schëld",            article: "d'",  plural: "d'Schëlder",           gender: "n", definition: "sign / label / tag / shield",        audio: "audio/fleamarket/scheld1.mp3" },

    // --- Materials ---
    { word: "Holz",              article: "d'",  plural: "d'Hëlzer",             gender: "n", definition: "wood",                               audio: "audio/fleamarket/holz1.mp3" },
    { word: "Metall",            article: "d'",  plural: "d'Metaller",           gender: "n", definition: "metal",                              audio: "audio/fleamarket/metall2.mp3" },
    { word: "Glas",              article: "d'",  plural: "d'Glieser",            gender: "n", definition: "glass / lens",                       audio: "audio/fleamarket/glas1.mp3" },

    // --- People ---
    { word: "Verkeefer",         article: "de",  plural: "de Verkeefer",         gender: "m", definition: "salesperson / seller" },
    { word: "Verkeeferin",       article: "d'",  plural: "d'Verkeeferinnen",     gender: "f", definition: "saleswoman / seller" },
    { word: "Client",            article: "de",  plural: "de Clienten",          gender: "m", definition: "customer / patron",                  audio: "audio/fleamarket/client1.mp3" },
    { word: "Cliente",           article: "d'",  plural: "d'Clienten",           gender: "f", definition: "customer / patron",                  audio: "audio/fleamarket/cliente1.mp3" },
  ]
});
