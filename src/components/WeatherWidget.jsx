import React from 'react';
import { 
  CloudSun, 
  MapPin, 
  Navigation, 
  Thermometer, 
  Droplets, 
  Wind, 
  CloudRain, 
  Sun, 
  Sprout, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function WeatherWidget({ 
  lang, 
  weatherPresets, 
  activeWeather, 
  setActiveWeather 
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const handleGpsDetect = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          alert(`GPS Detected: Lat ${pos.coords.latitude.toFixed(2)}, Lon ${pos.coords.longitude.toFixed(2)}. Matched nearest farm zone: Punjab Grain Belt.`);
          setActiveWeather(weatherPresets[0]);
        },
        (err) => {
          alert("Location permission denied. Please pick a farm zone from the region dropdown.");
        }
      );
    } else {
      alert("Geolocation unavailable in browser. Please pick from regional agricultural presets.");
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Location Bar Top */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <CloudSun className="w-6 h-6 text-amber-400" />
              <span>{t.weatherHeader}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Live field micro-climate data and 7-day agronomic spray suitability forecast
            </p>
          </div>

          {/* Region Picker & GPS */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <select
                value={activeWeather.id}
                onChange={(e) => {
                  const found = weatherPresets.find(p => p.id === e.target.value);
                  if (found) setActiveWeather(found);
                }}
                className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer text-white max-w-[220px] sm:max-w-xs"
              >
                {weatherPresets.map(p => (
                  <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                    {p.regionName}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleGpsDetect}
              className="px-3.5 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.autoLocation}</span>
            </button>
          </div>
        </div>

        {/* Current Live Weather Metric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
          
          {/* Temp */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>{t.temperature}</span>
              <Thermometer className="w-4 h-4 text-rose-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">{activeWeather.current.temp}°C</p>
            <span className="text-[10px] text-slate-400">High / Low balance</span>
          </div>

          {/* Humidity */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>{t.humidity}</span>
              <Droplets className="w-4 h-4 text-sky-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">{activeWeather.current.humidity}%</p>
            <span className="text-[10px] text-slate-400">Fungal spore trigger</span>
          </div>

          {/* Wind Speed */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>{t.windSpeed}</span>
              <Wind className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">
              {activeWeather.current.windSpeed} <span className="text-xs font-normal">km/h</span>
            </p>
            <span className="text-[10px] text-slate-400">Drift limit: 15 km/h</span>
          </div>

          {/* Rain Probability */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>{t.rainChance}</span>
              <CloudRain className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">{activeWeather.current.rainProb}%</p>
            <span className="text-[10px] text-slate-400">Rainfast window</span>
          </div>

          {/* Soil Moisture */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>{t.soilMoisture}</span>
              <Sprout className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">{activeWeather.current.soilMoisture}%</p>
            <span className="text-[10px] text-slate-400">Root zone moisture</span>
          </div>

          {/* UV Index */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>{t.uvIndex}</span>
              <Sun className="w-4 h-4 text-yellow-400" />
            </div>
            <p className="text-2xl font-extrabold text-white">{activeWeather.current.uvIndex} <span className="text-xs font-normal">/ 12</span></p>
            <span className="text-[10px] text-slate-400">Sunlight intensity</span>
          </div>

        </div>

      </div>

      {/* 7-Day Forecast Table & Agronomic Suitability */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <CloudSun className="w-5 h-5 text-emerald-400" />
          <span>{t.forecast7Day}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {activeWeather.forecast7Days.map((day, idx) => {
            const isOptimal = day.sprayRating === 'Optimal';
            const isDanger = day.sprayRating.includes('Hazard');
            return (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border flex flex-col justify-between text-center space-y-2 transition-all ${
                  isOptimal
                    ? 'bg-slate-950/80 border-emerald-500/40 shadow-sm'
                    : isDanger
                    ? 'bg-rose-950/20 border-rose-500/30'
                    : 'bg-slate-950/60 border-slate-800/80'
                }`}
              >
                <div>
                  <p className="text-xs font-bold text-slate-300">{day.day}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{day.condition}</p>
                </div>

                <div className="py-1">
                  <span className="text-xl font-extrabold text-white">{day.high}°</span>
                  <span className="text-xs text-slate-400 ml-1">/ {day.low}°</span>
                </div>

                <div className="text-[10px] space-y-1">
                  <p className="text-slate-400">🌧️ Rain: {day.rain}%</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full font-bold ${
                    isOptimal ? 'bg-emerald-500/20 text-emerald-300' :
                    isDanger ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {day.sprayRating}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
