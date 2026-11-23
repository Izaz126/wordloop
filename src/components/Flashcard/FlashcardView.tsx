import React, { useState, useEffect, useCallback } from 'react';
import { VocabularyWord, SRSStats } from '../../types/vocabulary';
import { CardFront } from './CardFront';
import { CardBack } from './CardBack';
import { ActionButtons } from './ActionButtons';
import { ProgressStats } from '../Dashboard/ProgressStats';
import { SessionSummary } from './SessionSummary';
import { SRSService } from '../../services/srs';
import { StorageService } from '../../services/storage';
import { Sparkles, Play, Clock, Flame, BookOpen } from 'lucide-react';

interface FlashcardViewProps {
  words: VocabularyWord[];
  stats: SRSStats;
  onWordUpdated: (updatedWord: VocabularyWord) => void;
  onRefreshData: () => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  words,
  stats,
  onWordUpdated,
  onRefreshData,
}) => {
  // Session queue state
  const [queue, setQueue] = useState<VocabularyWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  // Session tracking
  const [sessionKnew, setSessionKnew] = useState(0);
  const [sessionUnknown, setSessionUnknown] = useState(0);
  const [difficultSessionWords, setDifficultSessionWords] = useState<VocabularyWord[]>([]);

  // Start a new session
  const startSession = (mode: 'due' | 'new' | 'all' | 'difficult' = 'due') => {
    const newQueue = SRSService.buildSessionQueue(words, mode, 30);
    setQueue(newQueue);
    setCurrentIndex(0);
    setIsRevealed(false);
    setSessionActive(true);
    setSessionCompleted(false);
    setSessionKnew(0);
    setSessionUnknown(0);
    setDifficultSessionWords([]);
  };

  // Auto-start initial session if words available
  useEffect(() => {
    if (words.length > 0 && queue.length === 0 && !sessionActive && !sessionCompleted) {
      startSession('due');
    }
  }, [words]);

  const currentWord = queue[currentIndex] || null;

  // Handle "✓ I knew"
  const handleKnew = useCallback(async () => {
    if (!currentWord) return;

    const updated = SRSService.processKnown(currentWord);
    await StorageService.saveWord(updated);
    await StorageService.recordActivity(currentWord.timesReviewed === 0 ? 'learn' : 'review');
    onWordUpdated(updated);

    setSessionKnew((prev) => prev + 1);
    moveToNext();
  }, [currentWord, onWordUpdated]);

  // Handle "✕ I didn't know"
  const handleDidntKnow = useCallback(async () => {
    if (!currentWord) return;

    const updated = SRSService.processUnknown(currentWord);
    await StorageService.saveWord(updated);
    await StorageService.recordActivity('review');
    onWordUpdated(updated);

    setSessionUnknown((prev) => prev + 1);
    setDifficultSessionWords((prev) => {
      if (!prev.some((w) => w.id === updated.id)) return [...prev, updated];
      return prev;
    });

    // Re-insert into queue 3 to 5 words later as requested by user!
    const reorderedQueue = SRSService.reinsertDifficultWord(queue, currentIndex, updated);
    setQueue(reorderedQueue);

    moveToNext();
  }, [currentWord, queue, currentIndex, onWordUpdated]);

  const moveToNext = () => {
    setIsRevealed(false);
    if (currentIndex + 1 < queue.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Completed session
      setSessionCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsRevealed(false);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only process when not typing in inputs
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsRevealed((prev) => !prev);
      } else if (e.key === '1' || e.code === 'ArrowLeft') {
        if (sessionActive && !sessionCompleted) {
          handleDidntKnow();
        }
      } else if (e.key === '2' || e.code === 'ArrowRight') {
        if (sessionActive && !sessionCompleted) {
          handleKnew();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sessionActive, sessionCompleted, handleKnew, handleDidntKnow]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      
      {/* Session Header / Selector bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Study Mode:
          </span>
          <div className="flex items-center gap-1.5 bg-stone-100/80 p-1 rounded-xl">
            <button
              onClick={() => startSession('due')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                stats.dueTodayCount > 0
                  ? 'bg-white text-navy-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-navy-900'
              }`}
            >
              Due Reviews ({stats.dueTodayCount})
            </button>
            <button
              onClick={() => startSession('new')}
              className="px-3 py-1 rounded-lg text-xs font-medium text-stone-600 hover:text-navy-900 hover:bg-white/60 transition-all"
            >
              New Words ({stats.newWordsCount})
            </button>
            <button
              onClick={() => startSession('all')}
              className="px-3 py-1 rounded-lg text-xs font-medium text-stone-600 hover:text-navy-900 hover:bg-white/60 transition-all"
            >
              All ({stats.totalWords})
            </button>
          </div>
        </div>

        {sessionActive && queue.length > 0 && !sessionCompleted && (
          <div className="text-xs font-semibold text-stone-400 bg-white px-3 py-1 rounded-full border border-stone-200/80">
            Card {currentIndex + 1} of {queue.length}
          </div>
        )}
      </div>

      {/* Main Flashcard Display or Session Complete */}
      {sessionCompleted ? (
        <SessionSummary
          reviewedCount={sessionKnew + sessionUnknown}
          knewCount={sessionKnew}
          unknownCount={sessionUnknown}
          difficultWords={difficultSessionWords}
          onContinue={() => startSession('due')}
          onReviewDifficult={() => startSession('difficult')}
        />
      ) : currentWord ? (
        <div className="space-y-4">
          {/* Card: Front or Back */}
          {!isRevealed ? (
            <CardFront
              word={currentWord}
              onReveal={() => setIsRevealed(true)}
              onNext={moveToNext}
              onPrev={handlePrev}
              hasPrev={currentIndex > 0}
              hasNext={currentIndex + 1 < queue.length}
            />
          ) : (
            <CardBack
              word={currentWord}
              onFlipBack={() => setIsRevealed(false)}
            />
          )}

          {/* Action Buttons: "✓ I knew" & "✕ I didn't know" */}
          <ActionButtons
            onKnew={handleKnew}
            onDidntKnow={handleDidntKnow}
          />
        </div>
      ) : (
        <div className="w-full bg-white rounded-3xl p-8 text-center border border-stone-200">
          <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-navy-900 mb-1">No words ready in queue</h3>
          <p className="text-stone-500 text-sm mb-4">Start a new study session or import more vocabulary.</p>
          <button
            onClick={() => startSession('all')}
            className="py-2.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-all"
          >
            Practice All Vocabulary
          </button>
        </div>
      )}

      {/* Progress Dashboard matching the design reference screenshots */}
      <ProgressStats stats={stats} />

    </div>
  );
};
