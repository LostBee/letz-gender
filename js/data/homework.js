/**
 * Topic: Hausaufgaben (Homework)
 * 49 nouns from the provided word lists.
 * Audio files are in audio/hoemwork/.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "homework",
  name: "Hausaufgaben",
  nameEn: "Homework",
  icon: "📝",
  words: [
    // --- Image 1 ---
    { word: "Buedem",            article: "de",  plural: "d'Biedem",             gender: "m", definition: "floor / earth / soil / base",        audio: "audio/hoemwork/buedem1.mp3" },
    { word: "Salonsdësch",       article: "de",  plural: "de Salonsdëscher",     gender: "m", definition: "coffee table / living room table",   audio: "audio/hoemwork/salonsdesch1.mp3" },
    { word: "Rez-de-chaussée",   article: "de",  plural: "de Rez-de-chausséeën", gender: "m", definition: "ground floor",                      audio: "audio/hoemwork/rezdechaussee1.mp3" },
    { word: "Stack",             article: "de",  plural: "d'Stäck",              gender: "m", definition: "plant / pot plant / stump / hive",   audio: "audio/hoemwork/stack1.mp3" },
    { word: "Rumm",              article: "d'",  plural: "d'Rummen",             gender: "f", definition: "frame (picture/window/door)",        audio: "audio/hoemwork/rumm1.mp3" },
    { word: "Reflexioun",        article: "d'",  plural: "d'Reflexiounen",       gender: "f", definition: "reflection / idea / thought",        audio: "audio/hoemwork/reflexioun1.mp3" },
    { word: "Raum",              article: "de",  plural: "de Raim",              gender: "m", definition: "room / space",                       audio: "audio/hoemwork/raum1.mp3" },
    { word: "Schoulbuch",        article: "d'",  plural: "d'Schoulbicher",       gender: "n", definition: "school book" },
    { word: "Zäitschrëft",       article: "d'",  plural: "d'Zäitschrëften",      gender: "f", definition: "magazine" },
    { word: "Mathé / Mathematik", article: "d'", plural: "-",                    gender: "f", definition: "mathematics",                        audio: "audio/hoemwork/mathe1.mp3" },
    { word: "Säitendësch",       article: "den", plural: "d'Säitendëscher",      gender: "m", definition: "side table" },
    { word: "Decken",            article: "d'",  plural: "d'Decken",             gender: "f", definition: "blanket",                            audio: "audio/hoemwork/decken1.mp3" },
    { word: "Këssen",            article: "d'",  plural: "d'Këssen",             gender: "n", definition: "pillow / cushion",                   audio: "audio/hoemwork/kessen1.mp3" },
    { word: "Salonsdier",        article: "d'",  plural: "d'Salonsdieren",       gender: "f", definition: "living-room door",                   audio: "audio/hoemwork/salonsdier1.mp3" },
    { word: "Kamäin",            article: "den", plural: "d'Kamäiner",           gender: "m", definition: "fireplace / chimney",                audio: "audio/hoemwork/kamain1.mp3" },

    // --- Image 2 ---
    { word: "Bic",               article: "de",  plural: "de Bicken",            gender: "m", definition: "ballpoint pen / biro",               audio: "audio/hoemwork/bic1.mp3" },
    { word: "Trousse",           article: "d'",  plural: "d'Troussen",           gender: "f", definition: "case / bag / etui",                  audio: "audio/hoemwork/trousse1 (1).mp3" },
    { word: "Lineal",            article: "d'",  plural: "d'Linealen",           gender: "n", definition: "ruler",                              audio: "audio/hoemwork/lineal1.mp3" },
    { word: "Spetzer",           article: "de",  plural: "de Spetzeren",         gender: "m", definition: "pencil sharpener",                   audio: "audio/hoemwork/spetzer1.mp3" },
    { word: "Gummi",             article: "de",  plural: "d'Gummiën",            gender: "m", definition: "eraser",                             audio: "audio/hoemwork/gummi1.mp3" },
    { word: "Teppech",           article: "den", plural: "d'Teppecher",          gender: "m", definition: "rug / carpet" },
    { word: "Bild",              article: "d'",  plural: "d'Biller",             gender: "n", definition: "picture / photo",                    audio: "audio/hoemwork/bild1.mp3" },
    { word: "Kuerf",             article: "de",  plural: "d'Kierf",              gender: "m", definition: "basket" },
    { word: "Fënster",           article: "d'",  plural: "d'Fënsteren",          gender: "f", definition: "window",                             audio: "audio/hoemwork/fenster1.mp3" },
    { word: "Fënsterbänk",       article: "d'",  plural: "d'Fënsterbänken",      gender: "f", definition: "windowsill",                         audio: "audio/hoemwork/fensterbank1.mp3" },
    { word: "Mauer",             article: "d'",  plural: "d'Maueren",            gender: "f", definition: "wall",                               audio: "audio/hoemwork/mauer1.mp3" },
    { word: "Plaffong",          article: "de",  plural: "de Plaffongen",        gender: "m", definition: "ceiling",                            audio: "audio/hoemwork/plaffong1.mp3" },
    { word: "Taass",             article: "d'",  plural: "d'Tasen",              gender: "f", definition: "mug / cup",                          audio: "audio/hoemwork/taass1.mp3" },
    { word: "Stuff",             article: "d'",  plural: "d'Stuffen",            gender: "f", definition: "living room",                        audio: "audio/hoemwork/stuff1.mp3" },
    { word: "Schreiwdësch",      article: "de",  plural: "de Schreiwdëscher",    gender: "m", definition: "desk",                               audio: "audio/hoemwork/schreifdesch1.mp3" },
    { word: "Iessdësch",         article: "de",  plural: "de Iessdëscher",       gender: "m", definition: "dining table",                       audio: "audio/hoemwork/iessdesch1.mp3" },
    { word: "Canapé",            article: "de",  plural: "de Canapéen",          gender: "m", definition: "sofa / settee / couch",              audio: "audio/hoemwork/canape1.mp3" },
    { word: "Vas",               article: "d'",  plural: "d'Vasen",              gender: "f", definition: "vase" },

    // --- Image 3 ---
    { word: "Papp",              article: "de",  plural: "d'Pappen",             gender: "m", definition: "father / dad",                       audio: "audio/hoemwork/papp1.mp3" },
    { word: "Mamm",              article: "d'",  plural: "d'Mammen",             gender: "f", definition: "mother / mom",                       audio: "audio/hoemwork/mamm1.mp3" },
    { word: "Kand",              article: "d'",  plural: "d'Kanner",             gender: "n", definition: "child",                              audio: "audio/hoemwork/kand1.mp3" },
    { word: "Meedchen",          article: "d'",  plural: "d'Meedercher",         gender: "n", definition: "girl",                               audio: "audio/hoemwork/meedchen1.mp3" },
    { word: "Famill",            article: "d'",  plural: "d'Familljen",          gender: "f", definition: "family",                             audio: "audio/hoemwork/famill1.mp3" },
    { word: "Dësch",             article: "den", plural: "d'Dëscher",            gender: "m", definition: "table",                              audio: "audio/hoemwork/desch1.mp3" },
    { word: "Stull",             article: "de",  plural: "d'Still",              gender: "m", definition: "chair" },
    { word: "Fotell",            article: "d'",  plural: "d'Fotellen",           gender: "f", definition: "armchair",                           audio: "audio/hoemwork/fotell1.mp3" },
    { word: "Regal",             article: "d'",  plural: "d'Regaler",            gender: "n", definition: "shelf",                              audio: "audio/hoemwork/regal1.mp3" },
    { word: "Bicherregal",       article: "d'",  plural: "d'Bicherregaler",      gender: "n", definition: "bookshelf",                          audio: "audio/hoemwork/bicherregal1.mp3" },
    { word: "Luucht",            article: "d'",  plural: "d'Luuchten",           gender: "f", definition: "lamp" },
    { word: "Steelucht",         article: "d'",  plural: "d'Steeluchten",        gender: "f", definition: "floor lamp",                         audio: "audio/hoemwork/steeluucht1.mp3" },
    { word: "Bürosluucht",       article: "d'",  plural: "d'Bürosluuchten",      gender: "f", definition: "desk lamp",                          audio: "audio/hoemwork/burosluucht1.mp3" },
    { word: "Buch",              article: "d'",  plural: "d'Bicher",             gender: "n", definition: "book",                               audio: "audio/hoemwork/buch1.mp3" },
    { word: "Heft",              article: "d'",  plural: "d'Hefter",             gender: "n", definition: "notebook / exercise book",            audio: "audio/hoemwork/heft1.mp3" },
    { word: "Classeur",          article: "de",  plural: "de Classeuren",        gender: "m", definition: "folder / file",                      audio: "audio/hoemwork/classeur1.mp3" },
    { word: "Bläistëft",         article: "de",  plural: "de Bläistëfter",       gender: "m", definition: "pencil (German root)",               audio: "audio/hoemwork/blaisteft1.mp3" },
    { word: "Crayong",           article: "de",  plural: "de Crayongen",         gender: "m", definition: "pencil (French root)",               audio: "audio/hoemwork/crayong1.mp3" },
    { word: "Faarf",             article: "d'",  plural: "d'Faarwen",            gender: "f", definition: "colored pencil / crayon / paint",    audio: "audio/hoemwork/faarf1.mp3" }
  ]
});
