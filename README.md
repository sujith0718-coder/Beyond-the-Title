# BEYOND THE TITLE
### An Emotional, Interactive, Cinematic Appreciation Experience for Our Class Representatives
**Department of Computer Science and Engineering — Section G1 (Batch 2025–2029)**  
**PSG College of Technology, Coimbatore**

---

## 🌟 The Experience

*“Some roles last for a semester. The impact can stay much longer.”*

**Beyond The Title** is an immersive, gamified, cinematic digital experience celebrating the six class representatives who led and supported CSE G1 through our first three semesters:

- **Semester 1:** **Hrithik Loganathan** & **Vishnu Priya**
- **Semester 2:** **Sharvesh** & **Thurika**
- **Semester 3:** **Abinayashree** & **Sachin Pranav**

Built directly from over **14 months of authentic WhatsApp conversations** (August 13, 2025 – October 30, 2026), this application preserves our college memories with genuine collegiate warmth, laughter, background music, and interactive memory shard unlocks.

### 🎵 Background Music Integration
- **Soundtrack:** *Rathinamae (Piano Cover)* (`RATHINAMO-Piano-Cover.mp3`)
- **Player:** Minimalist floating music controller with spinning vinyl disc, animated equalizer bars, volume slider, and smooth fade-in/fade-out transitions.
- **Autoplay Safe:** Starts playing comfortably when the user clicks *"Let's go back... →"* or interacts with the player.

### 🎮 Gamified Memory Discovery System
- **Memory Shards:** Collect visual tokens (*The Inception Shard*, *PSG Reality Check*, *₹30 Lakh Bidder*, *Voice of the Batch*, *The Nilgiri Voyager*, *April Fools Survivor*, *VK Sir Pasanga*, *The Class Custodian*) as you explore.
- **Shards Vault Drawer:** Inspect unlocked memories, see unrevealed hints, and track your discovery progress.
- **Hidden Easter Eggs:** Interactive secrets hidden across the interface (e.g., clicking the G1 emblem reveals the secret class motto).

---

## 🚀 Running the Project

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Launch
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:5173/
```

### Production Build
```bash
npm run build
```

---

## 🏛️ Architecture & Sections

1. **The Opening Hero Experience:**
   - Cinematic midnight typography and ambient glow
   - Key class metrics (444+ Days Together, 6 Reps, 81+ Classmates, 1 Family)
   - *"Relive the Journey"* smooth navigation

2. **The Journey Begins (Day Zero):**
   - The creation of the WhatsApp group on August 13, 2025 at 12:21 PM
   - The legendary group name brainstorm (*Infinite loopers*, *Kinda from python*, *Parama Padi daa 😂*, *Cse payaluga*)
   - Hrithik's 4-year class manifesto message

3. **Three Semesters, Three Chapters:**
   - **Chapter 01 (Semester 1):** The Foundation (English books ₹550 bulk orders, Chemistry manuals ₹140, SIGMA229 printing code, Y201 calculator auction, blue spiral binding)
   - **Chapter 02 (Semester 2):** The Rhythm & The Road (EG mini-drafters, Ooty IV to Radio Astronomy Centre & Karnataka Garden, "Moongil Thottam ft. Sharvesh", April Fools Saturday compensation prank, EP Lab CA2 survival warnings)
   - **Chapter 03 (Semester 3):** The Resolve (Q301, Discrete Structures Rosen 20 sums, Linear Algebra, "Dictator Sachin" admin banter, the September 3 "Make him proud" unity call for tutor Veerakumar Sir, Commitcon Hackathon mobilization)

4. **The Real Moments (Digital Archive):**
   - High-fidelity WhatsApp chat viewer with dark theme bubble styling
   - Filterable conversational threads with timestamps and verified representative badges
   - Editorial context explaining why each everyday moment mattered
   - Simulated audio note player for class vocal anthems

5. **The Work Behind the Role:**
   - Unveiling the unseen responsibilities:
     - The Hall-Shifting Navigators (J208, G301, Y201, 3AI, AIR, SCPS, CC Lab)
     - The Financial Treasurers (Zero discrepancies across ₹1,70,000+ collected)
     - The Faculty Advocates (Negotiating C lab marks and re-tests)
     - The Disciplinary Shield (Protecting attendance and avoiding reprimands)

6. **Interactive Memory Discovery:**
   - Emotion filters: Funny 😂, Academic 📚, Coordination 📋, Emotional 🥹, Nostalgic ❤️
   - Semester filters: All, S1, S2, S3
   - **"Discover a Random Memory"** shuffle button with chime reveals
   - Detailed memory inspection modal with full conversational context

7. **Six People, One Journey (Representatives Gallery):**
   - Equal visual stature and dedicated appreciation cards for all six representatives
   - Verified contributions, signature chat moments, and classmates' appreciation notes

8. **The Living Timeline:**
   - Continuous 444+ day chronological trajectory showing our evolution from timid freshers to second-year software builders

9. **The Spirit of G1 (Classmate Moments):**
   - Sujith's executable C programs & songs
   - Tharun's sticker reactions & family tree meme
   - Academic rank toppers Subisa Shree & Kalaiarasi (Rank 1 & 2)
   - Dharunish's National Kickboxing Gold (₹1 Lakh prize)

10. **The Final Message & Celebration:**
    - Heartfelt tribute in English and Tamil:
      *“Appo idhellam just normal class updates ah dhaan irundhuchu... Oru reminder. Oru message. Oru follow-up. Oru small help. Aana ippo thirumbi paakumbodhu, andha chinna chinna moments dhaan namma college journey oda oru part ah irukku. To our six representatives — thanks for being part of ours. ❤️”*
    - Interactive **"Celebrate Our Representatives"** button triggering golden confetti and sound effects

---

## 🎨 Tech Stack & Design System
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Vanilla CSS + Tailwind CSS tokens (Midnight `#07090e`, Amber `#fbbf24`, Sky `#38bdf8`, Emerald `#10b981`, Purple `#a855f7`)
- **Typography:** Outfit (Display), Cinzel (Headings), Plus Jakarta Sans (Body), JetBrains Mono (Code & Timestamps)
- **Icons:** Lucide React
- **Motion:** Framer Motion
- **Celebrations:** Canvas Confetti
- **Audio:** Web Audio API procedural synthesizer (No heavy media downloads required)
