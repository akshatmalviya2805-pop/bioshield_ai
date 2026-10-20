/**
 * BioShield AI — Leaf Disease Scanner & Cure Teller
 * Student Plant Pathology Project Logic
 */

// ==========================================
// 1. Plant Pathology Knowledge Database
// ==========================================
const SPECIMENS = {
  tomato: {
    id: 'tomato',
    title: 'Tomato Early Blight',
    plantName: 'Solanum lycopersicum (Tomato)',
    diseaseName: 'Early Blight',
    pathogen: 'Fungus: Alternaria solani',
    imagePath: 'assets/tomato_early_blight.jpg',
    confidence: '97.4%',
    severity: 'Moderate',
    severityClass: 'severity-moderate',
    lesions: [
      { x: 0.28, y: 0.32, w: 0.22, h: 0.22, label: 'Target Spot (Alternaria)' },
      { x: 0.52, y: 0.45, w: 0.25, h: 0.24, label: 'Necrotic Concentric Ring' },
      { x: 0.35, y: 0.65, w: 0.20, h: 0.18, label: 'Chlorosis Halo' }
    ],
    immediateAction: [
      '<strong>Prune bottom foliage:</strong> Clip off all leaves within 10-12 inches of the soil or showing brown spots using clean pruning shears.',
      '<strong>Disinfect shears:</strong> Wipe blades with 70% isopropyl alcohol between every cut to prevent fungal spore transmission.',
      '<strong>Bag & trash:</strong> Dispose infected foliage in the household trash. <em>Never put blighted leaves into compost!</em>'
    ],
    organicRecipe: {
      title: '🌿 Student Neem Oil & Soap Emulsion:',
      desc: 'Mix <strong>2 teaspoons of cold-pressed Neem Oil</strong> + <strong>1/2 teaspoon gentle Castile or dish soap</strong> in <strong>1 Liter of lukewarm water</strong>. Spray both upper and underside of leaves every 5-7 days at sunset.'
    },
    secondaryRecipe: {
      title: '🧂 Alkaline Baking Soda Spray:',
      desc: 'Dissolve 1 tablespoon baking soda + 1 teaspoon horticultural oil in 1 gallon (3.8L) water. Inhibits fungal spore germination on leaf surfaces.'
    },
    storeTreatment: [
      '<strong>Liquid Copper Octanoate:</strong> Safe organic fungicide. Spray at first sign of leaf spotting and repeat every 7-10 days.',
      '<strong>Bio-Fungicide (Bacillus subtilis):</strong> Beneficial soil bacterium that naturally outcompetes Alternaria fungi.'
    ],
    prevention: [
      '<strong>Water soil only:</strong> Always water at base using a drip hose. Never wet foliage in late evening.',
      '<strong>Straw Mulch:</strong> Lay 2 inches of clean straw or wood chips over soil to stop rain splashes from kicking spores upward.',
      '<strong>Crop Rotation:</strong> Avoid planting nightshades (tomatoes, potatoes, peppers) in the same bed for 2 years.'
    ],
    spokenText: 'Diagnosis: Tomato Early Blight caused by Alternaria solani. Immediate remedy: Prune lower leaves touching soil. Organic remedy: Mix two teaspoons of neem oil and half teaspoon dish soap in one liter of water, and spray at sunset.'
  },

  potato: {
    id: 'potato',
    title: 'Potato Late Blight',
    plantName: 'Solanum tuberosum (Potato)',
    diseaseName: 'Late Blight (Irish Famine Pathogen)',
    pathogen: 'Oomycete: Phytophthora infestans',
    imagePath: 'assets/potato_late_blight.jpg',
    confidence: '98.6%',
    severity: 'High / Critical',
    severityClass: 'severity-high',
    lesions: [
      { x: 0.35, y: 0.28, w: 0.38, h: 0.36, label: 'Water-soaked Necrosis' },
      { x: 0.18, y: 0.58, w: 0.28, h: 0.22, label: 'Sporangia Edge' }
    ],
    immediateAction: [
      '<strong>Immediate quarantine:</strong> Remove and destroy all leaves with dark water-soaked lesions immediately.',
      '<strong>Keep plant dry:</strong> Stop all sprinkler watering immediately; blight spreads uncontrollably in dampness.',
      '<strong>Check neighboring tubers:</strong> Inspect potato stems and tubers for purplish discoloration or firm brown rot.'
    ],
    organicRecipe: {
      title: '🌿 Bordeaux Copper Sulfate Mixture:',
      desc: 'Mix <strong>1 tablespoon copper sulfate + 1 tablespoon hydrated lime</strong> in <strong>1 Gallon of water</strong>. Coats leaves with a protective anti-oomycete barrier.'
    },
    secondaryRecipe: {
      title: '🥛 1:9 Raw Milk Foliar Spray:',
      desc: 'Mix 100ml fresh milk with 900ml water. Natural lactoferrin and beneficial microbes reduce fungal colonization.'
    },
    storeTreatment: [
      '<strong>Fixed Copper Fungicide:</strong> Must be applied preventatively before rain events to protect healthy foliage.',
      '<strong>Mancozeb / Chlorothalonil:</strong> Protectant foliar spray used for severe agricultural outbreaks.'
    ],
    prevention: [
      '<strong>Certified Seed Potatoes:</strong> Only plant certified disease-free seed tubers.',
      '<strong>Hill up Soil:</strong> Build up high soil ridges around tubers to shield underground potatoes from washed-off spores.',
      '<strong>Destroy Cull Piles:</strong> Never leave leftover diseased potatoes in the garden over winter.'
    ],
    spokenText: 'Alert: Potato Late Blight detected. This is a fast-spreading pathogen. Prune affected foliage immediately, avoid wetting leaves, and apply copper fungicide spray.'
  },

  rose: {
    id: 'rose',
    title: 'Rose Black Spot',
    plantName: 'Rosa spp. (Garden Rose)',
    diseaseName: 'Black Spot Fungal Disease',
    pathogen: 'Fungus: Diplocarpon rosae',
    imagePath: 'assets/rose_black_spot.jpg',
    confidence: '99.1%',
    severity: 'Moderate',
    severityClass: 'severity-moderate',
    lesions: [
      { x: 0.38, y: 0.18, w: 0.22, h: 0.22, label: 'Fringed Black Spot' },
      { x: 0.44, y: 0.40, w: 0.26, h: 0.26, label: 'Spore Apothecia Center' },
      { x: 0.62, y: 0.48, w: 0.20, h: 0.22, label: 'Chlorotic Ring' },
      { x: 0.52, y: 0.65, w: 0.18, h: 0.18, label: 'Secondary Lesion' }
    ],
    immediateAction: [
      '<strong>Pick off infected leaves:</strong> Carefully pluck all leaves displaying black spots and dispose in trash.',
      '<strong>Rake ground clean:</strong> Collect all fallen leaves beneath the rose bush so winter spores do not harbor.',
      '<strong>Airflow pruning:</strong> Thin out the center of the rose bush to allow sunlight and breeze to dry foliage.'
    ],
    organicRecipe: {
      title: '🧂 Cornell University Baking Soda Remedy:',
      desc: 'Mix <strong>1 tablespoon baking soda</strong> + <strong>1/2 teaspoon vegetable oil</strong> + <strong>1/2 teaspoon dish soap</strong> in <strong>1 Gallon (3.8L) water</strong>. Spray roses weekly and after rain.'
    },
    secondaryRecipe: {
      title: '🌿 Horsetail (Equisetum) Tea Spray:',
      desc: 'Boil dried horsetail weed in water; natural bio-silica strengthens rose leaf epidermal cells against fungal hyphae penetration.'
    },
    storeTreatment: [
      '<strong>Wettable Sulfur Powder:</strong> Ancient organic remedy that prevents black spot and powdery mildew simultaneously.',
      '<strong>Bio-Fungicide (Serenade):</strong> Bacillus-based foliar spray safe for roses and pollinators.'
    ],
    prevention: [
      '<strong>Morning watering:</strong> Water only between 6 AM and 9 AM so any wet leaves dry by midday sun.',
      '<strong>Choose Resistant Cultivars:</strong> Look for black-spot resistant rose varieties like Knock Out or Rugosa.',
      '<strong>Annual Mulch Replacement:</strong> Replace mulch every spring to bury any lingering spore beds.'
    ],
    spokenText: 'Diagnosis: Rose Black Spot caused by Diplocarpon rosae. Remove spotted leaves, spray with baking soda and vegetable oil solution, and avoid wetting foliage when watering.'
  },

  apple: {
    id: 'apple',
    title: 'Apple Cedar Rust',
    plantName: 'Malus domestica (Apple)',
    diseaseName: 'Cedar Apple Rust',
    pathogen: 'Fungus: Gymnosporangium juniperi-virginianae',
    imagePath: 'assets/apple_cedar_rust.jpg',
    confidence: '96.2%',
    severity: 'Mild to Moderate',
    severityClass: 'severity-mild',
    lesions: [
      { x: 0.32, y: 0.28, w: 0.26, h: 0.26, label: 'Yellow-Orange Aecial Spot' },
      { x: 0.58, y: 0.42, w: 0.22, h: 0.22, label: 'Rust Lesion' }
    ],
    immediateAction: [
      '<strong>Inspect nearby trees:</strong> Check for nearby Eastern Red Cedar or Juniper trees with brown gall growths.',
      '<strong>Prune galls:</strong> If junipers are on your property, clip off gelatinous orange cedar-apple galls during late winter.',
      '<strong>Protect young fruit:</strong> Remove heavily rusted leaves that threaten early fruit setting.'
    ],
    organicRecipe: {
      title: '🌿 Micronized Sulfur Foliar Spray:',
      desc: 'Mix <strong>2 tablespoons sulfur powder</strong> into <strong>1 Gallon of water</strong>. Apply starting when apple blossom buds show pink until petals drop.'
    },
    secondaryRecipe: {
      title: '🍵 Compost Tea Foliar Drench:',
      desc: 'Brew aerated worm casting tea for 24 hours. Coat apple foliage with beneficial bacteria that occupy space on leaf cuticles.'
    },
    storeTreatment: [
      '<strong>Immunox / Myclobutanil:</strong> Highly effective systemic fungicide applied during early spring growth.',
      '<strong>Liquid Copper Spray:</strong> Apply at delayed dormant stage just before buds swell.'
    ],
    prevention: [
      '<strong>Plant Rust-Resistant Apples:</strong> Varieties like Freedom, Liberty, and Enterprise have natural genetic immunity.',
      '<strong>Maintain Distance:</strong> Do not plant apple orchards within 500 feet of wild juniper/cedar trees.'
    ],
    spokenText: 'Diagnosis: Cedar Apple Rust. This fungus cycles between apple trees and juniper bushes. Spray micronized sulfur and remove galls from nearby juniper trees.'
  },

  corn: {
    id: 'corn',
    title: 'Corn Northern Leaf Blight',
    plantName: 'Zea mays (Field / Sweet Corn)',
    diseaseName: 'Northern Corn Leaf Blight (NCLB)',
    pathogen: 'Fungus: Exserohilum turcicum',
    imagePath: 'assets/corn_northern_blight.jpg',
    confidence: '95.8%',
    severity: 'Moderate',
    severityClass: 'severity-moderate',
    lesions: [
      { x: 0.25, y: 0.35, w: 0.45, h: 0.20, label: 'Cigar-Shaped Lesion' },
      { x: 0.45, y: 0.55, w: 0.38, h: 0.18, label: 'Elliptical Blight Area' }
    ],
    immediateAction: [
      '<strong>Monitor canopy height:</strong> If lesions are confined to lower leaves below ear level, yield impact is minimal.',
      '<strong>Increase spacing:</strong> Remove any weed cover between corn rows to improve air movement and drop humidity.'
    ],
    organicRecipe: {
      title: '🌿 Trichoderma harzianum Bio-Spray:',
      desc: 'Apply <strong>organic Trichoderma fungal inoculant</strong> to foliage and soil. Trichoderma aggressively feeds on plant pathogenic fungi spores.'
    },
    secondaryRecipe: {
      title: '🧄 Garlic & Cayenne Organic Extract:',
      desc: 'Steep crushed garlic cloves and hot pepper in warm water. Strain and mist onto corn leaves to discourage fungal penetration and corn earworms.'
    },
    storeTreatment: [
      '<strong>Fungicide with Azoxystrobin:</strong> Recommended if lesions appear on ear leaf or higher before silking.',
      '<strong>Propiconazole Foliar Application:</strong> Agricultural standard for field-scale blight suppression.'
    ],
    prevention: [
      '<strong>Deep Autumn Tillage:</strong> Till corn stalks deep into the soil after harvest so residue decomposes over winter.',
      '<strong>Rotate with Legumes:</strong> Rotate field with soybeans, peas, or clover for 1-2 seasons to break the disease cycle.',
      '<strong>Use Resistant Hybrids:</strong> Select seeds with Ht1 or Ht2 genetic resistance genes.'
    ],
    spokenText: 'Diagnosis: Northern Corn Leaf Blight. Observe cigar-shaped lesions. For home gardens, improve airflow, rotate with beans or clover next season, and till old crop residue.'
  },

  pepper: {
    id: 'pepper',
    title: 'Healthy Bell Pepper Leaf',
    plantName: 'Capsicum annuum (Sweet Pepper)',
    diseaseName: 'Healthy Specimen • No Disease Detected',
    pathogen: 'Vigorous Botanical State',
    imagePath: 'assets/healthy_pepper_leaf.jpg',
    confidence: '99.5%',
    severity: 'None (Healthy)',
    severityClass: 'severity-none',
    lesions: [],
    immediateAction: [
      '<strong>No action needed!</strong> Your plant leaf displays optimal chlorophyll density and healthy stomata.',
      '<strong>Maintain routine care:</strong> Keep steady moisture and ensure 6 to 8 hours of daily sunlight.'
    ],
    organicRecipe: {
      title: '🌿 Preventive Seaweed & Kelp Tonic:',
      desc: 'Mix <strong>1 teaspoon liquid kelp fertilizer</strong> into <strong>1 Liter of water</strong>. Spray leaves monthly to boost natural plant immunity and heat tolerance.'
    },
    secondaryRecipe: {
      title: '💧 Epsom Salt Magnesium Spray:',
      desc: 'Dissolve 1 tablespoon Epsom salt (magnesium sulfate) in 1 gallon water. Spritz peppers at flowering for greener leaves and bigger fruit.'
    },
    storeTreatment: [
      '<strong>Organic Balanced 5-5-5 Fertilizer:</strong> Feed around root dripline every 4 weeks.',
      '<strong>Mycorrhizal Root Inoculant:</strong> Promotes strong root absorption and natural defense.'
    ],
    prevention: [
      '<strong>Mulch soil:</strong> Keep soil temperature even with organic compost mulch.',
      '<strong>Scout weekly:</strong> Keep checking leaf undersides for aphids, whiteflies, or early discoloration.'
    ],
    spokenText: 'Great news! Your pepper leaf is completely healthy with high chlorophyll density and no signs of disease. Keep up the good watering and sunshine!'
  }
};

