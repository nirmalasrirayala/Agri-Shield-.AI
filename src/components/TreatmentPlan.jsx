import React, { useState } from 'react';
import { 
  Sparkles, 
  Leaf, 
  FlaskConical, 
  ShieldCheck, 
  Calculator, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  HeartHandshake 
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function TreatmentPlan({ lang, disease }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const [activeRemedyTab, setActiveRemedyTab] = useState('organic');
  const [tankLiters, setTankLiters] = useState(15); // Default 15L backpack spray pump

  if (!disease) return null;

  // Calculate dosage based on chemical dosage recipe (e.g., 2.5g/L)
  const calculateChemicalGrams = () => {
    if (!disease.chemicalRemedies) return 0;
    // Extract numerical rate e.g. "2.5" from "2.5 grams"
    const match = disease.chemicalRemedies.dosage?.match(/(\d+(\.\d+)?)/);
    const ratePerLiter = match ? parseFloat(match[1]) : 2;
    return (tankLiters * ratePerLiter).toFixed(1);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Agronomic Prescription for {disease.name}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {t.treatmentHeader}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Farmer-friendly biological remedies, targeted chemical formulations, and protective handling guidance
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveRemedyTab('organic')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeRemedyTab === 'organic'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Leaf className="w-4 h-4" />
            <span>{t.tabOrganic}</span>
          </button>

          <button
            onClick={() => setActiveRemedyTab('chemical')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeRemedyTab === 'chemical'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>{t.tabChemical}</span>
          </button>

          <button
            onClick={() => setActiveRemedyTab('cultural')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeRemedyTab === 'cultural'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t.tabCultural}</span>
          </button>
        </div>

        {/* Content Body based on Tab */}
        {activeRemedyTab === 'organic' && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              <span>Eco-Friendly Organic & Bio-Control Remedies</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {disease.organicRemedies.map((remedy, idx) => (
                <div key={idx} className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200">{remedy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeRemedyTab === 'chemical' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-teal-400 flex items-center gap-2">
                <FlaskConical className="w-4 h-4" />
                <span>Targeted Active Ingredient & Prescription</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400">Active Ingredient:</span>
                  <p className="text-sm font-bold text-white mt-0.5">{disease.chemicalRemedies.activeIngredient}</p>
                </div>
                <div>
                  <span className="text-slate-400">Trade Names (Brands):</span>
                  <p className="text-sm font-bold text-teal-300 mt-0.5">{disease.chemicalRemedies.tradeNames}</p>
                </div>
                <div>
                  <span className="text-slate-400">Standard Dosage Rate:</span>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5">{disease.chemicalRemedies.dosage}</p>
                </div>
                <div>
                  <span className="text-slate-400">Application Protocol:</span>
                  <p className="text-xs text-slate-300 mt-0.5">{disease.chemicalRemedies.applicationNotes}</p>
                </div>
              </div>
            </div>

            {/* Chemical Spray Tank Calculator */}
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-emerald-500/30 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                <span>{t.dosageCalculator}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="space-y-2">
                  <label className="text-xs text-slate-300 font-medium block">
                    {t.tankSize}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={tankLiters}
                      onChange={(e) => setTankLiters(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-28 px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-bold text-white focus:outline-none focus:border-emerald-500"
                    />
                    <span className="text-xs text-slate-400">Liters (e.g. 15L backpack pump)</span>
                  </div>
                </div>

                <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40 space-y-1">
                  <span className="text-xs text-slate-300 font-semibold">{t.dosageResult}:</span>
                  <p className="text-2xl font-extrabold text-emerald-300">
                    {calculateChemicalGrams()} grams / ml
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Mix into {tankLiters} Liters of clean water. Stir continuously before spraying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeRemedyTab === 'cultural' && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Cultural & Agronomic Sanitation Practices</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {disease.culturalPractices.map((practice, idx) => (
                <div key={idx} className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-slate-200">{practice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Safety PPE Gear & PHI Pre-Harvest Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
          
          {/* Mandatory PPE */}
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>{t.safetyGearHeader}</span>
            </h4>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {disease.safetyGear.map((gear, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700">
                  🛡️ {gear}
                </span>
              ))}
            </div>
          </div>

          {/* Pre-Harvest Interval (PHI) */}
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{t.preHarvestDays}</span>
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <span className="text-2xl font-extrabold text-white">{disease.preHarvestIntervalDays} Days</span>
              <p className="text-xs text-slate-400">
                {t.daysBeforeHarvest}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
