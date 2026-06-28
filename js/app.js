/**
 * Lëtz Vocab — Main Application
 *
 * Hash-based SPA with views:
 *   #/                → Home (themes grid + word-type cards)
 *   #/topic/:id       → Topic detail (word table + actions)
 *   #/train/:id       → Flashcard training for a topic
 *   #/test/:id        → Gender quiz for a topic → summary
 *   #/words/:type     → Word list by type (verbs, adjectives)
 *   #/learn/:type     → SRS-powered flashcard learning by type
 *   #/learn/nouns     → SRS-powered noun learning across all themes
 *   #/test-type/:type → Vocabulary test by word type
 */
(function () {
  'use strict';

  /* ====================================================================
     DATA & CONFIG
     ==================================================================== */
  const LG       = window.LetzGender;
  const topics   = LG.topics || [];
  const verbs    = LG.verbs || [];
  const adjectives = LG.adjectives || [];
  const SRS      = window.LetzSRS;
  const app      = document.getElementById('app');

  // Initialize custom topic
  let customTopic = topics.find(t => t.id === 'custom');
  if (!customTopic) {
    customTopic = {
      id: 'custom',
      name: 'Eege Wierder',
      nameEn: 'Custom Nouns',
      icon: '✍️',
      words: []
    };
    topics.push(customTopic);
  }

  // Load custom words from local storage
  function loadCustomWords() {
    try {
      const custom = JSON.parse(localStorage.getItem('letzVocab_customWords') || '[]');
      custom.forEach(w => {
        if (w.type === 'noun') {
          let t = topics.find(topic => topic.id === (w.topic || 'custom'));
          if (!t) {
            t = customTopic;
          }
          w._topic = t.id;
          if (!t.words.some(wordObj => wordObj.word === w.word)) {
            t.words.push(w);
          }
        } else if (w.type === 'verb') {
          if (!verbs.some(wordObj => wordObj.word === w.word)) {
            verbs.push(w);
          }
        } else if (w.type === 'adjective' || w.type === 'adjective/adverb') {
          if (!adjectives.some(wordObj => wordObj.word === w.word)) {
            adjectives.push(w);
          }
        }
      });
    } catch (e) {
      console.error("Error loading custom words:", e);
    }
  }
  loadCustomWords();

  const GENDER = {
    m: { label: 'Maskulin', cssClass: 'gender-m' },
    f: { label: 'Feminin',  cssClass: 'gender-f' },
    n: { label: 'Neutrum',  cssClass: 'gender-n' },
  };

  const TYPE_META = {
    noun:              { label: 'Substantiv',      pluralLabel: 'Substantiven',  icon: '📦', cssClass: 'type-noun' },
    verb:              { label: 'Verb',             pluralLabel: 'Verben',        icon: '⚡', cssClass: 'type-verb' },
    adjective:         { label: 'Adjektiv',         pluralLabel: 'Adjektiven',    icon: '🎨', cssClass: 'type-adj' },
    'adjective/adverb':{ label: 'Adjektiv/Adverb',  pluralLabel: 'Adj./Adv.',     icon: '🎨', cssClass: 'type-adj' },
    adverb:            { label: 'Adverb',           pluralLabel: 'Adverben',      icon: '💫', cssClass: 'type-other' },
  };

  /* ====================================================================
     STATE
     ==================================================================== */
  let state = {
    // Topic training
    trainOrder:    [],
    trainIndex:    0,
    trainRevealed: false,
    // Topic testing
    testOrder:     [],
    testIndex:     0,
    testAnswers:   [],
    testFeedback:     false,
    testHideLanguage: 'none',
    // SRS Learn
    learnWords:    [],
    learnIndex:    0,
    learnRevealed: false,
    learnType:     '',
    // List view
    listFilter:    'important',  // 'important', 'all', or box number -1 to 5
    listEditKey:   null,   // wordKey of word being edited, null = none
    listType:      '',     // 'nouns', 'verbs', 'adjectives'
    currentView:   '',     // tracks the active view route
    // Word-type testing
    ttWords:       [],
    ttIndex:       0,
    ttAnswers:     [],
    ttFeedback:    false,
    ttRevealed:    false,
    ttHide:        'none',
    ttType:        '',
  };

  /* ====================================================================
     UTILITIES
     ==================================================================== */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getTopic(id) {
    return topics.find(t => t.id === id);
  }

  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function audioBtn(word) {
    if (!word.audio) return '';
    return `<button class="audio-btn" data-audio="${esc(word.audio)}" title="Lauschteren">🔊</button>`;
  }

  function bindAudioButtons() {
    document.querySelectorAll('.audio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = btn.dataset.audio;
        if (!src) return;
        if (window._letzAudio) { window._letzAudio.pause(); }
        const audio = new Audio(src);
        window._letzAudio = audio;
        btn.classList.add('playing');
        audio.addEventListener('ended', () => btn.classList.remove('playing'));
        audio.addEventListener('error', () => btn.classList.remove('playing'));
        audio.play();
      });
    });
  }

  function bindClick(id, fn) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', fn);
  }

  /** Get all nouns across all topics. */
  function getAllNouns() {
    const all = [];
    const seen = new Set();
    topics.forEach(t => {
      t.words.forEach(w => {
        const key = w.word;
        if (!seen.has(key)) {
          seen.add(key);
          all.push({ ...w, type: w.type || 'noun', _topic: t.id });
        }
      });
    });
    return all;
  }

  /** Get the type metadata for a word. */
  function getTypeMeta(wordObj) {
    const t = wordObj.type || 'noun';
    return TYPE_META[t] || TYPE_META['noun'];
  }

  /** Format relative time until review. */
  function formatNextReview(rec) {
    if (rec.box === 0) return 'Nei';
    const diff = rec.nextReview - Date.now();
    if (diff <= 0) return 'Fälleg!';
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 24) return `an ${hours}h`;
    const days = Math.floor(hours / 24);
    return `an ${days}d`;
  }

  /** Apply user overrides to a word object for display. */
  function applyOverrides(word) {
    const ov = SRS.getOverrides(word);
    if (!ov) return word;
    const result = { ...word };
    // Apply top-level overrides (definition, article, plural, gender, word)
    for (const k of Object.keys(ov)) {
      if (k === 'conjugation') continue; // handled below
      result[k] = ov[k];
    }
    // Deep merge conjugation
    if (ov.conjugation && word.conjugation) {
      result.conjugation = { ...word.conjugation, ...ov.conjugation };
      if (ov.conjugation.present) {
        result.conjugation.present = { ...word.conjugation.present, ...ov.conjugation.present };
      }
    } else if (ov.conjugation) {
      result.conjugation = ov.conjugation;
    }
    return result;
  }

  /** Get words for a type, with overrides applied. */
  function getWordsForType(type) {
    switch (type) {
      case 'nouns':      return getAllNouns().map(applyOverrides);
      case 'verbs':      return verbs.map(v => applyOverrides({ ...v }));
      case 'adjectives': return adjectives.map(a => applyOverrides({ ...a }));
      default:           return [];
    }
  }

  /** Get the raw (un-overridden) word for SRS key lookups. */
  function getRawWordsForType(type) {
    switch (type) {
      case 'nouns':      return getAllNouns();
      case 'verbs':      return verbs.map(v => ({ ...v }));
      case 'adjectives': return adjectives.map(a => ({ ...a }));
      default:           return [];
    }
  }

  /** Render mnemonic + example sections for a flashcard. */
  function renderMnemonicSections(word) {
    const mnemonic = SRS.getMnemonic(word);
    const example  = SRS.getExample(word);

    let h = '';
    // Mnemonic
    h += '<div class="mnemonic-section">';
    h += '  <div class="mnemonic-header">';
    h += '    <span class="mnemonic-icon">💡</span>';
    h += '    <span class="mnemonic-label">Eselsbrécken</span>';
    h += '    <button class="edit-btn" id="btn-edit-mnemonic" title="Änneren">✏️</button>';
    h += '  </div>';
    h += `  <div class="mnemonic-text" id="mnemonic-display">${mnemonic ? esc(mnemonic) : '<span class=\\"placeholder\\">Klick ✏️ fir eng Eselsbrécke bäizesetzen...</span>'}</div>`;
    h += `  <div class="mnemonic-edit hidden" id="mnemonic-edit-area">`;
    h += `    <textarea class="mnemonic-input" id="mnemonic-input" rows="2" placeholder="Deng Eselsbrécke...">${esc(mnemonic)}</textarea>`;
    h += `    <button class="btn btn-sm btn-primary" id="btn-save-mnemonic">Späicheren</button>`;
    h += `  </div>`;
    h += '</div>';

    // Example
    h += '<div class="example-section">';
    h += '  <div class="mnemonic-header">';
    h += '    <span class="mnemonic-icon">💬</span>';
    h += '    <span class="mnemonic-label">Beispillsaz</span>';
    h += '    <button class="edit-btn" id="btn-edit-example" title="Änneren">✏️</button>';
    h += '  </div>';
    h += `  <div class="mnemonic-text" id="example-display">${example ? esc(example) : '<span class=\\"placeholder\\">Klick ✏️ fir e Beispillsaz bäizesetzen...</span>'}</div>`;
    h += `  <div class="mnemonic-edit hidden" id="example-edit-area">`;
    h += `    <textarea class="mnemonic-input" id="example-input" rows="2" placeholder="E Beispillsaz...">${esc(example)}</textarea>`;
    h += `    <button class="btn btn-sm btn-primary" id="btn-save-example">Späicheren</button>`;
    h += `  </div>`;
    h += '</div>';

    return h;
  }

  /** Bind mnemonic + example edit buttons. */
  function bindMnemonicEditing(word, rerenderFn) {
    bindClick('btn-edit-mnemonic', () => {
      document.getElementById('mnemonic-display').classList.add('hidden');
      document.getElementById('mnemonic-edit-area').classList.remove('hidden');
      document.getElementById('mnemonic-input').focus();
    });
    bindClick('btn-save-mnemonic', () => {
      const val = document.getElementById('mnemonic-input').value.trim();
      SRS.setMnemonic(word, val);
      rerenderFn();
    });
    bindClick('btn-edit-example', () => {
      document.getElementById('example-display').classList.add('hidden');
      document.getElementById('example-edit-area').classList.remove('hidden');
      document.getElementById('example-input').focus();
    });
    bindClick('btn-save-example', () => {
      const val = document.getElementById('example-input').value.trim();
      SRS.setExample(word, val);
      rerenderFn();
    });
  }

  /* ====================================================================
     MANUAL WORD ADDITION OVERLAY
     ==================================================================== */
  function injectAddWordModal() {
    if (document.getElementById('add-word-modal')) return;

    const modalHtml = `
      <div id="add-word-modal" class="modal-backdrop">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Neit Wuert bäisetzen</h2>
            <button id="close-add-modal" class="close-modal-btn">&times;</button>
          </div>
          <form id="add-word-form" class="modal-form">
            <div class="form-group">
              <label for="add-word-type">Wuert-Typ</label>
              <select id="add-word-type" name="type">
                <option value="noun">Substantiv (Noun)</option>
                <option value="verb">Verb</option>
                <option value="adjective">Adjektiv (Adjective)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="add-word-input">Wuert (Luxembourgish)</label>
              <input type="text" id="add-word-input" name="word" required placeholder="z.B. Haus" />
            </div>

            <div class="form-group">
              <label for="add-word-def">Definitioun (English)</label>
              <input type="text" id="add-word-def" name="definition" required placeholder="z.B. house" />
            </div>

            <!-- Noun Specific Fields -->
            <div id="noun-fields" class="modal-form-section">
              <div class="form-row">
                <div class="form-group">
                  <label for="add-noun-article">Artikel</label>
                  <input type="text" id="add-noun-article" name="article" placeholder="z.B. dat" />
                </div>
                <div class="form-group">
                  <label for="add-noun-plural">Plural</label>
                  <input type="text" id="add-noun-plural" name="plural" placeholder="z.B. d&#39;Haiser" />
                </div>
              </div>
              <div class="form-row" style="margin-top: 12px;">
                <div class="form-group">
                  <label for="add-noun-gender">Geschlecht</label>
                  <select id="add-noun-gender" name="gender">
                    <option value="m">Maskulin</option>
                    <option value="f">Feminin</option>
                    <option value="n" selected>Neutrum</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="add-noun-topic">Thema (Topic)</label>
                  <select id="add-noun-topic" name="topic">
                  </select>
                </div>
              </div>
            </div>

            <!-- Verb Specific Fields -->
            <div id="verb-fields" class="modal-form-section" style="display: none;">
              <div class="form-row">
                <div class="form-group">
                  <label for="add-verb-pp">Partizip Perfekt</label>
                  <input type="text" id="add-verb-pp" name="pastParticiple" placeholder="z.B. akaaft" />
                </div>
                <div class="form-group">
                  <label for="add-verb-aux">Hëllefsverb</label>
                  <select id="add-verb-aux" name="auxiliary">
                    <option value="hunn" selected>hunn</option>
                    <option value="sinn">sinn</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group" style="margin-top: 12px;">
                <span class="edit-section-title" style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); display: block; margin-bottom: 8px;">Konjugatioun (Präsens)</span>
                <div class="form-row">
                  <div class="form-group">
                    <label for="conj-ech" style="font-size: 0.8rem;">ech</label>
                    <input type="text" id="conj-ech" name="conj_ech" placeholder="kafen" />
                  </div>
                  <div class="form-group">
                    <label for="conj-du" style="font-size: 0.8rem;">du</label>
                    <input type="text" id="conj-du" name="conj_du" placeholder="keefs" />
                  </div>
                </div>
                <div class="form-row" style="margin-top: 8px;">
                  <div class="form-group">
                    <label for="conj-hien" style="font-size: 0.8rem;">hien/hatt/et</label>
                    <input type="text" id="conj-hien" name="conj_hien_hatt_et" placeholder="keeft" />
                  </div>
                  <div class="form-group">
                    <label for="conj-mir" style="font-size: 0.8rem;">mir</label>
                    <input type="text" id="conj-mir" name="conj_mir" placeholder="kafen" />
                  </div>
                </div>
                <div class="form-row" style="margin-top: 8px;">
                  <div class="form-group">
                    <label for="conj-dir" style="font-size: 0.8rem;">dir</label>
                    <input type="text" id="conj-dir" name="conj_dir" placeholder="kaaft" />
                  </div>
                  <div class="form-group">
                    <label for="conj-si" style="font-size: 0.8rem;">si</label>
                    <input type="text" id="conj-si" name="conj_si" placeholder="kafen" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Adjective Specific Fields -->
            <div id="adj-fields" class="modal-form-section" style="display: none;">
              <div class="form-group">
                <label for="add-adj-type">Typ</label>
                <select id="add-adj-type" name="adjType">
                  <option value="adjective" selected>Adjektiv</option>
                  <option value="adjective/adverb">Adjektiv/Adverb</option>
                  <option value="adverb">Adverb</option>
                </select>
              </div>
            </div>

            <!-- Common Additional Fields -->
            <div class="form-group">
              <label for="add-word-example">Beispill-Saz</label>
              <input type="text" id="add-word-example" name="example" placeholder="z.B. Ech kafen am Supermarché an." />
            </div>

            <div class="form-group">
              <label for="add-word-mnemonic">Mnemonic (Eselsbréck)</label>
              <input type="text" id="add-word-mnemonic" name="mnemonic" placeholder="z.B. sounds like buy" />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="add-word-box">SRS Këscht (Box)</label>
                <select id="add-word-box" name="srsBox">
                  <option value="0" selected>0 — Nei (New)</option>
                  <option value="1">1 — Geléiert (Learning)</option>
                  <option value="2">2 — Getest (Familiar)</option>
                  <option value="3">3 — Confirméiert (Known)</option>
                  <option value="4">4 — Staark (Strong)</option>
                  <option value="5">5 — Gemeeschtert (Mastered)</option>
                  <option value="-1">Net wichteg (Not important)</option>
                </select>
              </div>
              <div class="form-group">
                <label for="add-audio-file">Audio (.mp3, .m4a, .wav)</label>
                <input type="file" id="add-audio-file" accept="audio/*" />
                <input type="hidden" name="audioDataUrl" id="add-audio-dataurl" />
              </div>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary">💾 Späicheren</button>
              <button type="button" id="btn-cancel-add" class="btn btn-secondary">Ofbriechen</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHtml;
    document.body.appendChild(wrapper.firstElementChild);

    setupAddWordModalListeners();
  }

  function setupAddWordModalListeners() {
    const modal = document.getElementById('add-word-modal');
    const typeSelect = document.getElementById('add-word-type');
    const form = document.getElementById('add-word-form');
    const closeBtn = document.getElementById('close-add-modal');
    const cancelBtn = document.getElementById('btn-cancel-add');
    const fileInput = document.getElementById('add-audio-file');
    const dataUrlInput = document.getElementById('add-audio-dataurl');

    if (!modal || !typeSelect || !form) return;

    typeSelect.addEventListener('change', () => {
      const selectedType = typeSelect.value;
      document.getElementById('noun-fields').style.display = selectedType === 'noun' ? 'block' : 'none';
      document.getElementById('verb-fields').style.display = selectedType === 'verb' ? 'block' : 'none';
      document.getElementById('adj-fields').style.display = selectedType === 'adjective' ? 'block' : 'none';
    });

    const closeModal = () => {
      modal.classList.remove('active');
      form.reset();
      document.getElementById('noun-fields').style.display = 'block';
      document.getElementById('verb-fields').style.display = 'none';
      document.getElementById('adj-fields').style.display = 'none';
      if (dataUrlInput) dataUrlInput.value = '';
    };

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    if (fileInput && dataUrlInput) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            dataUrlInput.value = evt.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const type = typeSelect.value;
      const word = document.getElementById('add-word-input').value.trim();
      const definition = document.getElementById('add-word-def').value.trim();
      
      if (!word || !definition) {
        alert('Wuert an Definitioun sinn erfuerderlech!');
        return;
      }

      // Check for duplicate words in database
      let alreadyExists = false;
      if (type === 'noun') {
        alreadyExists = getAllNouns().some(w => w.word.toLowerCase() === word.toLowerCase());
      } else if (type === 'verb') {
        alreadyExists = verbs.some(w => w.word.toLowerCase() === word.toLowerCase());
      } else if (type === 'adjective') {
        alreadyExists = adjectives.some(w => w.word.toLowerCase() === word.toLowerCase());
      }

      if (alreadyExists) {
        alert(`D'Wuert "${word}" existéiert scho fir dësen Typ!`);
        return;
      }

      const newWord = {
        word,
        definition,
        type,
      };

      if (type === 'noun') {
        newWord.article = document.getElementById('add-noun-article').value.trim();
        newWord.plural = document.getElementById('add-noun-plural').value.trim();
        newWord.gender = document.getElementById('add-noun-gender').value;
        newWord.topic = document.getElementById('add-noun-topic').value;
      } else if (type === 'verb') {
        newWord.conjugation = {
          pastParticiple: document.getElementById('add-verb-pp').value.trim(),
          auxiliary: document.getElementById('add-verb-aux').value,
          present: {
            ech: document.getElementById('conj-ech').value.trim(),
            du: document.getElementById('conj-du').value.trim(),
            'hien/hatt/et': document.getElementById('conj-hien').value.trim(),
            mir: document.getElementById('conj-mir').value.trim(),
            dir: document.getElementById('conj-dir').value.trim(),
            si: document.getElementById('conj-si').value.trim(),
          }
        };
      } else if (type === 'adjective') {
        newWord.type = document.getElementById('add-adj-type').value;
      }

      if (dataUrlInput && dataUrlInput.value) {
        newWord.audio = dataUrlInput.value;
      }

      const customList = JSON.parse(localStorage.getItem('letzVocab_customWords') || '[]');
      customList.push(newWord);
      localStorage.setItem('letzVocab_customWords', JSON.stringify(customList));

      if (type === 'noun') {
        let t = topics.find(topic => topic.id === (newWord.topic || 'custom'));
        if (!t) t = customTopic;
        newWord.type = 'noun';
        newWord._topic = t.id;
        t.words.push(newWord);
      } else if (type === 'verb') {
        verbs.push(newWord);
      } else if (type === 'adjective' || type === 'adjective/adverb') {
        adjectives.push(newWord);
      }

      const srsBox = parseInt(document.getElementById('add-word-box').value, 10);
      if (srsBox !== 0) {
        SRS.setBox(newWord, srsBox);
      } else {
        SRS.getRecord(newWord);
      }

      const exampleVal = document.getElementById('add-word-example').value.trim();
      if (exampleVal) {
        SRS.setExample(newWord, exampleVal);
      }
      const mnemonicVal = document.getElementById('add-word-mnemonic').value.trim();
      if (mnemonicVal) {
        SRS.setMnemonic(newWord, mnemonicVal);
      }

      closeModal();

      if (state.currentView === 'words') {
        renderWordList(state.listType);
      } else if (state.currentView === 'topic') {
        renderTopic(state.currentTopicId);
      } else {
        renderHome();
      }
    });
  }

  function openAddWordModal(context) {
    injectAddWordModal();
    
    const modal = document.getElementById('add-word-modal');
    if (!modal) return;

    const form = document.getElementById('add-word-form');
    if (form) form.reset();
    const dataUrlInput = document.getElementById('add-audio-dataurl');
    if (dataUrlInput) dataUrlInput.value = '';

    const typeSelect = document.getElementById('add-word-type');
    const topicSelect = document.getElementById('add-noun-topic');

    if (topicSelect) {
      topicSelect.innerHTML = topics.map(t => `<option value="${t.id}">${esc(t.name)}</option>`).join('');
    }

    if (context === 'nouns') {
      typeSelect.value = 'noun';
      if (topicSelect) topicSelect.value = 'custom';
    } else if (context === 'verbs') {
      typeSelect.value = 'verb';
    } else if (context === 'adjectives') {
      typeSelect.value = 'adjective';
    } else {
      typeSelect.value = 'noun';
      if (topicSelect && [...topicSelect.options].some(o => o.value === context)) {
        topicSelect.value = context;
      } else if (topicSelect) {
        topicSelect.value = 'custom';
      }
    }

    typeSelect.dispatchEvent(new Event('change'));
    modal.classList.add('active');
  }

  /* ====================================================================
     ROUTER
     ==================================================================== */
  function navigate() {
    document.onkeydown = null;
    const hash  = window.location.hash || '#/';
    const match = hash.match(/#\/([a-z-]*)(?:\/(.+))?/);

    if (!match || !match[1]) {
      state.currentView = 'home';
      state.listFilter = 'important';
      state.listType = '';
      return renderHome();
    }

    const view = match[1];
    const param = match[2];

    const filterPreservingViews = ['words', 'learn', 'test-type'];
    const typeChanged = view === 'words' && state.listType !== param;
    if (view === 'words' && (!filterPreservingViews.includes(state.currentView) || typeChanged)) {
      state.listFilter = 'important';
      state.listType = param || '';
    }

    state.currentView = view;

    switch (view) {
      case 'topic':     return renderTopic(param);
      case 'train':     return initTrain(param);
      case 'test':      return initTest(param);
      case 'words':     return renderWordList(param);
      case 'learn':     return initLearn(param);
      case 'test-type': return initTestType(param);
      default:
        state.currentView = 'home';
        state.listFilter = 'important';
        state.listType = '';
        return renderHome();
    }
  }

  window.addEventListener('hashchange', navigate);
  document.addEventListener('DOMContentLoaded', navigate);

  /* ====================================================================
     HOME VIEW
     ==================================================================== */
  function renderHome() {
    const allNouns = getAllNouns();
    const nounStats = SRS.getStats(allNouns);
    const verbStats = SRS.getStats(verbs);
    const adjStats  = SRS.getStats(adjectives);

    let h = '';
    h += '<div class="home">';
    h += '  <div class="hero">';
    h += '    <h1>Lëtz Vocab</h1>';
    h += '    <p class="subtitle">Léier Lëtzebuergesch Vokabelen mat Wiederholung</p>';
    h += '  </div>';

    h += '  <h2 class="section-title">Wuerttypen</h2>';
    h += '  <div class="wordtype-grid">';

    h += renderWordTypeCard('nouns', '📦', 'Substantiven', 'Nouns',
      allNouns.length, nounStats, 'Geschlecht Quiz mat SRS');
    h += renderWordTypeCard('verbs', '⚡', 'Verben', 'Verbs',
      verbs.length, verbStats, 'Konjugatioun Flashcards');
    h += renderWordTypeCard('adjectives', '🎨', 'Adjektiven', 'Adjectives',
      adjectives.length, adjStats, 'Wuert ↔ Definitioun');

    h += '  </div>';

    h += '  <h2 class="section-title section-title-themes">Themen</h2>';
    h += '  <div class="topic-grid">';

    topics.forEach(t => {
      h += `<a href="#/topic/${t.id}" class="topic-card">
              <span class="topic-icon">${t.icon}</span>
              <span class="topic-name">${esc(t.name)}</span>
              <span class="topic-count">${t.words.length} Wierder</span>
            </a>`;
    });

    h += '  </div>';
    h += '</div>';
    app.innerHTML = h;
  }

  function renderWordTypeCard(type, icon, nameLb, nameEn, count, stats, desc) {
    const dueBadge = stats.dueCount > 0
      ? `<span class="due-badge">${stats.dueCount} fälleg</span>`
      : '';

    return `<div class="wordtype-card">
      <div class="wordtype-card-header">
        <span class="wordtype-icon">${icon}</span>
        <div class="wordtype-info">
          <span class="wordtype-name">${esc(nameLb)}</span>
          <span class="wordtype-name-en">${esc(nameEn)}</span>
        </div>
        ${dueBadge}
      </div>
      <div class="wordtype-stats">
        <div class="stat-item">
          <span class="stat-value">${count}</span>
          <span class="stat-label">Total</span>
        </div>
        <div class="stat-item">
          <span class="stat-value stat-new">${stats.newCount}</span>
          <span class="stat-label">Nei</span>
        </div>
        <div class="stat-item">
          <span class="stat-value stat-learning">${stats.learning}</span>
          <span class="stat-label">Léieren</span>
        </div>
        <div class="stat-item">
          <span class="stat-value stat-mastered">${stats.mastered}</span>
          <span class="stat-label">Gemeeschtert</span>
        </div>
      </div>
      <p class="wordtype-desc">${esc(desc)}</p>
      <div class="wordtype-actions">
        <a href="#/words/${type}" class="btn btn-secondary btn-sm">📋 Lëscht</a>
        <a href="#/learn/${type}" class="btn btn-primary btn-sm">🧠 Léieren</a>
        <a href="#/test-type/${type}" class="btn btn-test btn-sm">📝 Test</a>
      </div>
    </div>`;
  }

  /* ====================================================================
     WORD LIST VIEW  (#/words/:type)
     ==================================================================== */
  function renderWordList(type) {
    const rawWords = getRawWordsForType(type);
    if (rawWords.length === 0) return renderHome();

    let title, titleEn;
    switch (type) {
      case 'nouns':      title = 'Substantiven'; titleEn = 'Nouns'; break;
      case 'verbs':      title = 'Verben';       titleEn = 'Verbs'; break;
      case 'adjectives': title = 'Adjektiven';   titleEn = 'Adjectives'; break;
      default: return renderHome();
    }

    // Apply overrides for display
    const allWords = rawWords.map(applyOverrides);

    // Filter by SRS status
    const filter = state.listFilter;
    const filtered = filter === 'all'
      ? allWords
      : filter === 'important'
        ? allWords.filter((w, i) => SRS.getRecord(rawWords[i]).box !== -1)
        : allWords.filter((w, i) => SRS.getRecord(rawWords[i]).box === filter);

    let h = '<div class="wordlist-view" style="position: relative;">';
    h += '<a href="#/" class="back-link">← Zréck</a>';
    h += '<button class="add-word-btn" id="open-add-modal-btn" title="Neit Wuert bäisetzen">➕</button>';

    h += '<div class="topic-header">';
    h += `  <h1>${esc(title)}</h1>`;
    h += `  <p class="topic-name-en">${esc(titleEn)}</p>`;
    h += `  <span class="badge">${allWords.length} Wierder</span>`;
    h += '</div>';

    // --- Filter Bar ---
    h += '<div class="filter-bar">';
    // Count words per box
    const boxCounts = { '-1': 0, '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 };
    rawWords.forEach(w => {
      const box = SRS.getRecord(w).box;
      boxCounts[box] = (boxCounts[box] || 0) + 1;
    });
    const importantCount = rawWords.length - (boxCounts['-1'] || 0);

    const filters = [
      { val: 'important', label: 'Wichteg (Important only)', count: importantCount },
      { val: 'all', label: 'All', count: allWords.length },
      { val: 0, label: 'Nei', cssClass: 'srs-new', count: boxCounts['0'] || 0 },
      { val: 1, label: 'Geléiert', cssClass: 'srs-learning', count: boxCounts['1'] || 0 },
      { val: 2, label: 'Getest', cssClass: 'srs-familiar', count: boxCounts['2'] || 0 },
      { val: 3, label: 'Confirméiert', cssClass: 'srs-known', count: boxCounts['3'] || 0 },
      { val: 4, label: 'Staark', cssClass: 'srs-strong', count: boxCounts['4'] || 0 },
      { val: 5, label: 'Gemeeschtert', cssClass: 'srs-mastered', count: boxCounts['5'] || 0 },
      { val: -1, label: 'Net wichteg', cssClass: 'srs-ignored', count: boxCounts['-1'] || 0 },
    ];

    filters.forEach(f => {
      const active = state.listFilter === f.val ? 'filter-active' : '';
      const css = f.cssClass || '';
      h += `<button class="filter-pill ${active} ${css}" data-filter="${f.val}">${esc(f.label)} <span class="filter-count">${f.count}</span></button>`;
    });
    h += '</div>';

    // --- Action buttons ---
    h += '<div class="wordlist-actions">';
    h += `  <a href="#/learn/${type}" class="btn btn-primary btn-sm">🧠 Léieren</a>`;
    h += `  <a href="#/test-type/${type}" class="btn btn-test btn-sm">📝 Testen</a>`;
    h += '</div>';

    // --- Table ---
    h += '<div class="table-container"><table class="word-table">';

    if (type === 'nouns') {
      h += '<thead><tr>';
      h += '  <th>Wuert</th><th>Artikel</th><th>Plural</th><th>Geschlecht</th><th>Definitioun</th><th>SRS</th><th class="edit-col-header"></th>';
      h += '</tr></thead><tbody>';
      filtered.forEach((w, fi) => {
        const raw = rawWords[allWords.indexOf(w)] || w;
        const g = GENDER[w.gender];
        const rec = SRS.getRecord(raw);
        const wk = SRS.wordKey(raw);
        const isEditing = state.listEditKey === wk;

        h += `<tr>
          <td class="word-cell"><div class="word-cell-content"><span class="word-text">${esc(w.word)}</span>${audioBtn(w)}</div></td>
          <td>${esc(w.article)}</td>
          <td>${esc(w.plural)}</td>
          <td><span class="gender-badge ${g ? g.cssClass : ''}">${g ? g.label : '?'}</span></td>
          <td>${esc(w.definition)}</td>
          <td><span class="srs-badge ${SRS.boxClass(rec.box)}">${SRS.boxLabel(rec.box)}</span></td>
          <td class="edit-cell"><button class="edit-row-btn" data-wk="${esc(wk)}" title="Änneren">✏️</button></td>
        </tr>`;

        if (isEditing) {
          h += renderEditRow(raw, w, 'noun');
        }
      });
    } else if (type === 'verbs') {
      h += '<thead><tr>';
      h += '  <th>Verb</th><th>Definitioun</th><th>Partizip</th><th>Hëllef</th><th>SRS</th><th class="edit-col-header"></th>';
      h += '</tr></thead><tbody>';
      filtered.forEach((w, fi) => {
        const raw = rawWords[allWords.indexOf(w)] || w;
        const rec = SRS.getRecord(raw);
        const pp = w.conjugation ? w.conjugation.pastParticiple : '-';
        const aux = w.conjugation ? w.conjugation.auxiliary : '-';
        const wk = SRS.wordKey(raw);
        const isEditing = state.listEditKey === wk;

        h += `<tr>
          <td class="word-cell"><div class="word-cell-content"><span class="word-text">${esc(w.word)}</span>${audioBtn(w)}</div></td>
          <td>${esc(w.definition)}</td>
          <td class="verb-pp">${esc(pp)}</td>
          <td><span class="aux-badge">${esc(aux)}</span></td>
          <td><span class="srs-badge ${SRS.boxClass(rec.box)}">${SRS.boxLabel(rec.box)}</span></td>
          <td class="edit-cell"><button class="edit-row-btn" data-wk="${esc(wk)}" title="Änneren">✏️</button></td>
        </tr>`;

        if (isEditing) {
          h += renderEditRow(raw, w, 'verb');
        }
      });
    } else if (type === 'adjectives') {
      h += '<thead><tr>';
      h += '  <th>Wuert</th><th>Definitioun</th><th>Typ</th><th>SRS</th><th class="edit-col-header"></th>';
      h += '</tr></thead><tbody>';
      filtered.forEach((w, fi) => {
        const raw = rawWords[allWords.indexOf(w)] || w;
        const rec = SRS.getRecord(raw);
        const tm = getTypeMeta(w);
        const wk = SRS.wordKey(raw);
        const isEditing = state.listEditKey === wk;

        h += `<tr>
          <td class="word-cell"><div class="word-cell-content"><span class="word-text">${esc(w.word)}</span>${audioBtn(w)}</div></td>
          <td>${esc(w.definition)}</td>
          <td><span class="type-badge ${tm.cssClass}">${tm.label}</span></td>
          <td><span class="srs-badge ${SRS.boxClass(rec.box)}">${SRS.boxLabel(rec.box)}</span></td>
          <td class="edit-cell"><button class="edit-row-btn" data-wk="${esc(wk)}" title="Änneren">✏️</button></td>
        </tr>`;

        if (isEditing) {
          h += renderEditRow(raw, w, 'adjective');
        }
      });
    }

    h += '</tbody></table></div></div>';
    app.innerHTML = h;
    bindAudioButtons();
    bindClick('open-add-modal-btn', () => openAddWordModal(type));

    // --- Filter events ---
    document.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.filter;
        state.listFilter = (val === 'all' || val === 'important') ? val : parseInt(val, 10);
        state.listEditKey = null;
        renderWordList(type);
      });
    });

    // --- Edit events ---
    document.querySelectorAll('.edit-row-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const wk = btn.dataset.wk;
        state.listEditKey = state.listEditKey === wk ? null : wk;
        renderWordList(type);
      });
    });

    bindEditRowEvents(rawWords, type, () => renderWordList(type));
  }

  function bindEditRowEvents(rawWords, type, refreshFn) {
    // Save edit
    bindClick('btn-save-edit', () => {
      const form = document.getElementById('edit-form');
      if (!form) return;
      const rawWord = rawWords.find(w => SRS.wordKey(w) === state.listEditKey);
      if (!rawWord) return;

      const existingOverrides = SRS.getOverrides(rawWord) || {};
      const overrides = {};

      // Word (Luxembourgish word spelling)
      const wordInput = form.querySelector('[name="word"]');
      if (wordInput && wordInput.value.trim() !== rawWord.word) {
        overrides.word = wordInput.value.trim();
      }

      // Definition (English definition)
      const defInput = form.querySelector('[name="definition"]');
      if (defInput && defInput.value.trim() !== rawWord.definition) {
        overrides.definition = defInput.value.trim();
      }

      // Example sentence
      const exInput = form.querySelector('[name="example"]');
      if (exInput) {
        SRS.setExample(rawWord, exInput.value.trim());
      }

      // Mnemonic
      const mnInput = form.querySelector('[name="mnemonic"]');
      if (mnInput) {
        SRS.setMnemonic(rawWord, mnInput.value.trim());
      }

      const typeClean = (type || '').toLowerCase().trim();
      if (typeClean === 'nouns' || typeClean === 'noun') {
        const art = form.querySelector('[name="article"]');
        const pl = form.querySelector('[name="plural"]');
        const gen = form.querySelector('[name="gender"]');
        if (art && art.value.trim() !== rawWord.article) overrides.article = art.value.trim();
        if (pl && pl.value.trim() !== rawWord.plural) overrides.plural = pl.value.trim();
        if (gen && gen.value !== rawWord.gender) overrides.gender = gen.value;
      } else if (typeClean === 'verbs' || typeClean === 'verb') {
        const pp = form.querySelector('[name="pastParticiple"]');
        const aux = form.querySelector('[name="auxiliary"]');
        const conj = {};
        let conjChanged = false;
        if (pp && pp.value.trim() !== (rawWord.conjugation||{}).pastParticiple) {
          conj.pastParticiple = pp.value.trim(); conjChanged = true;
        }
        if (aux && aux.value !== (rawWord.conjugation||{}).auxiliary) {
          conj.auxiliary = aux.value; conjChanged = true;
        }
        const present = {};
        let presChanged = false;
        ['ech','du','hien/hatt/et','mir','dir','si'].forEach(p => {
          const inp = form.querySelector(`[name="conj_${p.replace(/\//g,'_')}"]`);
          const orig = (rawWord.conjugation && rawWord.conjugation.present) ? rawWord.conjugation.present[p] : '';
          if (inp && inp.value.trim() !== orig) {
            present[p] = inp.value.trim();
            presChanged = true;
          }
        });
        if (presChanged) { conj.present = present; conjChanged = true; }
        if (conjChanged) overrides.conjugation = conj;
      } else if (typeClean === 'adjectives' || typeClean === 'adjective') {
        const adjTypeSelect = form.querySelector('[name="adjType"]');
        if (adjTypeSelect && adjTypeSelect.value !== rawWord.type) {
          overrides.type = adjTypeSelect.value;
        }
      }

      // Preserve existing audio override unless user uploads a new one or resets it
      const audioDataUrlInput = form.querySelector('[name="audioDataUrl"]');
      if (audioDataUrlInput) {
        if (audioDataUrlInput.value === 'RESET_ORIGINAL') {
          // Do not include audio in overrides (reverts to original database audio)
        } else if (audioDataUrlInput.value.startsWith('data:')) {
          overrides.audio = audioDataUrlInput.value;
        } else if (existingOverrides.audio) {
          overrides.audio = existingOverrides.audio;
        }
      } else if (existingOverrides.audio) {
        overrides.audio = existingOverrides.audio;
      }

      // Save overrides
      if (Object.keys(overrides).length > 0) {
        SRS.setOverrides(rawWord, overrides);
      } else {
        SRS.setOverrides(rawWord, null); // clear overrides
      }

      // Handle SRS Box updates
      const boxSelect = form.querySelector('[name="srsBox"]');
      if (boxSelect) {
        const newBox = parseInt(boxSelect.value, 10);
        const rec = SRS.getRecord(rawWord);
        if (rec.box !== newBox) {
          SRS.setBox(rawWord, newBox);
        }
      }

      state.listEditKey = null;
      refreshFn();
    });

    bindClick('btn-cancel-edit', () => {
      state.listEditKey = null;
      refreshFn();
    });

    // File input listener for audio upload
    const audioFileInput = document.getElementById('edit-audio-file');
    if (audioFileInput) {
      audioFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            document.getElementById('edit-audio-dataurl').value = evt.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // Reset audio button handler
    const resetAudioBtn = document.getElementById('btn-reset-audio');
    if (resetAudioBtn) {
      resetAudioBtn.addEventListener('click', () => {
        const fileInput = document.getElementById('edit-audio-file');
        if (fileInput) fileInput.value = '';
        const dataUrlInput = document.getElementById('edit-audio-dataurl');
        if (dataUrlInput) dataUrlInput.value = 'RESET_ORIGINAL';
        resetAudioBtn.style.display = 'none';
        const msg = document.createElement('span');
        msg.textContent = ' (Original gëtt gespäichert)';
        msg.style.color = '#10B981';
        msg.style.fontSize = '0.8rem';
        msg.style.marginTop = '4px';
        resetAudioBtn.parentNode.appendChild(msg);
      });
    }
  }

  /** Render an inline edit row below a word in the table. */
  function renderEditRow(rawWord, displayWord, wordType) {
    const typeClean = (wordType || '').toLowerCase().trim();
    const isNoun = typeClean === 'nouns' || typeClean === 'noun';
    const isVerb = typeClean === 'verbs' || typeClean === 'verb';
    const isAdj = typeClean === 'adjectives' || typeClean === 'adjective';

    const colSpan = isNoun ? 7 : isVerb ? 6 : 5;
    let h = `<tr class="edit-row"><td colspan="${colSpan}"><form id="edit-form" class="edit-panel">`;

    h += '<div class="edit-grid">';
    h += `<label>Wuert<input type="text" name="word" value="${esc(displayWord.word)}" /></label>`;
    h += `<label>Definitioun<input type="text" name="definition" value="${esc(displayWord.definition)}" /></label>`;

    if (isNoun) {
      h += `<label>Artikel<input type="text" name="article" value="${esc(displayWord.article || '')}" /></label>`;
      h += `<label>Plural<input type="text" name="plural" value="${esc(displayWord.plural || '')}" /></label>`;
      h += `<label>Geschlecht<select name="gender">
        <option value="m" ${displayWord.gender==='m'?'selected':''}>Maskulin</option>
        <option value="f" ${displayWord.gender==='f'?'selected':''}>Feminin</option>
        <option value="n" ${displayWord.gender==='n'?'selected':''}>Neutrum</option>
      </select></label>`;
    } else if (isVerb) {
      const conj = displayWord.conjugation || {};
      h += `<label>Partizip Perfekt<input type="text" name="pastParticiple" value="${esc(conj.pastParticiple || '')}" /></label>`;
      h += `<label>Hëllefsverb<select name="auxiliary">
        <option value="hunn" ${conj.auxiliary==='hunn'?'selected':''}>hunn</option>
        <option value="sinn" ${conj.auxiliary==='sinn'?'selected':''}>sinn</option>
      </select></label>`;
    } else if (isAdj) {
      h += `<label>Typ<select name="adjType">
        <option value="adjective" ${displayWord.type==='adjective'?'selected':''}>Adjektiv</option>
        <option value="adjective/adverb" ${displayWord.type==='adjective/adverb'?'selected':''}>Adjektiv/Adverb</option>
      </select></label>`;
    }

    const example = SRS.getExample(rawWord);
    h += `<label>Beispill-Saz<input type="text" name="example" value="${esc(example)}" /></label>`;

    const mnemonic = SRS.getMnemonic(rawWord);
    h += `<label>Mnemonic<input type="text" name="mnemonic" value="${esc(mnemonic)}" /></label>`;

    // Add SRS Box dropdown and Audio upload inputs (all word types)
    const rec = SRS.getRecord(rawWord);
    h += `<label>SRS Këscht (Box)<select name="srsBox">
      <option value="-1" ${rec.box===-1?'selected':''}>Net wichteg (Not important)</option>
      <option value="0" ${rec.box===0?'selected':''}>0 — Nei (New)</option>
      <option value="1" ${rec.box===1?'selected':''}>1 — Geléiert (Learning)</option>
      <option value="2" ${rec.box===2?'selected':''}>2 — Getest (Familiar)</option>
      <option value="3" ${rec.box===3?'selected':''}>3 — Confirméiert (Known)</option>
      <option value="4" ${rec.box===4?'selected':''}>4 — Staark (Strong)</option>
      <option value="5" ${rec.box===5?'selected':''}>5 — Gemeeschtert (Mastered)</option>
    </select></label>`;

    const hasCustomAudio = displayWord.audio && displayWord.audio.startsWith('data:');
    h += `<label>Audio (.mp3, .m4a, .wav)
      <input type="file" id="edit-audio-file" accept="audio/*" style="margin-top: 4px;" />
      <input type="hidden" name="audioDataUrl" id="edit-audio-dataurl" value="${hasCustomAudio ? esc(displayWord.audio) : ''}" />
      ${hasCustomAudio ? '<button type="button" class="btn btn-secondary btn-sm" id="btn-reset-audio" style="margin-top: 4px;">Original zrécksetzen</button>' : ''}
    </label>`;

    h += '</div>'; // close main edit-grid

    if (isVerb) {
      const conj = displayWord.conjugation || {};
      const pres = conj.present || {};
      h += '<div class="edit-grid edit-grid-conj"><span class="edit-section-title">Konjugatioun (Präsens)</span>';
      ['ech','du','hien/hatt/et','mir','dir','si'].forEach(p => {
        const nameAttr = `conj_${p.replace(/\//g,'_')}`;
        h += `<label>${esc(p)}<input type="text" name="${nameAttr}" value="${esc(pres[p] || '')}" /></label>`;
      });
      h += '</div>'; // close edit-grid-conj
    }

    h += '<div class="edit-actions">';
    h += '  <button type="button" class="btn btn-primary btn-sm" id="btn-save-edit">💾 Späicheren</button>';
    h += '  <button type="button" class="btn btn-secondary btn-sm" id="btn-cancel-edit">Ofbriechen</button>';
    h += '</div>';
    h += '</form></td></tr>';
    return h;
  }

  /* ====================================================================
     SRS LEARN VIEW  (#/learn/:type)
     ==================================================================== */
  function initLearn(type) {
    let rawWords = getRawWordsForType(type);
    if (rawWords.length === 0) return renderHome();

    if (state.listFilter === 'important' || state.listFilter === 'all') {
      rawWords = rawWords.filter(w => SRS.getRecord(w).box !== -1);
    } else {
      rawWords = rawWords.filter(w => SRS.getRecord(w).box === state.listFilter);
    }

    const sorted = SRS.sortByDue(rawWords);
    const dueWords = sorted.filter(w => SRS.isDue(w));
    const notDue   = sorted.filter(w => !SRS.isDue(w));

    state.learnWords    = [...shuffle(dueWords), ...notDue];
    state.learnIndex    = 0;
    state.learnRevealed = false;
    state.learnType     = type;

    if (state.learnWords.length === 0) {
      renderLearnEmpty(type);
    } else {
      renderLearn();
    }
  }

  function renderLearnEmpty(type) {
    let h = '<div class="learn-view">';
    h += `<a href="#/words/${type}" class="back-link">← Zréck</a>`;
    h += '<div class="learn-empty">';
    h += '  <div class="learn-empty-icon">🎉</div>';
    if (state.listFilter !== 'all') {
      h += `  <h2>Keng Wierder am Filter "${esc(SRS.boxLabel(state.listFilter))}"!</h2>`;
      h += '  <p>Et gi keng Vokabelen an dëser Box fir ze léieren.</p>';
    } else {
      h += '  <h2>Keng Wierder fälleg!</h2>';
      h += '  <p>All Wierder sinn ugeholl. Komm méi spéit zréck.</p>';
    }
    h += `  <a href="#/words/${type}" class="btn btn-primary">← Zréck op d'Lëscht</a>`;
    h += '</div></div>';
    app.innerHTML = h;
  }

  function renderLearn() {
    const type   = state.learnType;
    const words  = state.learnWords;
    const idx    = state.learnIndex;

    if (idx >= words.length) {
      return renderLearnComplete();
    }

    const rawWord = words[idx];
    const word    = applyOverrides(rawWord);
    const total   = words.length;
    const cur     = idx + 1;
    const rec     = SRS.getRecord(rawWord);
    const wType   = word.type || 'noun';
    const tm      = getTypeMeta(word);

    let h = '<div class="learn-view">';
    h += `<a href="#/words/${type}" class="back-link">← Ophalen</a>`;
    h += `<div class="progress-info">${cur} vun ${total}</div>`;
    h += `<div class="progress-bar"><div class="progress-fill" style="width:${(cur / total) * 100}%"></div></div>`;

    h += `<div class="srs-status-strip">`;
    h += `  <span class="srs-badge ${SRS.boxClass(rec.box)}">${SRS.boxLabel(rec.box)}</span>`;
    h += `  <span class="type-badge ${tm.cssClass}">${tm.label}</span>`;
    if (rec.box > 0) {
      h += `  <span class="srs-next-review">${formatNextReview(rec)}</span>`;
    }
    h += `</div>`;

    // Flashcard
    h += '<div class="flashcard learn-card">';
    h += `  <div class="flashcard-word"><span class="word-with-audio">${esc(word.word)}${audioBtn(word)}</span></div>`;
    h += `  <div class="flashcard-definition">${esc(word.definition)}</div>`;

    if (state.learnRevealed) {
      h += '<div class="flashcard-details">';
      if (wType === 'noun' || (!wType)) {
        const g = GENDER[word.gender];
        if (g) {
          h += `<div class="detail-row"><span class="detail-label">Artikel:</span> <span class="detail-value">${esc(word.article)} ${esc(word.word)}</span></div>`;
          h += `<div class="detail-row"><span class="detail-label">Geschlecht:</span> <span class="gender-badge ${g.cssClass}">${g.label}</span></div>`;
          h += `<div class="detail-row"><span class="detail-label">Plural:</span> <span class="detail-value">${esc(word.plural)}</span></div>`;
        }
      } else if (wType === 'verb' && word.conjugation) {
        h += '<div class="conjugation-section">';
        h += '  <div class="detail-label conj-heading">Konjugatioun (Präsens)</div>';
        h += '  <table class="conjugation-table">';
        const pres = word.conjugation.present;
        ['ech', 'du', 'hien/hatt/et', 'mir', 'dir', 'si'].forEach(p => {
          if (pres[p]) {
            h += `<tr><td class="conj-pronoun">${esc(p)}</td><td class="conj-form">${esc(pres[p])}</td></tr>`;
          }
        });
        h += '  </table>';
        h += `  <div class="detail-row conj-pp-row"><span class="detail-label">Partizip Perfekt:</span> <span class="detail-value verb-pp-val">${esc(word.conjugation.pastParticiple)}</span></div>`;
        h += `  <div class="detail-row"><span class="detail-label">Hëllefsverb:</span> <span class="aux-badge">${esc(word.conjugation.auxiliary)}</span></div>`;
        h += '</div>';
      }
      h += '</div>'; // .flashcard-details
    }

    // Mnemonic + example
    h += renderMnemonicSections(rawWord);

    h += '</div>'; // .flashcard

    // Controls
    h += '<div class="learn-controls">';
    if (!state.learnRevealed) {
      h += '<button class="btn btn-primary btn-lg" id="btn-reveal">Weisen</button>';
    } else {
      h += '<button class="btn btn-wrong btn-lg" id="btn-wrong">✗ Wees net</button>';
      h += '<button class="btn btn-right btn-lg" id="btn-right">✓ Gewosst</button>';
    }
    h += '</div>';

    h += '<div class="keyboard-hint"><span class="key">Space</span> weisen &nbsp; <span class="key">1</span> wees net &nbsp; <span class="key">2</span> gewosst</div>';

    h += '</div>';
    app.innerHTML = h;
    bindAudioButtons();

    // --- Events ---
    bindClick('btn-reveal', () => { state.learnRevealed = true; renderLearn(); });
    bindClick('btn-right', () => {
      SRS.markCorrect(rawWord);
      state.learnIndex++;
      state.learnRevealed = false;
      renderLearn();
    });
    bindClick('btn-wrong', () => {
      SRS.markWrong(rawWord);
      state.learnIndex++;
      state.learnRevealed = false;
      renderLearn();
    });

    bindMnemonicEditing(rawWord, renderLearn);

    document.onkeydown = (e) => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!state.learnRevealed) { state.learnRevealed = true; renderLearn(); }
      } else if (e.key === '1' && state.learnRevealed) {
        e.preventDefault();
        SRS.markWrong(rawWord); state.learnIndex++; state.learnRevealed = false; renderLearn();
      } else if (e.key === '2' && state.learnRevealed) {
        e.preventDefault();
        SRS.markCorrect(rawWord); state.learnIndex++; state.learnRevealed = false; renderLearn();
      }
    };
  }

  function renderLearnComplete() {
    const type = state.learnType;
    const rawWords = getRawWordsForType(type);
    const stats = SRS.getStats(rawWords);

    let h = '<div class="learn-view">';
    h += `<a href="#/words/${type}" class="back-link">← Zréck</a>`;
    h += '<div class="learn-complete">';
    h += '  <div class="learn-complete-icon">🏆</div>';
    h += '  <h2>Sessioun fäerdeg!</h2>';
    h += '  <div class="learn-complete-stats">';
    h += `    <div class="stat-item"><span class="stat-value stat-mastered">${stats.mastered}</span><span class="stat-label">Gemeeschtert</span></div>`;
    h += `    <div class="stat-item"><span class="stat-value stat-learning">${stats.learning}</span><span class="stat-label">Léieren</span></div>`;
    h += `    <div class="stat-item"><span class="stat-value stat-new">${stats.newCount}</span><span class="stat-label">Nei</span></div>`;
    h += '  </div>';
    h += '  <div class="learn-complete-actions">';
    h += `    <button class="btn btn-primary" id="btn-learn-again">🔄 Nach eng Kéier</button>`;
    h += `    <a href="#/words/${type}" class="btn btn-secondary">📋 Zréck op d'Lëscht</a>`;
    h += `    <a href="#/" class="btn btn-secondary">🏠 Heem</a>`;
    h += '  </div>';
    h += '</div></div>';
    app.innerHTML = h;

    bindClick('btn-learn-again', () => initLearn(type));
  }

  /* ====================================================================
     TOPIC VIEW (preserved from original)
     ==================================================================== */
  function renderTopic(topicId) {
    state.currentTopicId = topicId;
    const topic = getTopic(topicId);
    if (!topic) return renderHome();

    let h = '';
    h += '<div class="topic-view" style="position: relative;">';
    h += `<a href="#/" class="back-link">← Zréck</a>`;
    h += '<button class="add-word-btn" id="open-add-modal-btn" title="Neit Wuert bäisetzen">➕</button>';

    h += '<div class="topic-header">';
    h += `  <span class="topic-icon-large">${topic.icon}</span>`;
    h += `  <h1>${esc(topic.name)}</h1>`;
    h += `  <p class="topic-name-en">${esc(topic.nameEn)}</p>`;
    h += `  <span class="badge">${topic.words.length} Wierder</span>`;
    h += '</div>';

    h += '<div class="topic-actions">';
    h += `  <a href="#/train/${topic.id}" class="btn btn-train">🎓 Trainéieren</a>`;
    h += `  <a href="#/test/${topic.id}" class="btn btn-test">📝 Test</a>`;
    h += '</div>';

    h += '<div class="table-container"><table class="word-table">';
    h += '<thead><tr>';
    h += '  <th>Wuert</th><th>Artikel</th><th>Plural</th><th>Geschlecht</th><th>Definitioun</th><th>SRS</th><th class="edit-col-header"></th>';
    h += '</tr></thead><tbody>';

    topic.words.forEach(w => {
      const raw = w;
      const dw = applyOverrides({ ...raw, type: raw.type || 'noun' });
      const g = GENDER[dw.gender];
      const rec = SRS.getRecord(raw);
      const wk = SRS.wordKey(raw);
      const isEditing = state.listEditKey === wk;

      h += `<tr>
        <td class="word-cell">
          <div class="word-cell-content">
            <span class="word-text">${esc(dw.word)}</span>
            ${audioBtn(dw)}
          </div>
        </td>
        <td>${esc(dw.article)}</td>
        <td>${esc(dw.plural)}</td>
        <td><span class="gender-badge ${g ? g.cssClass : ''}">${g ? g.label : '?'}</span></td>
        <td>${esc(dw.definition)}</td>
        <td><span class="srs-badge ${SRS.boxClass(rec.box)}">${SRS.boxLabel(rec.box)}</span></td>
        <td class="edit-cell"><button class="edit-row-btn" data-wk="${esc(wk)}" title="Änneren">✏️</button></td>
      </tr>`;

      if (isEditing) {
        h += renderEditRow(raw, dw, 'noun');
      }
    });

    h += '</tbody></table></div></div>';
    app.innerHTML = h;
    bindAudioButtons();
    bindClick('open-add-modal-btn', () => openAddWordModal(topicId));

    // --- Edit events ---
    document.querySelectorAll('.edit-row-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const wk = btn.dataset.wk;
        state.listEditKey = state.listEditKey === wk ? null : wk;
        renderTopic(topicId);
      });
    });

    bindEditRowEvents(topic.words, 'nouns', () => renderTopic(topicId));
  }

  /* ====================================================================
     TRAIN VIEW — now with mnemonics & examples
     ==================================================================== */
  function initTrain(topicId) {
    const topic = getTopic(topicId);
    if (!topic) return renderHome();

    // Only train words that are NOT "Not important"
    const activeIndices = [];
    topic.words.forEach((w, idx) => {
      const wWithGender = { ...w, type: 'noun' }; // since topic words are nouns
      if (SRS.getRecord(wWithGender).box !== -1) {
        activeIndices.push(idx);
      }
    });

    state.trainOrder    = shuffle(activeIndices);
    state.trainIndex    = 0;
    state.trainRevealed = false;

    renderTrain(topic);
  }

  function renderTrain(topic) {
    if (state.trainOrder.length === 0) {
      let h = '<div class="train-view">';
      h += `<a href="#/topic/${topic.id}" class="back-link">← Zréck op d'Thema</a>`;
      h += '<div class="learn-empty">';
      h += '  <div class="learn-empty-icon">🎓</div>';
      h += '  <h2>Keng wichteg Wierder fir ze trainéieren!</h2>';
      h += '  <p>Et gi keng wichteg Vokabelen an dësem Thema fir ze trainéieren. All Wierder sinn als "Net wichteg" markéiert.</p>';
      h += `  <a href="#/topic/${topic.id}" class="btn btn-primary">← Zréck op d'Thema</a>`;
      h += '</div></div>';
      app.innerHTML = h;
      return;
    }

    const idx   = state.trainOrder[state.trainIndex];
    const rawWord = topic.words[idx];
    const word  = applyOverrides({ ...rawWord, type: rawWord.type || 'noun' });
    const g     = GENDER[word.gender];
    const total = state.trainOrder.length;
    const cur   = state.trainIndex + 1;

    let h = '<div class="train-view">';
    h += `<a href="#/topic/${topic.id}" class="back-link">← Zréck op d'Thema</a>`;
    h += `<div class="progress-info">${cur} vun ${total}</div>`;
    h += `<div class="progress-bar"><div class="progress-fill" style="width:${(cur / total) * 100}%"></div></div>`;

    // Flashcard
    h += '<div class="flashcard">';
    h += `  <div class="flashcard-word"><span class="word-with-audio">${esc(word.word)}${audioBtn(word)}</span></div>`;
    h += `  <div class="flashcard-definition">${esc(word.definition)}</div>`;

    if (state.trainRevealed) {
      h += '<div class="flashcard-details">';
      h += `  <div class="detail-row"><span class="detail-label">Artikel:</span> <span class="detail-value">${esc(word.article)} ${esc(word.word)}</span></div>`;
      h += `  <div class="detail-row"><span class="detail-label">Geschlecht:</span> <span class="gender-badge ${g.cssClass}">${g.label}</span></div>`;
      h += `  <div class="detail-row"><span class="detail-label">Plural:</span> <span class="detail-value">${esc(word.plural)}</span></div>`;
      h += '</div>';
    }

    // Mnemonic + example (always visible)
    h += renderMnemonicSections({ ...rawWord, type: rawWord.type || 'noun' });

    h += '</div>'; // .flashcard

    // Controls
    h += '<div class="train-controls">';
    h += state.trainIndex > 0
      ? '<button class="btn btn-secondary" id="btn-prev">← Zréck</button>'
      : '<div></div>';

    if (!state.trainRevealed) {
      h += '<button class="btn btn-primary" id="btn-reveal">Weisen</button>';
    } else if (cur < total) {
      h += '<button class="btn btn-primary" id="btn-next">Nächst →</button>';
    } else {
      h += `<button class="btn btn-primary" id="btn-finish">✓ Fäerdeg</button>`;
    }
    h += '</div>';

    h += '<div class="keyboard-hint"><span class="key">Space</span> weisen &nbsp; <span class="key">←</span> <span class="key">→</span> navigéieren</div>';

    h += '</div>';
    app.innerHTML = h;
    bindAudioButtons();

    // --- Events ---
    const rerender = () => renderTrain(topic);
    bindClick('btn-reveal', () => { state.trainRevealed = true; rerender(); });
    bindClick('btn-next',   () => { state.trainIndex++; state.trainRevealed = false; rerender(); });
    bindClick('btn-prev',   () => { state.trainIndex--; state.trainRevealed = false; rerender(); });
    bindClick('btn-finish', () => { window.location.hash = `#/topic/${topic.id}`; });

    bindMnemonicEditing({ ...rawWord, type: rawWord.type || 'noun' }, rerender);

    document.onkeydown = (e) => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!state.trainRevealed) { state.trainRevealed = true; rerender(); }
        else if (cur < total) { state.trainIndex++; state.trainRevealed = false; rerender(); }
      } else if (e.key === 'ArrowRight') {
        if (state.trainRevealed && cur < total) { state.trainIndex++; state.trainRevealed = false; rerender(); }
      } else if (e.key === 'ArrowLeft' && state.trainIndex > 0) {
        state.trainIndex--; state.trainRevealed = false; rerender();
      }
    };
  }

  /* ====================================================================
     TEST VIEW — Theme Gender Quiz (preserved)
     ==================================================================== */
  function initTest(topicId) {
    const topic = getTopic(topicId);
    if (!topic) return renderHome();

    // Only test words that are NOT "Not important"
    const activeIndices = [];
    topic.words.forEach((w, idx) => {
      const wWithGender = { ...w, type: 'noun' }; // since topic words are nouns
      if (SRS.getRecord(wWithGender).box !== -1) {
        activeIndices.push(idx);
      }
    });

    state.testOrder        = shuffle(activeIndices);
    state.testIndex        = 0;
    state.testAnswers      = [];
    state.testFeedback     = false;
    state.testHideLanguage = 'none';

    if (state.testOrder.length === 0) {
      let h = '<div class="test-view">';
      h += `<a href="#/topic/${topic.id}" class="back-link">← Zréck op d'Thema</a>`;
      h += '<div class="learn-empty">';
      h += '  <div class="learn-empty-icon">📝</div>';
      h += '  <h2>Keng wichteg Wierder fir ze testen!</h2>';
      h += '  <p>Et gi keng wichteg Vokabelen an dësem Thema fir ze testen. All Wierder sinn als "Net wichteg" markéiert.</p>';
      h += `  <a href="#/topic/${topic.id}" class="btn btn-primary">← Zréck op d'Thema</a>`;
      h += '</div></div>';
      app.innerHTML = h;
      return;
    }

    renderLanguagePicker(topic);
  }

  function renderLanguagePicker(topic) {
    let h = '<div class="test-view">';
    h += `<a href="#/topic/${topic.id}" class="back-link">← Ofbriechen</a>`;

    h += '<div class="lang-picker">';
    h += '  <h2 class="lang-picker-title">Wëlls du och Vokabelen testen?</h2>';
    h += '  <p class="lang-picker-subtitle">Wiel wat verstoppt gëtt während dem Test</p>';
    h += '  <div class="lang-picker-options">';
    h += '    <button class="btn lang-option" data-hide="none">';
    h += '      <span class="lang-option-icon">👁️</span>';
    h += '      <span class="lang-option-label">Alles weisen</span>';
    h += '      <span class="lang-option-desc">Nëmmen Geschlecht testen</span>';
    h += '    </button>';
    h += '    <button class="btn lang-option" data-hide="en">';
    h += '      <span class="lang-option-icon">🇬🇧</span>';
    h += '      <span class="lang-option-label">Englesch verstoppen</span>';
    h += '      <span class="lang-option-desc">Lëtzebuergesch → Englesch + Geschlecht</span>';
    h += '    </button>';
    h += '    <button class="btn lang-option" data-hide="lb">';
    h += '      <span class="lang-option-icon">🇱🇺</span>';
    h += '      <span class="lang-option-label">Lëtzebuergesch verstoppen</span>';
    h += '      <span class="lang-option-desc">Englesch → Lëtzebuergesch + Geschlecht</span>';
    h += '    </button>';
    h += '  </div>';
    h += '</div>';
    h += '</div>';
    app.innerHTML = h;

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', () => {
        state.testHideLanguage = btn.dataset.hide;
        renderTest(topic);
      });
    });

    document.onkeydown = (e) => {
      const map = { '1': 'none', '2': 'en', '3': 'lb' };
      if (map[e.key]) {
        e.preventDefault();
        state.testHideLanguage = map[e.key];
        renderTest(topic);
      }
    };
  }

  function renderTest(topic) {
    if (state.testIndex >= state.testOrder.length) {
      return renderSummary(topic);
    }

    const idx   = state.testOrder[state.testIndex];
    const rawWord = topic.words[idx];
    const word  = applyOverrides({ ...rawWord, type: rawWord.type || 'noun' });
    const total = state.testOrder.length;
    const cur   = state.testIndex + 1;

    let h = '<div class="test-view">';
    h += `<a href="#/topic/${topic.id}" class="back-link">← Ofbriechen</a>`;
    h += `<div class="progress-info">${cur} vun ${total}</div>`;
    h += `<div class="progress-bar"><div class="progress-fill" style="width:${(cur / total) * 100}%"></div></div>`;

    h += '<div class="test-card">';

    // Word (Luxembourgish)
    if (state.testHideLanguage === 'lb') {
      h += '<div class="test-word"><span class="word-with-audio">???</span></div>';
      h += '<details class="vocab-reveal">';
      h += '  <summary class="vocab-reveal-btn">Wuert weisen</summary>';
      h += `  <div class="vocab-reveal-content"><span class="word-with-audio">${esc(word.word)}${audioBtn(word)}</span></div>`;
      h += '</details>';
    } else {
      h += `  <div class="test-word"><span class="word-with-audio">${esc(word.word)}${audioBtn(word)}</span></div>`;
    }

    // Definition (English)
    if (state.testHideLanguage === 'en') {
      h += '<details class="vocab-reveal">';
      h += '  <summary class="vocab-reveal-btn">Definitioun weisen</summary>';
      h += `  <div class="vocab-reveal-content">${esc(word.definition)}</div>`;
      h += '</details>';
    } else {
      h += `  <div class="test-definition">${esc(word.definition)}</div>`;
    }

    if (state.testFeedback) {
      const last      = state.testAnswers[state.testAnswers.length - 1];
      const correctG  = GENDER[word.gender];
      const fbClass   = last.correct ? 'feedback-correct' : 'feedback-wrong';
      const fbIcon    = last.correct ? '✓ Richteg!' : '✗ Falsch!';

      h += `<div class="feedback ${fbClass}">`;
      h += `  <div class="feedback-icon">${fbIcon}</div>`;
      h += `  <div class="feedback-answer">Richteg Äntwert: <span class="gender-badge ${correctG.cssClass}">${correctG.label}</span> — ${esc(word.article)} ${esc(word.word)}</div>`;
      h += '</div>';
      h += '<div class="test-controls">';
      h += '  <button class="btn btn-primary" id="btn-continue">Weider →</button>';
      h += '</div>';
    } else {
      h += '<div class="gender-options">';
      h += '  <button class="btn gender-btn gender-m" data-gender="m">🔵 Maskulin</button>';
      h += '  <button class="btn gender-btn gender-f" data-gender="f">🔴 Feminin</button>';
      h += '  <button class="btn gender-btn gender-n" data-gender="n">🟢 Neutrum</button>';
      h += '  <button class="btn gender-btn gender-unknown" data-gender="unknown">❓ Wees net</button>';
      h += '</div>';
      h += '<div class="keyboard-hint"><span class="key">1</span> Maskulin &nbsp; <span class="key">2</span> Feminin &nbsp; <span class="key">3</span> Neutrum &nbsp; <span class="key">4</span> Wees net</div>';
    }

    h += '</div></div>';
    app.innerHTML = h;
    bindAudioButtons();

    // --- Events ---
    if (state.testFeedback) {
      bindClick('btn-continue', () => {
        state.testIndex++;
        state.testFeedback = false;
        renderTest(topic);
      });
      document.onkeydown = (e) => {
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
          e.preventDefault();
          state.testIndex++; state.testFeedback = false; renderTest(topic);
        }
      };
    } else {
      document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', () => answerTest(btn.dataset.gender, word, idx, topic));
      });
      document.onkeydown = (e) => {
        const map = { '1': 'm', '2': 'f', '3': 'n', '4': 'unknown' };
        if (map[e.key]) { e.preventDefault(); answerTest(map[e.key], word, idx, topic); }
      };
    }
  }

  function answerTest(userGender, word, wordIdx, topic) {
    const correct = userGender === word.gender;
    state.testAnswers.push({
      wordIndex:  wordIdx,
      userAnswer: userGender,
      correct:    correct,
    });
    if (correct) {
      SRS.markCorrect(word);
    } else {
      SRS.markWrong(word);
    }
    state.testFeedback = true;
    renderTest(topic);
  }

  /* ====================================================================
     SUMMARY VIEW (preserved from original)
     ==================================================================== */
  function renderSummary(topic) {
    const total   = state.testAnswers.length;
    const correct = state.testAnswers.filter(a => a.correct).length;
    const wrong   = state.testAnswers.filter(a => !a.correct);
    const pct     = Math.round((correct / total) * 100);

    const tier = pct >= 80 ? 'score-great' : pct >= 50 ? 'score-ok' : 'score-bad';

    let h = '<div class="summary-view">';
    h += '<h1>Resultat</h1>';

    h += '<div class="score-display">';
    h += `  <div class="score-circle ${tier}">`;
    h += `    <span class="score-pct">${pct}%</span>`;
    h += `    <span class="score-detail">${correct} / ${total}</span>`;
    h += '  </div>';
    h += '</div>';

    if (wrong.length > 0) {
      h += '<div class="wrong-section">';
      h += `  <button class="btn btn-secondary wrong-toggle" id="toggle-wrong">Falsch Äntwerten (${wrong.length}) ▼</button>`;
      h += '  <div class="wrong-list" id="wrong-list">';
      h += '    <table class="word-table"><thead><tr>';
      h += '      <th>Wuert</th><th>Deng Äntwert</th><th>Richteg</th>';
      h += '    </tr></thead><tbody>';

      wrong.forEach(a => {
        const w    = applyOverrides({ ...topic.words[a.wordIndex], type: 'noun' });
        const cg   = GENDER[w.gender];
        const ug   = a.userAnswer === 'unknown'
          ? { label: 'Wees net', cssClass: 'gender-unknown' }
          : GENDER[a.userAnswer];

        h += `<tr>
          <td class="word-cell">${esc(w.article)} ${esc(w.word)} <span class="word-def">— ${esc(w.definition)}</span></td>
          <td><span class="gender-badge ${ug.cssClass}">${ug.label}</span></td>
          <td><span class="gender-badge ${cg.cssClass}">${cg.label}</span></td>
        </tr>`;
      });

      h += '    </tbody></table>';
      h += '  </div>';
      h += '</div>';
    } else {
      h += '<div class="perfect-score">🎉 Perfekt! Alles richteg!</div>';
    }

    h += '<div class="summary-actions">';
    h += `  <button class="btn btn-test" id="btn-retest">📝 Nach eng Kéier testen</button>`;
    h += `  <a href="#/topic/${topic.id}" class="btn btn-secondary">← Zréck op d'Thema</a>`;
    h += '</div>';

    h += '</div>';
    app.innerHTML = h;

    bindClick('btn-retest', () => { initTest(topic.id); });

    const toggleBtn = document.getElementById('toggle-wrong');
    const wrongList = document.getElementById('wrong-list');
    if (toggleBtn && wrongList) {
      toggleBtn.addEventListener('click', () => {
        const expanded = wrongList.classList.toggle('expanded');
        toggleBtn.textContent = expanded
          ? `Falsch Äntwerten (${wrong.length}) ▲`
          : `Falsch Äntwerten (${wrong.length}) ▼`;
      });
    }

    document.onkeydown = null;
  }

  /* ====================================================================
     WORD-TYPE TEST VIEW  (#/test-type/:type)
     Self-grading recall test for all word types.
     Nouns still get the gender quiz; verbs/adjectives use reveal+grade.
     ==================================================================== */
  function initTestType(type) {
    let rawWords = getRawWordsForType(type);
    if (rawWords.length === 0) return renderHome();

    if (state.listFilter === 'important' || state.listFilter === 'all') {
      rawWords = rawWords.filter(w => SRS.getRecord(w).box !== -1);
    } else {
      rawWords = rawWords.filter(w => SRS.getRecord(w).box === state.listFilter);
    }

    if (rawWords.length === 0) {
      let h = '<div class="test-view">';
      h += `<a href="#/words/${type}" class="back-link">← Zréck</a>`;
      h += '<div class="learn-empty">';
      h += '  <div class="learn-empty-icon">📝</div>';
      h += `  <h2>Keng Wierder am Filter "${esc(SRS.boxLabel(state.listFilter))}"!</h2>`;
      h += '  <p>Et gi keng Vokabelen an dëser Box fir ze testen. Wiel en anere Filter an der Lëscht.</p>';
      h += `  <a href="#/words/${type}" class="btn btn-primary">← Zréck op d'Lëscht</a>`;
      h += '</div></div>';
      app.innerHTML = h;
      return;
    }

    state.ttWords    = shuffle(rawWords);
    state.ttIndex    = 0;
    state.ttAnswers  = [];
    state.ttFeedback = false;
    state.ttRevealed = false;
    state.ttHide     = 'none';
    state.ttType     = type;

    renderTestTypePicker();
  }

  function renderTestTypePicker() {
    const type = state.ttType;
    const isNoun = type === 'nouns';

    let h = '<div class="test-view">';
    h += `<a href="#/words/${type}" class="back-link">← Ofbriechen</a>`;
    h += '<div class="lang-picker">';
    h += '  <h2 class="lang-picker-title">Wéi wëlls du getest ginn?</h2>';
    h += '  <p class="lang-picker-subtitle">Wiel wat verstoppt gëtt während dem Test</p>';
    h += '  <div class="lang-picker-options">';

    if (isNoun) {
      h += '    <button class="btn lang-option" data-hide="none">';
      h += '      <span class="lang-option-icon">👁️</span>';
      h += '      <span class="lang-option-label">Alles weisen</span>';
      h += '      <span class="lang-option-desc">Nëmmen Geschlecht testen</span>';
      h += '    </button>';
    }

    h += '    <button class="btn lang-option" data-hide="en">';
    h += '      <span class="lang-option-icon">🇬🇧</span>';
    h += '      <span class="lang-option-label">Englesch verstoppen</span>';
    h += `      <span class="lang-option-desc">Lëtzebuergesch → Englesch${isNoun ? ' + Geschlecht' : ''}</span>`;
    h += '    </button>';
    h += '    <button class="btn lang-option" data-hide="lb">';
    h += '      <span class="lang-option-icon">🇱🇺</span>';
    h += '      <span class="lang-option-label">Lëtzebuergesch verstoppen</span>';
    h += `      <span class="lang-option-desc">Englesch → Lëtzebuergesch${isNoun ? ' + Geschlecht' : ''}</span>`;
    h += '    </button>';

    h += '  </div>';
    h += '</div></div>';
    app.innerHTML = h;

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', () => {
        state.ttHide = btn.dataset.hide;
        renderTestType();
      });
    });
  }

  function renderTestType() {
    const words = state.ttWords;
    const idx   = state.ttIndex;
    const type  = state.ttType;
    const isNoun = type === 'nouns';

    if (idx >= words.length) return renderTestTypeSummary();

    const rawWord = words[idx];
    const word    = applyOverrides(rawWord);
    const total   = words.length;
    const cur     = idx + 1;

    let h = '<div class="test-view">';
    h += `<a href="#/words/${type}" class="back-link">← Ofbriechen</a>`;
    h += `<div class="progress-info">${cur} vun ${total}</div>`;
    h += `<div class="progress-bar"><div class="progress-fill" style="width:${(cur / total) * 100}%"></div></div>`;

    h += '<div class="test-card">';

    // --- Show word or ??? ---
    if (state.ttHide === 'lb') {
      h += '<div class="test-word"><span class="word-with-audio">???</span></div>';
    } else {
      h += `<div class="test-word"><span class="word-with-audio">${esc(word.word)}${audioBtn(word)}</span></div>`;
    }

    // --- Show definition or ??? ---
    if (state.ttHide === 'en') {
      h += '<div class="test-definition" style="color:var(--text-dim)">???</div>';
    } else {
      h += `<div class="test-definition">${esc(word.definition)}</div>`;
    }

    // --- Noun: gender quiz ---
    if (isNoun && !state.ttFeedback) {
      h += '<div class="gender-options">';
      h += '  <button class="btn gender-btn gender-m" data-gender="m">🔵 Maskulin</button>';
      h += '  <button class="btn gender-btn gender-f" data-gender="f">🔴 Feminin</button>';
      h += '  <button class="btn gender-btn gender-n" data-gender="n">🟢 Neutrum</button>';
      h += '  <button class="btn gender-btn gender-unknown" data-gender="unknown">❓ Wees net</button>';
      h += '</div>';
    }

    // --- Verb/Adj: self-grading ---
    if (!isNoun && !state.ttRevealed && !state.ttFeedback) {
      h += '<div class="self-grade-controls">';
      h += '  <button class="btn btn-primary btn-lg" id="btn-tt-reveal">Äntwert weisen</button>';
      h += '</div>';
    }

    // --- Revealed answer ---
    if (state.ttRevealed && !state.ttFeedback) {
      h += '<div class="flashcard-details" style="margin-top:20px">';
      if (state.ttHide === 'lb') {
        h += `<div class="detail-row"><span class="detail-label">Wuert:</span> <span class="detail-value" style="font-size:1.3rem">${esc(word.word)}</span>${audioBtn(word)}</div>`;
      }
      if (state.ttHide === 'en') {
        h += `<div class="detail-row"><span class="detail-label">Definitioun:</span> <span class="detail-value">${esc(word.definition)}</span></div>`;
      }
      if (word.type === 'verb' && word.conjugation) {
        h += `<div class="detail-row"><span class="detail-label">Partizip:</span> <span class="verb-pp">${esc(word.conjugation.pastParticiple)}</span> <span class="aux-badge">${esc(word.conjugation.auxiliary)}</span></div>`;
      }
      h += '</div>';
      h += '<div class="self-grade-controls">';
      h += '  <button class="btn btn-wrong btn-lg" id="btn-tt-wrong">✗ Falsch</button>';
      h += '  <button class="btn btn-right btn-lg" id="btn-tt-right">✓ Richteg</button>';
      h += '</div>';
    }

    // --- Noun feedback ---
    if (isNoun && state.ttFeedback) {
      const last = state.ttAnswers[state.ttAnswers.length - 1];
      const correctG = GENDER[word.gender];
      const fbClass = last.correct ? 'feedback-correct' : 'feedback-wrong';
      const fbIcon  = last.correct ? '✓ Richteg!' : '✗ Falsch!';

      h += `<div class="feedback ${fbClass}">`;
      h += `  <div class="feedback-icon">${fbIcon}</div>`;
      h += `  <div class="feedback-answer">Richteg Äntwert: <span class="gender-badge ${correctG.cssClass}">${correctG.label}</span> — ${esc(word.article)} ${esc(word.word)}</div>`;
      h += '</div>';

      // Show hidden parts
      if (state.ttHide === 'lb') {
        h += `<div class="detail-row" style="justify-content:center;margin-top:12px"><span class="detail-value" style="font-size:1.2rem">${esc(word.word)}</span>${audioBtn(word)}</div>`;
      }
      if (state.ttHide === 'en') {
        h += `<div class="detail-row" style="justify-content:center;margin-top:12px"><span class="detail-value">${esc(word.definition)}</span></div>`;
      }

      h += '<div class="test-controls"><button class="btn btn-primary" id="btn-tt-next">Weider →</button></div>';
    }

    h += '<div class="keyboard-hint" style="margin-top:16px">';
    if (isNoun && !state.ttFeedback) {
      h += '<span class="key">1</span> M &nbsp; <span class="key">2</span> F &nbsp; <span class="key">3</span> N &nbsp; <span class="key">4</span> ???';
    } else if (!isNoun && !state.ttRevealed) {
      h += '<span class="key">Space</span> weisen';
    } else if (!isNoun && state.ttRevealed) {
      h += '<span class="key">1</span> falsch &nbsp; <span class="key">2</span> richteg';
    } else {
      h += '<span class="key">Space</span> weider';
    }
    h += '</div>';

    h += '</div></div>';
    app.innerHTML = h;
    bindAudioButtons();

    // --- Events ---
    if (isNoun && !state.ttFeedback) {
      // Gender quiz
      document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const correct = btn.dataset.gender === word.gender;
          state.ttAnswers.push({
            wordIndex: idx,
            correct: correct,
            userAnswer: btn.dataset.gender,
          });
          if (correct) {
            SRS.markCorrect(rawWord);
          } else {
            SRS.markWrong(rawWord);
          }
          state.ttFeedback = true;
          renderTestType();
        });
      });
      document.onkeydown = (e) => {
        const map = { '1': 'm', '2': 'f', '3': 'n', '4': 'unknown' };
        if (map[e.key]) {
          e.preventDefault();
          const correct = map[e.key] === word.gender;
          state.ttAnswers.push({ wordIndex: idx, correct: correct, userAnswer: map[e.key] });
          if (correct) {
            SRS.markCorrect(rawWord);
          } else {
            SRS.markWrong(rawWord);
          }
          state.ttFeedback = true;
          renderTestType();
        }
      };
    } else if (isNoun && state.ttFeedback) {
      bindClick('btn-tt-next', () => {
        state.ttIndex++; state.ttFeedback = false; renderTestType();
      });
      document.onkeydown = (e) => {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); state.ttIndex++; state.ttFeedback = false; renderTestType(); }
      };
    } else if (!isNoun && !state.ttRevealed) {
      bindClick('btn-tt-reveal', () => { state.ttRevealed = true; renderTestType(); });
      document.onkeydown = (e) => {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); state.ttRevealed = true; renderTestType(); }
      };
    } else if (!isNoun && state.ttRevealed) {
      bindClick('btn-tt-right', () => {
        SRS.markCorrect(rawWord);
        state.ttAnswers.push({ wordIndex: idx, correct: true }); state.ttIndex++; state.ttRevealed = false; renderTestType();
      });
      bindClick('btn-tt-wrong', () => {
        SRS.markWrong(rawWord);
        state.ttAnswers.push({ wordIndex: idx, correct: false }); state.ttIndex++; state.ttRevealed = false; renderTestType();
      });
      document.onkeydown = (e) => {
        if (e.key === '1') {
          e.preventDefault();
          SRS.markWrong(rawWord);
          state.ttAnswers.push({ wordIndex: idx, correct: false }); state.ttIndex++; state.ttRevealed = false; renderTestType();
        }
        if (e.key === '2') {
          e.preventDefault();
          SRS.markCorrect(rawWord);
          state.ttAnswers.push({ wordIndex: idx, correct: true }); state.ttIndex++; state.ttRevealed = false; renderTestType();
        }
      };
    }
  }

  function renderTestTypeSummary() {
    const type  = state.ttType;
    const total = state.ttAnswers.length;
    const correct = state.ttAnswers.filter(a => a.correct).length;
    const wrong   = state.ttAnswers.filter(a => !a.correct);
    const pct     = total > 0 ? Math.round((correct / total) * 100) : 0;
    const tier    = pct >= 80 ? 'score-great' : pct >= 50 ? 'score-ok' : 'score-bad';

    let h = '<div class="summary-view">';
    h += '<h1>Resultat</h1>';

    h += '<div class="score-display">';
    h += `  <div class="score-circle ${tier}">`;
    h += `    <span class="score-pct">${pct}%</span>`;
    h += `    <span class="score-detail">${correct} / ${total}</span>`;
    h += '  </div>';
    h += '</div>';

    if (wrong.length > 0) {
      h += '<div class="wrong-section">';
      h += `  <button class="btn btn-secondary wrong-toggle" id="toggle-wrong">Falsch Äntwerten (${wrong.length}) ▼</button>`;
      h += '  <div class="wrong-list" id="wrong-list">';
      h += '    <table class="word-table"><thead><tr>';
      h += '      <th>Wuert</th><th>Definitioun</th>';
      if (type === 'nouns') h += '<th>Deng Äntwert</th><th>Richteg</th>';
      h += '    </tr></thead><tbody>';

      wrong.forEach(a => {
        const rawW = state.ttWords[a.wordIndex];
        const w = applyOverrides(rawW);
        h += '<tr>';
        h += `<td class="word-cell">${esc(w.word)}</td>`;
        h += `<td>${esc(w.definition)}</td>`;
        if (type === 'nouns') {
          const cg = GENDER[w.gender];
          const ug = a.userAnswer === 'unknown'
            ? { label: 'Wees net', cssClass: 'gender-unknown' }
            : GENDER[a.userAnswer];
          h += `<td><span class="gender-badge ${ug.cssClass}">${ug.label}</span></td>`;
          h += `<td><span class="gender-badge ${cg.cssClass}">${cg.label}</span></td>`;
        }
        h += '</tr>';
      });

      h += '    </tbody></table>';
      h += '  </div>';
      h += '</div>';
    } else {
      h += '<div class="perfect-score">🎉 Perfekt! Alles richteg!</div>';
    }

    h += '<div class="summary-actions">';
    h += `  <button class="btn btn-test" id="btn-retest">📝 Nach eng Kéier testen</button>`;
    h += `  <a href="#/words/${type}" class="btn btn-secondary">📋 Zréck op d'Lëscht</a>`;
    h += `  <a href="#/" class="btn btn-secondary">🏠 Heem</a>`;
    h += '</div>';
    h += '</div>';
    app.innerHTML = h;

    bindClick('btn-retest', () => initTestType(type));

    const toggleBtn = document.getElementById('toggle-wrong');
    const wrongList = document.getElementById('wrong-list');
    if (toggleBtn && wrongList) {
      toggleBtn.addEventListener('click', () => {
        const expanded = wrongList.classList.toggle('expanded');
        toggleBtn.textContent = expanded
          ? `Falsch Äntwerten (${wrong.length}) ▲`
          : `Falsch Äntwerten (${wrong.length}) ▼`;
      });
    }

    document.onkeydown = null;
  }

})();
