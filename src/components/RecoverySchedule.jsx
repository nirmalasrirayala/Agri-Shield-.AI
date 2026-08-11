import React, { useState } from 'react';
import { Calendar, CheckCircle2, Circle, DollarSign, Award, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRANSLATIONS } from '../data/translations';

export default function RecoverySchedule({ lang, disease }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const [completedSteps, setCompletedSteps] = useState([0]);

  // Generates 14-day recovery calendar milestones for current disease
  const scheduleMilestones = [
    { day: 1, title: "Day 1: Isolation & Leaf Pruning", desc: "Prune infected lower foliage, destroy diseased debris, and check weather spray window.", status: "Urgent Action" },
    { day: 2, title: "Day 2: Morning Treatment Spray", desc: `Apply ${disease?.chemicalRemedies?.activeIngredient || 'remedy'} during optimal weather hours (06:00 - 08:00 AM).`, status: "Spray Applied" },
    { day: 4, title: "Day 4: Rainfastness & Moisture Inspection", desc: "Verify leaf absorption, check soil moisture, ensure foliage stays dry during night.", status: "Field Check" },
    { day: 7, title: "Day 7: Secondary Follow-Up Evaluation", desc: "Check for new lesion growth or spore development. Apply second bio-fungicide if necessary.", status: "Mid-Term Review" },
    { day: 10, title: "Day 10: Soil Micro-Nutrient Boost", desc: "Top-dress organic vermicompost or foliar feed Potassium/Seaweed extract to restore canopy vigor.", status: "Nutrient Feed" },
    { day: 14, title: "Day 14: Full Recovery Audit", desc: "Confirm disease eradication, record crop health score, prepare for harvest safety window.", status: "Eradicated" }
  ];

  const toggleStep = (index) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(i => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
      // Trigger celebratory confetti when completing a step
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const progressPercent = Math.round((completedSteps.length / scheduleMilestones.length) * 100);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Main Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>14-Day Eradication Protocol</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {t.scheduleHeader}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Follow step-by-step field actions to cure {disease?.name || 'crop infection'}
            </p>
          </div>

          {/* Progress Pill */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-right space-y-1">
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">Recovery Progress</span>
              <span className="font-bold text-emerald-400">{progressPercent}%</span>
            </div>
            <div className="w-36 h-2 rounded-full bg-slate-800 overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Value Protected Banner */}
        <div className="bg-gradient-to-r from-emerald-950/50 via-slate-950 to-teal-950/50 border border-emerald-500/30 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Yield Loss Prevention Calculator
              </span>
              <p className="text-xl font-extrabold text-white">
                ~ 35% Yield Protected ($420 estimated crop value saved / acre)
              </p>
            </div>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500 text-slate-950 shadow-md">
            Yield Safeguarded
          </span>
        </div>

        {/* 14-Day Timeline Milestones */}
        <div className="space-y-4 pt-2">
          {scheduleMilestones.map((m, idx) => {
            const isDone = completedSteps.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                  isDone
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-200'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button className="mt-0.5 shrink-0">
                  {isDone ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 fill-emerald-500/20" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-500" />
                  )}
                </button>

                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className={`text-sm sm:text-base font-bold ${isDone ? 'line-through text-slate-400' : 'text-white'}`}>
                      {m.title}
                    </h3>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {m.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
