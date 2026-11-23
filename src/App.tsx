import React, { useState, useEffect, useCallback } from 'react';
import { Header, ActiveTab } from './components/Header';
import { FlashcardView } from './components/Flashcard/FlashcardView';
import { PracticeZone } from './components/PracticeZone/PracticeZone';
import { VocabularyLibrary } from './components/Library/VocabularyLibrary';
import { PdfImporter } from './components/Import/PdfImporter';
import { SettingsModal } from './components/Settings/SettingsModal';
import { StorageService } from './services/storage';
import { SRSService } from './services/srs';
import { VocabularyWord, SRSStats, PracticeStats } from './types/vocabulary';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('learn');
  const [words, setWords] = useState<VocabularyWord[]>([]);
  const [stats, setStats] = useState<SRSStats>({
    totalWords: 0,
    masteredCount: 0,
    masteredPercent: 0,
    reviewingCount: 0,
    reviewingPercent: 0,
    learningCount: 0,
    learningPercent: 0,
    dueTodayCount: 0,
    newWordsCount: 0,
    learnedTodayCount: 0,
    reviewedTodayCount: 0,
    overallProgressPercent: 0,
  });
  const [practiceStats, setPracticeStats] = useState<PracticeStats>({
    totalSynonymAnswered: 0,
    totalSynonymCorrect: 0,
    totalAntonymAnswered: 0,
    totalAntonymCorrect: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    totalIncorrect: 0,
    synonymAccuracy: 0,
    antonymAccuracy: 0,
    overallAccuracy: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load all initial data from IndexedDB
  const refreshAllData = useCallback(async () => {
    try {
      await StorageService.init();
      const allWords = await StorageService.getAllWords();
      const pStats = await StorageService.getPracticeStats();
      const today = new Date().toISOString().split('T')[0];
      const todayLog = await StorageService.getDailyLog(today);

      const calculatedStats = SRSService.calculateStats(
        allWords,
        todayLog.wordsLearned,
        todayLog.wordsReviewed
      );

      setWords(allWords);
      setPracticeStats(pStats);
      setStats(calculatedStats);
    } catch (e) {
      console.error('Failed to load storage data:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshAllData();
  }, [refreshAllData]);

  // Handler when a word is updated (e.g. from Flashcard "I knew" or "I didn't know")
  const handleWordUpdated = useCallback((updatedWord: VocabularyWord) => {
    setWords((prev) => {
      const updatedList = prev.map((w) => (w.id === updatedWord.id ? updatedWord : w));
      // Re-calculate stats
      const newStats = SRSService.calculateStats(
        updatedList,
        stats.learnedTodayCount,
        stats.reviewedTodayCount
      );
      setStats(newStats);
      return updatedList;
    });
  }, [stats.learnedTodayCount, stats.reviewedTodayCount]);

  // Handler when a new word is added manually
  const handleAddWord = async (newWord: VocabularyWord) => {
    await StorageService.saveWord(newWord);
    await refreshAllData();
  };

  // Handler when a word is deleted
  const handleDeleteWord = async (id: string) => {
    await StorageService.deleteWord(id);
    await refreshAllData();
  };

  // Handler to export backup
  const handleExportBackup = async () => {
    const backupJson = await StorageService.exportBackup();
    const blob = new Blob([backupJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wordloop-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Handler to restore backup file
  const handleRestoreBackup = async (file: File) => {
    const text = await file.text();
    const result = await StorageService.restoreBackup(text);
    if (result.success) {
      await refreshAllData();
      alert(`Backup restored successfully! Loaded ${result.count} vocabulary words.`);
    } else {
      alert(`Failed to restore backup: ${result.error}`);
    }
  };

  // Handler to reset database to default
  const handleResetDatabase = async () => {
    await StorageService.resetToDefault();
    await refreshAllData();
    alert('Vocabulary database reset to initial PDF collection.');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-light flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
        <h2 className="text-navy-900 font-bold text-lg">Loading WordLoop...</h2>
        <p className="text-stone-500 text-xs">Initializing personal vocabulary database</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light flex flex-col text-navy-900 selection:bg-emerald-100 selection:text-emerald-800">
      
      {/* Persistent Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={stats}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'learn' && (
          <FlashcardView
            words={words}
            stats={stats}
            onWordUpdated={handleWordUpdated}
            onRefreshData={refreshAllData}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeZone
            words={words}
            practiceStats={practiceStats}
            onStatsUpdated={(updated) => setPracticeStats(updated)}
            onWordUpdated={handleWordUpdated}
          />
        )}

        {activeTab === 'library' && (
          <VocabularyLibrary
            words={words}
            onAddWord={handleAddWord}
            onUpdateWord={handleWordUpdated}
            onDeleteWord={handleDeleteWord}
            onExportBackup={handleExportBackup}
          />
        )}

        {activeTab === 'import' && (
          <PdfImporter
            existingWords={words}
            onImportComplete={async () => {
              await refreshAllData();
              setActiveTab('library');
            }}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsModal
            onExportBackup={handleExportBackup}
            onRestoreBackup={handleRestoreBackup}
            onResetDatabase={handleResetDatabase}
          />
        )}
      </main>

      {/* Minimal Footer */}
      <footer className="py-4 border-t border-stone-200/60 text-center text-xs text-stone-400">
        <p>WordLoop – Learn, Repeat, Remember • Personal English Vocabulary Tutor</p>
      </footer>

    </div>
  );
}