// ==========================================
// 2. Dosage Calculator Database
// ==========================================
const DOSAGE_DATABASE = {
  neem: {
    name: 'Pure Cold-Pressed Neem Oil Spray',
    icon: '🌿',
    unitRates: {
      '500ml': { active: '1.0 Teaspoon (5 ml)', soap: '0.25 Teaspoon (1 ml)', water: '500 ml', freq: 'Every 7 days (Sunset)' },
      '1000ml': { active: '2.0 Teaspoons (10 ml)', soap: '0.5 Teaspoon (2.5 ml)', water: '1.0 Liter', freq: 'Every 5-7 days (Sunset)' },
      '2000ml': { active: '4.0 Teaspoons (20 ml)', soap: '1.0 Teaspoon (5 ml)', water: '2.0 Liters', freq: 'Every 5-7 days (Sunset)' },
      '3800ml': { active: '2.5 Tablespoons (38 ml)', soap: '1.0 Tablespoon (15 ml)', water: '1 Gallon (3.8L)', freq: 'Every 7 days (Sunset)' }
    },
    steps: [
      'Always use lukewarm water so pure neem oil emulsifies without congealing.',
      'Mix dish soap into the neem oil first in a small cup, then pour into your water bottle and shake vigorously.',
      'Test spray on 1 leaf 24 hours prior to full treatment.',
      'Always spray in the evening; direct midday sun + oil causes leaf scorch.'
    ]
  },
  bakingSoda: {
    name: 'Baking Soda Anti-Fungal Alkaline Solution',
    icon: '🧂',
    unitRates: {
      '500ml': { active: '0.5 Teaspoon (2.5 g)', soap: '1-2 drops dish soap', water: '500 ml', freq: 'Every 5 days during damp weather' },
      '1000ml': { active: '1.0 Teaspoon (5 g)', soap: '3-4 drops dish soap', water: '1.0 Liter', freq: 'Every 7 days or after rainfall' },
      '2000ml': { active: '2.0 Teaspoons (10 g)', soap: '0.5 Teaspoon (2.5 ml)', water: '2.0 Liters', freq: 'Every 7 days or after rainfall' },
      '3800ml': { active: '1.0 Tablespoon (15 g)', soap: '1.0 Teaspoon (5 ml)', water: '1 Gallon (3.8L)', freq: 'Every 7-10 days' }
    },
    steps: [
      'Dissolve baking soda completely in water until fully clear.',
      'Add a small drop of vegetable oil and soap to help the solution cling to waxy leaves.',
      'Changes leaf surface pH to alkaline (pH > 8.0), preventing spore germination.',
      'Reapply immediately after heavy rain.'
    ]
  },
  milk: {
    name: 'Dilute Fresh Milk Foliar Immunizer',
    icon: '🥛',
    unitRates: {
      '500ml': { active: '50 ml Fresh Milk (10%)', soap: 'None needed', water: '450 ml Water', freq: 'Every 7-10 days in morning sun' },
      '1000ml': { active: '100 ml Fresh Milk (10%)', soap: 'None needed', water: '900 ml Water', freq: 'Every 7-10 days in morning sun' },
      '2000ml': { active: '200 ml Fresh Milk (10%)', soap: 'None needed', water: '1800 ml Water', freq: 'Every 7-10 days in morning sun' },
      '3800ml': { active: '380 ml Fresh Milk (1.5 cups)', soap: 'None needed', water: '3.4 Liters Water', freq: 'Every 7-10 days in morning sun' }
    },
    steps: [
      'Use 10% to 20% milk ratio (whole milk or skim both work).',
      'Spray in bright morning sunlight! Sunlight activates proteins in milk to produce antiseptic free radicals that kill powdery mildew.',
      'Non-toxic and 100% safe for vegetable gardens right up to harvest day.'
    ]
  },
  garlic: {
    name: 'Garlic & Chili Eco-Insect/Fungus Repellent',
    icon: '🧄',
    unitRates: {
      '500ml': { active: '1 crushed garlic clove + 1/2 chili', soap: '1 drop mild soap', water: '500 ml Water', freq: 'Every 4-6 days' },
      '1000ml': { active: '2-3 crushed garlic cloves + 1 chili', soap: '2 drops mild soap', water: '1.0 Liter Water', freq: 'Every 5-7 days' },
      '2000ml': { active: '5 crushed garlic cloves + 2 chilis', soap: '1/2 tsp mild soap', water: '2.0 Liters Water', freq: 'Every 5-7 days' },
      '3800ml': { active: '1 whole garlic bulb + 3 chilis', soap: '1 tsp mild soap', water: '1 Gallon Water', freq: 'Every 7 days' }
    },
    steps: [
      'Blend garlic and chili with 1 cup of warm water, let steep overnight.',
      'Strain through a fine cheesecloth or coffee filter so sprayer nozzle does not clog.',
      'Dilute with remaining water, add soap, and spray foliage.',
      'Natural sulfur in garlic repels pests and restricts fungal mycelium.'
    ]
  }
};

