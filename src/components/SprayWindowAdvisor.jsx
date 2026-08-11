import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Wind, 
  CloudRain, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Info,
  Sparkles
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function SprayWindowAdvisor({ 
  lang, 
  selectedDisease, 
  activeWeather 
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Climate synergy evaluation engine logic
  const evaluateSpraySafety = () => {
    const wind = activeWeather.current.windSpeed;
    const rain = activeWeather.current.rainProb;
    const temp = activeWeather.current.temp;

    // Check wind drift risk
    if (wind > 18) {
      return {
        status: 'danger',
        title: t.sprayStatusDanger,
        verdictText: `CRITICAL WIND DRIFT HAZARD: Current wind speed of ${wind} km/h exceeds safe spraying limit (15 km/h). Spray droplets will drift onto neighboring crops or non-target vegetation.`,
        icon: Wind,
        color: 'rose'
      };
    }

    // Check rain wash-off risk
    if (rain > 50) {
      return {
        status: 'danger',
        title: t.sprayStatusDanger,
        verdictText: `RAIN WASH-OFF WARNING: High rain probability (${rain}%). Applying fungicide or pesticide now will result in complete chemical wash-off, wasting money and polluting soil.`,
        icon: CloudRain,
        color: 'rose'
      };
    }

    // Check moderate wind / rain caution
    if (wind > 12 || rain > 30 || temp > 32) {
      return {
        status: 'caution',
        title: t.sprayStatusCaution,
        verdictText: `MODERATE RISK: Wind speed is ${wind} km/h with ${temp}°C heat. Recommend spraying early morning (06:00 - 08:00 AM) or using low-drift anti-spray nozzles.`,
        icon: AlertTriangle,
        color: 'amber'
      };
    }

    // Optimal window
    return {
      status: 'optimal',
      title: t.sprayStatusOptimal,
      verdictText: `PERFECT SPRAYING WINDOW TODAY! Calm winds (${wind} km/h), mild temp (${temp}°C), and low rain risk (${rain}%). Full chemical rainfastness guaranteed!`,
      icon: CheckCircle2,
      color: 'emerald'
    };
  };

  const evaluation = evaluateSpraySafety();
  const Icon = evaluation.icon;

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Climate Synergy & Rainfastness Algorithm</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {t.sprayAdvisorHeader}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t.sprayWindowSubText}
          </p>
        </div>

        {/* Big Verdict Status Box */}
        <div className={`p-6 rounded-2xl border flex flex-col md:flex-row items-start md:items-center gap-4 transition-all shadow-lg ${
          evaluation.status === 'optimal'
            ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-100 shadow-emerald-500/10'
            : evaluation.status === 'caution'
            ? 'bg-amber-950/40 border-amber-500/50 text-amber-100 shadow-amber-500/10'
            : 'bg-rose-950/40 border-rose-500/50 text-rose-100 shadow-rose-500/10'
        }`}>
          <div className={`p-3 rounded-2xl shrink-0 ${
            evaluation.status === 'optimal' ? 'bg-emerald-500/20 text-emerald-400' :
            evaluation.status === 'caution' ? 'bg-amber-500/20 text-amber-400' : 'bg-rose-500/20 text-rose-400'
          }`}>
            <Icon className="w-8 h-8" />
          </div>

          <div className="space-y-1 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold tracking-wide uppercase">
                {evaluation.title}
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700">
                {activeWeather.current.temp}°C • {activeWeather.current.windSpeed} km/h Wind
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
              {evaluation.verdictText}
            </p>
          </div>
        </div>

        {/* Hourly 48-Hour Safe Window Slot Picker */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>{t.hourlySlots}</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {activeWeather.hourly.map((slot, idx) => {
              const isSlotOptimal = slot.status === 'optimal';
              const isSlotCaution = slot.status === 'caution';
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-2xl border text-center space-y-1 transition-all ${
                    isSlotOptimal
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                      : isSlotCaution
                      ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                      : 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                  }`}
                >
                  <p className="text-xs font-bold text-white">{slot.hour}</p>
                  <p className="text-[11px] text-slate-300">{slot.temp}°C</p>
                  <div className="text-[10px] space-y-0.5 pt-1 border-t border-slate-800/60">
                    <p className="text-slate-400">💨 {slot.wind} km/h</p>
                    <p className="text-slate-400">🌧️ {slot.rain}%</p>
                  </div>
                  <span className={`inline-block text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase mt-1 ${
                    isSlotOptimal ? 'bg-emerald-500/20 text-emerald-300' :
                    isSlotCaution ? 'bg-amber-500/20 text-amber-300' : 'bg-rose-500/20 text-rose-300'
                  }`}>
                    {slot.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rainfastness & Drift Rule Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Rainfastness Rule
            </span>
            <p className="text-slate-400 text-[11px]">
              Systemic fungicides require 2 to 4 dry hours post-application for leaf cuticle absorption.
            </p>
          </div>

          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-amber-400 flex items-center gap-1">
              <Wind className="w-3.5 h-3.5" /> Wind Speed Limit
            </span>
            <p className="text-slate-400 text-[11px]">
              Never spray when winds exceed 15 km/h to prevent chemical drift into water streams or adjacent crops.
            </p>
          </div>

          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-sky-400 flex items-center gap-1">
              <Info className="w-3.5 h-3.5" /> Thermal Volatilization
            </span>
            <p className="text-slate-400 text-[11px]">
              Avoid spraying above 32°C. High heat causes rapid evaporation and chemical leaf burn.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
