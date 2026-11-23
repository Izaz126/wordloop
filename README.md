# WordLoop – Learn, Repeat, Remember

**WordLoop** is a personal English vocabulary learning web application designed to help learners remember vocabulary permanently through repeated practice, simple explanations, Bangla meanings, synonyms, antonyms, spaced repetition (SRS), and interactive practice quizzes.

The design faithfully implements and refines the visual styling from the design references: comfortable warm off-white tones, soft shadows, rounded corners, clean typography (Inter & Hind Siliguri for Bengali), and soothing progress indicators.

---

## ✨ Features

### 1. Flashcard Learning Experience (Main Interface)
- **Front Side**:
  - Word status badge (`NEW WORD`, `REVIEW`, `DIFFICULT WORD`, or `MASTERED`).
  - English vocabulary word in bold typography.
  - IPA phonetic pronunciation and Bangla phonetic pronunciation.
  - Speaker audio button powered by the Web Speech API (`speechSynthesis`).
  - "Tap to see meaning" button and keyboard shortcut (<kbd>Space</kbd>).
- **Back Side (Revealed View)**:
  - **Definition**: Simple English explanation in 1-2 easy words or short phrases.
  - **Bangla Meaning**: Natural and accurate Bangla translation with a clean `বাংলা অর্থ` badge.
  - **Example in Context**: Natural English sentence with the target word highlighted, accompanied by a Bangla translation.
  - **Synonyms**: Clean, separate pill chips.
  - **Antonyms**: Opposite word chips (or "No common antonym").
  - **Exam & Source Tag**: BCS, Bank Recruitment, NTRCA, etc.
- **Learning Buttons**:
  - **✓ I knew** (<kbd>2</kbd> or <kbd>→</kbd>): Advances the word along the spaced repetition schedule.
  - **✕ I didn't know** (<kbd>1</kbd> or <kbd>←</kbd>): Flags the word as difficult, resets the consecutive review streak, and automatically schedules it to reappear **3 to 5 words later** in the active session.

### 2. Spaced Repetition System (SRS)
- **3 Categories**:
  - `Learning`: New words and words marked as difficult.
  - `Reviewing`: Words remembered at least once.
  - `Mastered`: Words remembered consistently across multiple review intervals.
- **Interval Schedule**:
  - 1st success: 1 day (moves to `Reviewing`)
  - 2nd success: 3 days
  - 3rd success: 7 days
  - 4th success: 14 days
  - 5th+ success: 30+ days (moves to `Mastered`)
- **Queue Prioritization**: Overdue reviews appear first, followed by unreviewed new words.

### 3. Progress Dashboard
- Matches the reference screenshot layout:
  - **Mastered**: Count, percentage, soft green progress bar.
  - **Reviewing**: Count, percentage, soft peach/orange progress bar.
  - **Learning**: Count, percentage, muted blue progress bar.
- Metadata counters for Total Words, Due for Review, and Overall Mastery score.

### 4. Practice Zone (Interactive Quizzes)
- **Synonym Practice**: "Which word has the closest meaning to [WORD]?"
- **Antonym Practice**: "Which word is the opposite of [WORD]?"
- **Mixed Mode**: Both synonym and antonym questions.
- **Configurable Length**: 10, 20, 30, or 50 questions.
- **Adaptive Distractors**: Plausible multiple-choice options with matching parts of speech.
- **Instant Feedback**: Color-coded feedback, explanation, and Bangla meaning.
- **Difficulty Queue**: Incorrect answers flag the word as difficult for spaced repetition review.
- **Practice Analytics**: Dedicated accuracy statistics for synonyms and antonyms.