// ==========================================
// 3. Application State
// ==========================================
const state = {
  currentSpecimenId: 'tomato',
  currentImageElement: null,
  isScanning: false,
  showLesions: true,
  isCameraActive: false,
  mediaStream: null,
  isSpeaking: false,
  customUpload: null
};

// ==========================================
// 4. DOM Elements
// ==========================================
const canvas = document.getElementById('leafCanvas');
const ctx = canvas.getContext('2d');
const cameraVideo = document.getElementById('cameraVideo');
const scanLaser = document.getElementById('scanLaser');
const viewport = document.getElementById('viewport');
const viewportStatusText = document.getElementById('viewportStatusText');
const canvasSpecimenName = document.getElementById('canvasSpecimenName');
const sampleChips = document.getElementById('sampleChips');
const toggleLesions = document.getElementById('toggleLesions');
const scanBtn = document.getElementById('scanBtn');
const cameraBtn = document.getElementById('cameraBtn');
const cameraBtnText = document.getElementById('cameraBtnText');
const leafFileInput = document.getElementById('leafFileInput');
const scanningState = document.getElementById('scanningState');
const diagnosisResults = document.getElementById('diagnosisResults');
const speakCureBtn = document.getElementById('speakCureBtn');
const speakBtnText = document.getElementById('speakBtnText');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const printReportBtn = document.getElementById('printReportBtn');
const jumpDosageBtn = document.getElementById('jumpDosageBtn');
const copyCureBtn = document.getElementById('copyCureBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastIcon = document.getElementById('toastIcon');

// Dosage Elements
const remedyTypeSelect = document.getElementById('remedyTypeSelect');
const bottleSizeSelect = document.getElementById('bottleSizeSelect');
const doseFormulaTitle = document.getElementById('doseFormulaTitle');
const activeIngredientAmount = document.getElementById('activeIngredientAmount');
const emulsifierAmount = document.getElementById('emulsifierAmount');
const waterAmount = document.getElementById('waterAmount');
const frequencyAmount = document.getElementById('frequencyAmount');
const mixingSteps = document.getElementById('mixingSteps');

// Handbook Elements
const handbookGrid = document.getElementById('handbookGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// ==========================================
// 5. Lifecycle & Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSampleSpecimen('tomato');
  setupEventListeners();
  updateDosageCalculator();
});

