export const WEATHER_PRESETS = [
  {
    id: "punjab-india",
    regionName: "Punjab Grain Belt, India (Ludhiana)",
    coordinates: { lat: 30.901, lon: 75.857 },
    current: {
      temp: 29,
      humidity: 82,
      windSpeed: 8,
      windDirection: "NE",
      rainProb: 15,
      soilMoisture: 68,
      uvIndex: 6,
      condition: "Humid & Partly Cloudy",
      spraySafetyVerdict: "Optimal",
      sprayReason: "Wind speed is low (8 km/h) and no heavy rain expected for 12 hours. Ideal for morning spray."
    },
    hourly: [
      { hour: "06:00 AM", temp: 24, wind: 6, rain: 5, status: "optimal" },
      { hour: "08:00 AM", temp: 26, wind: 7, rain: 10, status: "optimal" },
      { hour: "10:00 AM", temp: 29, wind: 9, rain: 15, status: "optimal" },
      { hour: "12:00 PM", temp: 32, wind: 14, rain: 20, status: "caution" },
      { hour: "02:00 PM", temp: 34, wind: 18, rain: 25, status: "caution" },
      { hour: "04:00 PM", temp: 31, wind: 10, rain: 15, status: "optimal" },
      { hour: "06:00 PM", temp: 28, wind: 7, rain: 10, status: "optimal" },
      { hour: "08:00 PM", temp: 26, wind: 5, rain: 5, status: "optimal" }
    ],
    forecast7Days: [
      { day: "Today", high: 34, low: 24, condition: "Partly Cloudy", rain: 15, sprayRating: "Good" },
      { day: "Tomorrow", high: 31, low: 23, condition: "Thunderstorms", rain: 80, sprayRating: "Danger (Rain)" },
      { day: "Wed", high: 29, low: 22, condition: "Light Rain", rain: 60, sprayRating: "Caution" },
      { day: "Thu", high: 32, low: 23, condition: "Sunny", rain: 10, sprayRating: "Optimal" },
      { day: "Fri", high: 33, low: 24, condition: "Clear", rain: 5, sprayRating: "Optimal" },
      { day: "Sat", high: 35, low: 25, condition: "Hot & Clear", rain: 0, sprayRating: "Optimal" },
      { day: "Sun", high: 34, low: 25, condition: "Partly Cloudy", rain: 20, sprayRating: "Good" }
    ]
  },
  {
    id: "rift-valley-kenya",
    regionName: "Rift Valley Highlands, Kenya (Nakuru)",
    coordinates: { lat: -0.303, lon: 36.08 },
    current: {
      temp: 22,
      humidity: 65,
      windSpeed: 11,
      windDirection: "SE",
      rainProb: 20,
      soilMoisture: 55,
      uvIndex: 8,
      condition: "Pleasant Breeze",
      spraySafetyVerdict: "Optimal",
      sprayReason: "Moderate temperatures (22°C) and light breezes create safe conditions for foliar application."
    },
    hourly: [
      { hour: "06:00 AM", temp: 16, wind: 5, rain: 10, status: "optimal" },
      { hour: "08:00 AM", temp: 19, wind: 8, rain: 10, status: "optimal" },
      { hour: "10:00 AM", temp: 22, wind: 11, rain: 15, status: "optimal" },
      { hour: "12:00 PM", temp: 25, wind: 13, rain: 25, status: "caution" },
      { hour: "02:00 PM", temp: 24, wind: 15, rain: 35, status: "caution" },
      { hour: "04:00 PM", temp: 21, wind: 10, rain: 20, status: "optimal" },
      { hour: "06:00 PM", temp: 18, wind: 6, rain: 10, status: "optimal" },
      { hour: "08:00 PM", temp: 16, wind: 4, rain: 5, status: "optimal" }
    ],
    forecast7Days: [
      { day: "Today", high: 25, low: 15, condition: "Sunny Intervals", rain: 20, sprayRating: "Optimal" },
      { day: "Tomorrow", high: 24, low: 14, condition: "Sunny", rain: 10, sprayRating: "Optimal" },
      { day: "Wed", high: 23, low: 14, condition: "Cloudy", rain: 30, sprayRating: "Good" },
      { day: "Thu", high: 22, low: 13, condition: "Light Shower", rain: 45, sprayRating: "Caution" },
      { day: "Fri", high: 24, low: 14, condition: "Sunny", rain: 15, sprayRating: "Optimal" },
      { day: "Sat", high: 26, low: 15, condition: "Clear", rain: 5, sprayRating: "Optimal" },
      { day: "Sun", high: 25, low: 15, condition: "Partly Cloudy", rain: 15, sprayRating: "Optimal" }
    ]
  },
  {
    id: "us-midwest-iowa",
    regionName: "US Midwest Corn Belt (Des Moines, Iowa)",
    coordinates: { lat: 41.586, lon: -93.625 },
    current: {
      temp: 27,
      humidity: 58,
      windSpeed: 23,
      windDirection: "WNW",
      rainProb: 10,
      soilMoisture: 60,
      uvIndex: 7,
      condition: "Breezy & Sunny",
      spraySafetyVerdict: "Danger",
      sprayReason: "HIGH WIND WARNING (23 km/h). High risk of chemical wind drift into adjacent fields or water bodies."
    },
    hourly: [
      { hour: "06:00 AM", temp: 18, wind: 12, rain: 5, status: "optimal" },
      { hour: "08:00 AM", temp: 21, wind: 16, rain: 5, status: "caution" },
      { hour: "10:00 AM", temp: 25, wind: 20, rain: 10, status: "danger" },
      { hour: "12:00 PM", temp: 28, wind: 24, rain: 10, status: "danger" },
      { hour: "02:00 PM", temp: 29, wind: 26, rain: 15, status: "danger" },
      { hour: "04:00 PM", temp: 28, wind: 22, rain: 10, status: "danger" },
      { hour: "06:00 PM", temp: 25, wind: 14, rain: 5, status: "caution" },
      { hour: "08:00 PM", temp: 21, wind: 8, rain: 5, status: "optimal" }
    ],
    forecast7Days: [
      { day: "Today", high: 29, low: 18, condition: "Breezy", rain: 10, sprayRating: "Wind Hazard" },
      { day: "Tomorrow", high: 26, low: 16, condition: "Calm & Sunny", rain: 5, sprayRating: "Optimal" },
      { day: "Wed", high: 28, low: 17, condition: "Clear", rain: 0, sprayRating: "Optimal" },
      { day: "Thu", high: 30, low: 19, condition: "Hot", rain: 10, sprayRating: "Optimal" },
      { day: "Fri", high: 27, low: 16, condition: "Rain Showers", rain: 75, sprayRating: "Rain Hazard" },
      { day: "Sat", high: 25, low: 14, condition: "Clear", rain: 10, sprayRating: "Optimal" },
      { day: "Sun", high: 27, low: 15, condition: "Sunny", rain: 5, sprayRating: "Optimal" }
    ]
  },
  {
    id: "sao-paulo-brazil",
    regionName: "São Paulo Agricultural Region, Brazil (Ribeirão Preto)",
    coordinates: { lat: -21.17, lon: -47.81 },
    current: {
      temp: 31,
      humidity: 78,
      windSpeed: 9,
      windDirection: "N",
      rainProb: 75,
      soilMoisture: 72,
      uvIndex: 9,
      condition: "Imminent Afternoon Rain",
      spraySafetyVerdict: "Danger",
      sprayReason: "HEAVY RAIN WARNING (75% probability within 2 hours). Spraying now will wash off fungicides before absorption."
    },
    hourly: [
      { hour: "06:00 AM", temp: 22, wind: 6, rain: 10, status: "optimal" },
      { hour: "08:00 AM", temp: 25, wind: 8, rain: 15, status: "optimal" },
      { hour: "10:00 AM", temp: 28, wind: 9, rain: 25, status: "caution" },
      { hour: "12:00 PM", temp: 31, wind: 11, rain: 55, status: "danger" },
      { hour: "02:00 PM", temp: 30, wind: 15, rain: 85, status: "danger" },
      { hour: "04:00 PM", temp: 27, wind: 12, rain: 60, status: "danger" },
      { hour: "06:00 PM", temp: 25, wind: 7, rain: 30, status: "caution" },
      { hour: "08:00 PM", temp: 23, wind: 5, rain: 15, status: "optimal" }
    ],
    forecast7Days: [
      { day: "Today", high: 31, low: 22, condition: "Heavy Rain", rain: 85, sprayRating: "Rain Hazard" },
      { day: "Tomorrow", high: 29, low: 21, condition: "Scattered Rain", rain: 60, sprayRating: "Caution" },
      { day: "Wed", high: 30, low: 21, condition: "Partly Cloudy", rain: 25, sprayRating: "Good" },
      { day: "Thu", high: 32, low: 22, condition: "Sunny", rain: 10, sprayRating: "Optimal" },
      { day: "Fri", high: 33, low: 23, condition: "Clear", rain: 5, sprayRating: "Optimal" },
      { day: "Sat", high: 31, low: 22, condition: "Showers", rain: 40, sprayRating: "Caution" },
      { day: "Sun", high: 30, low: 21, condition: "Sunny", rain: 15, sprayRating: "Optimal" }
    ]
  },
  {
    id: "mekong-vietnam",
    regionName: "Mekong Delta Paddy Belt, Vietnam (Cần Thơ)",
    coordinates: { lat: 10.045, lon: 105.746 },
    current: {
      temp: 30,
      humidity: 88,
      windSpeed: 7,
      windDirection: "SW",
      rainProb: 20,
      soilMoisture: 85,
      uvIndex: 8,
      condition: "Tropical Warm & Humid",
      spraySafetyVerdict: "Optimal",
      sprayReason: "Calm winds (7 km/h) and high humidity. Morning window is safe before afternoon heat builds."
    },
    hourly: [
      { hour: "06:00 AM", temp: 25, wind: 4, rain: 5, status: "optimal" },
      { hour: "08:00 AM", temp: 28, wind: 6, rain: 10, status: "optimal" },
      { hour: "10:00 AM", temp: 31, wind: 8, rain: 20, status: "optimal" },
      { hour: "12:00 PM", temp: 33, wind: 10, rain: 35, status: "caution" },
      { hour: "02:00 PM", temp: 32, wind: 12, rain: 50, status: "danger" },
      { hour: "04:00 PM", temp: 29, wind: 8, rain: 30, status: "caution" },
      { hour: "06:00 PM", temp: 27, wind: 5, rain: 15, status: "optimal" },
      { hour: "08:00 PM", temp: 26, wind: 4, rain: 10, status: "optimal" }
    ],
    forecast7Days: [
      { day: "Today", high: 33, low: 25, condition: "Humid & Showers", rain: 35, sprayRating: "Good" },
      { day: "Tomorrow", high: 32, low: 25, condition: "Afternoon Rain", rain: 65, sprayRating: "Caution" },
      { day: "Wed", high: 34, low: 26, condition: "Sunny", rain: 15, sprayRating: "Optimal" },
      { day: "Thu", high: 33, low: 25, condition: "Partly Cloudy", rain: 20, sprayRating: "Optimal" },
      { day: "Fri", high: 32, low: 25, condition: "Tropical Rain", rain: 70, sprayRating: "Rain Hazard" },
      { day: "Sat", high: 33, low: 25, condition: "Sunny", rain: 15, sprayRating: "Optimal" },
      { day: "Sun", high: 34, low: 26, condition: "Clear", rain: 10, sprayRating: "Optimal" }
    ]
  }
];
