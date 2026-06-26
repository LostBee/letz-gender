/**
 * Topic: Kleedung (Clothing)
 * 72 nouns related to clothing, accessories, and footwear.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "clothing",
  name: "Kleedung",
  nameEn: "Clothing",
  icon: "👕",
  words: [
    // --- General ---
    { word: "Kleedung", article: "d'", plural: "-", gender: "f", definition: "outfit / clothing / clothes", audio: "audio/clothing/kleedung1.mp3" },
    { word: "Schutzkleedung", article: "d'", plural: "-", gender: "f", definition: "protective clothing", audio: "audio/clothing/schutzkleedung1.mp3" },
    { word: "Kleederkollektioun", article: "d'", plural: "d'Kleederkollektiounen", gender: "f", definition: "clothing collection / fashion line", audio: "audio/clothing/kleederkollektioun1.mp3" },
    { word: "Dresscode", article: "de", plural: "d'Dresscoden", gender: "m", definition: "dress code", audio: "audio/clothing/dresscode1.mp3" },

    // --- Upper Body & Outerwear ---
    { word: "Hiem", article: "d'", plural: "d'Hiemer", gender: "n", definition: "shirt", audio: "audio/clothing/hiem1.mp3" },
    { word: "T-Shirt", article: "den", plural: "d'T-Shirten", gender: "m", definition: "T-shirt", audio: "audio/clothing/tshirt1.mp3" },
    { word: "Blus", article: "d'", plural: "d'Blusen", gender: "f", definition: "blouse", audio: "audio/clothing/blus1.mp3" },
    { word: "Topp", article: "den", plural: "d'Toppen", gender: "m", definition: "top", audio: "audio/clothing/topp2.mp3" },
    { word: "Pullover", article: "de", plural: "d'Pulloveren", gender: "m", definition: "sweater / jumper", audio: "audio/clothing/pullover1.mp3" },
    { word: "Gilet", article: "de", plural: "d'Gileten", gender: "m", definition: "vest / cardigan" },
    { word: "Jackett", article: "d'", plural: "d'Jacketten", gender: "f", definition: "jacket", audio: "audio/clothing/jackett1.mp3" },
    { word: "Liederjackett", article: "d'", plural: "d'Liederjacketten", gender: "f", definition: "leather jacket", audio: "audio/clothing/liederjackett1.mp3" },
    { word: "Jeansjackett", article: "d'", plural: "d'Jeansjacketten", gender: "f", definition: "denim jacket", audio: "audio/clothing/jeansjackett1.mp3" },
    { word: "Wanterjackett", article: "d'", plural: "d'Wanterjacketten", gender: "f", definition: "winter jacket", audio: "audio/clothing/wanterjackett1.mp3" },
    { word: "Paltong", article: "de", plural: "d'Paltongen", gender: "m", definition: "coat / blazer", audio: "audio/clothing/paltong1.mp3" },
    { word: "Mantel", article: "den", plural: "d'Mäntel", gender: "m", definition: "coat" },
    { word: "Anorak", article: "den", plural: "d'Anoraken", gender: "m", definition: "anorak" },
    { word: "Kostüm", article: "dat", plural: "d'Kostümer", gender: "n", definition: "suit" },
    { word: "Tailleur", article: "de", plural: "d'Tailleuren", gender: "m", definition: "women's suit" },

    // --- Lower Body & Full Body ---
    { word: "Box", article: "d'", plural: "d'Boxen", gender: "f", definition: "trousers", audio: "audio/clothing/box1.mp3" },
    { word: "kuerz Box", article: "eng", plural: "kuerz Boxen", gender: "f", definition: "shorts / short trousers" },
    { word: "Jeansbox", article: "d'", plural: "d'Jeansboxen", gender: "f", definition: "jeans" },
    { word: "Joggingsbox", article: "d'", plural: "d'Joggingsboxen", gender: "f", definition: "jogging pants" },
    { word: "Short", article: "d'", plural: "d'Shorten", gender: "f", definition: "shorts" },
    { word: "Bermudashort", article: "d'", plural: "d'Bermudashorten", gender: "f", definition: "Bermuda shorts" },
    { word: "Jupe", article: "d'", plural: "d'Jupen", gender: "f", definition: "skirt", audio: "audio/clothing/jupe1.mp3" },
    { word: "Kleed", article: "dat", plural: "d'Kleeder", gender: "n", definition: "dress / gown", audio: "audio/clothing/kleed1.mp3" },
    { word: "Rack", article: "de", plural: "d'Räck", gender: "m", definition: "dress / gown", audio: "audio/clothing/rack1.mp3" },
    { word: "Brautkleed", article: "de", plural: "d'Brautkleeder", gender: "m", definition: "wedding dress", audio: "audio/clothing/brautkleed1.mp3" },
    { word: "Designerkleed", article: "de", plural: "d'Designerkleeder", gender: "m", definition: "designer dress", audio: "audio/clothing/designerkleed1.mp3" },
    { word: "Salopett", article: "d'", plural: "d'Salopetten", gender: "f", definition: "overalls / dungarees" },
    { word: "Schipp", article: "de", plural: "d'Schippen", gender: "m", definition: "overalls / gown", audio: "audio/clothing/schipp1.mp3" },

    // --- Footwear ---
    { word: "Schong", article: "de", plural: "d'Schong", gender: "m", definition: "shoe", audio: "audio/clothing/schong1.mp3" },
    { word: "Stiwwel", article: "de", plural: "d'Stiwwelen", gender: "m", definition: "boot" },
    { word: "Sandal", article: "d'", plural: "d'Sandalen", gender: "f", definition: "sandal" },
    { word: "Schlapp", article: "d'", plural: "d'Schlappen", gender: "f", definition: "slipper" },
    { word: "Turnschlapp", article: "d'", plural: "d'Turnschlappen", gender: "f", definition: "sneaker / gym shoe" },
    { word: "Tallekeschong", article: "de", plural: "d'Tallekeschong", gender: "m", definition: "high heel shoe" },
    { word: "Strëmp", article: "d'", plural: "d'Strëmp", gender: "f", definition: "sock / stocking", audio: "audio/clothing/stremp1.mp3" },

    // --- Specialized Clothing ---
    { word: "Bikini", article: "de", plural: "d'Bikinis", gender: "m", definition: "bikini", audio: "audio/clothing/bikini1.mp3" },
    { word: "Maillot", article: "de", plural: "d'Mailloten", gender: "m", definition: "swimsuit" },
    { word: "Schwammbox", article: "d'", plural: "d'Schwammboxen", gender: "f", definition: "swim trunks" },
    { word: "Buedmantel", article: "de", plural: "d'Buedmäntel", gender: "m", definition: "bathrobe", audio: "audio/clothing/buedmantel1.m4a" },
    { word: "Nuetshiem", article: "dat", plural: "d'Nuetshiemer", gender: "n", definition: "nightgown", audio: "audio/clothing/nuetshiem1.m4a" },
    { word: "Pyjama", article: "de", plural: "d'Pyjamaen", gender: "m", definition: "pajamas", audio: "audio/clothing/pyjama1.m4a" },
    { word: "Jogging", article: "de", plural: "d'Joggings", gender: "m", definition: "tracksuit" },
    { word: "Cocktailskleed", article: "dat", plural: "d'Cocktailskleeder", gender: "n", definition: "cocktail dress" },

    // --- Accessories & Others ---
    { word: "Hutt", article: "den", plural: "d'Hitt", gender: "m", definition: "hat", audio: "audio/clothing/hutt1.mp3" },
    { word: "Sonnenhutt", article: "de", plural: "d'Sonnenhitt", gender: "m", definition: "sun hat", audio: "audio/clothing/sonnenhutt1.mp3" },
    { word: "Mutz", article: "d'", plural: "d'Mutzen", gender: "f", definition: "woollen hat", audio: "audio/clothing/mutz1.mp3" },
    { word: "Cap", article: "de", plural: "d'Caps", gender: "m", definition: "cap", audio: "audio/clothing/cap2.mp3" },
    { word: "Kap", article: "d'", plural: "d'Kappen", gender: "f", definition: "cap" },
    { word: "Brëll", article: "de", plural: "d'Brëller", gender: "m", definition: "glasses", audio: "audio/clothing/brell1.mp3" },
    { word: "Schutzbrëll", article: "de", plural: "d'Schutzbrëller", gender: "m", definition: "safety goggles", audio: "audio/clothing/schutzbrell1.mp3" },
    { word: "Hoer", article: "d'", plural: "d'Hoer", gender: "n", definition: "hair", audio: "audio/clothing/hoer1.mp3" },
    { word: "Hoerfaarf", article: "d'", plural: "d'Hoerfaarwen", gender: "f", definition: "hair colour", audio: "audio/clothing/hoerfaarf1.mp3" },
    { word: "Schal", article: "de", plural: "d'Schaler", gender: "m", definition: "scarf", audio: "audio/clothing/schal1.mp3" },
    { word: "Foulard", article: "de", plural: "d'Foularden", gender: "m", definition: "scarf / headscarf" },
    { word: "Krawatt", article: "d'", plural: "d'Krawatten", gender: "f", definition: "necktie" },
    { word: "Rimm", article: "de", plural: "d'Rimmer", gender: "m", definition: "belt" },
    { word: "Ënnerwäsch", article: "d'", plural: "-", gender: "f", definition: "underwear", audio: "audio/clothing/ennerwasch1.mp3" },
    { word: "Soutien", article: "de", plural: "d'Soutienen", gender: "m", definition: "bra", audio: "audio/clothing/soutien1.mp3" },
    { word: "Prabbeli", article: "de", plural: "d'Prabbelien", gender: "m", definition: "umbrella", audio: "audio/clothing/prabbeli1.mp3" },
    { word: "Auer", article: "d'", plural: "d'Aueren", gender: "f", definition: "watch", audio: "audio/clothing/auer1.mp3" },
    { word: "Händsch", article: "den", plural: "d'Händschen", gender: "m", definition: "glove", audio: "audio/clothing/handsch1.mp3" },
    { word: "Schoulsak", article: "de", plural: "d'Schoulsäck", gender: "m", definition: "backpack", audio: "audio/clothing/schoulsak1.mp3" },
    { word: "Posch", article: "d'", plural: "d'Poschen", gender: "f", definition: "handbag", audio: "audio/clothing/posch1.mp3" },
    { word: "Rank", article: "de", plural: "d'Réng", gender: "m", definition: "ring", audio: "audio/clothing/rank1.mp3" },
    { word: "Collier", article: "de", plural: "d'Collieren", gender: "m", definition: "necklace", audio: "audio/clothing/collier1.mp3" },
    { word: "Baart", article: "de", plural: "d'Bäert", gender: "m", definition: "beard", audio: "audio/clothing/baart1.mp3" },
    { word: "Bracelet", article: "de", plural: "d'Braceletten", gender: "m", definition: "bracelet", audio: "audio/clothing/bracelet1.mp3" },
    { word: "Duch", article: "den", plural: "d'Dicher", gender: "m", definition: "towel", audio: "audio/clothing/duch1.mp3" }
  ]
});
