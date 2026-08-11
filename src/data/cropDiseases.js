export const CROP_DISEASES = [
  {
    id: "tomato-late-blight",
    name: "Tomato Late Blight",
    scientificName: "Phytophthora infestans",
    crop: "Tomato",
    category: "Fungal / Oomycete",
    urgency: "Critical",
    confidenceScore: 96.8,
    affectedAreaPercent: 28,
    image: "/samples/tomato_blight.jpg",
    bbox: { x: 30, y: 35, width: 45, height: 40 },
    heatmapSpots: [
      { x: 48, y: 52, r: 40, v: 0.9 },
      { x: 38, y: 42, r: 25, v: 0.75 },
      { x: 60, y: 62, r: 20, v: 0.6 }
    ],
    description: "A destructive fungal-like pathogen causing dark water-soaked lesions on leaves and stems, leading to foliage destruction within days during humid weather.",
    cause: "High relative humidity (>85%), leaf wetness from rain/dew, and mild temperatures (15°C - 22°C).",
    symptoms: [
      "Irregular dark brown, water-soaked spots on leaf tips and margins.",
      "White cottony fungal growth on leaf undersides in high humidity.",
      "Stems turn dark brown to black and collapse.",
      "Fruit develops firm, dark, greasy brown spots."
    ],
    organicRemedies: [
      "Apply Copper Soap / Bordeaux Mixture (1% concentration) thoroughly on leaf surfaces.",
      "Prune infected bottom leaves (up to 30 cm from soil) to improve air circulation.",
      "Spray Neem Oil extract (5 ml per Liter of water + mild organic soap) as a bio-fungicide barrier.",
      "Apply Trichoderma viride bio-agent to soil around plant roots."
    ],
    chemicalRemedies: {
      activeIngredient: "Mancozeb 75% WP or Chlorothalonil 75% WP",
      tradeNames: "Dithane M-45, Kavach, Bravo",
      dosage: "2.5 grams per Liter of water",
      mixingGuideline: "Mix 37.5g of powder into 15L backpack spray tank. Stir thoroughly before spraying.",
      applicationNotes: "Spray early morning or late afternoon. Ensure full coverage on undersides of leaves."
    },
    culturalPractices: [
      "Switch to drip irrigation to keep foliage dry (avoid overhead sprinklers).",
      "Stake and tie plants to keep leaves off the wet ground.",
      "Maintain wider plant spacing (60 cm) for canopy ventilation.",
      "Rotate crops with non-solanaceous plants (e.g., maize or beans) for 3 seasons."
    ],
    safetyGear: ["Mask (N95)", "Nitrile Gloves", "Rubber Boots", "Safety Goggles"],
    preHarvestIntervalDays: 7,
    climateVulnerability: {
      highHumidityRisk: "Severe - spreads rapidly when humidity > 80%",
      rainWashoffRisk: "High - rainfall within 4 hours washes off protectant fungicides",
      tempRange: "Optimal growth 18°C - 22°C"
    },
    safeSprayConditions: {
      maxWindSpeedKmh: 12,
      minDryHoursAfterSpray: 6,
      optimalTempMin: 14,
      optimalTempMax: 26
    }
  },
  {
    id: "rice-blast",
    name: "Rice Blast Disease",
    scientificName: "Magnaporthe oryzae",
    crop: "Rice / Paddy",
    category: "Fungal",
    urgency: "Critical",
    confidenceScore: 94.5,
    affectedAreaPercent: 32,
    image: "/samples/rice_blast.jpg",
    bbox: { x: 35, y: 25, width: 35, height: 50 },
    heatmapSpots: [
      { x: 50, y: 45, r: 35, v: 0.95 },
      { x: 45, y: 70, r: 25, v: 0.7 }
    ],
    description: "One of the most damaging rice diseases causing spindle-shaped spots with ash-gray centers. Can affect leaves, nodes, and panicles, leading to neck rot and empty grains.",
    cause: "Excess nitrogen fertilization, prolonged leaf wetness, high nighttime relative humidity (>90%), and warm days (24°C - 28°C).",
    symptoms: [
      "Diamond or spindle-shaped lesions with pointed ends on leaves.",
      "Lesion center turns whitish-gray with dark reddish-brown borders.",
      "Neck node rots and turns black (neck blast), causing panicle breakage.",
      "Entire leaf turns yellow and dies off (burning effect)."
    ],
    organicRemedies: [
      "Spray Pseudomonas fluorescens (10g/Liter) at tillering and panicle initiation stages.",
      "Apply fermented cow dung/urine slurry filtrate (10% solution) as a traditional bio-protectant.",
      "Broadcast silica gel or rice husk ash (rich in silicon) into paddy field to strengthen leaf cell walls."
    ],
    chemicalRemedies: {
      activeIngredient: "Tricyclazole 75% WP or Azoxystrobin 23% SC",
      tradeNames: "Beam, Amistar, Baan",
      dosage: "0.6 grams of Tricyclazole OR 1 ml of Azoxystrobin per Liter of water",
      mixingGuideline: "Dissolve 12g Tricyclazole in 20L water tank for half-acre spray.",
      applicationNotes: "Spray at boot leaf stage and 10% panicle emergence for maximum grain protection."
    },
    culturalPractices: [
      "Avoid excessive urea / nitrogen application; balance with Potassium (K) fertilizer.",
      "Maintain continuous shallow flooding (3-5 cm) to suppress airborne spore germination.",
      "Burn or bury infected stubble after harvest.",
      "Use certified resistant rice seed varieties (e.g., Basmati 386, Swarna Sub1)."
    ],
    safetyGear: ["Mask", "Chemical Gloves", "High Rubber Boots", "Protective Suit"],
    preHarvestIntervalDays: 14,
    climateVulnerability: {
      highHumidityRisk: "Extreme - spores germinate in 6 hours under continuous dew",
      rainWashoffRisk: "High - needs 4 hours dry spell",
      tempRange: "Optimal growth 25°C - 28°C"
    },
    safeSprayConditions: {
      maxWindSpeedKmh: 15,
      minDryHoursAfterSpray: 5,
      optimalTempMin: 18,
      optimalTempMax: 30
    }
  },
  {
    id: "corn-northern-leaf-blight",
    name: "Northern Corn Leaf Blight",
    scientificName: "Exserohilum turcicum",
    crop: "Corn / Maize",
    category: "Fungal",
    urgency: "Warning",
    confidenceScore: 92.1,
    affectedAreaPercent: 22,
    image: "/samples/corn_blight.jpg",
    bbox: { x: 20, y: 30, width: 60, height: 35 },
    heatmapSpots: [
      { x: 50, y: 45, r: 45, v: 0.85 },
      { x: 30, y: 40, r: 25, v: 0.65 }
    ],
    description: "Fungal disease characterized by large, cigar-shaped gray/tan lesions that reduce green photosynthetic area and corn ear fill weight.",
    cause: "Overwintered fungus in crop residue, cool moderate temperatures (18°C - 27°C), and heavy dew drops.",
    symptoms: [
      "Long, narrow, elliptical (cigar-shaped) tan spots (2.5 - 15 cm long).",
      "Dark olive-green fuzzy spore growth inside lesions during wet weather.",
      "Lower foliage blights first, moving upwards to upper canopy."
    ],
    organicRemedies: [
      "Spray bio-fungicide containing Bacillus subtilis (5ml/L).",
      "Apply compost tea foliage spray enriched with beneficial micro-organisms.",
      "Mulch soil around corn bases with clean straw to block soil-borne spore splashing."
    ],
    chemicalRemedies: {
      activeIngredient: "Propiconazole 25% EC or Pyraclostrobin 20% WG",
      tradeNames: "Tilt, Headline, Opera",
      dosage: "1 ml per Liter of water",
      mixingGuideline: "15 ml Propiconazole into 15L water spray pump.",
      applicationNotes: "Spray when lesions first appear on leaves below the main corn ear."
    },
    culturalPractices: [
      "Perform deep tillage to bury infected maize residue after harvest.",
      "Practice 2-year crop rotation with legumes (Soybean / Cowpea).",
      "Select NCLB-resistant hybrid maize seed varieties."
    ],
    safetyGear: ["Mask", "Gloves", "Rubber Boots", "Goggles"],
    preHarvestIntervalDays: 14,
    climateVulnerability: {
      highHumidityRisk: "Moderate to High during prolonged morning dew",
      rainWashoffRisk: "Moderate",
      tempRange: "18°C - 27°C"
    },
    safeSprayConditions: {
      maxWindSpeedKmh: 12,
      minDryHoursAfterSpray: 4,
      optimalTempMin: 16,
      optimalTempMax: 28
    }
  },
  {
    id: "potato-early-blight",
    name: "Potato Early Blight",
    scientificName: "Alternaria solani",
    crop: "Potato",
    category: "Fungal",
    urgency: "Warning",
    confidenceScore: 95.2,
    affectedAreaPercent: 19,
    image: "/samples/tomato_blight.jpg",
    bbox: { x: 25, y: 30, width: 40, height: 40 },
    heatmapSpots: [{ x: 45, y: 50, r: 35, v: 0.8 }],
    description: "Fungal pathogen causing target-board dark brown spots with concentric rings on older potato leaves, reducing tuber size.",
    cause: "Alternating wet and dry weather cycles, nutrient stress (low Nitrogen), and aging plant tissues.",
    symptoms: [
      "Dark brown circular spots with characteristic target-like concentric rings.",
      "Yellowing (chlorosis) around dark spots.",
      "Leaves turn brown, dry up, and hang dead on the stem."
    ],
    organicRemedies: [
      "Spray Potassium Bicarbonate (4g/L) mixed with liquid castile soap.",
      "Apply copper octanoate bio-compatible spray.",
      "Foliar spray with kelp meal extract to boost plant stress immunity."
    ],
    chemicalRemedies: {
      activeIngredient: "Mancozeb 75% WP or Difenoconazole 25% EC",
      tradeNames: "Score, Dithane M-45",
      dosage: "0.5 ml Difenoconazole or 2g Mancozeb per Liter of water",
      mixingGuideline: "10 ml Score in 20L spray tank.",
      applicationNotes: "Initiate spray when tubers start swelling."
    },
    culturalPractices: [
      "Maintain adequate soil Nitrogen and Potassium levels.",
      "Destroy potato vines 2 weeks prior to harvest.",
      "Avoid overhead irrigation late in the afternoon."
    ],
    safetyGear: ["Mask", "Gloves", "Goggles"],
    preHarvestIntervalDays: 7,
    climateVulnerability: {
      highHumidityRisk: "High after intermittent rain showers",
      rainWashoffRisk: "Moderate",
      tempRange: "20°C - 30°C"
    },
    safeSprayConditions: {
      maxWindSpeedKmh: 15,
      minDryHoursAfterSpray: 4,
      optimalTempMin: 15,
      optimalTempMax: 30
    }
  },
  {
    id: "cotton-bacterial-blight",
    name: "Cotton Bacterial Blight",
    scientificName: "Xanthomonas citri pv. malvacearum",
    crop: "Cotton",
    category: "Bacterial",
    urgency: "Critical",
    confidenceScore: 91.4,
    affectedAreaPercent: 26,
    image: "/samples/rice_blast.jpg",
    bbox: { x: 30, y: 30, width: 40, height: 40 },
    heatmapSpots: [{ x: 50, y: 50, r: 35, v: 0.88 }],
    description: "Bacterial disease causing angular water-soaked leaf spots, black arm stem rot, and boll lesions leading to lint staining.",
    cause: "Rain splash dispersal, high ambient moisture, infected seeds, and temperatures above 28°C.",
    symptoms: [
      "Angular, water-soaked dark green leaf spots bounded by leaf veins.",
      "Spots turn dark brown/black as tissue dies.",
      "Black streak rot on stems (Black Arm condition).",
      "Water-soaked oily sunken spots on cotton bolls."
    ],
    organicRemedies: [
      "Treat seeds with Streptomyces bio-fungicide prior to sowing.",
      "Apply Copper Oxychloride (3g/L) mixed with Streptomycin sulphate.",
      "Spray garlic bulb extract (50g/L) for antibacterial action."
    ],
    chemicalRemedies: {
      activeIngredient: "Copper Oxychloride 50% WP + Streptocycline (9:1 ratio)",
      tradeNames: "Blitox + Plantomycin",
      dosage: "3g Copper Oxychloride + 0.1g Streptocycline per Liter of water",
      mixingGuideline: "Mix 60g Blitox + 2g Plantomycin in 20L water tank.",
      applicationNotes: "Spray immediately at first sight of angular leaf spots."
    },
    culturalPractices: [
      "Use delinted certified disease-free cotton seeds.",
      "Destroy crop residues after picking.",
      "Avoid fields with standing water retention."
    ],
    safetyGear: ["Mask", "Gloves", "Rubber Boots", "Goggles"],
    preHarvestIntervalDays: 15,
    climateVulnerability: {
      highHumidityRisk: "Severe during windy thunderstorm events",
      rainWashoffRisk: "High",
      tempRange: "28°C - 35°C"
    },
    safeSprayConditions: {
      maxWindSpeedKmh: 10,
      minDryHoursAfterSpray: 6,
      optimalTempMin: 22,
      optimalTempMax: 35
    }
  },
  {
    id: "fall-armyworm",
    name: "Fall Armyworm Pest Infestation",
    scientificName: "Spodoptera frugiperda",
    crop: "Corn / Sorghum / Sugarcane",
    category: "Pest / Insect",
    urgency: "Critical",
    confidenceScore: 97.2,
    affectedAreaPercent: 35,
    image: "/samples/corn_blight.jpg",
    bbox: { x: 25, y: 20, width: 55, height: 50 },
    heatmapSpots: [{ x: 52, y: 45, r: 40, v: 0.95 }],
    description: "Highly aggressive caterpillar pest that burrows into the whorls of maize, eating young leaves and destroying growing points.",
    cause: "Warm dry spells followed by light rains, enabling rapid moth migration and egg laying.",
    symptoms: [
      "Ragged, shot-hole perforations and window-pane leaf feeding.",
      "Moist sawdust-like frass (excrement) accumulated inside the central leaf whorl.",
      "Brownish caterpillars with inverted 'Y' mark on head inside leaf whorls.",
      "Tassel and ear whorl damage."
    ],
    organicRemedies: [
      "Apply Bacillus thuringiensis (Bt) kurstaki powder (2g/L) directly into whorls.",
      "Drop fine river sand or wood ash mixed with chili powder into the central plant whorl to suffocate larvae.",
      "Hang Pheromone traps (4 traps per acre) to catch adult male moths.",
      "Release Trichogramma parasitic wasps."
    ],
    chemicalRemedies: {
      activeIngredient: "Emamectin Benzoate 5% SG or Spinetoram 11.7% SC",
      tradeNames: "Proclaim, Delegate",
      dosage: "0.4 grams Emamectin Benzoate per Liter of water",
      mixingGuideline: "8 grams Proclaim in 20L spray tank. Direct nozzle into whorls.",
      applicationNotes: "Spray late evening when caterpillars emerge from whorls to feed."
    },
    culturalPractices: [
      "Intercrop corn with Desmodium (Push-Pull strategy) or Cowpea.",
      "Hand-pick egg masses and crush caterpillars early morning.",
      "Deep autumn plowing to expose pupae to birds and sunlight."
    ],
    safetyGear: ["Mask", "Gloves", "Rubber Boots", "Goggles"],
    preHarvestIntervalDays: 14,
    climateVulnerability: {
      highHumidityRisk: "Low - pest thrives in warm dry conditions (25-32°C)",
      rainWashoffRisk: "Moderate",
      tempRange: "24°C - 32°C"
    },
    safeSprayConditions: {
      maxWindSpeedKmh: 12,
      minDryHoursAfterSpray: 4,
      optimalTempMin: 18,
      optimalTempMax: 32
    }
  },
  {
    id: "nitrogen-deficiency",
    name: "Nitrogen (N) Nutrient Deficiency",
    scientificName: "Abiotic Soil Nutrient Deficiency",
    crop: "General / Maize / Wheat / Rice",
    category: "Nutrient Deficiency",
    urgency: "Watch",
    confidenceScore: 93.4,
    affectedAreaPercent: 40,
    image: "/samples/corn_blight.jpg",
    bbox: { x: 15, y: 25, width: 70, height: 50 },
    heatmapSpots: [{ x: 50, y: 50, r: 40, v: 0.7 }],
    description: "Lack of nitrogen impairs chlorophyll synthesis. Older lower leaves turn pale yellow starting from leaf tips along the midrib.",
    cause: "Leaching from heavy rain, low soil organic matter, waterlogged soil, or under-fertilization.",
    symptoms: [
      "V-shaped yellowing starting from leaf tip moving inward along midrib on bottom leaves.",
      "Stunted overall plant growth and thin spindly stalks.",
      "Premature leaf drop and low yield potential."
    ],
    organicRemedies: [
      "Top-dress with well-decomposed vermicompost or poultry manure (2 tonnes/acre).",
      "Foliar spray with Liquid Fish Emulsion (15 ml/L) or Panchagavya (3% solution).",
      "Incorporate green manure crops (Dhaincha, Sunn hemp, or Sesbania) before planting."
    ],
    chemicalRemedies: {
      activeIngredient: "Urea (46% N) or Ammonium Nitrate",
      tradeNames: "Neem Coated Urea, Nano Urea",
      dosage: "4 ml Nano Urea per Liter of water OR 15-20 kg Urea per acre top dressing",
      mixingGuideline: "Mix 60 ml Nano Urea in 15L water pump for foliar feed.",
      applicationNotes: "Apply top dressing when soil is moist, never on bone-dry soil."
    },
    culturalPractices: [
      "Split nitrogen application into 3 doses (basal, tillering/vegetative, and flowering).",
      "Improve soil drainage to prevent denitrification in logged water.",
      "Grow leguminous cover crops to naturally fix atmospheric nitrogen."
    ],
    safetyGear: ["Gloves", "Mask"],
    preHarvestIntervalDays: 0,
    climateVulnerability: {
      highHumidityRisk: "Low",
      rainWashoffRisk: "High - heavy rain leaches soil nitrates deep beyond root zones",
      tempRange: "N/A"
    },
    safeSprayConditions: {
      maxWindSpeedKmh: 15,
      minDryHoursAfterSpray: 2,
      optimalTempMin: 10,
      optimalTempMax: 35
    }
  },
  {
    id: "potassium-deficiency",
    name: "Potassium (K) Deficiency",
    scientificName: "Abiotic Nutrient Stress",
    crop: "General / Potato / Tomato / Rice",
    category: "Nutrient Deficiency",
    urgency: "Watch",
    confidenceScore: 91.8,
    affectedAreaPercent: 20,
    image: "/samples/tomato_blight.jpg",
    bbox: { x: 20, y: 20, width: 60, height: 60 },
    heatmapSpots: [{ x: 50, y: 50, r: 35, v: 0.72 }],
    description: "Deficiency causes scorch and browning along outer margins of older leaves, reducing drought tolerance and stem strength.",
    cause: "Sandy soils low in cation exchange, excessive calcium/magnesium competition, or dry soil conditions.",
    symptoms: [
      "Yellowing followed by dry brown scorching along leaf edges (marginal necrosis).",
      "Leaves curl upward or downward.",
      "Weak stems prone to lodging (falling over in wind).",
      "Uneven fruit ripening."
    ],
    organicRemedies: [
      "Apply Wood Ash (rich in K2O) around plant drip lines (200g per plant).",
      "Foliar spray with Seaweed Extract (3ml/L).",
      "Apply Muriate of Potash (MOP) or Sulfate of Potash (SOP) bio-organically."
    ],
    chemicalRemedies: {
      activeIngredient: "Muriate of Potash (MOP 60% K2O) or Potassium Nitrate (13-0-45)",
      tradeNames: "SOP, MOP, 13-0-45 Water Soluble Fertilizer",
      dosage: "5 grams Potassium Nitrate per Liter of water for foliar spray",
      mixingGuideline: "100g 13-0-45 in 20L spray tank.",
      applicationNotes: "Spray during fruit set and grain filling stage."
    },
    culturalPractices: [
      "Maintain consistent soil moisture levels to facilitate potassium root uptake.",
      "Add organic humus to sandy soils to prevent leaching.",
      "Perform annual soil soil test tests."
    ],
    safetyGear: ["Gloves", "Mask"],
    preHarvestIntervalDays: 0,
    climateVulnerability: {
      highHumidityRisk: "Low",
      rainWashoffRisk: "Moderate",
      tempRange: "N/A"
    },
    safeSprayConditions: {
      maxWindSpeedKmh: 15,
      minDryHoursAfterSpray: 2,
      optimalTempMin: 12,
      optimalTempMax: 35
    }
  },
  {
    id: "healthy-crop-baseline",
    name: "Healthy Vigorous Leaf Baseline",
    scientificName: "Normal Physiological Status",
    crop: "Tomato / Rice / Corn / General",
    category: "Healthy Baseline",
    urgency: "Healthy",
    confidenceScore: 99.1,
    affectedAreaPercent: 0,
    image: "/samples/tomato_blight.jpg",
    bbox: null,
    heatmapSpots: [],
    description: "Your crop leaf shows excellent chlorophyll density, uniform green coloration, and robust cellular structure with no visible pathogens or pest damage.",
    cause: "Optimal soil nutrition, proper irrigation, healthy micro-biome, and suitable weather conditions.",
    symptoms: [
      "Uniform deep green leaf color.",
      "Smooth, intact leaf margins with no chlorosis or necrosis.",
      "Strong turgor pressure and healthy cell foliage structure."
    ],
    organicRemedies: [
      "Maintain preventative foliar feeding with Panchagavya or compost tea once every 14 days.",
      "Apply bi-weekly preventive Neem Oil spray (3ml/L) to prevent pest build-up."
    ],
    chemicalRemedies: {
      activeIngredient: "None Required - Continue Good Agronomic Maintenance",
      tradeNames: "N/A",
      dosage: "0 g/L",
      mixingGuideline: "No chemical intervention needed.",
      applicationNotes: "Keep field monitored weekly."
    },
    culturalPractices: [
      "Maintain balanced N-P-K fertilization according to soil test recommendations.",
      "Regular weeding and field sanitation.",
      "Monitor weather forecasts for sudden humidity or heavy rain spikes."
    ],
    safetyGear: ["Standard Gardening Gloves"],
    preHarvestIntervalDays: 0,
    climateVulnerability: {
      highHumidityRisk: "Low under current management",
      rainWashoffRisk: "N/A",
      tempRange: "Ideal"
    },
    safeSprayConditions: {
      maxWindSpeedKmh: 20,
      minDryHoursAfterSpray: 0,
      optimalTempMin: 10,
      optimalTempMax: 38
    }
  }
];
