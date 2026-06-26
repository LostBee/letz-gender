/**
 * Topic: Wunneng (Housing)
 * 78 nouns related to housing, rooms, furniture, appliances, and renting.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "housing",
  name: "Wunneng",
  nameEn: "Housing",
  icon: "🏠",
  words: [
    // --- Types of Housing ---
    { word: "Wunneng", article: "d'", plural: "d'Wunnengen", gender: "f", definition: "housing / apartment" , audio: "audio/housing/wunneng1.m4a"},
    { word: "Appartement", article: "dat", plural: "d'Appartementer", gender: "n", definition: "apartment" , audio: "audio/housing/appartement1.m4a"},
    { word: "Haus", article: "dat", plural: "d'Haiser", gender: "n", definition: "house" , audio: "audio/housing/haus1.m4a"},
    { word: "Reienhaus", article: "dat", plural: "d'Reienhaiser", gender: "n", definition: "terraced house" , audio: "audio/housing/reienhaus1.m4a"},
    { word: "Studio", article: "de", plural: "d'Studioen", gender: "m", definition: "studio apartment" , audio: "audio/housing/studio1.m4a"},
    { word: "Villa", article: "d'", plural: "d'Villaen", gender: "f", definition: "villa" , audio: "audio/housing/villa1.m4a"},
    { word: "Wunngemeinschaft", article: "d'", plural: "d'Wunngemeinschaften", gender: "f", definition: "shared flat / living community" , audio: "audio/housing/wunngemeinschaft1.m4a"},
    { word: "Co-Locatioun", article: "d'", plural: "d'Co-Locatiounen", gender: "f", definition: "co-living / shared living" },
    { word: "Résidence", article: "d'", plural: "d'Résidencen", gender: "f", definition: "residence / apartment building" , audio: "audio/housing/residence1.m4a"},

    // --- Rooms and Internal Areas ---
    { word: "Zëmmer", article: "dat", plural: "d'Zëmmer", gender: "n", definition: "room" , audio: "audio/housing/zemmer1.m4a"},
    { word: "Kummer", article: "d'", plural: "d'Kummeren", gender: "f", definition: "room / small bedroom" , audio: "audio/housing/kummer1.m4a"},
    { word: "Schlofzëmmer", article: "dat", plural: "d'Schlofzëmmer", gender: "n", definition: "bedroom" , audio: "audio/housing/schlofzemmer1.m4a"},
    { word: "Schlofkummer", article: "d'", plural: "d'Schlofkummeren", gender: "f", definition: "bedroom" , audio: "audio/housing/schlofkummer1.m4a"},
    { word: "Stuff", article: "d'", plural: "d'Stuffen", gender: "f", definition: "living room" , audio: "audio/housing/stuff1.m4a"},
    { word: "Salonszëmmer", article: "dat", plural: "d'Salonszëmmer", gender: "n", definition: "living room" },
    { word: "Kichen", article: "d'", plural: "d'Kichen", gender: "f", definition: "kitchen" , audio: "audio/housing/kichen1.m4a"},
    { word: "oppe Kichen", article: "eng", plural: "oppe Kichen", gender: "f", definition: "open kitchen" },
    { word: "Buedzëmmer", article: "dat", plural: "d'Buedzëmmer", gender: "n", definition: "bathroom" , audio: "audio/housing/buedzemmer1.m4a"},
    { word: "Toilett", article: "d'", plural: "d'Toiletten", gender: "f", definition: "toilet" },
    { word: "separat Toilett", article: "eng", plural: "separat Toiletten", gender: "f", definition: "separate toilet" },
    { word: "Iesszëmmer", article: "dat", plural: "d'Iesszëmmer", gender: "n", definition: "dining room" , audio: "audio/housing/iesszemmer1.m4a"},
    { word: "Büro", article: "de", plural: "d'Büroen", gender: "m", definition: "office / study" , audio: "audio/housing/buro1.m4a"},
    { word: "Späicher", article: "de", plural: "d'Späicheren", gender: "m", definition: "attic" , audio: "audio/housing/spaicher1.m4a"},
    { word: "Keller", article: "de", plural: "d'Kelleren", gender: "m", definition: "cellar / basement" , audio: "audio/housing/keller1.m4a"},
    { word: "Gank", article: "de", plural: "d'Gäng", gender: "m", definition: "hallway / corridor" , audio: "audio/housing/gank1.m4a"},
    { word: "Entrée", article: "d'", plural: "d'Entréeën", gender: "f", definition: "entrance" , audio: "audio/housing/entree1.m4a"},
    { word: "Trapenhaus", article: "dat", plural: "d'Trapenhaiser", gender: "n", definition: "stairwell" , audio: "audio/housing/trapenhaus1.m4a"},
    { word: "Rez-de-chaussée", article: "de", plural: "de Rez-de-chausséeën", gender: "m", definition: "ground floor" },
    { word: "Stack", article: "de", plural: "d'Stäck", gender: "m", definition: "floor / story" , audio: "audio/housing/stack1.m4a"},

    // --- External Features ---
    { word: "Balcon", article: "de", plural: "d'Balconen", gender: "m", definition: "balcony" , audio: "audio/housing/balcon1.m4a"},
    { word: "Terrass", article: "d'", plural: "d'Terrassen", gender: "f", definition: "terrace" , audio: "audio/housing/terrass1.m4a"},
    { word: "Gaart", article: "de", plural: "d'Gäert", gender: "m", definition: "garden" , audio: "audio/housing/gaart1.m4a"},
    { word: "Garage", article: "d'", plural: "d'Garagen", gender: "f", definition: "garage" , audio: "audio/housing/garage1.m4a"},
    { word: "Parkplaz", article: "d'", plural: "d'Parkplazen", gender: "f", definition: "parking space" , audio: "audio/housing/parkplaz1.m4a"},
    { word: "Parking", article: "de", plural: "d'Parkingen", gender: "m", definition: "parking" , audio: "audio/housing/parking1.m4a"},
    { word: "Terrain", article: "den", plural: "d'Terrainen", gender: "m", definition: "plot of land" , audio: "audio/housing/terrain1.m4a"},
    { word: "Piscine", article: "d'", plural: "d'Piscineën", gender: "f", definition: "swimming pool" , audio: "audio/housing/piscine1.m4a"},

    // --- Furniture and Household Objects ---
    { word: "Miwwel", article: "den", plural: "d'Miwwelen", gender: "m", definition: "piece of furniture" , audio: "audio/housing/miwwel1.m4a"},
    { word: "Bett", article: "dat", plural: "d'Betten", gender: "n", definition: "bed" , audio: "audio/housing/bett1.m4a"},
    { word: "Këscht", article: "d'", plural: "d'Këschten", gender: "f", definition: "box / crate" , audio: "audio/housing/kescht1.m4a"},
    { word: "Schaf", article: "de", plural: "d'Schief", gender: "m", definition: "cupboard / wardrobe" , audio: "audio/housing/schaf1.m4a"},
    { word: "Kleederschaf", article: "de", plural: "d'Kleederschief", gender: "m", definition: "wardrobe" , audio: "audio/housing/kleederschaf1.m4a"},
    { word: "Regal", article: "dat", plural: "d'Regaler", gender: "n", definition: "shelf" , audio: "audio/housing/regal1.m4a"},
    { word: "Bicherregal", article: "dat", plural: "d'Bicherregaler", gender: "n", definition: "bookshelf" , audio: "audio/housing/bicherregal1.m4a"},
    { word: "Dësch", article: "den", plural: "d'Dëscher", gender: "m", definition: "table" , audio: "audio/housing/desch1.m4a"},
    { word: "Iessdësch", article: "den", plural: "d'Iessdëscher", gender: "m", definition: "dining table" , audio: "audio/housing/iessdesch1.m4a"},
    { word: "Salonsdësch", article: "de", plural: "d'Salonsdëscher", gender: "m", definition: "coffee table" , audio: "audio/housing/salonsdesch1.m4a"},
    { word: "Schreifdësch", article: "de", plural: "d'Schreifdëscher", gender: "m", definition: "desk" , audio: "audio/housing/schreifdesch1.m4a"},
    { word: "Stull", article: "de", plural: "d'Still", gender: "m", definition: "chair" , audio: "audio/housing/stull1.m4a"},
    { word: "Canapé", article: "de", plural: "d'Canapéeën", gender: "m", definition: "sofa / couch" , audio: "audio/housing/canape1.m4a"},
    { word: "Couch", article: "d'", plural: "d'Couchen", gender: "f", definition: "couch" },
    { word: "Fotell", article: "d'", plural: "d'Fotellen", gender: "f", definition: "armchair" , audio: "audio/housing/fotell1.m4a"},
    { word: "Kommoud", article: "d'", plural: "d'Kommouden", gender: "f", definition: "chest of drawers" },
    { word: "Spigel", article: "de", plural: "d'Spigelen", gender: "m", definition: "mirror" , audio: "audio/housing/spigel1.m4a"},
    { word: "Teppech", article: "den", plural: "d'Teppecher", gender: "m", definition: "carpet / rug" , audio: "audio/housing/teppech1.m4a"},
    { word: "Tapis", article: "den", plural: "d'Tapisser", gender: "m", definition: "rug / carpet" , audio: "audio/housing/tapis1.m4a"},
    { word: "Luucht", article: "d'", plural: "d'Luuchten", gender: "f", definition: "lamp" , audio: "audio/housing/luucht1.m4a"},
    { word: "Steeluucht", article: "d'", plural: "d'Steeluuchten", gender: "f", definition: "floor lamp" , audio: "audio/housing/steeluucht1.m4a"},
    { word: "Bild", article: "dat", plural: "d'Biller", gender: "n", definition: "picture" , audio: "audio/housing/bild1.m4a"},
    { word: "Poster", article: "de", plural: "d'Posteren", gender: "m", definition: "poster" , audio: "audio/housing/poster1.m4a"},
    { word: "Plakat", article: "dat", plural: "d'Plakater", gender: "n", definition: "poster / placard" , audio: "audio/housing/plakat1.m4a"},

    // --- Appliances ---
    { word: "Wäschmaschinn", article: "d'", plural: "d'Wäschmaschinnen", gender: "f", definition: "washing machine" , audio: "audio/housing/waschmaschinn1.m4a"},
    { word: "Spullmaschinn", article: "d'", plural: "d'Spullmaschinnen", gender: "f", definition: "dishwasher" , audio: "audio/housing/spullmaschinn1.m4a"},
    { word: "Frigo", article: "de", plural: "d'Frigoen", gender: "m", definition: "refrigerator / fridge" , audio: "audio/housing/frigo1.m4a"},
    { word: "Kachmaschinn", article: "d'", plural: "d'Kachmaschinnen", gender: "f", definition: "stove / cooker" , audio: "audio/housing/kachmaschinn1.m4a"},
    { word: "Kachplack", article: "d'", plural: "d'Kachplacken", gender: "f", definition: "cooktop / hotplate" , audio: "audio/housing/kachplack1.m4a"},
    { word: "Mikrowell", article: "d'", plural: "d'Mikrowellen", gender: "f", definition: "microwave" , audio: "audio/housing/mikrowell1.m4a"},
    { word: "Trockner", article: "den", plural: "d'Trockneren", gender: "m", definition: "clothes dryer" , audio: "audio/housing/trockner1.m4a"},
    { word: "Staubsauger", article: "de", plural: "d'Staubsaugeren", gender: "m", definition: "vacuum cleaner" , audio: "audio/housing/staubsauger1.m4a"},
    { word: "Tëlee", article: "d'", plural: "d'Tëleeën", gender: "f", definition: "television / TV" , audio: "audio/housing/telee1.m4a"},
    { word: "Fernseh", article: "de", plural: "d'Fernsehen", gender: "m", definition: "television" , audio: "audio/housing/fernseh1.m4a"},

    // --- Search & Legal Terms ---
    { word: "Loyer", article: "de", plural: "d'Loyeren", gender: "m", definition: "rent" , audio: "audio/housing/loyer1.m4a"},
    { word: "Charge", article: "d'", plural: "d'Chargen", gender: "f", definition: "utility cost / service charge" , audio: "audio/housing/charge1.m4a"},
    { word: "Wunnengsannonce", article: "d'", plural: "d'Wunnengsannoncen", gender: "f", definition: "housing advertisement" },
    { word: "Loyer-Vertrag", article: "de", plural: "d'Loyer-Verträg", gender: "m", definition: "rental agreement / lease" },
    { word: "Proprietärin", article: "d'", plural: "d'Proprietärinnen", gender: "f", definition: "landlady / female owner" , audio: "audio/housing/proprietarin1.m4a"},
    { word: "Besëtzer", article: "de", plural: "d'Besëtzeren", gender: "m", definition: "landlord / owner" , audio: "audio/housing/besetzer1.m4a"},
    { word: "Locataire", article: "de", plural: "d'Locataires", gender: "m", definition: "tenant" , audio: "audio/housing/locataire1.m4a"},
    { word: "Matbewunner", article: "den", plural: "d'Matbewunner", gender: "m", definition: "flatmate / roommate" , audio: "audio/housing/matbewunner1.m4a"},
    { word: "Noper", article: "den", plural: "d'Noperen", gender: "m", definition: "neighbor" , audio: "audio/housing/noper1.m4a"},
    { word: "Hausdéier", article: "dat", plural: "d'Hausdéieren", gender: "n", definition: "pet" , audio: "audio/housing/hausdeier1.m4a"},
    { word: "Hausuerdnung", article: "d'", plural: "d'Hausuerdnungen", gender: "f", definition: "house rules" , audio: "audio/housing/hausuerdnung1.m4a"},
    { word: "Reglement", article: "dat", plural: "d'Reglementer", gender: "n", definition: "regulation / rule" , audio: "audio/housing/reglement1.m4a"}
  ]
});
