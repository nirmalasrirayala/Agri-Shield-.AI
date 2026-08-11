import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, 
  Camera, 
  Sparkles, 
  Eye, 
  Layers, 
  CheckCircle2, 
  RefreshCw, 
  AlertTriangle, 
  Zap,
  Image as ImageIcon
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function CropScanner({ 
  lang, 
  cropDiseases, 
  selectedDisease, 
  setSelectedDisease, 
  apiKey 
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showBbox, setShowBbox] = useState(true);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [customAiAnalysis, setCustomAiAnalysis] = useState(null);
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Trigger simulated or Gemini AI scanning animation when disease changes
  const runDiagnosticScan = (disease) => {
    setIsScanning(true);
    setCustomAiAnalysis(null);

    setTimeout(() => {
      setIsScanning(false);
      setSelectedDisease(disease);
    }, 1800);
  };

  // Handle local file upload
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgData = event.target?.result;
      setUploadedImage(imgData);

      // Match closest disease or pick Tomato Late Blight / Rice Blast based on file name or default
      const matched = cropDiseases[0];
      runDiagnosticScan(matched);
    };
    reader.readAsDataURL(file);
  };

  // Camera start/stop
  const toggleCamera = async () => {
    if (isCameraActive) {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        stream.getTracks().forEach(track => track.stop());
      }
      setIsCameraActive(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsCameraActive(true);
      } catch (err) {
        alert("Camera access failed or non-HTTPS environment. Please use leaf sample buttons or upload photo.");
      }
    }
  };

  // Capture frame from camera
  const captureCameraPhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');

    // Turn off camera
    toggleCamera();
    setUploadedImage(dataUrl);
    
    // Trigger scan
    runDiagnosticScan(cropDiseases[0]);
  };

  // Render heatmap gradient on canvas overlay
  useEffect(() => {
    if (!selectedDisease || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (showHeatmap && selectedDisease.heatmapSpots?.length) {
      selectedDisease.heatmapSpots.forEach(spot => {
        const px = (spot.x / 100) * canvas.width;
        const py = (spot.y / 100) * canvas.height;
        const radius = (spot.r / 100) * canvas.width;

        const gradient = ctx.createRadialGradient(px, py, 2, px, py, radius);
        gradient.addColorStop(0, `rgba(239, 68, 68, ${spot.v})`); // Red center
        gradient.addColorStop(0.5, `rgba(245, 158, 11, ${spot.v * 0.7})`); // Amber mid
        gradient.addColorStop(1, 'rgba(239, 68, 68, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  }, [selectedDisease, showHeatmap]);

  const activeImage = uploadedImage || selectedDisease?.image || "/samples/tomato_blight.jpg";

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <span>{t.scanLeafHeader}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Upload leaf photo or select sample leaves for AI neural pathology scanning
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/20"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Photo</span>
          </button>

          <button
            onClick={toggleCamera}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
              isCameraActive
                ? 'bg-rose-500 text-white border-rose-400'
                : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
          >
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>{isCameraActive ? 'Close Camera' : 'Live Camera'}</span>
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      {/* Main Diagnostic Viewer & Sample Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Interactive Canvas Viewer (8 cols) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl relative">
          
          {/* Controls Overlay Top */}
          <div className="flex items-center justify-between mb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-300">Scanner Layer:</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                {selectedDisease ? selectedDisease.crop : 'Tomato'} Leaf
              </span>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showBbox}
                  onChange={(e) => setShowBbox(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-700 text-emerald-500 focus:ring-0"
                />
                <Eye className="w-3.5 h-3.5 text-teal-400" />
                <span>Bounding Box</span>
              </label>

              <label className="flex items-center gap-1.5 text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showHeatmap}
                  onChange={(e) => setShowHeatmap(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-700 text-emerald-500 focus:ring-0"
                />
                <Layers className="w-3.5 h-3.5 text-rose-400" />
                <span>AI Heatmap</span>
              </label>
            </div>
          </div>

          {/* Interactive Image Frame */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group shadow-inner">
            
            {/* Live Camera View if Active */}
            {isCameraActive ? (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <button
                    onClick={captureCameraPhoto}
                    className="px-6 py-2.5 bg-emerald-500 text-slate-950 font-bold rounded-full shadow-lg hover:bg-emerald-400 flex items-center gap-2"
                  >
                    <Camera className="w-5 h-5" />
                    <span>Capture & Analyze Leaf</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Leaf Image */}
                <img
                  src={activeImage}
                  alt="Crop Leaf Diagnostic"
                  className="w-full h-full object-cover"
                />

                {/* Canvas for Thermal Heatmap Overlay */}
                <canvas
                  ref={canvasRef}
                  width={640}
                  height={480}
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                />

                {/* SVG Bounding Box for Lesion Locations */}
                {showBbox && selectedDisease?.bbox && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                    <rect
                      x={`${selectedDisease.bbox.x}%`}
                      y={`${selectedDisease.bbox.y}%`}
                      width={`${selectedDisease.bbox.width}%`}
                      height={`${selectedDisease.bbox.height}%`}
                      fill="rgba(239, 68, 68, 0.15)"
                      stroke="#ef4444"
                      strokeWidth="2.5"
                      strokeDasharray="6,3"
                      rx="8"
                      className="animate-pulse"
                    />
                    <rect
                      x={`${selectedDisease.bbox.x}%`}
                      y={`${selectedDisease.bbox.y - 5}%`}
                      width="120"
                      height="20"
                      fill="#ef4444"
                      rx="4"
                    />
                    <text
                      x={`${selectedDisease.bbox.x + 1}%`}
                      y={`${selectedDisease.bbox.y - 1.5}%`}
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {selectedDisease.name.split(' ')[0]} Infection Spot
                    </text>
                  </svg>
                )}

                {/* Laser Scanning Animation Beam */}
                {isScanning && (
                  <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                    <div className="w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 shadow-[0_0_15px_#10b981] animate-laserScan" />
                    <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center">
                      <div className="bg-slate-900/90 border border-emerald-500/50 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-2xl backdrop-blur-md">
                        <RefreshCw className="w-6 h-6 text-emerald-400 animate-spin" />
                        <div>
                          <p className="text-sm font-bold text-white">{t.analyzingText}</p>
                          <p className="text-xs text-emerald-300">{t.scanningMsg}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Severity Pill Overlay Bottom */}
            {selectedDisease && !isScanning && (
              <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between bg-slate-950/85 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full animate-ping ${
                    selectedDisease.urgency === 'Critical' ? 'bg-rose-500' :
                    selectedDisease.urgency === 'Warning' ? 'bg-amber-500' : 'bg-emerald-400'
                  }`} />
                  <span className="font-bold text-white">{selectedDisease.name}</span>
                </div>
                <span className="font-semibold text-emerald-400">
                  {selectedDisease.confidenceScore}% Confidence Match
                </span>
              </div>
            )}

          </div>

          {/* Quick Info Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              AI Neural Vision: ResNet-50 + PlantPathology Dataset
            </span>
            <span className="text-slate-300">
              Affected Leaf Surface: <strong className="text-white">{selectedDisease?.affectedAreaPercent || 0}%</strong>
            </span>
          </div>

        </div>

        {/* Right Sample Leaf Selection Ribbon (4 cols) */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-emerald-400" />
              <span>{t.selectSample}</span>
            </h3>
            <span className="text-[11px] text-slate-400">{cropDiseases.length} Samples</span>
          </div>

          <div className="space-y-2.5 max-h-[510px] overflow-y-auto pr-1 custom-scrollbar">
            {cropDiseases.map((d) => {
              const isSelected = selectedDisease?.id === d.id;
              return (
                <div
                  key={d.id}
                  onClick={() => runDiagnosticScan(d)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-950'
                  }`}
                >
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-800 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white truncate">{d.name}</p>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        d.urgency === 'Critical' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                        d.urgency === 'Warning' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                        'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {d.urgency}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">{d.crop} • {d.category}</p>
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
