import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import { VocabularyWord } from '../../types/vocabulary';

interface WordModalProps {
  isOpen: boolean;
  word: VocabularyWord | null; // null if adding new word
  onClose: () => void;
  onSave: (word: VocabularyWord) => void;
}

export const WordModal: React.FC<WordModalProps> = ({
  isOpen,
  word,
  onClose,
  onSave,
}) => {
  const isEditing = !!word;

  const [formData, setFormData] = useState<Partial<VocabularyWord>>({
    word: '',
    pos: 'noun',
    simpleDefinition: '',
    banglaMeaning: '',
    synonyms: [],
    antonyms: [],
    example: '',
    exampleBangla: '',
    source: '',
    category: 'Learning',
  });

  const [synInput, setSynInput] = useState('');
  const [antInput, setAntInput] = useState('');

  useEffect(() => {
    if (word) {
      setFormData({ ...word });
      setSynInput(word.synonyms?.join(', ') || '');
      setAntInput(word.antonyms?.join(', ') || '');
    } else {
      setFormData({
        word: '',
        pos: 'noun',
        simpleDefinition: '',
        banglaMeaning: '',
        synonyms: [],
        antonyms: [],
        example: '',
        exampleBangla: '',
        source: 'Personal Collection',
        category: 'Learning',
      });
      setSynInput('');
      setAntInput('');
    }
  }, [word, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.word?.trim()) {
      alert('Please enter an English word.');
      return;
    }

    const now = new Date().toISOString();
    const syns = synInput
      .split(/[,;|]/)
      .map((s) => s.trim())
      .filter(Boolean);
    const ants = antInput
      .split(/[,;|]/)
      .map((a) => a.trim())
      .filter(Boolean);

    const savedWord: VocabularyWord = {
      id: word?.id || `word-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      word: formData.word.trim(),
      pos: formData.pos || 'noun',
      simpleDefinition: formData.simpleDefinition?.trim() || syns.slice(0, 2).join(' / ') || 'Vocabulary definition',
      banglaMeaning: formData.banglaMeaning?.trim() || 'বাংলা অর্থ',
      synonyms: syns.length > 0 ? syns : ['Similar'],
      antonyms: ants.length > 0 ? ants : ['No common antonym'],
      example: formData.example?.trim() || `He understood the meaning of ${formData.word}.`,
      exampleBangla: formData.exampleBangla?.trim() || '',
      source: formData.source?.trim() || 'Manual Entry',
      category: formData.category || 'Learning',
      stage: word?.stage || 0,
      consecutiveCorrect: word?.consecutiveCorrect || 0,
      intervalDays: word?.intervalDays || 0,
      nextReviewDate: word?.nextReviewDate || now,
      lastReviewedDate: word?.lastReviewedDate || null,
      timesReviewed: word?.timesReviewed || 0,
      timesCorrect: word?.timesCorrect || 0,
      timesIncorrect: word?.timesIncorrect || 0,
      isDifficult: word?.isDifficult || false,
      createdAt: word?.createdAt || now,
      updatedAt: now,
    };

    onSave(savedWord);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/40 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/60">
          <h3 className="font-bold text-lg text-navy-900">
            {isEditing ? `Edit: ${word?.word}` : 'Add New Vocabulary Word'}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-navy-900 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Word and Part of Speech */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
                English Word *
              </label>
              <input
                type="text"
                required
                value={formData.word || ''}
                onChange={(e) => setFormData({ ...formData, word: e.target.value })}
                placeholder="e.g. Adherent"
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-semibold text-navy-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
                Part of Speech
              </label>
              <select
                value={formData.pos || 'noun'}
                onChange={(e) => setFormData({ ...formData, pos: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
              >
                <option value="noun">noun</option>
                <option value="verb">verb</option>
                <option value="adjective">adjective</option>
                <option value="adverb">adverb</option>
                <option value="idiom">idiom / phrase</option>
              </select>
            </div>
          </div>

          {/* Definition */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
              DEFINITION *
            </label>
            <input
              type="text"
              required
              value={formData.simpleDefinition || ''}
              onChange={(e) => setFormData({ ...formData, simpleDefinition: e.target.value })}
              placeholder="e.g. A person who supports a particular belief or leader"
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          {/* Bangla Meaning */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
              Bangla Meaning *
            </label>
            <input
              type="text"
              required
              value={formData.banglaMeaning || ''}
              onChange={(e) => setFormData({ ...formData, banglaMeaning: e.target.value })}
              placeholder="e.g. অনুগামী / ভক্ত"
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bengali"
            />
          </div>

          {/* Synonyms & Antonyms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
                Synonyms (comma separated)
              </label>
              <input
                type="text"
                value={synInput}
                onChange={(e) => setSynInput(e.target.value)}
                placeholder="Follower, Supporter, Believer"
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
                Antonyms (comma separated)
              </label>
              <input
                type="text"
                value={antInput}
                onChange={(e) => setAntInput(e.target.value)}
                placeholder="Opponent, Critic"
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
          </div>

          {/* Example Sentence */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
              Easy Example Sentence
            </label>
            <textarea
              rows={2}
              value={formData.example || ''}
              onChange={(e) => setFormData({ ...formData, example: e.target.value })}
              placeholder='e.g. "He is a strict adherent of non-violence."'
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          {/* Source and SRS Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
                Source Tag
              </label>
              <input
                type="text"
                value={formData.source || ''}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                placeholder="e.g. BCS 45th, Bank Exam"
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
                Learning Status
              </label>
              <select
                value={formData.category || 'Learning'}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
              >
                <option value="Learning">Learning (New)</option>
                <option value="Reviewing">Reviewing</option>
                <option value="Mastered">Mastered</option>
              </select>
            </div>
          </div>

          {/* Footer Submit Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-xs transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>{isEditing ? 'Save Changes' : 'Add Word'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
