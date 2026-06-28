# Lëtz Gender & Vocab 🏠👕🎨

An interactive, responsive Single Page Application (SPA) designed to help learners study, practice, and master Luxembourgish vocabulary (Nouns, Verbs, and Adjectives) using an advanced Spaced Repetition System (SRS).

---

## 🚀 Key Features

### 1. Comprehensive Vocabulary Scope
- **Nouns**: Focus on specific vocabulary themes including Housing (`Wunneng`), Clothing (`Kleedung`), Christmas (`Chrëschtdag`), Homework (`Hausaufgaben`), Flea Market (`Floumaart`), and more.
- **Verbs**: Learn irregular/regular verbs, auxiliary associations (`hunn` vs `sinn`), and present tense conjugations.
- **Adjectives**: Study common adjectives and distinguish between pure adjectives and those that function as both adjective and adverb.

### 2. Spaced Repetition System (SRS)
An integrated Leitner-box system stored locally in your browser:
- **Boxes 0–5**: Progression from **Nei (New)** up to **Gemeeschtert (Mastered)**.
- **Manual SRS Box Editing**: Manually upgrade or downgrade any word's SRS level at any time.
- **SRS-Powered Learning (`🧠 Léieren`)**: Study due cards or queue new cards dynamically.
- **Smart Due Scheduling**: Words are scheduled for review at increasing intervals (1 day, 3 days, 7 days, 14 days, 30 days) depending on their box level.

### 3. Ignored Words Support ("Net wichteg")
- Mark words as **Net wichteg (Not important)** (Box `-1`) to hide them from your standard queues.
- Ignored words are automatically excluded from training sessions, gender quizzes, and SRS learning.
- Retrieve and restore ignored words anytime using the dedicated **Net wichteg** filter.

### 4. Interactive Vocabulary Tables & Advanced Filtering
- Search and filter terms by grammatical categories.
- Filter lists dynamically by box level:
  - **Wichteg (Important only)**: Hides ignored words (Default view).
  - **All**: Displays all words.
  - **Box-specific Filters**: View words currently in *Nei*, *Geléiert*, *Getest*, *Confirméiert*, *Staark*, or *Gemeeschtert*.
  - **Net wichteg**: View only ignored words.

### 5. Multi-Mode Practice & Tests
- **Flashcard Training**: Review spelling, definitions, and articles before taking tests.
- **Gender Quiz (Nouns)**: Real-time feedback with gender-highlighted color schemes (Blue = Masculine, Pink = Feminine, Green = Neuter).
- **Self-Graded Recall Tests**: Grade your own recall on verbs, adjectives, and nouns.
- **2-in-1 Meaning Test**: Optionally hide the English definition or Luxembourgish word to test translations and grammatical properties concurrently.

### 6. Custom Audio Pronunciations & LOD Integration
- **Official Recordings**: Stream official pronunciations fetched directly from the Luxembourgish Online Dictionary (`lod.lu`).
- **Replace/Upload Audio**: Replace any word's pronunciation by uploading custom audio clips (`.mp3`, `.m4a`, `.wav`). Custom clips are read via HTML5 `FileReader` and stored locally in `localStorage` as Base64 data URLs.
- **Original Reset**: Revert custom uploads back to the default database pronunciation at any time.

---

## 🛠️ Tech Stack

- **Core**: Vanilla HTML5, Vanilla CSS3, and ES6+ JavaScript.
- **Design System**: A premium, dark-themed interface built from scratch with consistent color variables and fluid animations.
- **State & Router**: Hash-based (`#/`) SPA router with browser-local state tracking.
- **Data Persistence**: `localStorage` handles all user-made edits, mnemonics, customized audio, and SRS progress.

---

## 💻 Local Development

Since **Lëtz Gender & Vocab** is a static application, you can run it without any heavy build systems:

1. **Option A (Direct)**: Open `index.html` directly in your favorite web browser.
2. **Option B (Dev Server)**: Run a local static server for the best experience (especially for audio/module file resolution):
   ```bash
   npx serve -l 3000
   ```
   Then open `http://localhost:3000` in your browser.

---

## 🎵 Fetching Audio Pronunciations (CLI Tool)

The project includes a command-line script in `tools/fetch-audio.py` to download pronunciation files from `lod.lu` automatically:

```bash
python tools/fetch-audio.py <topic_id> <word1> [word2] [word3] ...
```

### Example:
```bash
python tools/fetch-audio.py adjectives al béis bëlleg deier
```
This downloads the audio files to `audio/adjectives/` and outputs the JavaScript mapping code.
