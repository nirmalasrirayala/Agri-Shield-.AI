import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  HelpCircle, 
  Activity, 
  Bug, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function DiagnosisResult({ 
  lang, 
  disease, 
  audioEnabled, 
  onNavigateTab 
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Web Speech API text-to-speech
  const handleToggleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        window.speechSynthesis.cancel(); // Reset
        const speechText = `${disease.name}. ${disease.description}. Key cause: ${disease.cause}`;
        const utterance = new SpeechSynthesisUtterance(speechText);
        utterance.rate = 0.95;

        // Language code map for SpeechSynthesis
        const langMap = { hi: 'hi-IN', es: 'es-ES', sw: 'sw-KE', fr: 'fr-FR', pa: 'pa-IN', vi: 'vi-VN', pt: 'pt-BR' };
        if (langMap[lang]) utterance.lang = langMap[lang];

        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);

        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    } else {
      alert("Text-to-Speech is not supported in this browser.");
    }
  };

  useEffect(() => {
    // Stop audio if disease changes
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  }, [disease]);

  if (!disease) return null;

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Decorative Top Accent Bar */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${
          disease.urgency === 'Critical' ? 'bg-rose-500' :
          disease.urgency === 'Warning' ? 'bg-amber-500' : 'bg-emerald-400'
        }`} />

        {/* Top Header Card */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                disease.urgency === 'Critical' ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' :
                disease.urgency === 'Warning' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
              }`}>
                {disease.urgency} Urgency
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                {disease.crop} Crop
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                {disease.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {disease.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 italic">
              Scientific Classification: {disease.scientificName}
            </p>
          </div>

          {/* Confidence Meter & Audio Reader Button */}
          <div className="flex items-center gap-4 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 shrink-0">
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-400">{t.confidence} Match</span>
                <span className="font-bold text-emerald-400">{disease.confidenceScore}%</span>
              </div>
              <div className="w-36 h-2 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-700 rounded-full"
                  style={{ width: `${disease.confidenceScore}%` }}
                />
              </div>
            </div>

            {/* Read Aloud Audio Button */}
            <button
              onClick={handleToggleSpeech}
              className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 ${
                isPlayingAudio
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-5 h-5 text-rose-400" />
                  <span className="hidden sm:inline">Stop Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-5 h-5 text-emerald-400" />
                  <span className="hidden sm:inline">{t.listenAudio}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Farmer Simple Explanation */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Simple Farmer Summary - What is wrong?</span>
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {disease.description}
          </p>
        </div>

        {/* Symptoms & Triggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Visual Symptoms */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Bug className="w-4 h-4 text-amber-400" />
              <span>{t.symptoms}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {disease.symptoms.map((sym, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{sym}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cause & Weather Triggers */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-teal-400" />
              <span>{t.cause}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {disease.cause}
            </p>

            <div className="pt-2 border-t border-slate-800/80 text-xs space-y-1">
              <p className="text-slate-400 font-semibold">Climate Sensitivity Factors:</p>
              <p className="text-slate-300">💧 {disease.climateVulnerability.highHumidityRisk}</p>
              <p className="text-slate-300">🌧️ {disease.climateVulnerability.rainWashoffRisk}</p>
            </div>
          </div>

        </div>

        {/* CTA to Treatment Plan & Spray Advisor */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>Ready for treatment & climate spray window calculations?</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigateTab('weather')}
              className="px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-all"
            >
              Check Spray Window
            </button>
            <button
              onClick={() => onNavigateTab('treatment')}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
            >
              <span>View Recommended Remedies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
