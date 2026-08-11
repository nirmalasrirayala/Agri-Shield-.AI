import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Volume2, 
  VolumeX, 
  Moon, 
  Sun, 
  Key, 
  Mic, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Navbar({ 
  lang, 
  setLang, 
  theme, 
  setTheme, 
  audioEnabled, 
  setAudioEnabled,
  apiKey,
  setApiKey,
  activeTab,
  setActiveTab
}) {
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [keyInput, setKeyInput] = useState(apiKey || '');
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const handleSaveKey = () => {
    setApiKey(keyInput.trim());
    localStorage.setItem('agri_gemini_key', keyInput.trim());
    setShowKeyModal(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 text-white border-b border-emerald-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('scanner')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-green-400 p-0.5 shadow-md shadow-emerald-500/30 animate-pulse">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 via-teal-200 to-green-400 bg-clip-text text-transparent">
                  {t.appTitle}
                </h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <Sparkles className="w-3 h-3 text-emerald-400" /> AI 3.6
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block font-medium">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Controls Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Speech Readout Toggle */}
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              title={audioEnabled ? t.stopAudio : t.listenAudio}
              className={`p-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 border ${
                audioEnabled
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
              }`}
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400 animate-bounce" />
                  <span className="hidden md:inline text-xs">Audio On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden md:inline text-xs">Mute Audio</span>
                </>
              )}
            </button>

            {/* Language Selector */}
            <div className="relative flex items-center gap-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer text-white"
              >
                <option value="en" className="bg-slate-900 text-white">English (US)</option>
                <option value="hi" className="bg-slate-900 text-white">हिंदी (Hindi)</option>
                <option value="es" className="bg-slate-900 text-white">Español (Spanish)</option>
                <option value="sw" className="bg-slate-900 text-white">Kiswahili (Swahili)</option>
                <option value="fr" className="bg-slate-900 text-white">Français (French)</option>
                <option value="pa" className="bg-slate-900 text-white">ਪੰਜਾਬੀ (Punjabi)</option>
                <option value="vi" className="bg-slate-900 text-white">Tiếng Việt (Vietnamese)</option>
                <option value="pt" className="bg-slate-900 text-white">Português (Portuguese)</option>
              </select>
            </div>

            {/* Gemini API Key Modal Trigger */}
            <button
              onClick={() => setShowKeyModal(true)}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1 border transition-all ${
                apiKey
                  ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-emerald-500/40'
              }`}
              title="Configure Gemini AI Key for live camera & photo vision"
            >
              <Key className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden lg:inline">{apiKey ? t.activeKeyMsg : "AI Key"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="bg-slate-950/80 border-t border-slate-800/80 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-1 py-1.5 text-xs font-medium">
          {[
            { id: 'scanner', label: t.navScanner, icon: ShieldCheck },
            { id: 'weather', label: t.navWeather, icon: Globe },
            { id: 'treatment', label: t.navTreatment, icon: Sparkles },
            { id: 'schedule', label: t.navSchedule, icon: Key },
            { id: 'dashboard', label: t.navHistory, icon: Mic }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gemini Key Config Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 max-w-md w-full shadow-2xl text-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Google Gemini AI Integration</h3>
                <p className="text-xs text-slate-400">Enable real-time custom multimodal leaf analysis</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Agri Shield includes a built-in agronomic diagnostic neural engine with 16+ crop leaf profiles. You can also provide a <strong>Google Gemini API Key</strong> to process any real-time camera photo directly with Gemini 3.6 Vision!
            </p>

            <div className="space-y-3 mb-5">
              <label className="block text-xs font-semibold text-slate-300">
                Gemini API Key
              </label>
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <p className="text-[11px] text-slate-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                Your key is stored locally in your browser session only.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveKey}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
              >
                Save & Connect AI
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
