import React, { useState, useEffect } from 'react';
import { Settings, Download, Upload, RotateCcw, Key, ShieldCheck, Database, Check, RefreshCw } from 'lucide-react';
import { AppSettings } from '../../types/vocabulary';
import { StorageService } from '../../services/storage';

interface SettingsModalProps {
  onExportBackup: () => void;
  onRestoreBackup: (file: File) => void;
  onResetDatabase: () => void;
  onSyncMaster?: () => Promise<void>;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  onExportBackup,
  onRestoreBackup,
  onResetDatabase,
  onSyncMaster,
}) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);
  const [settings, setSettings] = useState<AppSettings>({
    autoPronounce: false,
    questionsPerSession: 10,
    srsIntervals: [1, 3, 7, 14, 30],
  });

  const [apiKeyInput, setApiKeyInput] = useState('');
  const [provider, setProvider] = useState<'gemini' | 'openai' | 'groq'>('gemini');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    StorageService.getSettings().then((s) => {
      setSettings(s);
      if (s.aiApiKey) setApiKeyInput(s.aiApiKey);
      if (s.aiProvider) setProvider(s.aiProvider);
    });
  }, []);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    const updated: AppSettings = {
      ...settings,
      aiApiKey: apiKeyInput.trim() || undefined,
      aiProvider: provider,
    };
    await StorageService.saveSettings(updated);
    setSettings(updated);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleRestoreFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (confirm('Restoring a backup will merge and update your vocabulary. Do you wish to proceed?')) {
        onRestoreBackup(file);
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      
      {/* Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-stone-200/70">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">Settings & Backup</h2>
            <p className="text-xs sm:text-sm text-stone-500 font-medium">Manage data persistence, backups, and optional AI enrichment</p>
          </div>
        </div>
      </div>

      {/* Storage Information & Backup Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/70 space-y-5">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-lg text-navy-900">Local Data Storage & Backups</h3>
        </div>

        {/* Clear Explanation of Local Storage per Requirement 11 */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
          <p className="font-semibold text-navy-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Local-First Private Storage (IndexedDB)</span>
          </p>
          <p>
            All vocabulary words, spaced repetition intervals, review dates, and practice quiz scores are stored directly in your browser's persistent IndexedDB storage.
          </p>
          <p className="text-stone-500 text-xs">
            <strong className="text-stone-700">Important Note on Browser Storage:</strong> Data is saved on this specific device and browser profile. It does not automatically sync across different devices or browsers. To transfer or preserve your learning history, export a JSON backup file below.
          </p>
        </div>

                {/* Backup & Restore Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={onExportBackup}
            className="p-4 rounded-2xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 text-left transition-all flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-navy-900 block">Export JSON Backup</span>
              <span className="text-xs text-stone-500">Download complete vocabulary & learning stages</span>
            </div>
          </button>

          <label className="p-4 rounded-2xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 text-left transition-all flex items-center gap-3 group cursor-pointer">
            <input
              type="file"
              accept=".json"
              className="hidden"
              onChange={handleRestoreFile}
            />
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-navy-900 block">Restore JSON Backup</span>
              <span className="text-xs text-stone-500">Restore or transfer your previous backup file</span>
            </div>
          </label>
        </div>

        {/* Sync Master Vocabulary Button */}
        {onSyncMaster && (
          <div className="pt-1">
            <button
              onClick={async () => {
                try {
                  setIsSyncing(true);
                  await onSyncMaster();
                  setSyncSuccess(true);
                  setTimeout(() => setSyncSuccess(false), 3000);
                } finally {
                  setIsSyncing(false);
                }
              }}
              disabled={isSyncing}
              className="w-full p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <RefreshCw className={`w-5 h-5 ${isSyncing ? 'animate-spin' : ''}`} />
                </div>
                <div>
                  <span className="font-bold text-sm text-navy-900 block">
                    {syncSuccess ? '✓ Master Vocabulary Synchronized!' : 'Sync Master Vocabulary (Safe Update)'}
                  </span>
                  <span className="text-xs text-stone-500">
                    Updates word definitions & Bengali meanings from project source without losing your learning stages or progress
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 text-white shrink-0">
                {isSyncing ? 'Syncing...' : syncSuccess ? 'Updated' : 'Sync Now'}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Spaced Repetition System Overview */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/70 space-y-4">
        <h3 className="font-bold text-lg text-navy-900">Spaced Repetition Schedule (SRS)</h3>
        <p className="text-xs sm:text-sm text-stone-500">
          WordLoop calculates review intervals based on consecutive successful answers:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
            <span className="block text-stone-500 font-medium">1st Success</span>
            <span className="font-bold text-emerald-700 text-sm mt-0.5">1 Day</span>
            <span className="block text-[10px] text-stone-400 mt-1">Moves to Reviewing</span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
            <span className="block text-stone-500 font-medium">2nd Success</span>
            <span className="font-bold text-emerald-700 text-sm mt-0.5">3 Days</span>
            <span className="block text-[10px] text-stone-400 mt-1">Reviewing</span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
            <span className="block text-stone-500 font-medium">3rd Success</span>
            <span className="font-bold text-emerald-700 text-sm mt-0.5">7 Days</span>
            <span className="block text-[10px] text-stone-400 mt-1">Reviewing</span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
            <span className="block text-stone-500 font-medium">4th Success</span>
            <span className="font-bold text-emerald-700 text-sm mt-0.5">14 Days</span>
            <span className="block text-[10px] text-stone-400 mt-1">Reviewing</span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-100 border border-emerald-200 col-span-2 sm:col-span-1">
            <span className="block text-emerald-800 font-medium">5th+ Success</span>
            <span className="font-bold text-emerald-800 text-sm mt-0.5">30+ Days</span>
            <span className="block text-[10px] text-emerald-700 mt-1 font-semibold">Mastered!</span>
          </div>
        </div>

        <p className="text-xs text-stone-500 italic">
          If you click "✕ I didn't know", the review streak resets to 0 and returns to Learning, repeating after a few other words.
        </p>
      </div>

      {/* Optional AI Enrichment Configuration */}
      <form onSubmit={handleSaveSettings} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/70 space-y-4">
        <div className="flex items-center gap-2">
          <Key className="w-5 h-5 text-amber-500" />
          <h3 className="font-bold text-lg text-navy-900">Optional AI Enrichment API Key</h3>
        </div>

        <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
          The built-in offline dictionary handles all 290+ core job vocabulary words with complete definitions, Bangla meanings, and example sentences without needing any API key.
          If you want live AI definitions for uncommon words during PDF import, you can configure an optional API key below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
              AI Provider
            </label>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value as any)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 text-sm bg-white"
            >
              <option value="gemini">Google Gemini (Recommended)</option>
              <option value="groq">Groq (Llama 3.1)</option>
              <option value="openai">OpenAI (GPT-4o mini)</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">
              API Key (Stored locally in browser only)
            </label>
            <input
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder={provider === 'gemini' ? 'AIzaSy...' : 'sk-...'}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-stone-400">
            {apiKeyInput ? '✓ API key configured' : 'Using built-in offline dictionary (default)'}
          </span>
          <button
            type="submit"
            className="py-2.5 px-6 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {isSaved ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Saved!</span>
              </>
            ) : (
              <span>Save Settings</span>
            )}
          </button>
        </div>
      </form>

      {/* Danger Zone: Reset Database */}
      <div className="bg-rose-50/50 rounded-3xl p-6 sm:p-8 border border-rose-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-rose-900">Reset to Initial PDF Vocabulary</h4>
          <p className="text-xs text-rose-700 mt-0.5">
            Reset vocabulary and progress back to the original 291 words extracted from your PDFs.
          </p>
        </div>
        <button
          onClick={() => {
            if (confirm('Are you sure you want to reset your vocabulary collection back to the initial PDF dataset? Any custom words added will be lost.')) {
              onResetDatabase();
            }
          }}
          className="py-2 px-4 rounded-xl border border-rose-300 hover:bg-rose-100 text-rose-800 text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Database</span>
        </button>
      </div>

    </div>
  );
};
