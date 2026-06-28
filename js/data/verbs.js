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
  }
);
