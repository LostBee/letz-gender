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
    { word: "Wunneng", article: "d'", plural: "d'Wunnengen", gender: "f", definition: "housing / apartment" },
    { word: "Appartement", article: "dat", plural: "d'Appartementer", gender: "n", definition: "apartment" },
    { word: "Haus", article: "dat", plural: "d'Haiser", gender: "n", definition: "house" },
    { word: "Reienhaus", article: "dat", plural: "d'Reienhaiser", gender: "n", definition: "terraced house" },
    { word: "Studio", article: "de", plural: "d'Studioen", gender: "m", definition: "studio apartment" },
    { word: "Villa", article: "d'", plural: "d'Villaen", gender: "f", definition: "villa" },
    { word: "Wunngemeinschaft", article: "d'", plural: "d'Wunngemeinschaften", gender: "f", definition: "shared flat / living community" },
    { word: "Co-Locatioun", article: "d'", plural: "d'Co-Locatiounen", gender: "f", definition: "co-living / shared living" },
    { word: "Résidence", article: "d'", plural: "d'Résidencen", gender: "f", definition: "residence / apartment building" },

    // --- Rooms and Internal Areas ---
    { word: "Zëmmer", article: "dat", plural: "d'Zëmmer", gender: "n", definition: "room" },
    { word: "Kummer", article: "d'", plural: "d'Kummeren", gender: "f", definition: "room / small bedroom" },
    { word: "Schlofzëmmer", article: "dat", plural: "d'Schlofzëmmer", gender: "n", definition: "bedroom" },
    { word: "Schlofkummer", article: "d'", plural: "d'Schlofkummeren", gender: "f", definition: "bedroom" },
    { word: "Stuff", article: "d'", plural: "d'Stuffen", gender: "f", definition: "living room" },
    { word: "Salonszëmmer", article: "dat", plural: "d'Salonszëmmer", gender: "n", definition: "living room" },
    { word: "Kichen", article: "d'", plural: "d'Kichen", gender: "f", definition: "kitchen" },
    { word: "oppe Kichen", article: "eng", plural: "oppe Kichen", gender: "f", definition: "open kitchen" },
    { word: "Buedzëmmer", article: "dat", plural: "d'Buedzëmmer", gender: "n", definition: "bathroom" },
    { word: "Toilett", article: "d'", plural: "d'Toiletten", gender: "f", definition: "toilet" },
    { word: "separat Toilett", article: "eng", plural: "separat Toiletten", gender: "f", definition: "separate toilet" },
    { word: "Iesszëmmer", article: "dat", plural: "d'Iesszëmmer", gender: "n", definition: "dining room" },
    { word: "Büro", article: "de", plural: "d'Büroen", gender: "m", definition: "office / study" },
    { word: "Späicher", article: "de", plural: "d'Späicheren", gender: "m", definition: "attic" },
    { word: "Keller", article: "de", plural: "d'Kelleren", gender: "m", definition: "cellar / basement" },
    { word: "Gank", article: "de", plural: "d'Gäng", gender: "m", definition: "hallway / corridor" },
    { word: "Entrée", article: "d'", plural: "d'Entréeën", gender: "f", definition: "entrance" },
    { word: "Trapenhaus", article: "dat", plural: "d'Trapenhaiser", gender: "n", definition: "stairwell" },
    { word: "Rez-de-chaussée", article: "de", plural: "de Rez-de-chausséeën", gender: "m", definition: "ground floor" },
    { word: "Stack", article: "de", plural: "d'Stäck", gender: "m", definition: "floor / story" },

    // --- External Features ---
    { word: "Balcon", article: "de", plural: "d'Balconen", gender: "m", definition: "balcony" },
    { word: "Terrass", article: "d'", plural: "d'Terrassen", gender: "f", definition: "terrace" },
    { word: "Gaart", article: "de", plural: "d'Gäert", gender: "m", definition: "garden" },
    { word: "Garage", article: "d'", plural: "d'Garagen", gender: "f", definition: "garage" },
    { word: "Parkplaz", article: "d'", plural: "d'Parkplazen", gender: "f", definition: "parking space" },
    { word: "Parking", article: "de", plural: "d'Parkingen", gender: "m", definition: "parking" },
    { word: "Terrain", article: "den", plural: "d'Terrainen", gender: "m", definition: "plot of land" },
    { word: "Piscine", article: "d'", plural: "d'Piscineën", gender: "f", definition: "swimming pool" },

    // --- Furniture and Household Objects ---
    { word: "Miwwel", article: "den", plural: "d'Miwwelen", gender: "m", definition: "piece of furniture" },
    { word: "Bett", article: "dat", plural: "d'Betten", gender: "n", definition: "bed" },
    { word: "Këscht", article: "d'", plural: "d'Këschten", gender: "f", definition: "box / crate" },
    { word: "Schaf", article: "de", plural: "d'Schief", gender: "m", definition: "cupboard / wardrobe" },
    { word: "Kleederschaf", article: "de", plural: "d'Kleederschief", gender: "m", definition: "wardrobe" },
    { word: "Regal", article: "dat", plural: "d'Regaler", gender: "n", definition: "shelf" },
    { word: "Bicherregal", article: "dat", plural: "d'Bicherregaler", gender: "n", definition: "bookshelf" },
    { word: "Dësch", article: "den", plural: "d'Dëscher", gender: "m", definition: "table" },
    { word: "Iessdësch", article: "den", plural: "d'Iessdëscher", gender: "m", definition: "dining table" },
    { word: "Salonsdësch", article: "de", plural: "d'Salonsdëscher", gender: "m", definition: "coffee table" },
    { word: "Schreifdësch", article: "de", plural: "d'Schreifdëscher", gender: "m", definition: "desk" },
    { word: "Stull", article: "de", plural: "d'Still", gender: "m", definition: "chair" },
    { word: "Canapé", article: "de", plural: "d'Canapéeën", gender: "m", definition: "sofa / couch" },
    { word: "Couch", article: "d'", plural: "d'Couchen", gender: "f", definition: "couch" },
    { word: "Fotell", article: "d'", plural: "d'Fotellen", gender: "f", definition: "armchair" },
    { word: "Kommoud", article: "d'", plural: "d'Kommouden", gender: "f", definition: "chest of drawers" },
    { word: "Spigel", article: "de", plural: "d'Spigelen", gender: "m", definition: "mirror" },
    { word: "Teppech", article: "den", plural: "d'Teppecher", gender: "m", definition: "carpet / rug" },
    { word: "Tapis", article: "den", plural: "d'Tapisser", gender: "m", definition: "rug / carpet" },
    { word: "Luucht", article: "d'", plural: "d'Luuchten", gender: "f", definition: "lamp" },
    { word: "Steeluucht", article: "d'", plural: "d'Steeluuchten", gender: "f", definition: "floor lamp" },
    { word: "Bild", article: "dat", plural: "d'Biller", gender: "n", definition: "picture" },
    { word: "Poster", article: "de", plural: "d'Posteren", gender: "m", definition: "poster" },
    { word: "Plakat", article: "dat", plural: "d'Plakater", gender: "n", definition: "poster / placard" },

    // --- Appliances ---
    { word: "Wäschmaschinn", article: "d'", plural: "d'Wäschmaschinnen", gender: "f", definition: "washing machine" },
    { word: "Spullmaschinn", article: "d'", plural: "d'Spullmaschinnen", gender: "f", definition: "dishwasher" },
    { word: "Frigo", article: "de", plural: "d'Frigoen", gender: "m", definition: "refrigerator / fridge" },
    { word: "Kachmaschinn", article: "d'", plural: "d'Kachmaschinnen", gender: "f", definition: "stove / cooker" },
    { word: "Kachplack", article: "d'", plural: "d'Kachplacken", gender: "f", definition: "cooktop / hotplate" },
    { word: "Mikrowell", article: "d'", plural: "d'Mikrowellen", gender: "f", definition: "microwave" },
    { word: "Trockner", article: "den", plural: "d'Trockneren", gender: "m", definition: "clothes dryer" },
    { word: "Staubsauger", article: "de", plural: "d'Staubsaugeren", gender: "m", definition: "vacuum cleaner" },
    { word: "Tëlee", article: "d'", plural: "d'Tëleeën", gender: "f", definition: "television / TV" },
    { word: "Fernseh", article: "de", plural: "d'Fernsehen", gender: "m", definition: "television" },

    // --- Search & Legal Terms ---
    { word: "Loyer", article: "de", plural: "d'Loyeren", gender: "m", definition: "rent" },
    { word: "Charge", article: "d'", plural: "d'Chargen", gender: "f", definition: "utility cost / service charge" },
    { word: "Wunnengsannonce", article: "d'", plural: "d'Wunnengsannoncen", gender: "f", definition: "housing advertisement" },
    { word: "Loyer-Vertrag", article: "de", plural: "d'Loyer-Verträg", gender: "m", definition: "rental agreement / lease" },
    { word: "Proprietärin", article: "d'", plural: "d'Proprietärinnen", gender: "f", definition: "landlady / female owner" },
    { word: "Besëtzer", article: "de", plural: "d'Besëtzeren", gender: "m", definition: "landlord / owner" },
    { word: "Locataire", article: "de", plural: "d'Locataires", gender: "m", definition: "tenant" },
    { word: "Matbewunner", article: "den", plural: "d'Matbewunner", gender: "m", definition: "flatmate / roommate" },
    { word: "Noper", article: "den", plural: "d'Noperen", gender: "m", definition: "neighbor" },
    { word: "Hausdéier", article: "dat", plural: "d'Hausdéieren", gender: "n", definition: "pet" },
    { word: "Hausuerdnung", article: "d'", plural: "d'Hausuerdnungen", gender: "f", definition: "house rules" },
    { word: "Reglement", article: "dat", plural: "d'Reglementer", gender: "n", definition: "regulation / rule" }
  ]
});
