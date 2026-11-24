import React, { useState, useMemo } from 'react';
import { Search, Plus, Trash2, Edit2, Filter, Download, AlertCircle, Calendar } from 'lucide-react';
import { VocabularyWord, SRSCategory } from '../../types/vocabulary';
import { WordModal } from './WordModal';

interface VocabularyLibraryProps {
  words: VocabularyWord[];
  onAddWord: (word: VocabularyWord) => void;
  onUpdateWord: (word: VocabularyWord) => void;
  onDeleteWord: (id: string) => void;
  onExportBackup: () => void;
}

export const VocabularyLibrary: React.FC<VocabularyLibraryProps> = ({
  words,
  onAddWord,
  onUpdateWord,
  onDeleteWord,
  onExportBackup,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | SRSCategory | 'Difficult'>('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingWord, setEditingWord] = useState<VocabularyWord | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Filtered and alphabetically sorted words (A to Z)
  const filteredWords = useMemo(() => {
    const filtered = words.filter((w) => {
      // Category filter
      if (selectedCategory === 'Difficult' && !w.isDifficult) return false;
      if (selectedCategory !== 'All' && selectedCategory !== 'Difficult' && w.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchWord = w.word.toLowerCase().includes(q);
      const matchBangla = w.banglaMeaning.toLowerCase().includes(q);
      const matchSyn = w.synonyms.some((s) => s.toLowerCase().includes(q));
      const matchAnt = w.antonyms.some((a) => a.toLowerCase().includes(q));
      const matchDef = w.simpleDefinition.toLowerCase().includes(q);

      return matchWord || matchBangla || matchSyn || matchAnt || matchDef;
    });

    // Strict case-insensitive A-Z dictionary sorting for phrases and hyphenated words
    return filtered.sort((a, b) => {
      const cleanA = a.word.trim();
      const cleanB = b.word.trim();
      const primaryComp = cleanA.localeCompare(cleanB, undefined, { sensitivity: 'base', numeric: true });
      if (primaryComp !== 0) return primaryComp;
      return cleanA.localeCompare(cleanB);
    });
  }, [words, searchQuery, selectedCategory]);

  const handleEdit = (word: VocabularyWord) => {
    setEditingWord(word);
    setModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingWord(null);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    onDeleteWord(id);
    setDeleteConfirmId(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      
      {/* Top Banner & Actions */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-stone-200/70">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">Vocabulary Library</h2>
            <p className="text-xs sm:text-sm text-stone-500 font-medium">
              Manage your personal collection of {words.length} vocabulary words
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleAddNew}
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Word</span>
            </button>
            <button
              onClick={onExportBackup}
              className="py-2.5 px-3.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors"
              title="Export complete vocabulary backup"
            >
              <Download className="w-4 h-4 text-stone-500" />
              <span className="hidden sm:inline">Export Backup</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by English word, Bangla meaning, or synonym..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium bg-stone-50/50 focus:bg-white transition-all"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 shrink-0">
            {(['All', 'Learning', 'Reviewing', 'Mastered', 'Difficult'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
                {cat === 'All' ? ` (${words.length})` : ''}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Words List */}
      <div className="space-y-3">
        {filteredWords.length > 0 ? (
          filteredWords.map((word) => (
            <div
              key={word.id}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xs border border-stone-200/70 hover:border-stone-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              {/* Word Details */}
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-lg text-navy-900 tracking-tight lowercase first-letter:capitalize">
                    {word.word}
                  </span>
                  {word.pos && (
                    <span className="text-stone-400 italic text-xs font-medium">
                      {word.pos}
                    </span>
                  )}
                  {word.isDifficult && (
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                      Difficult
                    </span>
                  )}
                  {/* Category Pill */}
                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                      word.category === 'Mastered'
                        ? 'bg-emerald-100 text-emerald-800'
                        : word.category === 'Reviewing'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {word.category}
                  </span>
                </div>

                {/* Bangla & English Meaning */}
                <div className="flex items-center gap-2 text-sm flex-wrap">
                  <span className="font-bold text-navy-900 font-bengali text-base">
                    {word.banglaMeaning}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-600 font-medium text-xs sm:text-sm">
                    {word.simpleDefinition}
                  </span>
                </div>

                {/* Synonyms & Antonyms */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1 text-xs text-stone-500">
                  <span className="font-semibold text-emerald-700">Syn:</span>
                  <span>{word.synonyms?.slice(0, 3).join(', ') || 'None'}</span>
                  {word.antonyms?.length > 0 && !word.antonyms[0].toLowerCase().includes('no common') && (
                    <>
                      <span className="text-stone-300 mx-1">•</span>
                      <span className="font-semibold text-rose-600">Ant:</span>
                      <span>{word.antonyms.slice(0, 2).join(', ')}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Due Date & Actions */}
              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-0 border-stone-100">
                {/* Review Stage */}
                <div className="text-right text-[11px] text-stone-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    <span>Streak: {word.consecutiveCorrect}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleEdit(word)}
                    className="p-2 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-600 hover:text-navy-900 transition-colors"
                    title="Edit word details"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeleteConfirmId(word.id)}
                    className="p-2 rounded-xl bg-stone-50 hover:bg-rose-50 text-stone-400 hover:text-rose-600 transition-colors"
                    title="Delete word"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200">
            <AlertCircle className="w-10 h-10 text-stone-300 mx-auto mb-2" />
            <h4 className="font-bold text-navy-900 text-base">No vocabulary words match your filter</h4>
            <p className="text-stone-500 text-xs mt-1">Try clearing your search query or choosing another category.</p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/40 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-xl border border-stone-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-navy-900">Delete Word?</h3>
              <p className="text-stone-500 text-xs mt-1">Are you sure you want to remove this word from your vocabulary library?</p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2.5 rounded-xl border border-stone-200 text-stone-600 font-semibold text-xs hover:bg-stone-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs transition-colors shadow-2xs"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Word Add/Edit Modal */}
      <WordModal
        isOpen={modalOpen}
        word={editingWord}
        onClose={() => setModalOpen(false)}
        onSave={(savedWord) => {
          if (editingWord) onUpdateWord(savedWord);
          else onAddWord(savedWord);
        }}
      />

    </div>
  );
};
