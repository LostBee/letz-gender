# Lëtz Gender 🏠👕

An interactive, responsive Single Page Application (SPA) designed to help learners study and master the grammatical genders of Luxembourgish nouns.

## 🚀 Features

- **Topic/Theme Selection**: Focus on specific vocabulary themes including Housing (`Wunneng`), Clothing (`Kleedung`), Christmas (`Chrëschtdag`), Homework (`Hausaufgaben`), Flea Market (`Floumaart`), and more.
- **Interactive Vocabulary Table**: Check articles, plurals, definitions, and listen to pronunciation audio (🔊) where available.
- **Flashcard Training**: Review noun genders before taking tests.
- **Gender Quiz**:
  - Real-time feedback with gender-highlighted color schemes (Blue = Masculine, Pink = Feminine, Green = Neuter).
  - **2-in-1 Meaning Test**: Hides either the Luxembourgish word or the English definition, letting you test vocabulary translation alongside gender at the same time.
- **Audio Pronunciation**: Fully integrated with official pronunciation recordings from `lod.lu`.

## 🛠️ Tech Stack

- **Core**: Vanilla HTML5, Vanilla CSS3, and ES6+ JavaScript.
- **Design System**: A sleek, dark-themed interface built from scratch with consistent color variables and visual components.
- **Router**: Hash-based (`#/`) SPA router for clean, client-side navigation.
- **Audio Files**: Supports local `.mp3` and `.m4a` audio formats.

## 💻 Local Development

Since **Lëtz Gender** is a static application, you can run it without any heavy build systems:

1. **Option A (Direct)**: Open `index.html` directly in your favorite web browser.
2. **Option B (Dev Server)**: Run a local static server for the best experience (especially for audio/module file resolution):
   ```bash
   npx serve -l 3000
   ```
   Then open `http://localhost:3000` in your browser.

## 🎵 Fetching Audio Pronunciations

The project includes a command-line script in `tools/fetch-audio.py` to download pronunciation files from `lod.lu` automatically:

```bash
python tools/fetch-audio.py <topic_id> <word1> [word2] ...
```

### Example:
```bash
python tools/fetch-audio.py clothing Gilet Mantel Anorak
```
This downloads the audio files to `audio/<topic_id>/` (e.g. `audio/clothing/`) and outputs the JavaScript mapping code to paste into the corresponding data file (e.g. `js/data/clothing.js`).
