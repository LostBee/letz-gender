/**
 * Topic: Restaurant & Kachen (Restaurants & Cooking)
 * 51 nouns related to dining out and cooking.
 */
window.LetzGender = window.LetzGender || { topics: [] };

window.LetzGender.topics.push({
  id: "restaurant",
  name: "Restaurant & Kachen",
  nameEn: "Restaurants & Cooking",
  icon: "🍳",
  words: [
    // --- Venues & People ---
    { word: "Restaurant", article: "de", plural: "d'Restauranten", gender: "m", definition: "restaurant" },
    { word: "Café", article: "de", plural: "d'Caféen", gender: "m", definition: "café" },
    { word: "Kantin", article: "d'", plural: "d'Kantinnen", gender: "f", definition: "canteen" },
    { word: "Kach", article: "de", plural: "d'Käch", gender: "m", definition: "chef / male cook" },
    { word: "Kächin", article: "d'", plural: "d'Kächinnen", gender: "f", definition: "chef / female cook" },
    { word: "Vendeuse", article: "d'", plural: "d'Vendeusen", gender: "f", definition: "saleswoman / server" },

    // --- Dining & Service ---
    { word: "Dësch", article: "den", plural: "d'Dëscher", gender: "m", definition: "table" },
    { word: "Menüskaart", article: "d'", plural: "d'Menüskaarten", gender: "f", definition: "menu card" },
    { word: "Menü", article: "de", plural: "d'Menüen", gender: "m", definition: "menu / set meal" },
    { word: "Entrée", article: "d'", plural: "d'Entréeën", gender: "f", definition: "starter / appetizer" },
    { word: "Haaptplat", article: "den", plural: "d'Haaptplaten", gender: "m", definition: "main course" },
    { word: "Dessert", article: "de", plural: "d'Desserten", gender: "m", definition: "dessert" },
    { word: "Aperitif", article: "den", plural: "d'Aperitifer", gender: "m", definition: "aperitif" },
    { word: "Rechnung", article: "d'", plural: "d'Rechnungen", gender: "f", definition: "bill / note" },
    { word: "Ticket", article: "den", plural: "d'Ticketen", gender: "m", definition: "receipt / ticket" },
    { word: "Code", article: "de", plural: "d'Coden", gender: "m", definition: "PIN / code" },

    // --- Dishes & Food Items ---
    { word: "Zopp", article: "d'", plural: "d'Zoppen", gender: "f", definition: "soup" },
    { word: "Bouneschlupp", article: "d'", plural: "d'Bouneschluppen", gender: "f", definition: "green bean soup" },
    { word: "Pizza", article: "d'", plural: "d'Pizzaen", gender: "f", definition: "pizza" },
    { word: "Sushi", article: "de", plural: "d'Sushien", gender: "m", definition: "sushi" },
    { word: "Hamburger", article: "den", plural: "d'Hamburgeren", gender: "m", definition: "hamburger" },
    { word: "Frit", article: "d'", plural: "d'Fritten", gender: "f", definition: "French fry" },
    { word: "Gromperegratin", article: "de", plural: "d'Gromperegratinen", gender: "m", definition: "potato gratin" },
    { word: "Gromperekichelchen", article: "de", plural: "d'Gromperekichelcher", gender: "m", definition: "potato pancake" },
    { word: "Paangech", article: "de", plural: "d'Paangecher", gender: "m", definition: "pancake" },
    { word: "Paschtéit", article: "d'", plural: "d'Paschtéiten", gender: "f", definition: "pastry / pâté" },
    { word: "Broschett", article: "d'", plural: "d'Broschetten", gender: "f", definition: "skewer / brochette" },
    { word: "Bifdeck", article: "de", plural: "d'Bifdecker", gender: "m", definition: "steak" },
    { word: "Foie gras", article: "de", plural: "d'Foie grasen", gender: "m", definition: "foie gras" },
    { word: "Scampi", article: "de", plural: "d'Scampien", gender: "m", definition: "scampi" },

    // --- Kitchen & Cooking ---
    { word: "Rezept", article: "d'", plural: "d'Rezepter", gender: "n", definition: "recipe" },
    { word: "Deeg", article: "den", plural: "d'Deeger", gender: "m", definition: "dough" },
    { word: "Kasseroll", article: "d'", plural: "d'Kasserollen", gender: "f", definition: "saucepan" },
    { word: "Pan", article: "d'", plural: "d'Pannen", gender: "f", definition: "frying pan" },
    { word: "Schäffchen", article: "d'", plural: "d'Schäffchen", gender: "n", definition: "small oven" },
    { word: "Mikrowell", article: "d'", plural: "d'Mikrowellen", gender: "f", definition: "microwave" },
    { word: "Läffel", article: "de", plural: "d'Läffelen", gender: "m", definition: "spoon" },
    { word: "Zooss", article: "d'", plural: "d'Zoossen", gender: "f", definition: "sauce" },
    { word: "Ketchup", article: "de", plural: "d'Ketchuppen", gender: "m", definition: "ketchup" },

    // --- Herbs, Veggies & Spices ---
    { word: "Kraut", article: "d'", plural: "d'Kraider", gender: "n", definition: "herb" },
    { word: "Péiterséileg", article: "de", plural: "-", gender: "m", definition: "parsley" },
    { word: "Bratzel", article: "d'", plural: "d'Bratzelen", gender: "f", definition: "chives" },
    { word: "Muskatnoss", article: "d'", plural: "d'Muskatnëss", gender: "f", definition: "nutmeg" },
    { word: "Zitroun", article: "d'", plural: "d'Zitrounen", gender: "f", definition: "lemon" },
    { word: "Spinat", article: "de", plural: "d'Spinater", gender: "m", definition: "spinach" },
    { word: "Porrett", article: "d'", plural: "d'Porretten", gender: "f", definition: "leek" },
    { word: "Ënn", article: "d'", plural: "d'Ënnen", gender: "f", definition: "onion" },

    // --- Drinks ---
    { word: "Schampes", article: "de", plural: "d'Schampessen", gender: "m", definition: "champagne" },
    { word: "Téi", article: "den", plural: "d'Téien", gender: "m", definition: "tea" },
    { word: "Kaffi", article: "de", plural: "d'Kaffien", gender: "m", definition: "coffee" },
    { word: "Campari-Orange", article: "de", plural: "d'Campari-Orangen", gender: "m", definition: "Campari-Orange" }
  ]
});
