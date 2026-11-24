import os
import re

APP_FILE = os.path.join('src', 'App.tsx')
SETTINGS_FILE = os.path.join('src', 'components', 'Settings', 'SettingsModal.tsx')

# 1. Update SettingsModal.tsx
with open(SETTINGS_FILE, 'r', encoding='utf-8') as f:
    s_content = f.read()

# Add RefreshCw to imports
s_content = s_content.replace(
    "import { Settings, Download, Upload, RotateCcw, Key, ShieldCheck, Database, Check } from 'lucide-react';",
    "import { Settings, Download, Upload, RotateCcw, Key, ShieldCheck, Database, Check, RefreshCw } from 'lucide-react';"
)

# Update interface
s_content = s_content.replace(
    """interface SettingsModalProps {
  onExportBackup: () => void;
  onRestoreBackup: (file: File) => void;
  onResetDatabase: () => void;
}""",
    """interface SettingsModalProps {
  onExportBackup: () => void;
  onRestoreBackup: (file: File) => void;
  onResetDatabase: () => void;
  onSyncMaster?: () => Promise<void>;
}"""
)

# Update component props and add state
s_content = s_content.replace(
    """export const SettingsModal: React.FC<SettingsModalProps> = ({
  onExportBackup,
  onRestoreBackup,
  onResetDatabase,
}) => {""",
    """export const SettingsModal: React.FC<SettingsModalProps> = ({
  onExportBackup,
  onRestoreBackup,
  onResetDatabase,
  onSyncMaster,
}) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);"""
)

# Add handleSyncMaster click handler
sync_button_markup = """        {/* Backup & Restore Controls */}
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
        )}"""

# Find the Backup & Restore Controls block and replace it
backup_block_pattern = r'\{\/\* Backup & Restore Controls \*\/\}[\s\S]*?<\/label>\s*<\/div>'
s_content = re.sub(backup_block_pattern, sync_button_markup, s_content)

with open(SETTINGS_FILE, 'w', encoding='utf-8') as f:
    f.write(s_content)

print("SettingsModal.tsx updated.")

# 2. Update App.tsx
with open(APP_FILE, 'r', encoding='utf-8') as f:
    app_content = f.read()

# Add handleSyncMaster in App.tsx
sync_handler = """  // Handler to manually sync master vocabulary into IndexedDB
  const handleSyncMaster = async () => {
    await StorageService.migrateVocabulary(true);
    await refreshAllData();
  };"""

# Insert handleSyncMaster before handleResetDatabase
app_content = app_content.replace(
    "  // Handler to reset database to default",
    sync_handler + "\n\n  // Handler to reset database to default"
)

# Pass onSyncMaster to SettingsModal in App.tsx
app_content = app_content.replace(
    """          {activeTab === 'settings' && (
            <SettingsModal
              onExportBackup={handleExportBackup}
              onRestoreBackup={handleRestoreBackup}
              onResetDatabase={handleResetDatabase}
            />
          )}""",
    """          {activeTab === 'settings' && (
            <SettingsModal
              onExportBackup={handleExportBackup}
              onRestoreBackup={handleRestoreBackup}
              onResetDatabase={handleResetDatabase}
              onSyncMaster={handleSyncMaster}
            />
          )}"""
)

with open(APP_FILE, 'w', encoding='utf-8') as f:
    f.write(app_content)

print("App.tsx updated.")
