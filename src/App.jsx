import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CropScanner from './components/CropScanner';
import DiagnosisResult from './components/DiagnosisResult';
import WeatherWidget from './components/WeatherWidget';
import SprayWindowAdvisor from './components/SprayWindowAdvisor';
import TreatmentPlan from './components/TreatmentPlan';
import RecoverySchedule from './components/RecoverySchedule';
import FarmDashboard from './components/FarmDashboard';

import { CROP_DISEASES } from './data/cropDiseases';
import { WEATHER_PRESETS } from './data/weatherPresets';
import { TRANSLATIONS } from './data/translations';
import { ShieldCheck, Heart, Sparkles, Globe, PhoneCall } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('agri_gemini_key') || '');
  const [activeTab, setActiveTab] = useState('scanner');
  
  const [selectedDisease, setSelectedDisease] = useState(CROP_DISEASES[0]);
  const [activeWeather, setActiveWeather] = useState(WEATHER_PRESETS[0]);

  // Apply light/dark class on body element
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
        apiKey={apiKey}
        setApiKey={setApiKey}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-4">
        
        {/* Top Hero Banner */}
        <HeroBanner
          lang={lang}
          activeWeather={activeWeather}
          onStartScan={() => {
            setActiveTab('scanner');
            window.scrollTo({ top: 300, behavior: 'smooth' });
          }}
          onCallAdvisor={() => setActiveTab('dashboard')}
        />

        {/* Tab View Switcher */}
        {activeTab === 'scanner' && (
          <div className="space-y-6 animate-fadeIn">
            <CropScanner
              lang={lang}
              cropDiseases={CROP_DISEASES}
              selectedDisease={selectedDisease}
              setSelectedDisease={setSelectedDisease}
              apiKey={apiKey}
            />
            {selectedDisease && (
              <DiagnosisResult
                lang={lang}
                disease={selectedDisease}
                audioEnabled={audioEnabled}
                onNavigateTab={(tab) => setActiveTab(tab)}
              />
            )}
            <SprayWindowAdvisor
              lang={lang}
              selectedDisease={selectedDisease}
              activeWeather={activeWeather}
            />
          </div>
        )}

        {activeTab === 'weather' && (
          <div className="space-y-6 animate-fadeIn">
            <WeatherWidget
              lang={lang}
              weatherPresets={WEATHER_PRESETS}
              activeWeather={activeWeather}
              setActiveWeather={setActiveWeather}
            />
            <SprayWindowAdvisor
              lang={lang}
              selectedDisease={selectedDisease}
              activeWeather={activeWeather}
            />
          </div>
        )}

        {activeTab === 'treatment' && (
          <div className="space-y-6 animate-fadeIn">
            <TreatmentPlan
              lang={lang}
              disease={selectedDisease}
            />
            <SprayWindowAdvisor
              lang={lang}
              selectedDisease={selectedDisease}
              activeWeather={activeWeather}
            />
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-6 animate-fadeIn">
            <RecoverySchedule
              lang={lang}
              disease={selectedDisease}
            />
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-fadeIn">
            <FarmDashboard
              lang={lang}
              selectedDisease={selectedDisease}
              activeWeather={activeWeather}
            />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-white">Agri Shield AI</span>
            <span>• Empowering Climate Resilience & Food Security</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <button onClick={() => setActiveTab('scanner')} className="hover:text-emerald-400 transition-colors">
              Scanner
            </button>
            <button onClick={() => setActiveTab('weather')} className="hover:text-emerald-400 transition-colors">
              Weather Station
            </button>
            <button onClick={() => setActiveTab('treatment')} className="hover:text-emerald-400 transition-colors">
              Remedies
            </button>
            <button onClick={() => setActiveTab('schedule')} className="hover:text-emerald-400 transition-colors">
              14-Day Calendar
            </button>
            <button onClick={() => setActiveTab('dashboard')} className="hover:text-emerald-400 transition-colors">
              Agronomist Helpline
            </button>
          </div>

          <div className="text-[11px] text-slate-500">
            © 2026 Agri Shield AI • Built for global smallholder farmers.
          </div>

        </div>
      </footer>

    </div>
  );
}