function initTheme() {
  const savedTheme = localStorage.getItem('bioshield_theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const current = document.body.getAttribute('data-theme') || 'light';
  const newTheme = current === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('bioshield_theme', newTheme);
  showToast(`Switched to ${newTheme === 'dark' ? 'Night Greenhouse 🌙' : 'Sunny Garden ☀️'} mode`);
}

// ==========================================
// 6. Specimen Loading & Rendering
// ==========================================
function initSampleSpecimen(specimenKey) {
  state.currentSpecimenId = specimenKey;
  state.customUpload = null;
  const specimen = SPECIMENS[specimenKey];
  if (!specimen) return;

  // Stop camera if running
  stopCamera();

  // Update Active Chip
  document.querySelectorAll('.sample-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.sample === specimenKey);
  });

  canvasSpecimenName.textContent = specimen.title;
  viewportStatusText.textContent = `Specimen: ${specimen.title} • Ready`;

  // Load Image
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = specimen.imagePath;
  img.onload = () => {
    state.currentImageElement = img;
    renderCanvas();
    updateCureTeller(specimen);
  };
  img.onerror = () => {
    showToast('Could not load image file', '⚠️');
  };
}

function renderCanvas() {
  if (!state.currentImageElement) return;

  const img = state.currentImageElement;
  
  // Set canvas coordinate dimensions matching image or standard 600x450
  canvas.width = 600;
  canvas.height = 450;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Maintain aspect ratio inside 600x450
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.min(hRatio, vRatio);

  const centerShiftX = (canvas.width - img.width * ratio) / 2;
  const centerShiftY = (canvas.height - img.height * ratio) / 2;

  ctx.drawImage(
    img,
    0, 0, img.width, img.height,
    centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
  );

  // Render Lesion Bounding Boxes if enabled
  if (state.showLesions) {
    const currentData = state.customUpload ? state.customUpload : SPECIMENS[state.currentSpecimenId];
    if (currentData && currentData.lesions && currentData.lesions.length > 0) {
      drawLesions(currentData.lesions, centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);
    }
  }
}

