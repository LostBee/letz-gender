/**
 * 100 wichteg Verben — A1 Schwatzt Dir Lëtzebuergesch
 *
 * ~96 verbs extracted from the book's verb table.
 * A few blurry entries are noted at the bottom for manual addition.
 * Conjugation: present tense (6 forms) + past participle + auxiliary.
 */
window.LetzGender = window.LetzGender || { topics: [], verbs: [], adjectives: [], otherWords: [] };
window.LetzGender.verbs = window.LetzGender.verbs || [];

window.LetzGender.verbs.push(
  // ── A ──────────────────────────────────────────────
  {
    word: "akafen", definition: "to go shopping",
    type: "verb", themes: ["supermarket", "clothing"],
    conjugation: {
      present: { ech: "kafen an", du: "keefs an", "hien/hatt/et": "keeft an", mir: "kafen an", dir: "kaaft an", si: "kafen an" },
      pastParticiple: "akaaft", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech kafen am Supermarché an.", audio: "audio/verbs/akafen1.m4a"
  },
  {
    word: "äntweren", definition: "to answer",
    type: "verb", themes: ["homework"],
    conjugation: {
      present: { ech: "äntweren", du: "äntwers", "hien/hatt/et": "äntwert", mir: "äntweren", dir: "äntwert", si: "äntweren" },
      pastParticiple: "geäntwert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Äntwer op d'Fro!", audio: "audio/verbs/antweren1.m4a"
  },
  {
    word: "ausmaachen", definition: "to turn off / to switch off",
    type: "verb", themes: ["housing"],
    conjugation: {
      present: { ech: "maachen aus", du: "méchs aus", "hien/hatt/et": "mécht aus", mir: "maachen aus", dir: "maacht aus", si: "maachen aus" },
      pastParticiple: "ausgemaach", auxiliary: "hunn"
    },
    mnemonic: "", example: "Maach d'Luucht aus!", audio: "audio/verbs/ausmaachen1.m4a"
  },

  // ── B ──────────────────────────────────────────────
  {
    word: "besichen", definition: "to visit",
    type: "verb", themes: ["tourism"],
    conjugation: {
      present: { ech: "besichen", du: "besichs", "hien/hatt/et": "besicht", mir: "besichen", dir: "besicht", si: "besichen" },
      pastParticiple: "besicht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir besichen d'Stad.", audio: "audio/verbs/besichen1.m4a"
  },
  {
    word: "bestellen", definition: "to order",
    type: "verb", themes: ["restaurant"],
    conjugation: {
      present: { ech: "bestellen", du: "bestells", "hien/hatt/et": "bestellt", mir: "bestellen", dir: "bestellt", si: "bestellen" },
      pastParticiple: "bestalt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech bestellen e Kaffi.", audio: "audio/verbs/bestellen1.m4a"
  },
  {
    word: "bezuelen", definition: "to pay",
    type: "verb", themes: ["restaurant", "supermarket"],
    conjugation: {
      present: { ech: "bezuelen", du: "bezils", "hien/hatt/et": "bezilt", mir: "bezuelen", dir: "bezuelt", si: "bezuelen" },
      pastParticiple: "bezuelt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech bezuelen mat der Kaart.", audio: "audio/verbs/bezuelen1.m4a"
  },
  {
    word: "bleiwen", definition: "to stay / to remain",
    type: "verb", themes: ["housing", "tourism"],
    conjugation: {
      present: { ech: "bleiwen", du: "bleifs", "hien/hatt/et": "bleift", mir: "bleiwen", dir: "bleift", si: "bleiwen" },
      pastParticiple: "bliwwen", auxiliary: "sinn"
    },
    mnemonic: "", example: "Ech bleiwen doheem.", audio: "audio/verbs/bleiwen1.m4a"
  },
  {
    word: "botzen", definition: "to clean",
    type: "verb", themes: ["housing"],
    conjugation: {
      present: { ech: "botzen", du: "botz", "hien/hatt/et": "botzt", mir: "botzen", dir: "botzt", si: "botzen" },
      pastParticiple: "gebotzt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech botzen d'Kichen.", audio: "audio/verbs/botzen1.m4a"
  },
  {
    word: "brauchen", definition: "to need",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "brauch", du: "brauchs", "hien/hatt/et": "braucht", mir: "brauchen", dir: "braucht", si: "brauchen" },
      pastParticiple: "gebraucht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech brauch Hëllef.", audio: "audio/verbs/brauchen1.m4a"
  },
  {
    word: "bréngen", definition: "to bring",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "bréngen", du: "bréngs", "hien/hatt/et": "bréngt", mir: "bréngen", dir: "bréngt", si: "bréngen" },
      pastParticiple: "bruecht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Bréngs du d'Iessen mat?", audio: "audio/verbs/brengen1.m4a"
  },
  {
    word: "buchtstavéieren", definition: "to spell (a word)",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "buchtstavéieren", du: "buchtstavéiers", "hien/hatt/et": "buchtstavéiert", mir: "buchtstavéieren", dir: "buchtstavéiert", si: "buchtstavéieren" },
      pastParticiple: "buchtstavéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Kanns du dat buchtstavéieren?", audio: ""
  },

  // ── D ──────────────────────────────────────────────
  {
    word: "danzen", definition: "to dance",
    type: "verb", themes: ["sport"],
    conjugation: {
      present: { ech: "danzen", du: "danz", "hien/hatt/et": "danzt", mir: "danzen", dir: "danzt", si: "danzen" },
      pastParticiple: "gedanzt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir danzen op der Feier.", audio: "audio/verbs/danzen1.m4a"
  },
  {
    word: "decidéieren", definition: "to decide",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "decidéieren", du: "decidéiers", "hien/hatt/et": "decidéiert", mir: "decidéieren", dir: "decidéiert", si: "decidéieren" },
      pastParticiple: "decidéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir decidéieren muer.", audio: "audio/verbs/decideieren1.m4a"
  },
  {
    word: "dierfen", definition: "may / to be allowed to",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "dierf", du: "dierfs", "hien/hatt/et": "dierf", mir: "dierfen", dir: "dierft", si: "dierfen" },
      pastParticiple: "gedierft", auxiliary: "hunn"
    },
    mnemonic: "", example: "Dierf ech eraus?", audio: "audio/verbs/dierfen1.m4a"
  },
  {
    word: "dierzen", definition: "to address formally (use 'Dir')",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "dierzen", du: "dierz", "hien/hatt/et": "dierzt", mir: "dierzen", dir: "dierzt", si: "dierzen" },
      pastParticiple: "gedierzt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir dierzen eis op der Aarbecht.", audio: "audio/verbs/dierzen1.m4a"
  },
  {
    word: "drénken", definition: "to drink",
    type: "verb", themes: ["restaurant", "supermarket"],
    conjugation: {
      present: { ech: "drénken", du: "drénks", "hien/hatt/et": "drénkt", mir: "drénken", dir: "drénkt", si: "drénken" },
      pastParticiple: "gedronk", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech drénken e Kaffi.", audio: "audio/verbs/drenken1.m4a"
  },
  {
    word: "(sech) duschen", definition: "to take a shower",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "duschen (mech)", du: "duschs (dech)", "hien/hatt/et": "duscht (sech)", mir: "duschen (eis)", dir: "duscht (iech)", si: "duschen (sech)" },
      pastParticiple: "geduscht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech duschen mech moies.", audio: "audio/verbs/duschen1.m4a"
  },
  {
    word: "duzen", definition: "to address informally (use 'du')",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "duzen", du: "duz", "hien/hatt/et": "duzt", mir: "duzen", dir: "duzt", si: "duzen" },
      pastParticiple: "geduzt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir duzen eis.", audio: "audio/verbs/duzen1.m4a"
  },

  // ── Ë/E ────────────────────────────────────────────
  {
    word: "ënnerschreiwen", definition: "to sign",
    type: "verb", themes: ["housing"],
    conjugation: {
      present: { ech: "ënnerschreiwen", du: "ënnerschreifs", "hien/hatt/et": "ënnerschreift", mir: "ënnerschreiwen", dir: "ënnerschreift", si: "ënnerschreiwen" },
      pastParticiple: "ënnerschriwwen", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ënnerschreift de Kontrakt.", audio: "audio/verbs/ennerschreiwen1.m4a"
  },
  {
    word: "(sech) entschëllegen", definition: "to apologize / to excuse oneself",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "entschëllegen (mech)", du: "entschëllegs (dech)", "hien/hatt/et": "entschëllegt (sech)", mir: "entschëllegen (eis)", dir: "entschëllegt (iech)", si: "entschëllegen (sech)" },
      pastParticiple: "entschëllegt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech entschëllegen mech!", audio: "audio/verbs/entschellegen1.m4a"
  },
  {
    word: "erwächen", definition: "to wake up",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "erwächen", du: "erwachs", "hien/hatt/et": "erwacht", mir: "erwächen", dir: "erwacht", si: "erwächen" },
      pastParticiple: "erwacht", auxiliary: "sinn"
    },
    mnemonic: "", example: "Ech erwächen um 7 Auer.", audio: "audio/verbs/erwachen1.m4a"
  },

  // ── F ──────────────────────────────────────────────
  {
    word: "fannen", definition: "to find",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "fannen", du: "fënns", "hien/hatt/et": "fënnt", mir: "fannen", dir: "fannt", si: "fannen" },
      pastParticiple: "fonnt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech fannen meng Schlësselen net.", audio: "audio/verbs/fannen1.m4a"
  },
  {
    word: "fléien", definition: "to fly",
    type: "verb", themes: ["tourism"],
    conjugation: {
      present: { ech: "fléien", du: "fléis", "hien/hatt/et": "fléit", mir: "fléien", dir: "fléit", si: "fléien" },
      pastParticiple: "geflunn", auxiliary: "sinn"
    },
    mnemonic: "", example: "Mir fléien an d'Vakanz.", audio: "audio/verbs/fleien1.m4a"
  },
  {
    word: "fortfueren", definition: "to continue",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "fueren fort", du: "fiers fort", "hien/hatt/et": "fiert fort", mir: "fueren fort", dir: "fuert fort", si: "fueren fort" },
      pastParticiple: "fortgefuer", auxiliary: "sinn"
    },
    mnemonic: "", example: "Fuert fort mat der Aarbecht!", audio: "audio/verbs/fortfueren1.m4a"
  },
  {
    word: "froen", definition: "to ask",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "froen", du: "frees", "hien/hatt/et": "freet", mir: "froen", dir: "frot", si: "froen" },
      pastParticiple: "gefrot", auxiliary: "hunn"
    },
    mnemonic: "", example: "Dierf ech eppes froen?", audio: "audio/verbs/froen1.m4a"
  },
  {
    word: "fueren", definition: "to drive / to travel",
    type: "verb", themes: ["tourism"],
    conjugation: {
      present: { ech: "fueren", du: "fiers", "hien/hatt/et": "fiert", mir: "fueren", dir: "fuert", si: "fueren" },
      pastParticiple: "gefuer", auxiliary: "sinn"
    },
    mnemonic: "", example: "Mir fueren an d'Vakanz.", audio: "audio/verbs/fueren1.m4a"
  },

  // ── G ──────────────────────────────────────────────
  {
    word: "gesinn", definition: "to see",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "gesinn", du: "gesäis", "hien/hatt/et": "gesäit", mir: "gesinn", dir: "gesitt", si: "gesinn" },
      pastParticiple: "gesinn", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech gesinn dech muer!", audio: "audio/verbs/gesinn1.m4a"
  },
  {
    word: "ginn", definition: "to give / to become",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "ginn", du: "gëss", "hien/hatt/et": "gëtt", mir: "ginn", dir: "gitt", si: "ginn" },
      pastParticiple: "ginn", auxiliary: "hunn"
    },
    mnemonic: "", example: "Gëff mir dat Buch.", audio: "audio/verbs/ginn1.m4a"
  },
  {
    word: "goen", definition: "to go",
    type: "verb", themes: ["sport", "tourism"],
    conjugation: {
      present: { ech: "ginn", du: "gees", "hien/hatt/et": "geet", mir: "ginn", dir: "gitt", si: "ginn" },
      pastParticiple: "gaangen", auxiliary: "sinn"
    },
    mnemonic: "", example: "Ech ginn an d'Stad.", audio: "audio/verbs/goen1.m4a"
  },

  // ── H ──────────────────────────────────────────────
  {
    word: "heeschen", definition: "to be called / to be named",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "heeschen", du: "heeschs", "hien/hatt/et": "heescht", mir: "heeschen", dir: "heescht", si: "heeschen" },
      pastParticiple: "geheescht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Wéi heeschs du?", audio: "audio/verbs/heeschen1.m4a"
  },
  {
    word: "héieren", definition: "to hear",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "héieren", du: "héiers", "hien/hatt/et": "héiert", mir: "héieren", dir: "héiert", si: "héieren" },
      pastParticiple: "héiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech héieren Musek.", audio: "audio/verbs/heieren1.m4a"
  },
  {
    word: "hëllefen", definition: "to help",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "hëllefen", du: "hëllefs", "hien/hatt/et": "hëlleft", mir: "hëllefen", dir: "hëlleft", si: "hëllefen" },
      pastParticiple: "gehollef", auxiliary: "hunn"
    },
    mnemonic: "", example: "Kanns du mir hëllefen?", audio: "audio/verbs/hellefen1.m4a"
  },
  {
    word: "hoffen", definition: "to hope",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "hoffen", du: "hoffs", "hien/hatt/et": "hofft", mir: "hoffen", dir: "hofft", si: "hoffen" },
      pastParticiple: "gehofft", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech hoffen et klappt.", audio: "audio/verbs/hoffen1.m4a"
  },
  {
    word: "huelen", definition: "to take",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "huelen", du: "hëls", "hien/hatt/et": "hëlt", mir: "huelen", dir: "huelt", si: "huelen" },
      pastParticiple: "geholl", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech huelen de Bus.", audio: "audio/verbs/huelen1.m4a"
  },
  {
    word: "hunn", definition: "to have",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "hunn", du: "hues", "hien/hatt/et": "huet", mir: "hunn", dir: "hutt", si: "hunn" },
      pastParticiple: "gehat", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech hunn en Hond.", audio: "audio/verbs/hunn1.m4a"
  },

  // ── I ──────────────────────────────────────────────
  {
    word: "iessen", definition: "to eat",
    type: "verb", themes: ["restaurant", "supermarket"],
    conjugation: {
      present: { ech: "iessen", du: "ëss", "hien/hatt/et": "ësst", mir: "iessen", dir: "iesst", si: "iessen" },
      pastParticiple: "giess", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir iessen um 12 Auer.", audio: "audio/verbs/iessen1.m4a"
  },
  {
    word: "invitéieren", definition: "to invite",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "invitéieren", du: "invitéiers", "hien/hatt/et": "invitéiert", mir: "invitéieren", dir: "invitéiert", si: "invitéieren" },
      pastParticiple: "invitéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech invitéieren dech op eng Feier.", audio: "audio/verbs/inviteieren1.m4a"
  },

  // ── K ──────────────────────────────────────────────
  {
    word: "kachen", definition: "to cook",
    type: "verb", themes: ["restaurant"],
    conjugation: {
      present: { ech: "kachen", du: "kochs", "hien/hatt/et": "kacht", mir: "kachen", dir: "kacht", si: "kachen" },
      pastParticiple: "gekacht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech kachen haut Owend.", audio: "audio/verbs/kachen1.m4a"
  },
  {
    word: "kafen", definition: "to buy",
    type: "verb", themes: ["supermarket", "fleamarket", "clothing"],
    conjugation: {
      present: { ech: "kafen", du: "keefs", "hien/hatt/et": "keeft", mir: "kafen", dir: "kaaft", si: "kafen" },
      pastParticiple: "kaf", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech kafen e Buch.", audio: "audio/verbs/kafen1.m4a"
  },
  {
    word: "kaschten", definition: "to cost",
    type: "verb", themes: ["supermarket", "fleamarket"],
    conjugation: {
      present: { ech: "kaschten", du: "kaschts", "hien/hatt/et": "kascht", mir: "kaschten", dir: "kascht", si: "kaschten" },
      pastParticiple: "kascht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Wéi vill kascht dat?", audio: "audio/verbs/kaschten1.m4a"
  },
  {
    word: "kennen", definition: "to know (a person / place)",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "kennen", du: "kenns", "hien/hatt/et": "kennt", mir: "kennen", dir: "kennt", si: "kennen" },
      pastParticiple: "kannt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Kenns du de Pierre?", audio: "audio/verbs/kennen1.m4a"
  },
  {
    word: "kënnen", definition: "can / to be able to",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "kann", du: "kanns", "hien/hatt/et": "kann", mir: "kënnen", dir: "kënnt", si: "kënnen" },
      pastParticiple: "konnt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech kann Lëtzebuergesch schwätzen.", audio: "audio/verbs/kennen1.m4a"
  },
  {
    word: "kommen", definition: "to come",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "kommen", du: "kënns", "hien/hatt/et": "kënnt", mir: "kommen", dir: "kommt", si: "kommen" },
      pastParticiple: "komm", auxiliary: "sinn"
    },
    mnemonic: "", example: "Hien kënnt moien.", audio: "audio/verbs/kommen1.m4a"
  },
  {
    word: "kréien", definition: "to get / to receive",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "kréien", du: "kris", "hien/hatt/et": "kritt", mir: "kréien", dir: "kritt", si: "kréien" },
      pastParticiple: "kritt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech kréien en Cadeau.", audio: "audio/verbs/kreien1.m4a"
  },
  {
    word: "kucken", definition: "to look / to watch",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "kucken", du: "kucks", "hien/hatt/et": "kuckt", mir: "kucken", dir: "kuckt", si: "kucken" },
      pastParticiple: "gekuckt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir kucken en Film.", audio: "audio/verbs/kucken1.m4a"
  },

  // ── L ──────────────────────────────────────────────
  {
    word: "lachen", definition: "to laugh",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "lachen", du: "laachs", "hien/hatt/et": "laacht", mir: "lachen", dir: "laacht", si: "lachen" },
      pastParticiple: "gelaacht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir lachen vill.", audio: "audio/verbs/laachen1.m4a"
  },
  {
    word: "lafen", definition: "to run / to walk",
    type: "verb", themes: ["sport"],
    conjugation: {
      present: { ech: "lafen", du: "leefs", "hien/hatt/et": "leeft", mir: "lafen", dir: "laaft", si: "lafen" },
      pastParticiple: "gelaf", auxiliary: "sinn"
    },
    mnemonic: "", example: "Ech lafen all Dag.", audio: "audio/verbs/lafen1.m4a"
  },
  {
    word: "lauschteren", definition: "to listen",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "lauschteren", du: "lauschters", "hien/hatt/et": "lauschtert", mir: "lauschteren", dir: "lauschtert", si: "lauschteren" },
      pastParticiple: "gelauschtert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Lauschter gutt no!", audio: "audio/verbs/lauschteren1.m4a"
  },
  {
    word: "léieren", definition: "to learn / to teach",
    type: "verb", themes: ["homework"],
    conjugation: {
      present: { ech: "léieren", du: "léiers", "hien/hatt/et": "léiert", mir: "léieren", dir: "léiert", si: "léieren" },
      pastParticiple: "geléiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech léieren Lëtzebuergesch.", audio: "audio/verbs/leieren1.m4a"
  },
  {
    word: "liesen", definition: "to read",
    type: "verb", themes: ["library", "homework"],
    conjugation: {
      present: { ech: "liesen", du: "lies", "hien/hatt/et": "liest", mir: "liesen", dir: "liest", si: "liesen" },
      pastParticiple: "gelies", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech liesen e Buch.", audio: "audio/verbs/liesen1.m4a"
  },
  {
    word: "lounen", definition: "to be worthwhile / to reward",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "lounen", du: "louns", "hien/hatt/et": "lount", mir: "lounen", dir: "lount", si: "lounen" },
      pastParticiple: "gelount", auxiliary: "hunn"
    },
    mnemonic: "", example: "Et lount sech!", audio: "audio/verbs/lounen1.m4a"
  },

  // ── M ──────────────────────────────────────────────
  {
    word: "maachen", definition: "to do / to make",
    type: "verb", themes: ["homework"],
    conjugation: {
      present: { ech: "maachen", du: "méchs", "hien/hatt/et": "mécht", mir: "maachen", dir: "maacht", si: "maachen" },
      pastParticiple: "gemaach", auxiliary: "hunn"
    },
    mnemonic: "", example: "Wat méchs du haut?", audio: "audio/verbs/maachen1.m4a"
  },
  {
    word: "mengen", definition: "to think / to believe",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "mengen", du: "mengs", "hien/hatt/et": "mengt", mir: "mengen", dir: "mengt", si: "mengen" },
      pastParticiple: "gemengt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech mengen dat ass richteg.", audio: "audio/verbs/mengen1.m4a"
  },
  {
    word: "molen", definition: "to paint",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "molen", du: "mools", "hien/hatt/et": "moolt", mir: "molen", dir: "moolt", si: "molen" },
      pastParticiple: "gemoolt", auxiliary: "hunn"
    },
    mnemonic: "", example: "D'Kand moolt e Bild.", audio: "audio/verbs/molen1.m4a"
  },
  {
    word: "mussen", definition: "must / to have to",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "muss", du: "muss", "hien/hatt/et": "muss", mir: "mussen", dir: "musst", si: "mussen" },
      pastParticiple: "gemusst", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech muss schaffen.", audio: "audio/verbs/mussen1.m4a"
  },

  // ── O ──────────────────────────────────────────────
  {
    word: "opmaachen", definition: "to open",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "maachen op", du: "méchs op", "hien/hatt/et": "mécht op", mir: "maachen op", dir: "maacht op", si: "maachen op" },
      pastParticiple: "opgemaach", auxiliary: "hunn"
    },
    mnemonic: "", example: "Maach d'Fënster op!", audio: "audio/verbs/opmaachen1.m4a"
  },
  {
    word: "oppassen", definition: "to pay attention / to be careful",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "passen op", du: "pass op", "hien/hatt/et": "passt op", mir: "passen op", dir: "passt op", si: "passen op" },
      pastParticiple: "opgepasst", auxiliary: "hunn"
    },
    mnemonic: "", example: "Pass op am Verkéier!", audio: "audio/verbs/oppassen1.m4a"
  },
  {
    word: "organiséieren", definition: "to organize",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "organiséieren", du: "organiséiers", "hien/hatt/et": "organiséiert", mir: "organiséieren", dir: "organiséiert", si: "organiséieren" },
      pastParticiple: "organiséiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir organiséieren eng Feier.", audio: "audio/verbs/organiseieren1.m4a"
  },

  // ── P ──────────────────────────────────────────────
  {
    word: "planéieren", definition: "to plan",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "planéieren", du: "planéiers", "hien/hatt/et": "planéiert", mir: "planéieren", dir: "planéiert", si: "planéieren" },
      pastParticiple: "planéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir planéieren d'Vakanz.", audio: "audio/verbs/planeieren1.m4a"
  },
  {
    word: "preparéieren", definition: "to prepare",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "preparéieren", du: "preparéiers", "hien/hatt/et": "preparéiert", mir: "preparéieren", dir: "preparéiert", si: "preparéieren" },
      pastParticiple: "preparéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech preparéieren d'Iessen.", audio: "audio/verbs/prepareieren1.m4a"
  },
  {
    word: "probéieren", definition: "to try",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "probéieren", du: "probéiers", "hien/hatt/et": "probéiert", mir: "probéieren", dir: "probéiert", si: "probéieren" },
      pastParticiple: "probéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Probéier dat Iessen!", audio: "audio/verbs/probeieren1.m4a"
  },

  // ── R ──────────────────────────────────────────────
  {
    word: "raschten", definition: "to rest",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "raschten", du: "raschts", "hien/hatt/et": "rascht", mir: "raschten", dir: "rascht", si: "raschten" },
      pastParticiple: "gerascht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech raschten um Sofa.", audio: "audio/verbs/raschten1.m4a"
  },
  {
    word: "raumen", definition: "to tidy up / to clear",
    type: "verb", themes: ["housing"],
    conjugation: {
      present: { ech: "raumen", du: "raums", "hien/hatt/et": "raumt", mir: "raumen", dir: "raumt", si: "raumen" },
      pastParticiple: "geraumt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Raum deng Kummer op!", audio: "audio/verbs/raumen1.m4a"
  },
  {
    word: "rennen", definition: "to run",
    type: "verb", themes: ["sport"],
    conjugation: {
      present: { ech: "rennen", du: "renns", "hien/hatt/et": "rennt", mir: "rennen", dir: "rennt", si: "rennen" },
      pastParticiple: "gerannt", auxiliary: "sinn"
    },
    mnemonic: "", example: "D'Kanner rennen am Gaart.", audio: "audio/verbs/rennen1.m4a"
  },
  {
    word: "reservéieren", definition: "to reserve / to book",
    type: "verb", themes: ["restaurant", "tourism"],
    conjugation: {
      present: { ech: "reservéieren", du: "reservéiers", "hien/hatt/et": "reservéiert", mir: "reservéieren", dir: "reservéiert", si: "reservéieren" },
      pastParticiple: "reservéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech reservéieren en Dësch.", audio: "audio/verbs/reserveieren1.m4a"
  },

  // ── S ──────────────────────────────────────────────
  {
    word: "sammelen", definition: "to collect",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "sammelen", du: "sammels", "hien/hatt/et": "sammelt", mir: "sammelen", dir: "sammelt", si: "sammelen" },
      pastParticiple: "gesammelt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Hie sammelt Timberen.", audio: "audio/verbs/sammelen1.m4a"
  },
  {
    word: "sangen", definition: "to sing",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "sangen", du: "séngs", "hien/hatt/et": "séngt", mir: "sangen", dir: "sangt", si: "sangen" },
      pastParticiple: "gesongen", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir sangen zesummen.", audio: "audio/verbs/sangen1.m4a"
  },
  {
    word: "schaffen", definition: "to work",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schaffen", du: "schaffs", "hien/hatt/et": "schafft", mir: "schaffen", dir: "schafft", si: "schaffen" },
      pastParticiple: "geschafft", auxiliary: "hunn"
    },
    mnemonic: "", example: "Hie schafft bei der Bank.", audio: "audio/verbs/schaffen1.m4a"
  },
  {
    word: "schlofen", definition: "to sleep",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schlofen", du: "schléifs", "hien/hatt/et": "schléift", mir: "schlofen", dir: "schlooft", si: "schlofen" },
      pastParticiple: "geschlof", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech schlofen 8 Stonnen.", audio: "audio/verbs/schlofen1.m4a"
  },
  {
    word: "schneiden", definition: "to cut",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schneiden", du: "schneids", "hien/hatt/et": "schneit", mir: "schneiden", dir: "schneit", si: "schneiden" },
      pastParticiple: "geschnidden", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech schneiden d'Brout.", audio: "audio/verbs/schneiden1.m4a"
  },
  {
    word: "schreiwen", definition: "to write",
    type: "verb", themes: ["homework", "library"],
    conjugation: {
      present: { ech: "schreiwen", du: "schreifs", "hien/hatt/et": "schreift", mir: "schreiwen", dir: "schreift", si: "schreiwen" },
      pastParticiple: "geschriwwen", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech schreiwen eng E-Mail.", audio: "audio/verbs/schreiwen1.m4a"
  },
  {
    word: "schwammen", definition: "to swim",
    type: "verb", themes: ["sport"],
    conjugation: {
      present: { ech: "schwammen", du: "schwëmms", "hien/hatt/et": "schwëmmt", mir: "schwammen", dir: "schwammt", si: "schwammen" },
      pastParticiple: "geschwommen", auxiliary: "sinn"
    },
    mnemonic: "", example: "Mir schwammen am Schwämm.", audio: "audio/verbs/schwammen1.m4a"
  },
  {
    word: "schwätzen", definition: "to speak / to talk",
    type: "verb", themes: ["library"],
    conjugation: {
      present: { ech: "schwätzen", du: "schwätz", "hien/hatt/et": "schwätzt", mir: "schwätzen", dir: "schwätzt", si: "schwätzen" },
      pastParticiple: "geschwat", auxiliary: "hunn"
    },
    mnemonic: "", example: "Schwätz dir Lëtzebuergesch?", audio: "audio/verbs/schwatzen1.m4a"
  },
  {
    word: "sichen", definition: "to search / to look for",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "sichen", du: "sichs", "hien/hatt/et": "sicht", mir: "sichen", dir: "sicht", si: "sichen" },
      pastParticiple: "gesicht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech sichen meng Schlësselen.", audio: "audio/verbs/sichen1.m4a"
  },
  {
    word: "sinn", definition: "to be",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "sinn", du: "bass", "hien/hatt/et": "ass", mir: "sinn", dir: "sidd", si: "sinn" },
      pastParticiple: "gewiescht", auxiliary: "sinn"
    },
    mnemonic: "", example: "Ech sinn midd.", audio: "audio/verbs/sinn1.m4a"
  },
  {
    word: "soen", definition: "to say / to tell",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "soen", du: "sees", "hien/hatt/et": "seet", mir: "soen", dir: "sot", si: "soen" },
      pastParticiple: "gesot", auxiliary: "hunn"
    },
    mnemonic: "", example: "Wat sees du?", audio: "audio/verbs/soen1.m4a"
  },
  {
    word: "sollen", definition: "should / to be supposed to",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "soll", du: "solls", "hien/hatt/et": "soll", mir: "sollen", dir: "sollt", si: "sollen" },
      pastParticiple: "gesollt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech soll léieren.", audio: "audio/verbs/sollen1.m4a"
  },
  {
    word: "spazéieren", definition: "to go for a walk / to stroll",
    type: "verb", themes: ["sport", "tourism"],
    conjugation: {
      present: { ech: "spazéieren", du: "spazéiers", "hien/hatt/et": "spazéiert", mir: "spazéieren", dir: "spazéiert", si: "spazéieren" },
      pastParticiple: "spazéiert", auxiliary: "sinn"
    },
    mnemonic: "", example: "Mir spazéieren am Park.", audio: "audio/verbs/spadseieren1.m4a"
  },
  {
    word: "spillen", definition: "to play",
    type: "verb", themes: ["sport"],
    conjugation: {
      present: { ech: "spillen", du: "spills", "hien/hatt/et": "spillt", mir: "spillen", dir: "spillt", si: "spillen" },
      pastParticiple: "gespillt", auxiliary: "hunn"
    },
    mnemonic: "", example: "D'Kanner spillen am Gaart.", audio: "audio/verbs/spillen1.m4a"
  },
  {
    word: "studéieren", definition: "to study",
    type: "verb", themes: ["homework"],
    conjugation: {
      present: { ech: "studéieren", du: "studéiers", "hien/hatt/et": "studéiert", mir: "studéieren", dir: "studéiert", si: "studéieren" },
      pastParticiple: "studéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech studéieren un der Uni.", audio: "audio/verbs/studeieren1.m4a"
  },

  // ── T ──────────────────────────────────────────────
  {
    word: "telefonéieren", definition: "to make a phone call",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "telefonéieren", du: "telefonéiers", "hien/hatt/et": "telefonéiert", mir: "telefonéieren", dir: "telefonéiert", si: "telefonéieren" },
      pastParticiple: "telefonéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech telefonéiere mat mengem Frënd.", audio: "audio/verbs/telefoneieren1.m4a"
  },

  // ── Ü ──────────────────────────────────────────────
  {
    word: "üben", definition: "to practice",
    type: "verb", themes: ["homework", "sport"],
    conjugation: {
      present: { ech: "üben", du: "übs", "hien/hatt/et": "übt", mir: "üben", dir: "übt", si: "üben" },
      pastParticiple: "geübt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech üben all Dag.", audio: "audio/verbs/uben1.m4a"
  },

  // ── U (separable) ─────────────────────────────────
  {
    word: "ukommen", definition: "to arrive",
    type: "verb", themes: ["tourism"],
    conjugation: {
      present: { ech: "kommen un", du: "kënns un", "hien/hatt/et": "kënnt un", mir: "kommen un", dir: "kommt un", si: "kommen un" },
      pastParticiple: "ukomm", auxiliary: "sinn"
    },
    mnemonic: "", example: "Den Zuch kënnt um 9 Auer un.", audio: "audio/verbs/ukommen1.m4a"
  },
  {
    word: "umaachen", definition: "to put on (clothes) / to get dressed",
    type: "verb", themes: ["clothing"],
    conjugation: {
      present: { ech: "maachen un", du: "méchs un", "hien/hatt/et": "mécht un", mir: "maachen un", dir: "maacht un", si: "maachen un" },
      pastParticiple: "ugemaach", auxiliary: "hunn"
    },
    mnemonic: "", example: "Maach deng Jackett un!", audio: "audio/verbs/umaachen1.m4a"
  },

  // ── V ──────────────────────────────────────────────
  {
    word: "verkafen", definition: "to sell",
    type: "verb", themes: ["fleamarket"],
    conjugation: {
      present: { ech: "verkafen", du: "verkeefs", "hien/hatt/et": "verkeeft", mir: "verkafen", dir: "verkaaft", si: "verkafen" },
      pastParticiple: "verkaaft", auxiliary: "hunn"
    },
    mnemonic: "", example: "Hie verkeeft säin Auto.", audio: "audio/verbs/verkafen1.m4a"
  },
  {
    word: "verléieren", definition: "to lose",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "verléieren", du: "verléiers", "hien/hatt/et": "verléiert", mir: "verléieren", dir: "verléiert", si: "verléieren" },
      pastParticiple: "verluer", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech verléieren ëmmer meng Schlësselen.", audio: "audio/verbs/verleieren1.m4a"
  },
  {
    word: "verlounen", definition: "to rent out",
    type: "verb", themes: ["housing"],
    conjugation: {
      present: { ech: "verlounen", du: "verlouns", "hien/hatt/et": "verlount", mir: "verlounen", dir: "verlount", si: "verlounen" },
      pastParticiple: "verlount", auxiliary: "hunn"
    },
    mnemonic: "", example: "Hien verlount säi Appartement.", audio: "audio/verbs/verlounen1.m4a"
  },
  {
    word: "verstoen", definition: "to understand",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "verstoen", du: "verstees", "hien/hatt/et": "versteet", mir: "verstoen", dir: "verstitt", si: "verstoen" },
      pastParticiple: "verstanen", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech verstoen dat net.", audio: "audio/verbs/verstoen1.m4a"
  },

  // ── W ──────────────────────────────────────────────
  {
    word: "waarden", definition: "to wait",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "waarden", du: "waards", "hien/hatt/et": "waart", mir: "waarden", dir: "waart", si: "waarden" },
      pastParticiple: "gewaart", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech waarden op den Bus.", audio: "audio/verbs/waarden1.m4a"
  },
  {
    word: "weisen", definition: "to show",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "weisen", du: "weis", "hien/hatt/et": "weist", mir: "weisen", dir: "weist", si: "weisen" },
      pastParticiple: "gewisen", auxiliary: "hunn"
    },
    mnemonic: "", example: "Weis mir dat!", audio: "audio/verbs/weisen1.m4a"
  },
  {
    word: "wëllen", definition: "to want",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "wëll", du: "wëlls", "hien/hatt/et": "wëll", mir: "wëllen", dir: "wëllt", si: "wëllen" },
      pastParticiple: "gewollt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech wëll e Kaffi.", audio: "audio/verbs/wellen1.m4a"
  },
  {
    word: "wënschen", definition: "to wish",
    type: "verb", themes: ["christmas"],
    conjugation: {
      present: { ech: "wënschen", du: "wënschs", "hien/hatt/et": "wënscht", mir: "wënschen", dir: "wënscht", si: "wënschen" },
      pastParticiple: "gewënscht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech wënschen dir alles Guddes!", audio: "audio/verbs/wenschen1.m4a"
  },
  {
    word: "wëssen", definition: "to know (a fact)",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "weess", du: "weess", "hien/hatt/et": "weess", mir: "wëssen", dir: "wësst", si: "wëssen" },
      pastParticiple: "gewosst", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech weess dat net.", audio: "audio/verbs/wessen1.m4a"
  },
  {
    word: "widderhuelen", definition: "to repeat / to revise",
    type: "verb", themes: ["homework"],
    conjugation: {
      present: { ech: "widderhuelen", du: "widderhëls", "hien/hatt/et": "widderhëlt", mir: "widderhuelen", dir: "widderhuelt", si: "widderhuelen" },
      pastParticiple: "widderhuelt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Widderhuelt déi Lektioun!", audio: "audio/verbs/widderhuelen1.m4a"
  },
  {
    word: "wunnen", definition: "to live / to reside",
    type: "verb", themes: ["housing"],
    conjugation: {
      present: { ech: "wunnen", du: "wunns", "hien/hatt/et": "wunnt", mir: "wunnen", dir: "wunnt", si: "wunnen" },
      pastParticiple: "gewunnt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech wunnen zu Lëtzebuerg.", audio: "audio/verbs/wunnen1.m4a"
  },

  // ── Z ──────────────────────────────────────────────
  {
    word: "zoumaachen", definition: "to close / to shut",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "maachen zou", du: "méchs zou", "hien/hatt/et": "mécht zou", mir: "maachen zou", dir: "maacht zou", si: "maachen zou" },
      pastParticiple: "zougemaach", auxiliary: "hunn"
    },
    mnemonic: "", example: "Maach d'Dier zou!", audio: "audio/verbs/zoumaachen1.m4a"
  },

  // ── Added from PDF ──────────────────────────────────
  {
    word: "anhänken", definition: "to fix / to install / to hang",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "hänken an", du: "hänks an", "hien/hatt/et": "hänkt an", mir: "hänken an", dir: "hänkt an", si: "hänken an" },
      pastParticiple: "agehaangen", auxiliary: "hunn"
    },
    mnemonic: "", example: "hëllefs de mer wannechgelift, déi zwou Fënsteren anzehänken?", audio: "audio/verbs/anhanken1.m4a"
  },
  {
    word: "(sech) bestueden", definition: "to marry",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "bestueden (mech)", du: "bestiits (dech)", "hien/hatt/et": "bestit (sech)", mir: "bestueden (eis)", dir: "bestuet (iech)", si: "bestueden (sech)" },
      pastParticiple: "bestuet", auxiliary: "hunn"
    },
    mnemonic: "", example: "de Buergermeeschter huet déi jonk Koppel bestuet", audio: "audio/verbs/bestueden1.m4a"
  },
  {
    word: "daueren", definition: "to last",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "", du: "", "hien/hatt/et": "dauert", mir: "", dir: "", si: "daueren" },
      pastParticiple: "gedauert", auxiliary: "hunn"
    },
    mnemonic: "", example: "der Buergermeeschtesch hir Rieden daueren eng Éiwegkeet", audio: "audio/verbs/daueren1.m4a"
  },
  {
    word: "droen", definition: "to carry",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "droen", du: "dréis", "hien/hatt/et": "dréit", mir: "droen", dir: "drot", si: "droen" },
      pastParticiple: "gedroen", auxiliary: "hunn"
    },
    mnemonic: "", example: "de Papp dréit säi Bouf vill op de Schëlleren", audio: "audio/verbs/droen1.m4a"
  },
  {
    word: "eraklammen", definition: "to climb in",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "klammen eran", du: "klëmms eran", "hien/hatt/et": "klëmmt eran", mir: "klammen eran", dir: "klammt eran", si: "klammen eran" },
      pastParticiple: "erageklommen", auxiliary: "sinn"
    },
    mnemonic: "", example: "d'Abriecher sinn duerch d'Kichefënster erageklommen", audio: "audio/verbs/eraklammen1.m4a"
  },
  {
    word: "erausgoen", definition: "to go out / to leave",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "ginn eraus", du: "gees eraus", "hien/hatt/et": "geet eraus", mir: "ginn eraus", dir: "gitt eraus", si: "ginn eraus" },
      pastParticiple: "erausgaangen", auxiliary: "sinn"
    },
    mnemonic: "", example: "wann et der an der Sauna ze waarm gëtt, muss de erausgoen!", audio: "audio/verbs/erausgoen1.m4a"
  },
  {
    word: "(sech) fillen", definition: "to feel",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "fillen (mech)", du: "fills (dech)", "hien/hatt/et": "fillt (sech)", mir: "fillen (eis)", dir: "fillt (iech) ", si: "fillen (sech) " },
      pastParticiple: "gefillt", auxiliary: "hunn"
    },
    mnemonic: "", example: "nom Iesse fillen ech dacks en Drock am Mo", audio: "audio/verbs/fillen1.m4a"
  },
  {
    word: "gefalen", definition: "to appeal to",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "gefalen", du: "gefäls", "hien/hatt/et": "gefält", mir: "gefalen", dir: "gefaalt", si: "gefalen" },
      pastParticiple: "gefall", auxiliary: "hunn"
    },
    mnemonic: "", example: "dat ass e Film, deen dir bestëmmt gefält", audio: "audio/verbs/gefalen1.m4a"
  },
  {
    word: "halen", definition: "to hold / to hold up",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "halen (mech)", du: "häls (dech)", "hien/hatt/et": "hält (sech)", mir: "halen (eis)", dir: "haalt (iech)", si: "halen (sech)" },
      pastParticiple: "gehalen", auxiliary: "hunn"
    },
    mnemonic: "", example: "ech schëdden, hal du den Triichter!", audio: "audio/verbs/halen1.m4a"
  },
  {
    word: "heemkommen", definition: "to come home / to get home",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "kommen heem", du: "kënns heem", "hien/hatt/et": "kënnt heem", mir: "kommen heem", dir: "kommt heem", si: "kommen heem" },
      pastParticiple: "heemkomm", auxiliary: "sinn"
    },
    mnemonic: "", example: "wann ech owes no der Aarbecht heemkommen, da raschten ech gär e bëssen", audio: "audio/verbs/heemkommen1.m4a"
  },
  {
    word: "hänken", definition: "to hang (up)",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "hänken", du: "hänks", "hien/hatt/et": "hänkt", mir: "hänken", dir: "hänkt", si: "hänken" },
      pastParticiple: "gehaangen", auxiliary: "hunn"
    },
    mnemonic: "", example: "ech hunn eis zwee nei Tabloen an de Salon gehaangen", audio: "audio/verbs/hanken1.m4a"
  },
  {
    word: "(sech) leeën", definition: "to lay flat",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "leeën (mech)", du: "lees (dech)", "hien/hatt/et": "leet (sech)", mir: "leeën (eis)", dir: "leet (iech)", si: "leeën (sech)" },
      pastParticiple: "geluecht", auxiliary: "hunn"
    },
    mnemonic: "", example: "fir dës Übung musst Der Iech flaach op de Buedem leeën", audio: "audio/verbs/leeen1.m4a"
  },
  {
    word: "leien", definition: "to lie",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "léien", du: "litts", "hien/hatt/et": "litt", mir: "léien", dir: "litt", si: "léien" },
      pastParticiple: "gelunn", auxiliary: "hunn"
    },
    mnemonic: "", example: "well de Bouf gelunn hat, krut en eng Woch keen Täschegeld", audio: "audio/verbs/leien1.m4a"
  },
  {
    word: "mathuelen", definition: "to take / to take away / to give a lift",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "huele mat", du: "hëls mat", "hien/hatt/et": "hëlt mat", mir: "huele mat", dir: "huelt mat", si: "huele mat" },
      pastParticiple: "matgeholl", auxiliary: "hunn"
    },
    mnemonic: "", example: "an der Hetz hat ech vergiess, e Prabbeli matzehuelen", audio: "audio/verbs/mathuelen1.m4a"
  },
  {
    word: "(sech) ofdrechnen", definition: "to dry",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "dréchnen of", du: "dréchens of", "hien/hatt/et": "dréchent of", mir: "dréchnen of", dir: "dréchent of", si: "dréchnen of" },
      pastParticiple: "ofgedréchent", auxiliary: "hunn"
    },
    mnemonic: "", example: "hëllef mer d'Glieser ofdréchnen!", audio: "audio/verbs/ofdrechnen1.m4a"
  },
  {
    word: "ofhuelen", definition: "to pick up / to collect",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "huelen of", du: "hëls of", "hien/hatt/et": "hëlt of", mir: "huelen of", dir: "huelt of", si: "huelen of" },
      pastParticiple: "ofgeholl", auxiliary: "hunn"
    },
    mnemonic: "", example: "ech muss nach e Pak op der Post ofhuelen", audio: "audio/verbs/ofhuelen1.m4a"
  },
  {
    word: "(sech) ofmellen", definition: "to deregister / to take out of service / to cancel",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "mellen (mech) of", du: "mells (dech) of", "hien/hatt/et": "mellt (sech) of", mir: "mellen (eis) of", dir: "mellt (iech) of", si: "mellen (sech) of" },
      pastParticiple: "ofgemellt", auxiliary: "hunn"
    },
    mnemonic: "", example: "ech muss haut onbedéngt deen alen Auto ofmellen", audio: "audio/verbs/ofmellen1.m4a"
  },
  {
    word: "ophiewen", definition: "to pick up / to lift up",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "hiewen (mech) op", du: "hiefs (dech) op", "hien/hatt/et": "hieft (sech) op", mir: "hiewen (eis) op", dir: "hieft (iech) op", si: "hiewen (sech) op" },
      pastParticiple: "opgehuewen", auxiliary: "hunn"
    },
    mnemonic: "", example: "hief déi Këscht op a stell se an d'Regal!", audio: "audio/verbs/ophiewen1.m4a"
  },
  {
    word: "opstoen", definition: "to rise / to stand up",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "stinn op", du: "stees op", "hien/hatt/et": "steet op", mir: "stinn op", dir: "stitt op", si: "stinn op" },
      pastParticiple: "opgestanen", auxiliary: "sinn"
    },
    mnemonic: "", example: "d'Leit sinn opgestanen, wéi d'Nationalhymn gespillt gouf", audio: "audio/verbs/opstoen2.m4a"
  },
  {
    word: "paken", definition: "to pack",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "paken", du: "paaks", "hien/hatt/et": "paakt", mir: "paken", dir: "paakt", si: "paken" },
      pastParticiple: "gepaakt", auxiliary: "hunn"
    },
    mnemonic: "", example: "pak däi Schoulsak owes, da brauchs de dech mueres net esou ze fläissen!", audio: "audio/verbs/paken1.m4a"
  },
  {
    word: "presentéieren", definition: "to present",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "presentéieren (mech)", du: "presentéiers (dech)", "hien/hatt/et": "presentéiert (sech)", mir: "presentéieren (eis)", dir: "presentéiert (iech) ", si: "presentéieren (sech) " },
      pastParticiple: "presentéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "um Enn presentéiere mir d'Conclusioune vun eiser Diskussioun", audio: "audio/verbs/presenteieren1.m4a"
  },
  {
    word: "reenen", definition: "to rain",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "", du: "", "hien/hatt/et": "reent", mir: "", dir: "", si: "" },
      pastParticiple: "gereent", auxiliary: "hunn"
    },
    mnemonic: "", example: "et huet esou vill gereent, datt mir bannent e puer Minutte plätschnaass waren", audio: "audio/verbs/reenen1.m4a"
  },
  {
    word: "reesen", definition: "to travel",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "reesen", du: "rees", "hien/hatt/et": "reest", mir: "reesen", dir: "reest", si: "reesen" },
      pastParticiple: "gereest", auxiliary: "sinn"
    },
    mnemonic: "", example: "mäi Papp reest d'nächst Woch an Amerika", audio: "audio/verbs/reesen1.m4a"
  },
  {
    word: "schneien", definition: "to snow",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "", du: "", "hien/hatt/et": "schneit", mir: "", dir: "", si: "" },
      pastParticiple: "geschneit", auxiliary: "hunn"
    },
    mnemonic: "", example: "et huet esou vill geschneit, datt bannent enger Stonn de Verkéier komplett blockéiert war", audio: "audio/verbs/schneien1.m4a"
  },
  {
    word: "schécken", definition: "to send",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schécken (mech)", du: "schécks (dech)", "hien/hatt/et": "schéckt (sech)", mir: "schécken (eis)", dir: "schéckt (iech) ", si: "schécken (sech) " },
      pastParticiple: "geschéckt", auxiliary: "hunn"
    },
    mnemonic: "", example: "du muss de Krankeschäin op d'Krankekeess schécken", audio: "audio/verbs/schecken1.m4a"
  },
  {
    word: "sech freeën", definition: "to be pleased",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "freeën (mech)", du: "frees (dech)", "hien/hatt/et": "freet (sech)", mir: "freeën (eis)", dir: "freet (iech)", si: "freeën (sech)" },
      pastParticiple: "gefreet", auxiliary: "hunn"
    },
    mnemonic: "", example: "et géif eis freeën, wa mer eng Kéier zesumme géifen iesse goen", audio: "audio/verbs/freeen1.m4a"
  },
  {
    word: "sech iren", definition: "to make a mistake / to be wrong",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "iere mech", du: "iers dech", "hien/hatt/et": "iert sech", mir: "ieren eis", dir: "iert iech", si: "ieren sech" },
      pastParticiple: "geiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "all Mënsch ka sech emol ieren", audio: "audio/verbs/ieren2.m4a"
  },
  {
    word: "sech tummelen", definition: "to hurry",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "tommele mech", du: "tommels dech", "hien/hatt/et": "tommelt sech", mir: "tommelen eis", dir: "tommelt iech", si: "tommelen sech" },
      pastParticiple: "getommelt", auxiliary: "hunn"
    },
    mnemonic: "", example: "maach gemälleg, et gëtt kee Grond, fir sech ze tommelen!", audio: "audio/verbs/tommelen1.m4a"
  },
  {
    word: "(sech) setzen", definition: "to sit / to be",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "sëtzen", du: "sëtz", "hien/hatt/et": "sëtzt", mir: "sëtzen", dir: "sëtzt", si: "sëtzen" },
      pastParticiple: "gesiess", auxiliary: "hunn"
    },
    mnemonic: "", example: "no deem laange Stoen deet et gutt, emol erëm kënnen ze sëtzen", audio: "audio/verbs/setzen1.m4a"
  },
  {
    word: "spullen", definition: "to wash up",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "spullen", du: "spulls", "hien/hatt/et": "spullt", mir: "spullen", dir: "spullt", si: "spullen" },
      pastParticiple: "gespullt", auxiliary: "hunn"
    },
    mnemonic: "", example: "huel frëscht Waasser, fir d'Glieser ze spullen!", audio: "audio/verbs/spullen1.m4a"
  },
  {
    word: "staubsaugen", definition: "to hoover / to vacuum",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "staubsaugen", du: "staubsaugs", "hien/hatt/et": "staubsaugt", mir: "staubsaugen", dir: "staubsaugt", si: "staubsaugen" },
      pastParticiple: "gestaubsaugt", auxiliary: "hunn"
    },
    mnemonic: "", example: "hues du d'Stuff scho gestaubsaugt?", audio: "audio/verbs/staubsaugen1.m4a"
  },
  {
    word: "(sech) stellen", definition: "to stand",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "stellen (mech)", du: "stells (dech)", "hien/hatt/et": "stellt (sech)", mir: "stellen (eis)", dir: "stellt (iech) ", si: "stellen (sech) " },
      pastParticiple: "gestallt", auxiliary: "hunn"
    },
    mnemonic: "", example: "fir de Wäin ze versuergen, soll een d'Fläsche leeën, net stellen", audio: "audio/verbs/stellen1.m4a"
  },
  {
    word: "stoen", definition: "to stand",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "stinn (mech)", du: "stees (dech)", "hien/hatt/et": "steet (sech)", mir: "stinn (eis)", dir: "stitt (iech)", si: "stinn (sech)" },
      pastParticiple: "gestanen", auxiliary: "hunn"
    },
    mnemonic: "", example: "no deem laange Sëtze war ech frou, emol nees ze stoen", audio: "audio/verbs/stoen1.m4a"
  },
  {
    word: "strecken", definition: "to raise / to stretch",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "strecken (mech)", du: "strecks (dech)", "hien/hatt/et": "streckt (sech)", mir: "strecken (eis)", dir: "streckt (iech) ", si: "strecken (sech) " },
      pastParticiple: "gestreckt", auxiliary: "hunn"
    },
    mnemonic: "", example: "fir sech ze mellen, soll een d'Hand an d'Luucht strecken", audio: "audio/verbs/strecken1.m4a"
  },
  {
    word: "treffen (sech)", definition: "to hit / to strike",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "treffen (mech)", du: "trëffs (dech)", "hien/hatt/et": "trëfft (sech)", mir: "treffen (eis)", dir: "trefft (iech)", si: "treffen (sech)" },
      pastParticiple: "getraff", auxiliary: "hunn"
    },
    mnemonic: "", example: "d'Kugel huet d'Zaldotin an de Réck getraff", audio: "audio/verbs/treffen1.m4a"
  },
  {
    word: "ufänken", definition: "to start / to begin",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "fänken un", du: "fänks un", "hien/hatt/et": "fänkt un", mir: "fänken un", dir: "fänkt un", si: "fänken un" },
      pastParticiple: "ugefaangen", auxiliary: "hunn"
    },
    mnemonic: "", example: "ier s de deng Ried ufänks, muss de der Gehéier verschafen", audio: "audio/verbs/ufanken1.m4a"
  },
  {
    word: "(sech) umellen", definition: "to register",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "mellen un", du: "mells un", "hien/hatt/et": "mellt un", mir: "mellen un", dir: "mellt un", si: "mellen un" },
      pastParticiple: "ugemellt", auxiliary: "hunn"
    },
    mnemonic: "", example: "de Papp ass ganz houfereg seng Zwillingen op d'Gemeng umelle gaangen", audio: "audio/verbs/umellen1.m4a"
  },
  {
    word: "(sech) undoen", definition: "to put on / to wear",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "doen", du: "dees un", "hien/hatt/et": "deet un", mir: "doen", dir: "dot", si: "doen" },
      pastParticiple: "ugedoen", auxiliary: "hunn"
    },
    mnemonic: "", example: "am Summer dinn ech praktesch nëmme kuerz Boxen un", audio: "audio/verbs/undoen1.m4a"
  },
  {
    word: "uruffen", definition: "to call / to phone",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "ruffen un", du: "riffs un", "hien/hatt/et": "rifft un", mir: "ruffen un", dir: "rufft un", si: "ruffen un" },
      pastParticiple: "ugeruff", auxiliary: "hunn"
    },
    mnemonic: "", example: "riffs de vun doheem aus un oder bass de ënnerwee?", audio: "audio/verbs/uruffen1.m4a"
  },
  {
    word: "verbannen", definition: "to bandage / to blindfold",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "verbannen", du: "verbënns", "hien/hatt/et": "verbënnt (sech)", mir: "verbannen", dir: "verbannt", si: "verbannen (sech)" },
      pastParticiple: "verbonnen", auxiliary: "hunn"
    },
    mnemonic: "", example: "de Blesséierte krut nach op der Plaz vum Accident den Aarm verbonnen", audio: "audio/verbs/verbannen1.m4a"
  },
  {
    word: "verdroen", definition: "to stomach / to bear / to stand",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "verdroen (mech)", du: "verdréis (dech)", "hien/hatt/et": "verdréit (sech)", mir: "verdroen (eis)", dir: "verdrot (iech)", si: "verdroen (sech)" },
      pastParticiple: "verdroen", auxiliary: "hunn"
    },
    mnemonic: "", example: "ech verdroen dat fettegt Iessen net", audio: "audio/verbs/verdroen1.m4a"
  },
  {
    word: "(sech) wäschen", definition: "to wash / to clean",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "wäschen", du: "wäschs", "hien/hatt/et": "wäscht", mir: "wäschen", dir: "wäscht", si: "wäschen" },
      pastParticiple: "gewäsch", auxiliary: "hunn"
    },
    mnemonic: "", example: "géi wäsch deng knaschteg Fangeren!", audio: "audio/verbs/waschen1.m4a"
  },
  {
    word: "zerstéieren", definition: "to destroy",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "zerstéieren", du: "zerstéiers", "hien/hatt/et": "zerstéiert", mir: "zerstéieren", dir: "zerstéiert", si: "zerstéieren" },
      pastParticiple: "zerstéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "e schrot Äerdbiewen huet e groussen Deel vun der Stad zerstéiert", audio: "audio/verbs/zersteieren1.m4a"
  },
  {
    word: "zielen", definition: "to count",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "zielen", du: "ziels", "hien/hatt/et": "zielt", mir: "zielen", dir: "zielt", si: "zielen" },
      pastParticiple: "gezielt", auxiliary: "hunn"
    },
    mnemonic: "", example: "wann s de eng Kéier deng Schong ziels, kënns de bestëmmt op honnert Puer", audio: "audio/verbs/zielen1.m4a"
  },
  {
    word: "zouspären", definition: "to lock",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "spären zou", du: "späers zou", "hien/hatt/et": "späert zou", mir: "spären zou", dir: "späert zou", si: "spären zou" },
      pastParticiple: "zougespaart", auxiliary: "hunn"
    },
    mnemonic: "", example: "spär d'Viischt Dier zou, wann s de schlofe gees!", audio: "audio/verbs/zousparen1.m4a"
  },
  {
    word: "zréckruffen", definition: "to recall",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "ruffen zeréck", du: "riffs zeréck", "hien/hatt/et": "rifft zeréck", mir: "ruffen zeréck", dir: "rufft zeréck", si: "ruffen zeréck" },
      pastParticiple: "zeréckgeruff", auxiliary: "hunn"
    },
    mnemonic: "", example: "wéinst dem Attentat huet de Premier d'Ministeren aus der Vakanz zeréckgeruff", audio: "audio/verbs/zereckruffen1.m4a"
  },
  {
    word: "mouen", definition: "to rent / lease",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: 'mouen', du: 'mous', "hien/hatt/et": 'mout', mir: 'mouen', dir: 'mout', si: 'mouen' },
      pastParticiple: "gemount", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech hunn d'Appartement gemount." 
  },
  {
    word: "wanderen", definition: "to hike / wander",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: 'wanderen', du: 'wanders', "hien/hatt/et": 'wandert', mir: 'wanderen', dir: 'wandert', si: 'wanderen' },
      pastParticiple: "gewandert", auxiliary: "sinn"
    },
    mnemonic: "", example: "Ech gi gär am Bësch wanderen." , audio: "audio/verbs/wanderen_wanderen1.m4a"
  },
  {
    word: "feieren", definition: "to celebrate",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: 'feieren', du: 'feiers', "hien/hatt/et": 'feiert', mir: 'feieren', dir: 'feiert', si: 'feieren' },
      pastParticiple: "gefeiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir feieren d'Nopeschfest." , audio: "audio/verbs/feieren_feieren1.m4a"
  },
  {
    word: "nätzen", definition: "to water / wet",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: 'nätzen', du: 'nätzt', "hien/hatt/et": 'nätzt', mir: 'nätzen', dir: 'nätzt', si: 'nätzen' },
      pastParticiple: "genëtzt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech nätzen d'Blummen." , audio: "audio/verbs/ntzen_ntzen1.m4a"
  },
  {
    word: "plangen", definition: "to plan",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: 'plangen', du: 'plangs', "hien/hatt/et": 'plangt', mir: 'plangen', dir: 'plangt', si: 'plangen' },
      pastParticiple: "geplangt", auxiliary: "hunn"
    },
    mnemonic: "", example: "Ech plangen e Bauerenhaff ze kafen." , audio: "audio/verbs/plangen_plangen1.m4a"
  },
  {
    word: "ziichten", definition: "to grow / breed / cultivate",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: 'ziichten', du: 'ziichts', "hien/hatt/et": 'ziicht', mir: 'ziichten', dir: 'ziicht', si: 'ziichten' },
      pastParticiple: "geziicht", auxiliary: "hunn"
    },
    mnemonic: "", example: "Hien ziicht Hunnegbeien." , audio: "audio/verbs/ziichten_ziichten1.m4a"
  },
  {
    word: "joggen", definition: "to jog",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: 'joggen', du: 'joggs', "hien/hatt/et": 'joggt', mir: 'joggen', dir: 'joggt', si: 'joggen' },
      pastParticiple: "gejoggt", auxiliary: "sinn"
    },
    mnemonic: "", example: "Ech gi moies am Bësch joggen." , audio: "audio/verbs/joggen_joggen1.m4a"
  },
  {
    word: "afferen", definition: "to sacrifice",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "afferen", du: "affers", "hien/hatt/et": "affert", mir: "afferen", dir: "affert", si: "afferen" },
      pastParticiple: "geaffert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/afferen_afferen1.m4a"
  },
  {
    word: "araumen", definition: "to put away",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "raumen an", du: "raums an", "hien/hatt/et": "raumt an", mir: "raumen an", dir: "raumt an", si: "raumen an" },
      pastParticiple: "ageraumt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/araumen_araumen1.m4a"
  },
  {
    word: "aschlofen", definition: "to fall asleep",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schlofen an", du: "schléifs an", "hien/hatt/et": "schléift an", mir: "schlofen an", dir: "schlooft an", si: "schlofen an" },
      pastParticiple: "ageschlof", auxiliary: "sinn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/aschlofen_aschlofen1.m4a"
  },
  {
    word: "astellen", definition: "to take on",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "stellen (mech) an", du: "stells (dech) an", "hien/hatt/et": "stellt (sech) an", mir: "stellen (eis) an", dir: "stellt (iech) an", si: "stellen (sech) an" },
      pastParticiple: "agestallt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/astellen_astellen1.m4a"
  },
  {
    word: "ausgesinn", definition: "to look (like)",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "gesinn aus", du: "gesäis aus", "hien/hatt/et": "gesäit aus", mir: "gesinn aus", dir: "gesitt aus", si: "gesinn aus" },
      pastParticiple: "ausgesinn", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/ausgesinn_ausgesinn1.m4a"
  },
  {
    word: "austauschen", definition: "to exchange",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "tauschen aus", du: "tauschs aus", "hien/hatt/et": "tauscht aus", mir: "tauschen aus", dir: "tauscht aus", si: "tauschen aus" },
      pastParticiple: "ausgetosch", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/austauschen_austauschen1.m4a"
  },
  {
    word: "auswielen", definition: "to choose",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "wielen aus", du: "wiels aus", "hien/hatt/et": "wielt aus", mir: "wielen aus", dir: "wielt aus", si: "wielen aus" },
      pastParticiple: "ausgewielt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/auswielen_auswielen1.m4a"
  },
  {
    word: "bauen", definition: "to build",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "bauen", du: "baus", "hien/hatt/et": "baut", mir: "bauen", dir: "baut", si: "bauen" },
      pastParticiple: "gebaut", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/bauen_bauen1.m4a"
  },
  {
    word: "behalen", definition: "to keep",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "behalen", du: "behäls", "hien/hatt/et": "behält", mir: "behalen", dir: "behaalt", si: "behalen" },
      pastParticiple: "behalen / behal", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/behalen_behalen1.m4a"
  },
  {
    word: "béien", definition: "to bend",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "béien (mech)", du: "béis (dech)", "hien/hatt/et": "béit (sech)", mir: "béien (eis)", dir: "béit (iech) ", si: "béien (sech) " },
      pastParticiple: "gebéit", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/bien_bien1.m4a"
  },
  {
    word: "bekennen", definition: "to confess",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "bekennen (mech)", du: "bekenns (dech)", "hien/hatt/et": "bekennt (sech)", mir: "bekennen (eis)", dir: "bekennt (iech) ", si: "bekennen (sech) " },
      pastParticiple: "bekannt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/bekennen_bekennen1.m4a"
  },
  {
    word: "benotzen", definition: "to use",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "benotzen", du: "benotz", "hien/hatt/et": "benotzt", mir: "benotzen", dir: "benotzt", si: "benotzen" },
      pastParticiple: "benotzt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/benotzen_benotzen1.m4a"
  },
  {
    word: "beréieren", definition: "to touch",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "beréieren", du: "beréiers", "hien/hatt/et": "beréiert", mir: "beréieren", dir: "beréiert", si: "beréieren" },
      pastParticiple: "beréiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/berieren_berieren1.m4a"
  },
  {
    word: "beschreiwen", definition: "to describe",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "beschreiwen", du: "beschreifs", "hien/hatt/et": "beschreift", mir: "beschreiwen", dir: "beschreift", si: "beschreiwen" },
      pastParticiple: "beschriwwen", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/beschreiwen_beschreiwen1.m4a"
  },
  {
    word: "bléien", definition: "to bloom",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "", du: "", "hien/hatt/et": "bléit / blitt", mir: "", dir: "", si: "bléien" },
      pastParticiple: "gebléit / geblitt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/blien_blien1.m4a"
  },
  {
    word: "broden", definition: "to fry",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "broden", du: "bréits / broots", "hien/hatt/et": "bréit / brot", mir: "broden", dir: "brot", si: "broden" },
      pastParticiple: "gebroden", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/broden_broden1.m4a"
  },
  {
    word: "buchen", definition: "to book",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "buchen", du: "buchs", "hien/hatt/et": "bucht", mir: "buchen", dir: "bucht", si: "buchen" },
      pastParticiple: "gebucht", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/buchen_buchen1.m4a"
  },
  {
    word: "campéieren", definition: "to camp",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "campéieren", du: "campéiers", "hien/hatt/et": "campéiert", mir: "campéieren", dir: "campéiert", si: "campéieren" },
      pastParticiple: "campéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/campieren_campieren1.m4a"
  },
  {
    word: "deelen", definition: "to share",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "deelen", du: "deels", "hien/hatt/et": "deelt (sech)", mir: "deelen", dir: "deelt", si: "deelen (sech) " },
      pastParticiple: "gedeelt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/deelen_deelen1.m4a"
  },
  {
    word: "denken", definition: "to think",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "denken", du: "denks", "hien/hatt/et": "denkt", mir: "denken", dir: "denkt", si: "denken" },
      pastParticiple: "geduecht", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/denken_denken1.m4a"
  },
  {
    word: "desinfizéieren", definition: "to disinfect",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "desinfizéieren", du: "desinfizéiers", "hien/hatt/et": "desinfizéiert", mir: "desinfizéieren", dir: "desinfizéiert", si: "desinfizéieren" },
      pastParticiple: "desinfizéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/desinfizieren_desinfizieren1.m4a"
  },
  {
    word: "doen", definition: "to do",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "doen / dinn", du: "dees", "hien/hatt/et": "deet (sech)", mir: "doen / dinn", dir: "dot / ditt", si: "doen / dinn (sech)" },
      pastParticiple: "gedoen", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/doen_doen1.m4a"
  },
  {
    word: "entdecken", definition: "to discover",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "entdecken", du: "entdecks", "hien/hatt/et": "entdeckt", mir: "entdecken", dir: "entdeckt", si: "entdecken" },
      pastParticiple: "entdeckt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/entdecken_entdecken1.m4a"
  },
  {
    word: "entscheeden", definition: "to decide (on)",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "entscheeden (mech)", du: "entscheets (dech)", "hien/hatt/et": "entscheet (sech)", mir: "entscheeden (eis)", dir: "entscheet (iech)", si: "entscheeden (sech)" },
      pastParticiple: "entscheet", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/entscheeden_entscheeden1.m4a"
  },
  {
    word: "entspanen", definition: "to defuse",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "entspanen (mech)", du: "entspaans (dech)", "hien/hatt/et": "entspaant (sech)", mir: "entspanen (eis)", dir: "entspaant (iech)", si: "entspanen (sech)" },
      pastParticiple: "entspaant", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/entspanen_entspanen1.m4a"
  },
  {
    word: "entwéckelen", definition: "to develop",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "entwéckelen (mech)", du: "entwéckels (dech)", "hien/hatt/et": "entwéckelt (sech)", mir: "entwéckelen (eis)", dir: "entwéckelt (iech) ", si: "entwéckelen (sech) " },
      pastParticiple: "entwéckelt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/entwckelen_entwckelen1.m4a"
  },
  {
    word: "erausginn", definition: "to pass out",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "ginn eraus", du: "gëss eraus", "hien/hatt/et": "gëtt eraus", mir: "ginn eraus", dir: "gitt eraus", si: "ginn eraus" },
      pastParticiple: "erausginn", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/erausginn_erausginn2.m4a"
  },
  {
    word: "eraussichen", definition: "to pick",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "sichen eraus", du: "sichs eraus", "hien/hatt/et": "sicht eraus", mir: "sichen eraus", dir: "sicht eraus", si: "sichen eraus" },
      pastParticiple: "erausgesicht", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/eraussichen_eraussichen1.m4a"
  },
  {
    word: "erlaben", definition: "to allow",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "erlaben", du: "erlaabs", "hien/hatt/et": "erlaabt", mir: "erlaben", dir: "erlaabt", si: "erlaben" },
      pastParticiple: "erlaabt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/erlaben_erlaben1.m4a"
  },
  {
    word: "erzielen", definition: "to tell",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "erzielen", du: "erziels", "hien/hatt/et": "erzielt", mir: "erzielen", dir: "erzielt", si: "erzielen" },
      pastParticiple: "erzielt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/erzielen_erzielen1.m4a"
  },
  {
    word: "feelen", definition: "to be absent",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "feelen", du: "feels", "hien/hatt/et": "feelt", mir: "feelen", dir: "feelt", si: "feelen" },
      pastParticiple: "gefeelt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/feelen_feelen1.m4a"
  },
  {
    word: "fidderen", definition: "to feed",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "fidderen", du: "fidders", "hien/hatt/et": "fiddert", mir: "fidderen", dir: "fiddert", si: "fidderen" },
      pastParticiple: "gefiddert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/fidderen_fidderen1.m4a"
  },
  {
    word: "flécken", definition: "to mend",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "flécken", du: "flécks", "hien/hatt/et": "fléckt", mir: "flécken", dir: "fléckt", si: "flécken" },
      pastParticiple: "gefléckt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/flcken_flcken1.m4a"
  },
  {
    word: "fänken", definition: "to catch",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "fänken", du: "fänks", "hien/hatt/et": "fänkt", mir: "fänken", dir: "fänkt", si: "fänken" },
      pastParticiple: "gefaangen / gefaang", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/fnken_fnken1.m4a"
  },
  {
    word: "genéissen", definition: "to savour",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "genéissen", du: "genéiss", "hien/hatt/et": "genéisst", mir: "genéissen", dir: "genéisst", si: "genéissen" },
      pastParticiple: "genoss", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/genissen_genissen1.m4a"
  },
  {
    word: "gewannen", definition: "to win",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "gewannen", du: "gewënns", "hien/hatt/et": "gewënnt", mir: "gewannen", dir: "gewannt", si: "gewannen" },
      pastParticiple: "gewonnen / gewonn", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/gewannen_gewannen1.m4a"
  },
  {
    word: "hiewen", definition: "to lift",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "hiewen (mech)", du: "hiefs (dech)", "hien/hatt/et": "hieft (sech)", mir: "hiewen (eis)", dir: "hieft (iech)", si: "hiewen (sech)" },
      pastParticiple: "gehuewen", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/hiewen_hiewen1.m4a"
  },
  {
    word: "investéieren", definition: "to invest",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "investéieren (mech)", du: "investéiers (dech)", "hien/hatt/et": "investéiert (sech)", mir: "investéieren (eis)", dir: "investéiert (iech) ", si: "investéieren (sech) " },
      pastParticiple: "investéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/investieren_investieren1.m4a"
  },
  {
    word: "iwwerleeën", definition: "to think about something",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "iwwerleeën", du: "iwwerlees", "hien/hatt/et": "iwwerleet", mir: "iwwerleeën", dir: "iwwerleet", si: "iwwerleeën" },
      pastParticiple: "iwwerluecht", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/iwwerleen_iwwerleen1.m4a"
  },
  {
    word: "iwwerweisen", definition: "to transfer",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "iwwerweisen", du: "iwwerweis", "hien/hatt/et": "iwwerweist", mir: "iwwerweisen", dir: "iwwerweist", si: "iwwerweisen" },
      pastParticiple: "iwwerwisen", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/iwwerweisen_iwwerweisen1.m4a"
  },
  {
    word: "kléngen", definition: "to sound",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "kléngen", du: "kléngs", "hien/hatt/et": "kléngt", mir: "kléngen", dir: "kléngt", si: "kléngen" },
      pastParticiple: "geklongen / geklong", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/klngen_klngen1.m4a"
  },
  {
    word: "kontrolléieren", definition: "to keep a watch on",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "kontrolléieren", du: "kontrolléiers", "hien/hatt/et": "kontrolléiert", mir: "kontrolléieren", dir: "kontrolléiert", si: "kontrolléieren" },
      pastParticiple: "kontrolléiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/kontrollieren_kontrollieren1.m4a"
  },
  {
    word: "kéieren", definition: "to turn",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "kéieren", du: "kéiers", "hien/hatt/et": "kéiert", mir: "kéieren", dir: "kéiert", si: "kéieren" },
      pastParticiple: "gekéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/kieren_kieren1.m4a"
  },
  {
    word: "këmmeren", definition: "to look after",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "këmmere mech", du: "këmmers dech", "hien/hatt/et": "këmmert sech", mir: "këmmeren eis", dir: "këmmert iech", si: "këmmeren sech" },
      pastParticiple: "gekëmmert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/kmmeren_kmmeren1.m4a"
  },
  {
    word: "langweilen", definition: "to bore",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "langweilen (mech)", du: "langweils (dech)", "hien/hatt/et": "langweilt (sech)", mir: "langweilen (eis)", dir: "langweilt (iech) ", si: "langweilen (sech) " },
      pastParticiple: "gelangweilt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/langweilen_langweilen1.m4a"
  },
  {
    word: "loossen", definition: "to leave",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "loossen", du: "léiss", "hien/hatt/et": "léisst (sech)", mir: "loossen", dir: "loosst", si: "loossen (sech)" },
      pastParticiple: "gelooss", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/loossen_loossen1.m4a"
  },
  {
    word: "mierken", definition: "to notice",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "mierken", du: "mierks", "hien/hatt/et": "mierkt", mir: "mierken", dir: "mierkt", si: "mierken" },
      pastParticiple: "gemierkt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/mierken_mierken1.m4a"
  },
  {
    word: "motivéieren", definition: "to motivate",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "motivéieren", du: "motivéiers", "hien/hatt/et": "motivéiert", mir: "motivéieren", dir: "motivéiert", si: "motivéieren" },
      pastParticiple: "motivéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/motivieren_motivieren1.m4a"
  },
  {
    word: "méien", definition: "to mow",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "méien", du: "méis", "hien/hatt/et": "méit", mir: "méien", dir: "méit", si: "méien" },
      pastParticiple: "geméit", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/mien_mien1.m4a"
  },
  {
    word: "nodenken", definition: "to think (about)",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "denken no", du: "denks no", "hien/hatt/et": "denkt no", mir: "denken no", dir: "denkt no", si: "denken no" },
      pastParticiple: "nogeduecht", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/nodenken_nodenken1.m4a"
  },
  {
    word: "notéieren", definition: "to note",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "notéieren", du: "notéiers", "hien/hatt/et": "notéiert", mir: "notéieren", dir: "notéiert", si: "notéieren" },
      pastParticiple: "notéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/notieren_notieren1.m4a"
  },
  {
    word: "ofbauen", definition: "to extract",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "bauen of", du: "baus of", "hien/hatt/et": "baut of", mir: "bauen of", dir: "baut of", si: "bauen of" },
      pastParticiple: "ofgebaut", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/ofbauen_ofbauen1.m4a"
  },
  {
    word: "opbauen", definition: "to set up",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "bauen op", du: "baus op", "hien/hatt/et": "baut op", mir: "bauen op", dir: "baut op", si: "bauen op" },
      pastParticiple: "opgebaut", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/opbauen_opbauen1.m4a"
  },
  {
    word: "opbotzen", definition: "to mop up",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "botzen op", du: "botz op", "hien/hatt/et": "botzt op", mir: "botzen op", dir: "botzt op", si: "botzen op" },
      pastParticiple: "opgebotzt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/opbotzen_opbotzen1.m4a"
  },
  {
    word: "opferen", definition: "to sacrifice",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "opferen", du: "opfers", "hien/hatt/et": "opfert", mir: "opferen", dir: "opfert", si: "opferen" },
      pastParticiple: "geopfert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/opferen_opferen1.m4a"
  },
  {
    word: "opginn", definition: "to give up",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "ginn op", du: "gëss op", "hien/hatt/et": "gëtt op", mir: "ginn op", dir: "gitt op", si: "ginn op" },
      pastParticiple: "opginn", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/opginn_opginn1.m4a"
  },
  {
    word: "ophalen", definition: "to hold open",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "halen (mech) op", du: "häls (dech) op", "hien/hatt/et": "hält (sech) op", mir: "halen (eis) op", dir: "haalt (iech) op", si: "halen (sech) op" },
      pastParticiple: "opgehalen / opgehal", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/ophalen_ophalen1.m4a"
  },
  {
    word: "oplueden", definition: "to load",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "lueden (mech) op", du: "luets (dech) op", "hien/hatt/et": "luet (sech) op", mir: "lueden (eis) op", dir: "luet (iech) op", si: "lueden (sech) op" },
      pastParticiple: "opgelueden", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/oplueden_oplueden1.m4a"
  },
  {
    word: "opwuessen", definition: "to grow up",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "wuessen op", du: "wiiss op", "hien/hatt/et": "wiisst op", mir: "wuessen op", dir: "wuesst op", si: "wuessen op" },
      pastParticiple: "opgewuess", auxiliary: "sinn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/opwuessen_opwuessen1.m4a"
  },
  {
    word: "parken", definition: "to park",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "parken", du: "parks", "hien/hatt/et": "parkt", mir: "parken", dir: "parkt", si: "parken" },
      pastParticiple: "geparkt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/parken_parken1.m4a"
  },
  {
    word: "passen", definition: "to fit",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "passen", du: "pass", "hien/hatt/et": "passt (sech)", mir: "passen", dir: "passt", si: "passen (sech)" },
      pastParticiple: "gepasst", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/passen_passen2.m4a"
  },
  {
    word: "produzéieren", definition: "to produce",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "produzéieren (mech)", du: "produzéiers (dech)", "hien/hatt/et": "produzéiert (sech)", mir: "produzéieren (eis)", dir: "produzéiert (iech) ", si: "produzéieren (sech) " },
      pastParticiple: "produzéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/produzieren_produzieren1.m4a"
  },
  {
    word: "reagéieren", definition: "to react (to)",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "reagéieren", du: "reagéiers", "hien/hatt/et": "reagéiert", mir: "reagéieren", dir: "reagéiert", si: "reagéieren" },
      pastParticiple: "reagéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/reagieren_reagieren1.m4a"
  },
  {
    word: "ruffen", definition: "to call",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "ruffen", du: "riffs", "hien/hatt/et": "rifft", mir: "ruffen", dir: "rufft", si: "ruffen" },
      pastParticiple: "geruff", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/ruffen_ruffen1.m4a"
  },
  {
    word: "salzen", definition: "to salt",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "salzen", du: "salz", "hien/hatt/et": "salzt", mir: "salzen", dir: "salzt", si: "salzen" },
      pastParticiple: "gesalzt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/salzen_salzen1.m4a"
  },
  {
    word: "schafen", definition: "to create",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schafen", du: "schaafs", "hien/hatt/et": "schaaft", mir: "schafen", dir: "schaaft", si: "schafen" },
      pastParticiple: "geschafen / geschaf / geschaaft", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/schafen_schafen1.m4a"
  },
  {
    word: "scheien", definition: "to shy from",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "scheien (mech)", du: "scheis (dech)", "hien/hatt/et": "scheit (sech)", mir: "scheien (eis)", dir: "scheit (iech) ", si: "scheien (sech) " },
      pastParticiple: "gescheit", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/scheien_scheien1.m4a"
  },
  {
    word: "schenken", definition: "to give",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schenken", du: "schenks", "hien/hatt/et": "schenkt", mir: "schenken", dir: "schenkt", si: "schenken" },
      pastParticiple: "geschenkt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/schenken_schenken1.m4a"
  },
  {
    word: "schleideren", definition: "to be hurled",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schleideren", du: "schleiders", "hien/hatt/et": "schleidert", mir: "schleideren", dir: "schleidert", si: "schleideren" },
      pastParticiple: "geschleidert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/schleideren_schleideren2.m4a"
  },
  {
    word: "schloen", definition: "to hit",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schloen (mech)", du: "schléis (dech)", "hien/hatt/et": "schléit (sech)", mir: "schloen (eis)", dir: "schlot (iech)", si: "schloen (sech)" },
      pastParticiple: "geschloen", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/schloen_schloen1.m4a"
  },
  {
    word: "schléissen", definition: "to take to one's heart",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schléissen", du: "schléiss", "hien/hatt/et": "schléisst", mir: "schléissen", dir: "schléisst", si: "schléissen" },
      pastParticiple: "geschloss", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/schlissen_schlissen1.m4a"
  },
  {
    word: "schmaachen", definition: "to taste",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schmaachen", du: "schmaachs", "hien/hatt/et": "schmaacht", mir: "schmaachen", dir: "schmaacht", si: "schmaachen" },
      pastParticiple: "geschmaacht", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/schmaachen_schmaachen1.m4a"
  },
  {
    word: "schweessen", definition: "to sweat",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schweessen", du: "schweess", "hien/hatt/et": "schweesst", mir: "schweessen", dir: "schweesst", si: "schweessen" },
      pastParticiple: "geschweesst", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/schweessen_schweessen1.m4a"
  },
  {
    word: "schützen", definition: "to protect",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "schützen", du: "schütz", "hien/hatt/et": "schützt", mir: "schützen", dir: "schützt", si: "schützen" },
      pastParticiple: "geschützt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/schtzen_schtzen1.m4a"
  },
  {
    word: "séien", definition: "to sow",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "séien", du: "séis", "hien/hatt/et": "séit", mir: "séien", dir: "séit", si: "séien" },
      pastParticiple: "geséit", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/sien_sien1.m4a"
  },
  {
    word: "sëtzen", definition: "to sit",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "sëtzen", du: "sëtz", "hien/hatt/et": "sëtzt", mir: "sëtzen", dir: "sëtzt", si: "sëtzen" },
      pastParticiple: "gesiess", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/stzen_stzen1.m4a"
  },
  {
    word: "trainéieren", definition: "to train",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "trainéieren", du: "trainéiers", "hien/hatt/et": "trainéiert", mir: "trainéieren", dir: "trainéiert", si: "trainéieren" },
      pastParticiple: "trainéiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/trainieren_trainieren1.m4a"
  },
  {
    word: "ubidden", definition: "to offer",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "bidden (mech) un", du: "bitts (dech) un", "hien/hatt/et": "bitt (sech) un", mir: "bidden (eis) un", dir: "bitt (iech) un", si: "bidden (sech) un" },
      pastParticiple: "ugebueden", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/ubidden_ubidden1.m4a"
  },
  {
    word: "unhunn", definition: "to wear",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "hunn un", du: "hues un", "hien/hatt/et": "huet un", mir: "hunn un", dir: "hutt un", si: "hunn un" },
      pastParticiple: "ugehat", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/unhunn_unhunn1.m4a"
  },
  {
    word: "verbesseren", definition: "to improve",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "verbesseren (mech)", du: "verbessers (dech)", "hien/hatt/et": "verbessert (sech)", mir: "verbesseren (eis)", dir: "verbessert (iech) ", si: "verbesseren (sech) " },
      pastParticiple: "verbessert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/verbesseren_verbesseren1.m4a"
  },
  {
    word: "verbréngen", definition: "to spend",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "verbréngen", du: "verbréngs", "hien/hatt/et": "verbréngt", mir: "verbréngen", dir: "verbréngt", si: "verbréngen" },
      pastParticiple: "verbruecht", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/verbrngen_verbrngen1.m4a"
  },
  {
    word: "verdéngen", definition: "to earn",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "verdéngen", du: "verdéngs", "hien/hatt/et": "verdéngt", mir: "verdéngen", dir: "verdéngt", si: "verdéngen" },
      pastParticiple: "verdéngt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/verdngen_verdngen1.m4a"
  },
  {
    word: "versichen", definition: "to try to",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "versichen", du: "versichs", "hien/hatt/et": "versicht", mir: "versichen", dir: "versicht", si: "versichen" },
      pastParticiple: "versicht", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/versichen_versichen1.m4a"
  },
  {
    word: "virbereeden", definition: "to prepare for",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "bereede vir", du: "bereets vir", "hien/hatt/et": "bereet vir", mir: "bereede vir", dir: "bereet vir", si: "bereede vir" },
      pastParticiple: "virbereet", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/virbereeden_virbereeden1.m4a"
  },
  {
    word: "virstellen", definition: "to introduce",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "stellen (mech) vir", du: "stells (dech) vir", "hien/hatt/et": "stellt (sech) vir", mir: "stellen (eis) vir", dir: "stellt (iech) vir", si: "stellen (sech) vir" },
      pastParticiple: "virgestallt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/virstellen_virstellen1.m4a"
  },
  {
    word: "wielen", definition: "to pick",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "wielen", du: "wiels", "hien/hatt/et": "wielt", mir: "wielen", dir: "wielt", si: "wielen" },
      pastParticiple: "gewielt", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/wielen_wielen1.m4a"
  },
  {
    word: "wieren", definition: "to intervene",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "wieren (mech)", du: "wiers (dech)", "hien/hatt/et": "wiert (sech)", mir: "wieren (eis)", dir: "wiert (iech) ", si: "wieren (sech) " },
      pastParticiple: "gewiert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/wieren_wieren1.m4a"
  },
  {
    word: "wuessen", definition: "to grow",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "wuessen", du: "wiiss", "hien/hatt/et": "wiisst", mir: "wuessen", dir: "wuesst", si: "wuessen" },
      pastParticiple: "gewuess", auxiliary: "sinn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/wuessen_wuessen1.m4a"
  },
  {
    word: "wäissen", definition: "to whitewash",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "wäissen", du: "wäiss", "hien/hatt/et": "wäisst", mir: "wäissen", dir: "wäisst", si: "wäissen" },
      pastParticiple: "gewäisst", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/wissen_wissen1.m4a"
  },
  {
    word: "wëschen", definition: "to wipe (with)",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "wëschen", du: "wëschs", "hien/hatt/et": "wëscht", mir: "wëschen", dir: "wëscht", si: "wëschen" },
      pastParticiple: "gewëscht", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/wschen_wschen2.m4a"
  },
  {
    word: "änneren", definition: "to change",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "änneren (mech)", du: "änners (dech)", "hien/hatt/et": "ännert (sech)", mir: "änneren (eis)", dir: "ännert (iech) ", si: "änneren (sech) " },
      pastParticiple: "geännert", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/nneren_nneren1.m4a"
  },
  {
    word: "ëmtauschen", definition: "to exchange",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: "tauschen ëm", du: "tauschs ëm", "hien/hatt/et": "tauscht ëm", mir: "tauschen ëm", dir: "tauscht ëm", si: "tauschen ëm" },
      pastParticiple: "ëmgetosch", auxiliary: "hunn"
    },
    mnemonic: "", example: "" , audio: "audio/verbs/mtauschen_mtauschen1.m4a"
  },
  {
    word: "ausbauen", definition: "to expand / enlarge",
    type: "verb", themes: [],
    conjugation: {
      present: { ech: 'bauen aus', du: 'baus aus', "hien/hatt/et": 'baut aus', mir: 'bauen aus', dir: 'baut aus', si: 'bauen aus' },
      pastParticiple: "ausgebaut", auxiliary: "hunn"
    },
    mnemonic: "", example: "Mir plangen, eisen Imkereibetrib auszebauen." , audio: "audio/verbs/ausbauen_ausbauen1.m4a"
  }
);
