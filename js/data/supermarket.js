/**
 * Topic: Supermarché (Supermarket)
 * 87 nouns representing items, departments, and concepts in a supermarket.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "supermarket",
  name: "Supermarché",
  nameEn: "Supermarket",
  icon: "🛒",
  words: [
    // --- Shop & People ---
    { word: "Supermarché", article: "de", plural: "d'Supermarchéën", gender: "m", definition: "supermarket" },
    { word: "Buttek", article: "de", plural: "d'Butteker", gender: "m", definition: "shop / store" },
    { word: "Rayon", article: "de", plural: "d'Rayonen", gender: "m", definition: "department / aisle" },
    { word: "Keess", article: "d'", plural: "d'Keessen", gender: "f", definition: "checkout / cash desk" },
    { word: "Caissier", article: "de", plural: "d'Caissieren", gender: "m", definition: "cashier" },
    { word: "Client", article: "de", plural: "d'Clienten", gender: "m", definition: "customer" },
    { word: "Kommissoun", article: "d'", plural: "d'Kommissounen", gender: "f", definition: "errand / shopping trip" },
    { word: "Akafslëscht", article: "d'", plural: "d'Akafslëschten", gender: "f", definition: "shopping list" },

    // --- Dairy & Alternatives ---
    { word: "Kéis", article: "de", plural: "d'Kéiser", gender: "m", definition: "cheese" },
    { word: "Ram", article: "d'", plural: "d'Ramen", gender: "f", definition: "cream" },
    { word: "Mëllech", article: "d'", plural: "d'Mëllechen", gender: "f", definition: "milk" },
    { word: "Botter", article: "de", plural: "d'Botteren", gender: "m", definition: "butter" },
    { word: "Jughurt", article: "de", plural: "d'Jughurten", gender: "m", definition: "yogurt" },
    { word: "Ee", article: "d'", plural: "d'Eeër", gender: "n", definition: "egg" },

    // --- Meat & Fish ---
    { word: "Fleesch", article: "d'", plural: "-", gender: "n", definition: "meat" },
    { word: "Rëndfleesch", article: "d'", plural: "-", gender: "n", definition: "beef" },
    { word: "Poulet", article: "de", plural: "d'Pouleten", gender: "m", definition: "chicken" },
    { word: "Ham", article: "d'", plural: "d'Hammen", gender: "f", definition: "ham" },
    { word: "Zoossiss", article: "d'", plural: "d'Zoossissen", gender: "f", definition: "sausage" },
    { word: "Wirschtchen", article: "d'", plural: "d'Wirschtercher", gender: "n", definition: "sausage / wiener" },
    { word: "Fësch", article: "de", plural: "d'Fësch", gender: "m", definition: "fish" },
    { word: "Saumon", article: "de", plural: "d'Saumonen", gender: "m", definition: "salmon" },
    { word: "Frell", article: "d'", plural: "d'Frellen", gender: "f", definition: "trout" },
    { word: "Tëntefësch", article: "den", plural: "d'Tëntefësch", gender: "m", definition: "squid / octopus" },
    { word: "Crevette", article: "d'", plural: "d'Crevetten", gender: "f", definition: "shrimp / prawn" },
    { word: "Mul", article: "d'", plural: "d'Mullen", gender: "f", definition: "mussel" },

    // --- Produce (Fruit & Vegetables) ---
    { word: "Uebst", article: "d'", plural: "-", gender: "n", definition: "fruit" },
    { word: "Geméis", article: "d'", plural: "-", gender: "n", definition: "vegetables" },
    { word: "Gromper", article: "d'", plural: "d'Gromperen", gender: "f", definition: "potato" },
    { word: "Tomat", article: "d'", plural: "d'Tomaten", gender: "f", definition: "tomato" },
    { word: "Banann", article: "d'", plural: "d'Banannen", gender: "f", definition: "banana" },
    { word: "Meloun", article: "d'", plural: "d'Melounen", gender: "f", definition: "melon" },
    { word: "Kiwi", article: "de", plural: "d'Kiwien", gender: "m", definition: "kiwi" },
    { word: "Apel", article: "den", plural: "d'Äppel", gender: "m", definition: "apple" },
    { word: "Orange", article: "d'", plural: "d'Orangen", gender: "f", definition: "orange" },
    { word: "Zalot", article: "d'", plural: "d'Zaloten", gender: "f", definition: "salad / lettuce" },
    { word: "Quetsch", article: "d'", plural: "d'Quetschen", gender: "f", definition: "plum" },
    { word: "Bir", article: "d'", plural: "d'Biren", gender: "f", definition: "pear" },
    { word: "Kiischt", article: "d'", plural: "d'Kiischten", gender: "f", definition: "cherry" },
    { word: "Muert", article: "d'", plural: "d'Muerten", gender: "f", definition: "carrot" },
    { word: "Boun", article: "d'", plural: "d'Bounen", gender: "f", definition: "bean" },
    { word: "Spargel", article: "d'", plural: "d'Spargelen", gender: "f", definition: "asparagus" },
    { word: "Ënn", article: "d'", plural: "d'Ënnen", gender: "f", definition: "onion" },
    { word: "Äerdbeer", article: "dat", plural: "d'Äerdbeeren", gender: "n", definition: "strawberry" },
    { word: "Noss", article: "d'", plural: "d'Nëss", gender: "f", definition: "nut" },

    // --- Bakery & Pantry ---
    { word: "Brout", article: "d'", plural: "d'Brouter", gender: "n", definition: "bread" },
    { word: "Bréitchen", article: "d'", plural: "d'Bréidercher", gender: "n", definition: "bread roll" },
    { word: "Taart", article: "d'", plural: "d'Taarten", gender: "f", definition: "tart / pie" },
    { word: "Kuch", article: "de", plural: "d'Kuchen", gender: "m", definition: "cake" },
    { word: "Baguette", article: "d'", plural: "d'Baguetten", gender: "f", definition: "baguette" },
    { word: "Kärebrout", article: "d'", plural: "d'Kärebrouter", gender: "n", definition: "grain bread" },
    { word: "Baurebrout", article: "d'", plural: "d'Baurebrouter", gender: "n", definition: "farmer's bread" },
    { word: "Pariserbrout", article: "d'", plural: "d'Pariserbrouter", gender: "n", definition: "French bread" },
    { word: "wäisst Brout", article: "d'", plural: "d'wäiss Brouter", gender: "n", definition: "white bread" },
    { word: "Mëtsch", article: "d'", plural: "d'Mëtschen", gender: "f", definition: "pastry / sweet roll" },
    { word: "Croissant", article: "de", plural: "d'Croissanten", gender: "m", definition: "croissant" },
    { word: "Schneck", article: "d'", plural: "d'Schnecken", gender: "f", definition: "pastry scroll" },
    { word: "Streisel", article: "de", plural: "d'Streiselen", gender: "m", definition: "crumb pastry / streusel" },
    { word: "Aachtchen", article: "d'", plural: "d'Aachtchen", gender: "f", definition: "figure-of-eight pastry" },
    { word: "Schockelasrull", article: "d'", plural: "d'Schockelasrullen", gender: "f", definition: "chocolate roll" },
    { word: "Bretzel", article: "d'", plural: "d'Bretzelen", gender: "f", definition: "pretzel" },
    { word: "Quetschentaart", article: "d'", plural: "d'Quetschentaarten", gender: "f", definition: "plum tart" },
    { word: "Marmerkuch", article: "de", plural: "d'Marmerkuchen", gender: "m", definition: "marble cake" },
    { word: "Kéistaart", article: "d'", plural: "d'Kéistaarten", gender: "f", definition: "cheesecake" },
    { word: "Räis", article: "de", plural: "d'Räis", gender: "m", definition: "rice" },
    { word: "Nuddel", article: "d'", plural: "d'Nuddelen", gender: "f", definition: "pasta / noodle" },
    { word: "Miel", article: "d'", plural: "d'Mieler", gender: "n", definition: "flour" },
    { word: "Hunneg", article: "den", plural: "d'Hunnegen", gender: "m", definition: "honey" },
    { word: "Gebeess", article: "d'", plural: "d'Gebeesser", gender: "n", definition: "jam" },
    { word: "Ueleg", article: "den", plural: "d'Ueleger", gender: "m", definition: "oil" },
    { word: "Salz", article: "d'", plural: "d'Salzer", gender: "n", definition: "salt" },
    { word: "Peffer", article: "de", plural: "d'Pefferen", gender: "m", definition: "pepper" },
    { word: "Zocker", article: "den", plural: "d'Zocker", gender: "m", definition: "sugar" },
    { word: "Kamell", article: "d'", plural: "d'Kamellen", gender: "f", definition: "candy / sweet" },

    // --- Drinks ---
    { word: "Waasser", article: "d'", plural: "-", gender: "n", definition: "water" },
    { word: "Spruddelwaasser", article: "d'", plural: "-", gender: "n", definition: "sparkling water" },
    { word: "Jus", article: "de", plural: "d'Jusen", gender: "m", definition: "juice" },
    { word: "Limonad", article: "d'", plural: "d'Limonaden", gender: "f", definition: "lemonade" },
    { word: "Béier", article: "de", plural: "d'Béier", gender: "m", definition: "beer" },
    { word: "Wäin", article: "de", plural: "d'Wäiner", gender: "m", definition: "wine" },

    // --- Packaging ---
    { word: "Béchs", article: "d'", plural: "d'Béchsen", gender: "f", definition: "tin / can" },
    { word: "Fläsch", article: "d'", plural: "d'Fläschen", gender: "f", definition: "bottle" },
    { word: "Pak", article: "de", plural: "d'Päck", gender: "m", definition: "pack / package" },
    { word: "Glas", article: "d'", plural: "d'Glieser", gender: "n", definition: "glass / jar" },
    { word: "Dëppchen", article: "d'", plural: "d'Dëppcher", gender: "n", definition: "small tub / pot" },
    { word: "Tüb", article: "den", plural: "d'Tüben", gender: "m", definition: "tube" },
    { word: "Tut", article: "d'", plural: "d'Tuten", gender: "f", definition: "bag" }
  ]
});