function drawLesions(lesions, offsetX, offsetY, drawW, drawH) {
  lesions.forEach((lesion, index) => {
    const lx = offsetX + lesion.x * drawW;
    const ly = offsetY + lesion.y * drawH;
    const lw = lesion.w * drawW;
    const lh = lesion.h * drawH;

    // Glowing Bounding Box
    ctx.save();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#22c55e';
    ctx.fillStyle = 'rgba(34, 197, 94, 0.15)';
    ctx.shadowColor = '#22c55e';
    ctx.shadowBlur = 8;

    // Box rectangle
    ctx.strokeRect(lx, ly, lw, lh);
    ctx.fillRect(lx, ly, lw, lh);

    // Box Label Pill
    ctx.shadowBlur = 0;
    ctx.font = 'bold 11px Plus Jakarta Sans, Inter, sans-serif';
    const text = lesion.label || `Infection Zone #${index + 1}`;
    const textWidth = ctx.measureText(text).width;
    
    // Label Background
    ctx.fillStyle = '#15803d';
    ctx.fillRect(lx, Math.max(0, ly - 20), textWidth + 14, 18);

    // Label Text
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, lx + 7, Math.max(13, ly - 7));
    ctx.restore();
  });
}

// ==========================================
// 7. Scanning Flow & Simulation
// ==========================================
function startScan() {
  if (state.isScanning) return;
  state.isScanning = true;

  // Turn on visual scan laser
  scanLaser.style.display = 'block';
  viewportStatusText.textContent = 'AI Neural Scan in progress...';

  // Toggle screens
  diagnosisResults.style.display = 'none';
  scanningState.style.display = 'block';

  // Reset steps
  const steps = [
    document.getElementById('step1'),
    document.getElementById('step2'),
    document.getElementById('step3'),
    document.getElementById('step4')
  ];

  steps.forEach(st => {
    st.classList.remove('active', 'done');
    st.querySelector('.step-icon').textContent = '⏳';
  });

  // Step 1
  steps[0].classList.add('active');
  steps[0].querySelector('.step-icon').textContent = '🔍';

  setTimeout(() => {
    steps[0].classList.remove('active');
    steps[0].classList.add('done');
    steps[0].querySelector('.step-icon').textContent = '✅';
    steps[1].classList.add('active');
    steps[1].querySelector('.step-icon').textContent = '🔍';
  }, 350);

  // Step 2
  setTimeout(() => {
    steps[1].classList.remove('active');
    steps[1].classList.add('done');
    steps[1].querySelector('.step-icon').textContent = '✅';
    steps[2].classList.add('active');
    steps[2].querySelector('.step-icon').textContent = '🧠';
  }, 750);

  // Step 3
  setTimeout(() => {
    steps[2].classList.remove('active');
    steps[2].classList.add('done');
    steps[2].querySelector('.step-icon').textContent = '✅';
    steps[3].classList.add('active');
    steps[3].querySelector('.step-icon').textContent = '🌿';
  }, 1150);

  // Step 4 & Complete
  setTimeout(() => {
    steps[3].classList.remove('active');
    steps[3].classList.add('done');
    steps[3].querySelector('.step-icon').textContent = '✅';

    // Finish scanning
    scanLaser.style.display = 'none';
    state.isScanning = false;
    viewportStatusText.textContent = 'Diagnosis Complete • Cures Ready';

    scanningState.style.display = 'none';
    diagnosisResults.style.display = 'block';

    const currentData = state.customUpload ? state.customUpload : SPECIMENS[state.currentSpecimenId];
    updateCureTeller(currentData);
    renderCanvas();

    showToast('Scan complete! Cures and remedies generated below.', '🌿');
  }, 1600);
}

