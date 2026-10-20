# 🌱 BioShield AI
### Leaf Disease Scanner & Cure Teller

[![Stack: Vanilla HTML5 • CSS3 • JS](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-22c55e.svg)](#)
[![Audio: Web Speech API](https://img.shields.io/badge/Audio-Web%20Speech%20API-38bdf8.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**BioShield AI** is an approachable plant pathology web application designed to help everyday home gardeners, urban plant parents, and smallholder farmers diagnose sick plant leaves and get instant, low-cost **organic remedies** and **kitchen cures**.

Inspired by popular agricultural tools like *Plantix*, *PictureThis*, and *LeafDoctor*, BioShield AI strips away enterprise paywalls and confusing technical jargon to make plant health simple, friendly, and accessible to everyone.

---

## 🌟 Key Features

1. **Leaf Disease Scanner**:
   - **1-Click Test Specimens**: Built-in specimens for Tomato Early Blight, Potato Late Blight, Rose Black Spot, Apple Cedar Rust, Corn Northern Leaf Blight, and Healthy Pepper leaves.
   - **Upload Any Leaf**: Drag-and-drop or select any leaf photograph from your phone or computer.
   - **Live Camera Scanner**: Use your laptop webcam or smartphone camera via WebRTC with real-time target reticle and snapshot capture.
   - **Lesion & Spot Highlighter**: Visual bounding boxes that outline infected tissue, chlorotic halos, and fungal colonies on the leaf canvas.
   - **Realistic AI Scan Sweep**: Laser scanning animation with real-time diagnostic step indicators.

2. **Cure Teller (The Heart of the Project)**:
   - **Step 1: Immediate First-Aid**: Urgent physical quarantine and pruning steps to stop disease spread today.
   - **Step 2: Home & Organic Cures**: Safe, low-cost kitchen recipes (e.g., Cold-pressed Neem oil emulsion, Cornell baking soda spray, dilute milk foliar mist).
   - **Step 3: Garden Store Eco-Treatments**: Organic-certified treatments like copper octanoate and *Bacillus subtilis* bio-fungicides.
   - **Step 4: Prevention Checklist**: Clear rules for base-watering, mulching, air circulation, and crop rotation.

3. **🗣️ "Listen to Cure" Audio Voice Teller**:
   - Hands-free audio playback using the browser's native **Web Speech API**, reading clear step-by-step instructions out loud while you work in the garden.

4. **🧪 DIY Spray Dosage Mixer**:
   - Interactive recipe calculator: select your sprayer size (500ml mister, 1 Liter trigger bottle, 2 Liters pressure pump, or 1 Gallon sprayer) to get exact teaspoon and droplet measurements without guessing!

5. **📖 Plant Pathology Pocket Handbook**:
   - Visual reference cards for major crop diseases with filter buttons (Tomato, Potato, Rose, Apple, Corn) and 1-click "Load in Scanner" buttons.

6. **💬 Plant Pathology Q&A**:
   - Answers to common questions: Can you eat fruits from blighted plants? Why shouldn't you compost diseased foliage? How does neem oil work?

7. **🌓 Sunny Garden / Night Greenhouse Themes**:
   - Clean light and dark modes tailored for bright outdoor daylight and indoor nighttime gardening study.

---

## 🚀 Quick Start (Local Run)

BioShield AI runs completely on standard web technologies with **zero build step or npm dependencies**.

```bash
# Navigate to the folder
cd bioshield-ai

# Start a lightweight local server
python3 -m http.server 8080
```

Open your browser at **[http://localhost:8080](http://localhost:8080)**.

---

## 📁 Project Directory Structure

```text
bioshield-ai/
├── index.html        # Clean semantic HTML5 layout & accessible components
├── style.css         # Modern responsive CSS design system with light/dark modes
├── app.js            # Plant pathology database, canvas highlighter & audio engine
├── assets/           # Curated botanical specimen photos
│   ├── tomato_early_blight.jpg
│   ├── potato_late_blight.jpg
│   ├── rose_black_spot.jpg
│   ├── apple_cedar_rust.jpg
│   ├── corn_northern_blight.jpg
│   └── healthy_pepper_leaf.jpg
└── README.md         # Project documentation & overview
```

---

## 📚 References & Resources

- *Plantix* (Agronomic diagnostic flow)
- *PlantVillage Dataset* (David P. Hughes & Marcel Salathé)
- *Cornell University Cooperative Extension* (Baking Soda & Organic Fungicide Formulations)
- *American Phytopathological Society (APS)* Plant Disease Compendiums

---

## 📄 License
MIT License. Created for education, open research, and community garden health.
