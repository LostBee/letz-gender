/**
 * Topic: Kierperdeeler (Body Parts)
 * 39 nouns from the provided word lists. Plural-only (d'Zéiwen) excluded.
 * Duplicate d'Broscht (breast / chest) merged.
 * Optional audio paths are matched to files under audio/bodyparts/.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "bodyparts",
  name: "Kierperdeeler",
  nameEn: "Body Parts",
  icon: "💪",
  words: [
    { word: "Knéchel", article: "de", plural: "d'Knéchelen", gender: "m", definition: "ankle", audio: "audio/bodyparts/knechel1.mp3" },
    { word: "Enkel", article: "den", plural: "d'Enkelen", gender: "m", definition: "ankle", audio: "audio/bodyparts/enkel2.mp3" },
    { word: "Aarm", article: "den", plural: "d'Äerm", gender: "m", definition: "arm", audio: "audio/bodyparts/aarm2.mp3" },
    { word: "Achsel", article: "d'", plural: "d'Achselen", gender: "f", definition: "armpit" },
    { word: "Baart", article: "de", plural: "d'Bäert", gender: "m", definition: "beard", audio: "audio/bodyparts/baart1.mp3" },
    { word: "Broscht", article: "d'", plural: "d'Brëscht", gender: "f", definition: "breast / chest", audio: "audio/bodyparts/broscht1.mp3" },
    { word: "Wued", article: "d'", plural: "d'Wueden", gender: "f", definition: "calf", audio: "audio/bodyparts/wued1.mp3" },
    { word: "Bak", article: "de", plural: "d'Baken", gender: "m", definition: "cheek", audio: "audio/bodyparts/bak1.mp3" },
    { word: "Kënn", article: "de", plural: "d'Kënner", gender: "m", definition: "chin", audio: "audio/bodyparts/kenn1.mp3" },
    { word: "Ouerläppchen", article: "dat", plural: "d'Ouerläppcher", gender: "n", definition: "earlobe", audio: "audio/bodyparts/ouerlappchen1.mp3" },
    { word: "Ielebou", article: "den", plural: "d'Ielebouen", gender: "m", definition: "elbow", audio: "audio/bodyparts/ielebou1.mp3" },
    { word: "Abra", article: "d'", plural: "d'Abraen", gender: "f", definition: "eyebrow" },
    { word: "Wimper", article: "d'", plural: "d'Wimperen", gender: "f", definition: "eyelash", audio: "audio/bodyparts/wimper1.mp3" },
    { word: "Gesiicht", article: "dat", plural: "d'Gesiichter", gender: "n", definition: "face", audio: "audio/bodyparts/gesiicht1 (2).mp3" },
    { word: "Fanger", article: "de", plural: "d'Fangeren", gender: "m", definition: "finger", audio: "audio/bodyparts/fanger1.mp3" },
    { word: "Stier", article: "d'", plural: "d'Stieren", gender: "f", definition: "forehead", audio: "audio/bodyparts/stier1.mp3" },
    { word: "Tallek", article: "de", plural: "d'Talleken", gender: "m", definition: "heel", audio: "audio/bodyparts/tallek1.mp3" },
    { word: "Hëft", article: "d'", plural: "d'Hëften", gender: "f", definition: "hip", audio: "audio/bodyparts/heft1.mp3" },
    { word: "Zeigefanger", article: "den", plural: "d'Zeigefangeren", gender: "m", definition: "index finger", audio: "audio/bodyparts/zeigefanger1.mp3" },
    { word: "Kifer", article: "de", plural: "d'Kiferen", gender: "m", definition: "jaw", audio: "audio/bodyparts/kifer1.mp3" },
    { word: "Knéi", article: "de", plural: "d'Knéien", gender: "m", definition: "knee", audio: "audio/bodyparts/knei1.mp3" },
    { word: "Been", article: "dat", plural: "d'Been", gender: "n", definition: "leg", audio: "audio/bodyparts/been1.mp3" },
    { word: "Lëps", article: "d'", plural: "d'Lëpsen", gender: "f", definition: "lip", audio: "audio/bodyparts/leps1.mp3" },
    { word: "Mond", article: "de", plural: "d'Monder", gender: "m", definition: "mouth", audio: "audio/bodyparts/mond1.mp3" },
    { word: "Schnutz", article: "de", plural: "-", gender: "m", definition: "mustache", audio: "audio/bodyparts/schnutz1.mp3" },
    { word: "Zant", article: "den", plural: "d'Zänn", gender: "m", definition: "tooth", audio: "audio/bodyparts/zant1 (2).mp3" },
    { word: "Nues", article: "d'", plural: "d'Nuesen", gender: "f", definition: "nose", audio: "audio/bodyparts/nues1.mp3" },
    { word: "Ouer", article: "dat", plural: "d'Oueren", gender: "n", definition: "ear", audio: "audio/bodyparts/ouer1 (2).mp3" },
    { word: "Hals", article: "den", plural: "d'Hälser", gender: "m", definition: "neck", audio: "audio/bodyparts/hals1.mp3" },
    { word: "Fouss", article: "de", plural: "d'Féiss", gender: "m", definition: "foot", audio: "audio/bodyparts/fouss1.mp3" },
    { word: "Bauch", article: "de", plural: "d'Bäich", gender: "m", definition: "abdomen", audio: "audio/bodyparts/bauch1.mp3" },
    { word: "Réck", article: "de", plural: "d'Récker", gender: "m", definition: "back", audio: "audio/bodyparts/reck1.mp3" },
    { word: "Schëller", article: "d'", plural: "d'Schëlleren", gender: "f", definition: "shoulder", audio: "audio/bodyparts/scheller1.mp3" },
    { word: "Mo", article: "de", plural: "d'Mee", gender: "m", definition: "stomach", audio: "audio/bodyparts/mo1 (2).mp3" },
    { word: "Kapp", article: "d'", plural: "d'Kappen", gender: "f", definition: "head", audio: "audio/bodyparts/kapp1.mp3" },
    { word: "Haut", article: "d'", plural: "-", gender: "f", definition: "skin", audio: "audio/bodyparts/haut2.mp3" },
    { word: "Organ", article: "dat", plural: "d'Organer", gender: "n", definition: "organ", audio: "audio/bodyparts/organ1.mp3" },
    { word: "Muskel", article: "de", plural: "d'Muskelen", gender: "m", definition: "muscle", audio: "audio/bodyparts/muskel1.mp3" },
    { word: "Seen", article: "d'", plural: "d'Seenen", gender: "f", definition: "tendon", audio: "audio/bodyparts/seen1.mp3" }
  ]
});
