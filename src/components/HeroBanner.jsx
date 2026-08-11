import React from 'react';
import { ShieldCheck, CloudSun, PhoneCall, Sparkles, AlertTriangle, ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function HeroBanner({ lang, activeWeather, onStartScan, onCallAdvisor }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/70 border-b border-emerald-500/20 text-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-12 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Main Hero Left */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Real-Time Agronomic Bridge & Climate Resilience Platform</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {t.heroTitle}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              {t.heroSub}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartScan}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm hover:from-emerald-400 hover:to-teal-400 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Scan Leaf Now</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onCallAdvisor}
                className="px-5 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700 text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>{t.callAdvisor}</span>
              </button>
            </div>
          </div>

          {/* Micro Weather & Field Status Card Right */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CloudSun className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Live Field Weather
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-emerald-300 border border-emerald-500/20">
                  {activeWeather.regionName.split(',')[0]}
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white">{activeWeather.current.temp}°C</span>
                <span className="text-xs text-slate-400">{activeWeather.current.condition}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
                  <span className="text-[11px] text-slate-400">Wind Speed</span>
                  <p className="font-semibold text-white">{activeWeather.current.windSpeed} km/h</p>
                </div>
                <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
                  <span className="text-[11px] text-slate-400">Rain Prob</span>
                  <p className="font-semibold text-white">{activeWeather.current.rainProb}%</p>
                </div>
              </div>

              {/* Spray Window Verdict Alert */}
              <div className={`p-2.5 rounded-xl border text-xs flex items-center gap-2.5 ${
                activeWeather.current.spraySafetyVerdict === 'Optimal'
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                  : 'bg-amber-500/15 border-amber-500/40 text-amber-300'
              }`}>
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span className="font-medium text-[11px] leading-tight">
                  {activeWeather.current.sprayReason}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