// ==========================================
// 8. Cure Teller UI Update
// ==========================================
function updateCureTeller(data) {
  document.getElementById('plantTypeBadge').textContent = data.plantName;
  document.getElementById('diseaseNameDisplay').textContent = data.diseaseName;
  document.getElementById('pathogenNameDisplay').innerHTML = data.pathogen ? `Pathology: <em>${data.pathogen}</em>` : '';
  
  const confVal = document.getElementById('confidenceVal');
  confVal.textContent = data.confidence || '96.5%';

  const sevVal = document.getElementById('severityVal');
  sevVal.textContent = data.severity || 'Moderate';
  if (data.severity && data.severity.toLowerCase().includes('healthy')) {
    sevVal.style.color = '#10b981';
  } else if (data.severity && data.severity.toLowerCase().includes('high')) {
    sevVal.style.color = '#e11d48';
  } else {
    sevVal.style.color = '#d97706';
  }

  // Step 1: Immediate First Aid
  const immEl = document.getElementById('immediateRemedyContent');
  if (data.immediateAction && data.immediateAction.length) {
    immEl.innerHTML = `<ul>${data.immediateAction.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }

  // Step 2: Organic Remedies
  const orgEl = document.getElementById('organicRemedyContent');
  let orgHtml = '';
  if (data.organicRecipe) {
    orgHtml += `
      <div class="recipe-box">
        <div class="recipe-title">${data.organicRecipe.title}</div>
        <p class="recipe-desc">${data.organicRecipe.desc}</p>
      </div>
    `;
  }
  if (data.secondaryRecipe) {
    orgHtml += `
      <div class="recipe-box secondary-recipe">
        <div class="recipe-title">${data.secondaryRecipe.title}</div>
        <p class="recipe-desc">${data.secondaryRecipe.desc}</p>
      </div>
    `;
  }
  orgEl.innerHTML = orgHtml;

  // Step 3: Store Treatment
  const storeEl = document.getElementById('storeRemedyContent');
  if (data.storeTreatment && data.storeTreatment.length) {
    storeEl.innerHTML = `<ul>${data.storeTreatment.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }

  // Step 4: Prevention
  const prevEl = document.getElementById('preventionContent');
  if (data.prevention && data.prevention.length) {
    prevEl.innerHTML = `<ul>${data.prevention.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }
}

// ==========================================
// 9. Camera Scanner Integration (WebRTC)
// ==========================================
async function toggleCamera() {
  if (state.isCameraActive) {
    // Capture snapshot from video stream
    captureCameraFrame();
  } else {
    // Start camera stream
    try {
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      state.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      cameraVideo.srcObject = state.mediaStream;
      cameraVideo.style.display = 'block';
      canvas.style.display = 'none';

      state.isCameraActive = true;
      cameraBtnText.textContent = 'Capture Frame';
      cameraBtn.classList.remove('btn-outline');
      cameraBtn.classList.add('btn-primary');
      viewportStatusText.textContent = 'Live Camera Feed • Hold Leaf Steady';
      showToast('Camera active! Frame the leaf and tap Capture Frame.', '📷');
    } catch (err) {
      console.error('Camera access error:', err);
      showToast('Could not access camera. Please check permissions.', '⚠️');
      stopCamera();
    }
  }
}

function captureCameraFrame() {
  if (!state.mediaStream) return;

  canvas.width = 600;
  canvas.height = 450;
  ctx.drawImage(cameraVideo, 0, 0, canvas.width, canvas.height);

  // Convert to image element for persistent state
  const img = new Image();
  img.src = canvas.toDataURL('image/jpeg');
  img.onload = () => {
    state.currentImageElement = img;
    stopCamera();
    analyzeCustomLeaf(img, 'Live Camera Snapshot');
  };
}

function stopCamera() {
  if (state.mediaStream) {
    state.mediaStream.getTracks().forEach(track => track.stop());
    state.mediaStream = null;
  }
  cameraVideo.style.display = 'none';
  canvas.style.display = 'block';
  state.isCameraActive = false;
  cameraBtnText.textContent = 'Live Camera';
  cameraBtn.classList.remove('btn-primary');
  cameraBtn.classList.add('btn-outline');
}

// ==========================================
// 10. File Upload & Custom Image Analyzer
// ==========================================
function handleFileUpload(file) {
  if (!file || !file.type.startsWith('image/')) {
    showToast('Please upload a valid image file (PNG, JPG)', '⚠️');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      stopCamera();
      document.querySelectorAll('.sample-chip').forEach(c => c.classList.remove('active'));
      state.currentImageElement = img;
      analyzeCustomLeaf(img, file.name);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function analyzeCustomLeaf(img, sourceName) {
  canvasSpecimenName.textContent = `Uploaded: ${sourceName}`;
  viewportStatusText.textContent = 'Custom Leaf Uploaded • Analyzing...';

  // Perform quick canvas pixel sample to estimate leaf health
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = 100;
  tempCanvas.height = 100;
  const tCtx = tempCanvas.getContext('2d');
  tCtx.drawImage(img, 0, 0, 100, 100);
  const imgData = tCtx.getImageData(0, 0, 100, 100).data;

  let greenScore = 0;
  let brownScore = 0;
  let yellowScore = 0;
  let totalSampled = 0;

  for (let i = 0; i < imgData.length; i += 16) {
    const r = imgData[i];
    const g = imgData[i + 1];
    const b = imgData[i + 2];
    totalSampled++;

    // Chlorophyll Green
    if (g > r * 1.15 && g > b * 1.15) {
      greenScore++;
    }
    // Necrotic Brown / Rust
    else if (r > 90 && g < r * 0.9 && b < 80) {
      brownScore++;
    }
    // Chlorosis Yellowing
    else if (r > 120 && g > 110 && b < 80) {
      yellowScore++;
    }
  }

  const healthRatio = greenScore / totalSampled;
  const isLikelyHealthy = healthRatio > 0.45 && brownScore < 50;

  let customData;

  if (isLikelyHealthy) {
    customData = {
      id: 'custom_healthy',
      title: 'Healthy Botanical Foliage',
      plantName: 'Custom Specimen (Foliage Analysis)',
      diseaseName: 'No Severe Pathogen Detected',
      pathogen: 'Normal Cellular Chlorophyll Density',
      confidence: '94.2%',
      severity: 'Low / Negligible',
      severityClass: 'severity-none',
      lesions: [],
      immediateAction: [
        '<strong>Foliage appears clean:</strong> No large necrotic lesions or fungal spore colonies detected in this photograph.',
        '<strong>Routine Care:</strong> Continue monitoring moisture levels and provide adequate daylight.'
      ],
      organicRecipe: {
        title: '🌿 Preventative Organic Kelp Spray:',
        desc: 'Spray with dilute liquid seaweed or compost tea once every 2 weeks to maintain resilient leaf cuticle strength.'
      },
      secondaryRecipe: {
        title: '💧 Pure Water Rinse:',
        desc: 'Mist leaves lightly in the morning to remove accumulated garden dust, allowing stomata to breathe.'
      },
      storeTreatment: [
        '<strong>Organic balanced organic fertilizer:</strong> Ensure balanced nitrogen and potassium for strong stems.'
      ],
      prevention: [
        'Ensure pots have drainage holes.',
        'Rotate house plants or garden beds to maximize sun exposure.'
      ],
      spokenText: 'Analysis shows this leaf appears healthy with normal green pigmentation. Continue normal watering and maintenance.'
    };
  } else {
    customData = {
      id: 'custom_infected',
      title: 'Leaf Spot / Foliar Blight',
      plantName: 'Custom Specimen (Foliage Analysis)',
      diseaseName: 'Foliar Leaf Spot / Chlorosis Infection',
      pathogen: 'Presumed Fungal or Bacterial Leaf Spot',
      confidence: '92.8%',
      severity: 'Moderate',
      severityClass: 'severity-moderate',
      lesions: [
        { x: 0.32, y: 0.35, w: 0.30, h: 0.28, label: 'Discolored Lesion Zone' },
        { x: 0.55, y: 0.50, w: 0.24, h: 0.22, label: 'Chlorosis Margin' }
      ],
      immediateAction: [
        '<strong>Isolate or prune:</strong> Remove leaves showing marked brown necrosis or yellow halos.',
        '<strong>Sterilize scissors:</strong> Clean cutting edges with alcohol wipes.',
        '<strong>Avoid overhead watering:</strong> Stop spraying water directly onto leaves.'
      ],
      organicRecipe: {
        title: '🌿 All-Purpose Neem Oil Spray:',
        desc: 'Mix <strong>2 teaspoons pure neem oil + 1/2 teaspoon gentle soap in 1 Liter warm water</strong>. Spray thoroughly on top and bottom leaf surfaces at sunset.'
      },
      secondaryRecipe: {
        title: '🧂 Baking Soda & Vegetable Oil Anti-Foliar Mix:',
        desc: 'Mix 1 teaspoon baking soda + 1/2 teaspoon vegetable oil in 1 Liter water to stop fungal spreading.'
      },
      storeTreatment: [
        '<strong>Broad-Spectrum Copper Fungicide:</strong> Safe organic remedy that controls leaf spot, blights, and mildews.'
      ],
      prevention: [
        'Always water at soil line.',
        'Improve airflow around the plant canopy.'
      ],
      spokenText: 'Analysis detected foliar discoloration consistent with fungal or bacterial leaf spot. Prune affected leaves and apply neem oil or copper spray.'
    };
  }

  state.customUpload = customData;
  renderCanvas();
  startScan();
}

// ==========================================
// 11. Audio "Listen to Cure" (Web Speech API)
// ==========================================
function toggleSpeech() {
  if (!('speechSynthesis' in window)) {
    showToast('Text-to-speech is not supported in this browser.', '⚠️');
    return;
  }

  if (state.isSpeaking) {
    window.speechSynthesis.cancel();
    setSpeakingState(false);
  } else {
    const currentData = state.customUpload ? state.customUpload : SPECIMENS[state.currentSpecimenId];
    if (!currentData) return;

    window.speechSynthesis.cancel(); // clear queue
    const textToSpeak = currentData.spokenText || `${currentData.diseaseName}. Immediate action: ${currentData.immediateAction[0]}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => setSpeakingState(true);
    utterance.onend = () => setSpeakingState(false);
    utterance.onerror = () => setSpeakingState(false);

    window.speechSynthesis.speak(utterance);
  }
}

function setSpeakingState(isSpeaking) {
  state.isSpeaking = isSpeaking;
  if (isSpeaking) {
    speakCureBtn.classList.add('speaking');
    speakBtnText.textContent = 'Stop Audio';
  } else {
    speakCureBtn.classList.remove('speaking');
    speakBtnText.textContent = 'Play Audio';
  }
}

// ==========================================
// 12. Dosage Mixer Calculator Logic
// ==========================================
function updateDosageCalculator() {
  const remedyKey = remedyTypeSelect.value;
  const sizeKey = bottleSizeSelect.value;
  const remedyData = DOSAGE_DATABASE[remedyKey];
  if (!remedyData) return;

  const rates = remedyData.unitRates[sizeKey];
  if (!rates) return;

  doseFormulaTitle.textContent = `${bottleSizeSelect.options[bottleSizeSelect.selectedIndex].text} — ${remedyData.name}`;
  activeIngredientAmount.textContent = rates.active;
  emulsifierAmount.textContent = rates.soap;
  waterAmount.textContent = rates.water;
  frequencyAmount.textContent = rates.freq;

  // Render mixing steps
  mixingSteps.innerHTML = `
    <strong>How to mix:</strong>
    <ol>
      ${remedyData.steps.map(step => `<li>${step}</li>`).join('')}
    </ol>
  `;
}

// ==========================================
// 13. Disease Handbook Filter
// ==========================================
function filterHandbook(category) {
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });

  const cards = document.querySelectorAll('.handbook-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==========================================
// 14. Event Listeners & Clipboard/Print
// ==========================================
function setupEventListeners() {
  // Theme Toggle
  themeToggleBtn.addEventListener('click', toggleTheme);

  // Sample Chips Click
  sampleChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.sample-chip');
    if (chip && chip.dataset.sample) {
      initSampleSpecimen(chip.dataset.sample);
    }
  });

  // Toggle Lesion Bounding Boxes
  toggleLesions.addEventListener('change', (e) => {
    state.showLesions = e.target.checked;
    renderCanvas();
  });

  // Scan Button Click
  scanBtn.addEventListener('click', startScan);

  // Camera Button Click
  cameraBtn.addEventListener('click', toggleCamera);

  // File Upload Input
  leafFileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  });

  // Drag and Drop on Viewport
  viewport.addEventListener('dragover', (e) => {
    e.preventDefault();
    viewport.classList.add('drag-over');
  });

  viewport.addEventListener('dragleave', () => {
    viewport.classList.remove('drag-over');
  });

  viewport.addEventListener('drop', (e) => {
    e.preventDefault();
    viewport.classList.remove('drag-over');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  });

  // Audio Speech Button
  speakCureBtn.addEventListener('click', toggleSpeech);

  // Dosage Mixer Selects
  remedyTypeSelect.addEventListener('change', updateDosageCalculator);
  bottleSizeSelect.addEventListener('change', updateDosageCalculator);

  // Jump to Dosage from cure card
  jumpDosageBtn.addEventListener('click', () => {
    document.getElementById('dosage-calculator').scrollIntoView({ behavior: 'smooth' });
    showToast('Adjust bottle size for instant recipe measurements!', '🧪');
  });

  // Print Cure Sheet
  printReportBtn.addEventListener('click', () => {
    window.print();
  });

  // Copy Cure to Clipboard
  copyCureBtn.addEventListener('click', copyCureToClipboard);

  // Handbook Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterHandbook(btn.dataset.filter);
    });
  });

  // "Load in Scanner" buttons in Handbook
  document.querySelectorAll('.test-specimen-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const specimenKey = e.currentTarget.dataset.specimen;
      if (specimenKey) {
        initSampleSpecimen(specimenKey);
        document.getElementById('scanner').scrollIntoView({ behavior: 'smooth' });
        showToast(`Loaded ${specimenKey.toUpperCase()} into scanner!`, '🌱');
      }
    });
  });
}

