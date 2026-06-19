/**
 * Topic: Hausaufgaben (Homework)
 * 49 nouns from the provided word lists.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "homework",
  name: "Hausaufgaben",
  nameEn: "Homework",
  icon: "📝",
  words: [
    // --- Image 1 ---
    { word: "Buedem",            article: "de",  plural: "d'Biedem",             gender: "m", definition: "floor / earth / soil / base" },
    { word: "Salonsdësch",       article: "de",  plural: "de Salonsdëscher",     gender: "m", definition: "coffee table / living room table" },
    { word: "Rez-de-chaussée",   article: "de",  plural: "de Rez-de-chausséeën", gender: "m", definition: "ground floor" },
    { word: "Stack",             article: "de",  plural: "d'Stäck",              gender: "m", definition: "plant / pot plant / stump / hive" },
    { word: "Rumm",              article: "d'",  plural: "d'Rummen",             gender: "f", definition: "frame (picture/window/door)" },
    { word: "Reflexioun",        article: "d'",  plural: "d'Reflexiounen",       gender: "f", definition: "reflection / idea / thought" },
    { word: "Raum",              article: "de",  plural: "de Raim",              gender: "m", definition: "room / space" },
    { word: "Schoulbuch",        article: "d'",  plural: "d'Schoulbicher",       gender: "n", definition: "school book" },
    { word: "Zäitschrëft",       article: "d'",  plural: "d'Zäitschrëften",      gender: "f", definition: "magazine" },
    { word: "Mathé / Mathematik", article: "d'", plural: "-",                    gender: "f", definition: "mathematics" },
    { word: "Säitendësch",       article: "den", plural: "d'Säitendëscher",      gender: "m", definition: "side table" },
    { word: "Decken",            article: "d'",  plural: "d'Decken",             gender: "f", definition: "blanket" },
    { word: "Këssen",            article: "d'",  plural: "d'Këssen",             gender: "n", definition: "pillow / cushion" },
    { word: "Salonsdier",        article: "d'",  plural: "d'Salonsdieren",       gender: "f", definition: "living-room door" },
    { word: "Kamäin",            article: "den", plural: "d'Kamäiner",           gender: "m", definition: "fireplace / chimney" },

    // --- Image 2 ---
    { word: "Bic",               article: "de",  plural: "de Bicken",            gender: "m", definition: "ballpoint pen / biro" },
    { word: "Trousse",           article: "d'",  plural: "d'Troussen",           gender: "f", definition: "case / bag / etui" },
    { word: "Lineal",            article: "d'",  plural: "d'Linealen",           gender: "n", definition: "ruler" },
    { word: "Spetzer",           article: "de",  plural: "de Spetzeren",         gender: "m", definition: "pencil sharpener" },
    { word: "Gummi",             article: "de",  plural: "d'Gummiën",            gender: "m", definition: "eraser" },
    { word: "Teppech",           article: "den", plural: "d'Teppecher",          gender: "m", definition: "rug / carpet" },
    { word: "Bild",              article: "d'",  plural: "d'Biller",             gender: "n", definition: "picture / photo" },
    { word: "Kuerf",             article: "de",  plural: "d'Kierf",              gender: "m", definition: "basket" },
    { word: "Fënster",           article: "d'",  plural: "d'Fënsteren",          gender: "f", definition: "window" },
    { word: "Fënsterbänk",       article: "d'",  plural: "d'Fënsterbänken",      gender: "f", definition: "windowsill" },
    { word: "Mauer",             article: "d'",  plural: "d'Maueren",            gender: "f", definition: "wall" },
    { word: "Plaffong",          article: "de",  plural: "de Plaffongen",        gender: "m", definition: "ceiling" },
    { word: "Taass",             article: "d'",  plural: "d'Tasen",              gender: "f", definition: "mug / cup" },
    { word: "Stuff",             article: "d'",  plural: "d'Stuffen",            gender: "f", definition: "living room" },
    { word: "Schreiwdësch",      article: "de",  plural: "de Schreiwdëscher",    gender: "m", definition: "desk" },
    { word: "Iessdësch",         article: "de",  plural: "de Iessdëscher",       gender: "m", definition: "dining table" },
    { word: "Canapé",            article: "de",  plural: "de Canapéen",          gender: "m", definition: "sofa / settee / couch" },
    { word: "Vas",               article: "d'",  plural: "d'Vasen",              gender: "f", definition: "vase" },

    // --- Image 3 ---
    { word: "Papp",              article: "de",  plural: "d'Pappen",             gender: "m", definition: "father / dad" },
    { word: "Mamm",              article: "d'",  plural: "d'Mammen",             gender: "f", definition: "mother / mom" },
    { word: "Kand",              article: "d'",  plural: "d'Kanner",             gender: "n", definition: "child" },
    { word: "Meedchen",          article: "d'",  plural: "d'Meedercher",         gender: "n", definition: "girl" },
    { word: "Famill",            article: "d'",  plural: "d'Familljen",          gender: "f", definition: "family" },
    { word: "Dësch",             article: "den", plural: "d'Dëscher",            gender: "m", definition: "table" },
    { word: "Stull",             article: "de",  plural: "d'Still",              gender: "m", definition: "chair" },
    { word: "Fotell",            article: "d'",  plural: "d'Fotellen",           gender: "f", definition: "armchair" },
    { word: "Regal",             article: "d'",  plural: "d'Regaler",            gender: "n", definition: "shelf" },
    { word: "Bicherregal",       article: "d'",  plural: "d'Bicherregaler",      gender: "n", definition: "bookshelf" },
    { word: "Luucht",            article: "d'",  plural: "d'Luuchten",           gender: "f", definition: "lamp" },
    { word: "Steelucht",         article: "d'",  plural: "d'Steeluchten",        gender: "f", definition: "floor lamp" },
    { word: "Bürosluucht",       article: "d'",  plural: "d'Bürosluuchten",      gender: "f", definition: "desk lamp" },
    { word: "Buch",              article: "d'",  plural: "d'Bicher",             gender: "n", definition: "book" },
    { word: "Heft",              article: "d'",  plural: "d'Hefter",             gender: "n", definition: "notebook / exercise book" },
    { word: "Classeur",          article: "de",  plural: "de Classeuren",        gender: "m", definition: "folder / file" },
    { word: "Bläistëft",         article: "de",  plural: "de Bläistëfter",       gender: "m", definition: "pencil (German root)" },
    { word: "Crayong",           article: "de",  plural: "de Crayongen",         gender: "m", definition: "pencil (French root)" },
    { word: "Faarf",             article: "d'",  plural: "d'Faarwen",            gender: "f", definition: "colored pencil / crayon / paint" }
  ]
});