### 5. PDF & Document Import System
- **In-Browser Extraction**: Uses `pdfjs-dist` to extract text from PDF files directly in your browser without uploading files to external servers.
- **Multi-Format Support**: Also imports `.txt`, `.csv`, `.tsv`, and `.json`.
- **Duplicate Prevention**: Detects existing words and marks duplicates.
- **Preview & Edit Table**: Allows editing words, definitions, and Bangla meanings before confirming import.
- **Dictionary Auto-Enrichment**: Offline dictionary automatically populates definitions, pronunciations, synonyms, antonyms, and example sentences.
- **Scanned PDF Fallback Notice**: Alerts you if a PDF consists of scanned images without a text layer.

### 6. Vocabulary Library
- Search by English word, Bangla meaning, definition, or synonyms.
- Filter by category (`All`, `Learning`, `Reviewing`, `Mastered`, `Difficult`).
- Add new vocabulary words manually with full metadata.
- Edit and update existing words.
- Delete unwanted words with confirmation.

### 7. Local-First Data Storage & Backups
- Uses browser **IndexedDB** for fast, offline, persistent storage that survives page refreshes and browser restarts.
- **Export Backup**: One-click JSON backup containing all words, learning history, streaks, and practice scores.
- **Restore Backup**: Restore previous backups anytime.
- **Reset Option**: Reset back to the initial 291-word PDF collection.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation & Local Run

1. Clone or open the repository folder:
   ```bash
   cd WordLoop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. Or build and preview the production build:
   ```bash
   npm run build
   npm run preview
   ```

---

## 📁 Project Structure

```
WordLoop/
├── design-references/          # Original reference screenshots
├── vocabulary-pdfs/            # Original PDF files
├── src/
│   ├── types/
│   │   └── vocabulary.ts       # TypeScript models and interfaces
│   ├── data/
│   │   ├── initialVocabulary.json # Curated 291-word collection from PDFs
│   │   └── dictionaryLookup.ts    # Offline dictionary for instant enrichment
│   ├── services/
│   │   ├── storage.ts          # IndexedDB persistence & JSON backup export/restore
│   │   ├── srs.ts              # Spaced repetition scheduling & queue engine
│   │   ├── speech.ts           # Speech synthesis audio pronunciation
│   │   ├── pdfParser.ts        # In-browser PDF & text parser (pdfjs-dist)
│   │   ├── enrichment.ts       # Offline dictionary & optional AI enrichment
│   │   └── practiceEngine.ts   # Interactive quiz generation & analytics
│   ├── components/
│   │   ├── Header.tsx          # Top navigation & status indicators
│   │   ├── Dashboard/
│   │   │   └── ProgressStats.tsx # 3-row progress dashboard (Screenshot match)
│   │   ├── Flashcard/
│   │   │   ├── CardFront.tsx     # Front flashcard (Screenshot match)
│   │   │   ├── CardBack.tsx      # Back flashcard with highlighted example & Bangla
│   │   │   ├── ActionButtons.tsx # "✓ I knew" & "✕ I didn't know" buttons
│   │   │   ├── SessionSummary.tsx # Round completion & difficult words list
│   │   │   └── FlashcardView.tsx # Main learning coordinator
│   │   ├── PracticeZone/
│   │   │   └── PracticeZone.tsx  # Synonym & Antonym interactive quiz engine
│   │   ├── Library/
│   │   │   ├── VocabularyLibrary.tsx # Search, filter, and library overview
│   │   │   └── WordModal.tsx     # Add / edit vocabulary modal
│   │   ├── Import/
│   │   │   └── PdfImporter.tsx   # PDF drag-and-drop, extraction preview table
│   │   └── Settings/
│   │       └── SettingsModal.tsx # Backups, SRS intervals, optional AI key
│   ├── App.tsx                 # Root application component
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind CSS & Bengali typography styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| <kbd>Space</kbd> | Flip flashcard (Reveal / Hide meaning) |
| <kbd>2</kbd> or <kbd>→</kbd> | "✓ I knew" (Schedule next review) |
| <kbd>1</kbd> or <kbd>←</kbd> | "✕ I didn't know" (Mark difficult & re-queue) |
