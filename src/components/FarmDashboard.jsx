import React, { useState } from 'react';
import { 
  History, 
  TrendingUp, 
  PhoneCall, 
  FileText, 
  Printer, 
  Clock, 
  CheckCircle2, 
  Share2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function FarmDashboard({ 
  lang, 
  selectedDisease, 
  activeWeather 
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const [showCallModal, setShowCallModal] = useState(false);

  // Market prices dataset
  const marketPrices = [
    { crop: "Tomato (Grade A)", price: "$1.45 / kg", trend: "+3.2%", status: "up" },
    { crop: "Paddy Rice (Basmati)", price: "$390 / ton", trend: "+1.8%", status: "up" },
    { crop: "Maize / Corn", price: "$195 / ton", trend: "-0.5%", status: "down" },
    { crop: "Cotton (Raw)", price: "$1.85 / kg", trend: "+2.4%", status: "up" },
    { crop: "Potato (Seed Quality)", price: "$0.85 / kg", trend: "0.0%", status: "flat" }
  ];

  // Print diagnostic report PDF generator
  const handlePrintReport = () => {
    window.print();
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Top Action Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <History className="w-6 h-6 text-emerald-400" />
              <span>{t.navHistory}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Field report records, market commodity prices, and direct agronomic expert hotline
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintReport}
              className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-teal-400" />
              <span>{t.exportReport}</span>
            </button>

            <button
              onClick={() => setShowCallModal(true)}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.callAdvisor}</span>
            </button>
          </div>
        </div>

        {/* Agricultural Commodity Market Price Ticker */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Live Agricultural Commodity Market Prices</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {marketPrices.map((m, idx) => (
              <div key={idx} className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 space-y-1">
                <p className="text-xs font-semibold text-slate-300 truncate">{m.crop}</p>
                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-sm font-extrabold text-white">{m.price}</span>
                  <span className={`text-[10px] font-bold ${m.status === 'up' ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {m.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Printable Field Diagnostic Summary Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4 print:bg-white print:text-black">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Official Agri Shield Field Diagnostic Certificate
              </span>
              <h3 className="text-lg font-extrabold text-white mt-0.5">
                Diagnostic Report: {selectedDisease?.name}
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Report ID: #{Math.floor(100000 + Math.random() * 900000)}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-slate-400">Farm Location:</span>
              <p className="font-bold text-white mt-0.5">{activeWeather.regionName}</p>
            </div>
            <div>
              <span className="text-slate-400">Scan Confidence:</span>
              <p className="font-bold text-emerald-400 mt-0.5">{selectedDisease?.confidenceScore}% Match</p>
            </div>
            <div>
              <span className="text-slate-400">Recommended Chemical:</span>
              <p className="font-bold text-teal-300 mt-0.5">{selectedDisease?.chemicalRemedies?.activeIngredient}</p>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-300 space-y-1 border-t border-slate-800/80">
            <p><strong>Primary Treatment:</strong> {selectedDisease?.organicRemedies[0]}</p>
            <p><strong>Safe Spraying Verdict:</strong> {activeWeather.current.sprayReason}</p>
          </div>
        </div>

      </div>

      {/* Emergency Advisor Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 text-white">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Agronomist Hotline Connect</h3>
                <p className="text-xs text-slate-400">Direct phone call & AI WhatsApp advisory</p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Toll-Free Helpline:</span>
                <span className="font-bold text-emerald-400 text-sm">1800-AGRI-SHIELD</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">WhatsApp AI Assistant:</span>
                <span className="font-bold text-teal-300 text-sm">+1 (800) 555-CROP</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Response Time:</span>
                <span className="font-bold text-white">&lt; 5 minutes</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowCallModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700"
              >
                Close
              </button>
              <a
                href="tel:18002474743"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
              >
                Call Agronomist Now
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
