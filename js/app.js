/**
 * Lëtz Gender — Main Application
 *
 * Hash-based SPA with four views:
 *   #/               → Home (topic grid)
 *   #/topic/:id      → Topic detail (word table + actions)
 *   #/train/:id      → Flashcard training
 *   #/test/:id       → Gender quiz → summary
 */
(function () {
  'use strict';

  /* ====================================================================
     DATA & CONFIG
     ==================================================================== */
  const topics = window.LetzGender.topics;
  const app    = document.getElementById('app');

  const GENDER = {
    m: { label: 'Maskulin', cssClass: 'gender-m' },
    f: { label: 'Feminin',  cssClass: 'gender-f' },
    n: { label: 'Neutrum',  cssClass: 'gender-n' },
  };

  /* ====================================================================
     STATE
     ==================================================================== */
  let state = {
    trainOrder:    [],
    trainIndex:    0,
    trainRevealed: false,
    testOrder:     [],
    testIndex:     0,
    testAnswers:   [],
    testFeedback:  false,
  };

  /* ====================================================================
     UTILITIES
     ==================================================================== */
  /** Fisher-Yates shuffle (returns new array). */
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

  /** Simple HTML-escape. */
  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  /** Returns HTML for an audio play button if the word has audio, else ''. */
  function audioBtn(word) {
    if (!word.audio) return '';
    return `<button class="audio-btn" data-audio="${esc(word.audio)}" title="Lauschteren">🔊</button>`;
  }

  /** Play audio for a word. Bound after render via event delegation. */
  function bindAudioButtons() {
    document.querySelectorAll('.audio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = btn.dataset.audio;
        if (!src) return;
        // Stop any currently playing audio
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

  /* ====================================================================
     ROUTER
     ==================================================================== */
  function navigate() {
    // Clean up any lingering keyboard handler
    document.onkeydown = null;

    const hash  = window.location.hash || '#/';
    const match = hash.match(/#\/([a-z]*)(?:\/(.+))?/);

    if (!match || !match[1]) return renderHome();

    const view    = match[1];
    const topicId = match[2];

    switch (view) {
      case 'topic': return renderTopic(topicId);
      case 'train': return initTrain(topicId);
      case 'test':  return initTest(topicId);
      default:      return renderHome();
    }
  }

  window.addEventListener('hashchange', navigate);
  document.addEventListener('DOMContentLoaded', navigate);

  /* ====================================================================
     HOME VIEW
     ==================================================================== */
  function renderHome() {
    let h = '';
    h += '<div class="home">';
    h += '  <div class="hero">';
    h += '    <h1>Lëtz Gender</h1>';
    h += '    <p class="subtitle">Léier d\'Geschlechter vun de Lëtzebuerger Substantiven</p>';
    h += '  </div>';
    h += '  <h2 class="section-title">Themen</h2>';
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

  /* ====================================================================
     TOPIC VIEW
     ==================================================================== */
  function renderTopic(topicId) {
    const topic = getTopic(topicId);
    if (!topic) return renderHome();

    let h = '';
    h += '<div class="topic-view">';
    h += `<a href="#/" class="back-link">← Zréck</a>`;

    // Header
    h += '<div class="topic-header">';
    h += `  <span class="topic-icon-large">${topic.icon}</span>`;
    h += `  <h1>${esc(topic.name)}</h1>`;
    h += `  <p class="topic-name-en">${esc(topic.nameEn)}</p>`;
    h += `  <span class="badge">${topic.words.length} Wierder</span>`;
    h += '</div>';

    // Action buttons
    h += '<div class="topic-actions">';
    h += `  <a href="#/train/${topic.id}" class="btn btn-train">🎓 Trainéieren</a>`;
    h += `  <a href="#/test/${topic.id}" class="btn btn-test">📝 Test</a>`;
    h += '</div>';

    // Word table
    h += '<div class="table-container"><table class="word-table">';
    h += '<thead><tr>';
    h += '  <th>Wuert</th><th>Artikel</th><th>Plural</th><th>Geschlecht</th><th>Definitioun</th>';
    h += '</tr></thead><tbody>';

    topic.words.forEach(w => {
      const g = GENDER[w.gender];
      h += `<tr>
        <td class="word-cell">${esc(w.word)}</td>
        <td>${esc(w.article)}</td>
        <td>${esc(w.plural)}</td>
        <td><span class="gender-badge ${g.cssClass}">${g.label}</span></td>
        <td>${esc(w.definition)}</td>
      </tr>`;
    });

    h += '</tbody></table></div></div>';
    app.innerHTML = h;
  }

  /* ====================================================================
     TRAIN VIEW
     ==================================================================== */
  function initTrain(topicId) {
    const topic = getTopic(topicId);
    if (!topic) return renderHome();

    state.trainOrder    = shuffle([...Array(topic.words.length).keys()]);
    state.trainIndex    = 0;
    state.trainRevealed = false;

    renderTrain(topic);
  }

  function renderTrain(topic) {
    const idx   = state.trainOrder[state.trainIndex];
    const word  = topic.words[idx];
    const g     = GENDER[word.gender];
    const total = topic.words.length;
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
    h += '</div>';

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

    // Keyboard hint
    h += '<div class="keyboard-hint"><span class="key">Space</span> weisen &nbsp; <span class="key">←</span> <span class="key">→</span> navigéieren</div>';

    h += '</div>';
    app.innerHTML = h;
    bindAudioButtons();

    // --- Events ---
    bindClick('btn-reveal', () => { state.trainRevealed = true; renderTrain(topic); });
    bindClick('btn-next',   () => { state.trainIndex++; state.trainRevealed = false; renderTrain(topic); });
    bindClick('btn-prev',   () => { state.trainIndex--; state.trainRevealed = false; renderTrain(topic); });
    bindClick('btn-finish', () => { window.location.hash = `#/topic/${topic.id}`; });

    document.onkeydown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!state.trainRevealed) {
          state.trainRevealed = true;
          renderTrain(topic);
        } else if (cur < total) {
          state.trainIndex++;
          state.trainRevealed = false;
          renderTrain(topic);
        }
      } else if (e.key === 'ArrowRight') {
        if (state.trainRevealed && cur < total) {
          state.trainIndex++;
          state.trainRevealed = false;
          renderTrain(topic);
        }
      } else if (e.key === 'ArrowLeft' && state.trainIndex > 0) {
        state.trainIndex--;
        state.trainRevealed = false;
        renderTrain(topic);
      }
    };
  }

  /* ====================================================================
     TEST VIEW
     ==================================================================== */
  function initTest(topicId) {
    const topic = getTopic(topicId);
    if (!topic) return renderHome();

    state.testOrder    = shuffle([...Array(topic.words.length).keys()]);
    state.testIndex    = 0;
    state.testAnswers  = [];
    state.testFeedback = false;

    renderTest(topic);
  }

  function renderTest(topic) {
    // All done → summary
    if (state.testIndex >= topic.words.length) {
      return renderSummary(topic);
    }

    const idx   = state.testOrder[state.testIndex];
    const word  = topic.words[idx];
    const total = topic.words.length;
    const cur   = state.testIndex + 1;

    let h = '<div class="test-view">';
    h += `<a href="#/topic/${topic.id}" class="back-link">← Ofbriechen</a>`;
    h += `<div class="progress-info">${cur} vun ${total}</div>`;
    h += `<div class="progress-bar"><div class="progress-fill" style="width:${(cur / total) * 100}%"></div></div>`;

    h += '<div class="test-card">';
    h += `  <div class="test-word"><span class="word-with-audio">${esc(word.word)}${audioBtn(word)}</span></div>`;
    h += `  <div class="test-definition">${esc(word.definition)}</div>`;

    if (state.testFeedback) {
      // Show feedback
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
      // Gender choice buttons
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
          state.testIndex++;
          state.testFeedback = false;
          renderTest(topic);
        }
      };
    } else {
      document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', () => answerTest(btn.dataset.gender, word, idx, topic));
      });

      document.onkeydown = (e) => {
        const map = { '1': 'm', '2': 'f', '3': 'n', '4': 'unknown' };
        if (map[e.key]) {
          e.preventDefault();
          answerTest(map[e.key], word, idx, topic);
        }
      };
    }
  }

  function answerTest(userGender, word, wordIdx, topic) {
    state.testAnswers.push({
      wordIndex:  wordIdx,
      userAnswer: userGender,
      correct:    userGender === word.gender,
    });
    state.testFeedback = true;
    renderTest(topic);
  }

  /* ====================================================================
     SUMMARY VIEW
     ==================================================================== */
  function renderSummary(topic) {
    const total   = state.testAnswers.length;
    const correct = state.testAnswers.filter(a => a.correct).length;
    const wrong   = state.testAnswers.filter(a => !a.correct);
    const pct     = Math.round((correct / total) * 100);

    const tier = pct >= 80 ? 'score-great' : pct >= 50 ? 'score-ok' : 'score-bad';

    let h = '<div class="summary-view">';
    h += '<h1>Resultat</h1>';

    // Score ring
    h += '<div class="score-display">';
    h += `  <div class="score-circle ${tier}">`;
    h += `    <span class="score-pct">${pct}%</span>`;
    h += `    <span class="score-detail">${correct} / ${total}</span>`;
    h += '  </div>';
    h += '</div>';

    // Wrong answers
    if (wrong.length > 0) {
      h += '<div class="wrong-section">';
      h += `  <button class="btn btn-secondary wrong-toggle" id="toggle-wrong">Falsch Äntwerten (${wrong.length}) ▼</button>`;
      h += '  <div class="wrong-list" id="wrong-list">';
      h += '    <table class="word-table"><thead><tr>';
      h += '      <th>Wuert</th><th>Deng Äntwert</th><th>Richteg</th>';
      h += '    </tr></thead><tbody>';

      wrong.forEach(a => {
        const w    = topic.words[a.wordIndex];
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

    // Actions
    h += '<div class="summary-actions">';
    h += `  <a href="#/test/${topic.id}" class="btn btn-test">📝 Nach eng Kéier testen</a>`;
    h += `  <a href="#/topic/${topic.id}" class="btn btn-secondary">← Zréck op d'Thema</a>`;
    h += '</div>';

    h += '</div>';
    app.innerHTML = h;

    // Toggle wrong list
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
     HELPERS
     ==================================================================== */
  function bindClick(id, fn) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', fn);
  }

})();