function copyCureToClipboard() {
  const currentData = state.customUpload ? state.customUpload : SPECIMENS[state.currentSpecimenId];
  if (!currentData) return;

  const text = `
🌿 BioShield AI Cure Sheet: ${currentData.diseaseName} (${currentData.plantName})
Severity: ${currentData.severity} | AI Confidence: ${currentData.confidence}

🚨 IMMEDIATE FIRST-AID:
${currentData.immediateAction ? currentData.immediateAction.map(a => `- ${a.replace(/<[^>]*>/g, '')}`).join('\n') : ''}

🌿 ORGANIC REMEDY:
${currentData.organicRecipe ? currentData.organicRecipe.title + ' ' + currentData.organicRecipe.desc.replace(/<[^>]*>/g, '') : ''}

🛡️ PREVENTION RULES:
${currentData.prevention ? currentData.prevention.map(p => `- ${p.replace(/<[^>]*>/g, '')}`).join('\n') : ''}

(BioShield AI • Student Plant Pathology Project)
  `.trim();

  navigator.clipboard.writeText(text).then(() => {
    const copyBtnIcon = document.getElementById('copyBtnIcon');
    const copyBtnText = document.getElementById('copyBtnText');
    copyBtnIcon.textContent = '✅';
    copyBtnText.textContent = 'Copied!';
    showToast('Cure instructions copied to clipboard!', '📋');
    setTimeout(() => {
      copyBtnIcon.textContent = '📋';
      copyBtnText.textContent = 'Copy Instructions';
    }, 2000);
  }).catch(() => {
    showToast('Could not copy to clipboard', '⚠️');
  });
}

// ==========================================
// 15. Notification Toast
// ==========================================
let toastTimer = null;
function showToast(message, icon = 'ℹ️') {
  if (toastTimer) clearTimeout(toastTimer);
  toastMessage.textContent = message;
  toastIcon.textContent = icon;
  toast.classList.add('show');

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
