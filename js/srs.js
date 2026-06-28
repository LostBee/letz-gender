/**
 * Lëtz Vocab — Spaced Repetition System (SRS)
 *
 * Leitner-box system stored in localStorage.
 *
 * Boxes:
 *   0  — New (never reviewed)
 *   1  — Learning    (review in ~1 day)
 *   2  — Familiar    (review in ~3 days)
 *   3  — Known       (review in ~7 days)
 *   4  — Strong      (review in ~14 days)
 *   5  — Mastered    (review in ~30 days)
 *
 * When answered correctly  → move up one box (max 5).
 * When answered incorrectly → drop back to box 1.
 *
 * User-editable mnemonics and example sentences are also stored here.
 */
(function () {
  'use strict';

  const STORAGE_KEY  = 'letzVocab_srs';
  const USER_DATA_KEY = 'letzVocab_userData';

  /** Review intervals per box (in milliseconds). */
  const BOX_INTERVALS = [
    0,                          // 0 — New: always due
    1  * 24 * 60 * 60 * 1000,   // 1 — 1 day
    3  * 24 * 60 * 60 * 1000,   // 2 — 3 days
    7  * 24 * 60 * 60 * 1000,   // 3 — 7 days
    14 * 24 * 60 * 60 * 1000,   // 4 — 14 days
    30 * 24 * 60 * 60 * 1000,   // 5 — 30 days
  ];

  /* ------------------------------------------------------------------
     PERSISTENCE
     ------------------------------------------------------------------ */
  function loadSRS() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch { return {}; }
  }

  function saveSRS(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function loadUserData() {
    try {
      return JSON.parse(localStorage.getItem(USER_DATA_KEY)) || {};
    } catch { return {}; }
  }

  function saveUserData(data) {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
  }

  /* ------------------------------------------------------------------
     WORD KEY
     ------------------------------------------------------------------ */
  /**
   * Build a stable key for a word.
   * Format: "<type>:<word>" e.g. "noun:Haus", "verb:schwätzen"
   */
  function wordKey(wordObj) {
    const t = wordObj.type || 'noun';
    return `${t}:${wordObj.word}`;
  }

  /* ------------------------------------------------------------------
     SRS RECORD MANAGEMENT
     ------------------------------------------------------------------ */

  /** Get or initialise a record for a word. */
  function getRecord(wordObj) {
    const data = loadSRS();
    const key  = wordKey(wordObj);
    if (!data[key]) {
      data[key] = {
        box:          0,
        nextReview:   0,
        lastReviewed: 0,
        timesCorrect: 0,
        timesWrong:   0,
      };
      saveSRS(data);
    }
    return data[key];
  }

  /** Mark a word as answered correctly. */
  function markCorrect(wordObj) {
    const data = loadSRS();
    const key  = wordKey(wordObj);
    const rec  = data[key] || { box: 0, nextReview: 0, lastReviewed: 0, timesCorrect: 0, timesWrong: 0 };

    rec.box = Math.min(rec.box + 1, 5);
    rec.lastReviewed = Date.now();
    rec.nextReview   = Date.now() + BOX_INTERVALS[rec.box];
    rec.timesCorrect = (rec.timesCorrect || 0) + 1;

    data[key] = rec;
    saveSRS(data);
    return rec;
  }

  /** Mark a word as answered incorrectly. */
  function markWrong(wordObj) {
    const data = loadSRS();
    const key  = wordKey(wordObj);
    const rec  = data[key] || { box: 0, nextReview: 0, lastReviewed: 0, timesCorrect: 0, timesWrong: 0 };

    rec.box = 1;
    rec.lastReviewed = Date.now();
    rec.nextReview   = Date.now() + BOX_INTERVALS[1];
    rec.timesWrong   = (rec.timesWrong || 0) + 1;

    data[key] = rec;
    saveSRS(data);
    return rec;
  }

  /** Check if a word is due for review. */
  function isDue(wordObj) {
    const rec = getRecord(wordObj);
    return rec.box !== -1 && (rec.box === 0 || Date.now() >= rec.nextReview);
  }

  /**
   * Sort words so due items come first, then by box (lowest first),
   * then by nextReview (earliest first).
   * Returns a new array.
   */
  function sortByDue(words) {
    const data = loadSRS();
    return [...words].sort((a, b) => {
      const ra = data[wordKey(a)] || { box: 0, nextReview: 0 };
      const rb = data[wordKey(b)] || { box: 0, nextReview: 0 };

      const aDue = ra.box !== -1 && (ra.box === 0 || Date.now() >= ra.nextReview);
      const bDue = rb.box !== -1 && (rb.box === 0 || Date.now() >= rb.nextReview);

      // Due items first
      if (aDue !== bDue) return aDue ? -1 : 1;

      // Within due/not-due groups: lower box first
      if (ra.box !== rb.box) return ra.box - rb.box;

      // Same box: earlier review first
      return ra.nextReview - rb.nextReview;
    });
  }

  /**
   * Get stats for a list of words.
   * Returns { total, newCount, learning, mastered, dueCount, ignoredCount }
   */
  function getStats(words) {
    const data = loadSRS();
    let newCount = 0, learning = 0, mastered = 0, dueCount = 0, ignoredCount = 0;

    words.forEach(w => {
      const rec = data[wordKey(w)] || { box: 0, nextReview: 0 };
      if (rec.box === -1)         ignoredCount++;
      else if (rec.box === 0)     newCount++;
      else if (rec.box >= 4)      mastered++;
      else                        learning++;

      if (rec.box !== -1 && (rec.box === 0 || Date.now() >= rec.nextReview)) dueCount++;
    });

    return { total: words.length, newCount, learning, mastered, dueCount, ignoredCount };
  }

  /** Get the box label for display. */
  function boxLabel(box) {
    if (box === -1) return 'Net wichteg';
    const labels = ['Nei', 'Geléiert', 'Getest', 'Confirméiert', 'Staark', 'Gemeeschtert'];
    return labels[box] || 'Nei';
  }

  /** Get a CSS class for the box. */
  function boxClass(box) {
    if (box === -1) return 'srs-ignored';
    const classes = ['srs-new', 'srs-learning', 'srs-familiar', 'srs-known', 'srs-strong', 'srs-mastered'];
    return classes[box] || 'srs-new';
  }

  /* ------------------------------------------------------------------
     USER DATA (mnemonics & example sentences)
     ------------------------------------------------------------------ */

  /** Get user-set mnemonic for a word. */
  function getMnemonic(wordObj) {
    const data = loadUserData();
    const key  = wordKey(wordObj);
    return (data[key] && data[key].mnemonic) || wordObj.mnemonic || '';
  }

  /** Set user mnemonic for a word. */
  function setMnemonic(wordObj, text) {
    const data = loadUserData();
    const key  = wordKey(wordObj);
    if (!data[key]) data[key] = {};
    data[key].mnemonic = text;
    saveUserData(data);
  }

  /** Get user-set example sentence for a word. */
  function getExample(wordObj) {
    const data = loadUserData();
    const key  = wordKey(wordObj);
    return (data[key] && data[key].example) || wordObj.example || '';
  }

  /** Set user example sentence for a word. */
  function setExample(wordObj, text) {
    const data = loadUserData();
    const key  = wordKey(wordObj);
    if (!data[key]) data[key] = {};
    data[key].example = text;
    saveUserData(data);
  }

  /* ------------------------------------------------------------------
     WORD OVERRIDES (inline editing)
     ------------------------------------------------------------------ */

  /** Get user overrides for a word (edited fields). */
  function getOverrides(wordObj) {
    const data = loadUserData();
    const key  = wordKey(wordObj);
    return (data[key] && data[key].overrides) || null;
  }

  /** Set user overrides for a word. */
  function setOverrides(wordObj, overrides) {
    const data = loadUserData();
    const key  = wordKey(wordObj);
    if (!data[key]) data[key] = {};
    data[key].overrides = overrides;
    saveUserData(data);
  }

  /** Manually set the SRS box for a word. */
  function setBox(wordObj, box) {
    const data = loadSRS();
    const key  = wordKey(wordObj);
    const rec  = data[key] || { box: 0, nextReview: 0, lastReviewed: 0, timesCorrect: 0, timesWrong: 0 };
    rec.box = box;
    rec.lastReviewed = Date.now();
    rec.nextReview   = Date.now() + BOX_INTERVALS[box];
    data[key] = rec;
    saveSRS(data);
    return rec;
  }

  /* ------------------------------------------------------------------
     PUBLIC API
     ------------------------------------------------------------------ */
  window.LetzSRS = {
    wordKey,
    getRecord,
    markCorrect,
    markWrong,
    isDue,
    sortByDue,
    getStats,
    boxLabel,
    boxClass,
    getMnemonic,
    setMnemonic,
    getExample,
    setExample,
    getOverrides,
    setOverrides,
    setBox,
  };

})();
