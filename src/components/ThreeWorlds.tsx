import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { useGamification } from '../context/GamificationContext';

const worlds = [
  {
    sem: 1,
    num: '01',
    title: 'THE FOUNDATION',
    reps: ['Rithik Loganathan', 'Vishnupriya T'],
    tenure: 'Aug 2025 – Jan 2026',
    bg: '#315CFF',
    textOnBg: '#FFF8ED',
    accentLight: 'rgba(255,248,237,0.15)',
    quote: '"Bcoz namma irukkuradhu PSG 😂"',
    punchline: 'From strangers on Day 1 to one class family navigating PSG Tech together.',
    fragments: [
      { label: 'Day Zero', val: 'Group name brainstorm: "Parama Padi daa" wins hearts' },
      { label: 'Bulk Orders', val: '₹550 English books & Chem manuals coordinated for 81 students' },
      { label: 'Class Secret', val: 'SIGMA229 printing code — A Block stall' },
      { label: 'Comedy Classic', val: 'Y201 Row 1 Calculator Auction — ₹30 Lakh bid' },
    ],
    token: 'token-genesis',
  },
  {
    sem: 2,
    num: '02',
    title: 'THE RHYTHM & THE ROAD',
    reps: ['Sharvesh PG', 'Thurika G'],
    tenure: 'Jan 2026 – Jul 2026',
    bg: '#FF684A',
    textOnBg: '#171923',
    accentLight: 'rgba(23,25,35,0.12)',
    quote: '"Moongil thottam-Melody version ft. Sharvesh 🎵"',
    punchline: 'Engineering Graphics drafters, Nilgiri bus playlists, and C Lab debugging tears.',
    fragments: [
      { label: 'The Road Trip', val: 'Ooty IV — Radio Astronomy Centre & Karnataka Garden' },
      { label: 'April Fools', val: 'Saturday "compensation class" — got the whole class' },
      { label: 'Lab Wisdom', val: '"Don\'t ask Anusha anything. Write whatever you know."' },
      { label: 'Class Pride', val: 'Dept Rank 1 & 2 — Subisa Shree & Kalaiarasi' },
    ],
    token: 'token-ooty',
  },
  {
    sem: 3,
    num: '03',
    title: 'THE RESOLVE',
    reps: ['Abinayasri R M', 'Sachin Pranav M'],
    tenure: 'Aug 2026 – Present',
    bg: '#D8F36A',
    textOnBg: '#171923',
    accentLight: 'rgba(23,25,35,0.08)',
    quote: '"VK sir pasanga da namma... Let\'s make him proud. ✨"',
    punchline: 'Room Q301, integrating lateral entry friends, standing together through tough courses.',
    fragments: [
      { label: 'The Turning Point', val: 'Sept 3 Manifesto — unified 80+ classmates around one message' },
      { label: 'Resource Vault', val: 'Centralized open Google Drive with COA, DS, Linear Algebra notes' },
      { label: 'Rep Banter', val: '"Dictator Sachin" toggling admin lock 🐐' },
      { label: 'Hackathon Rush', val: '40+ G1 hackers registered for Commitcon 2026' },
    ],
    token: 'token-unity',
  },
];

export const ThreeWorlds: React.FC = () => {
  const [active, setActive] = useState(0);
  const { markChapterExplored, unlockToken } = useGamification();

  const world = worlds[active];

  const go = (dir: 1 | -1) => {
    const next = (active + dir + 3) % 3;
    setActive(next);
    markChapterExplored(worlds[next].sem);
    unlockToken(worlds[next].token);
  };

  return (
    <section id="three-worlds" className="relative overflow-hidden" style={{ background: '#FFF8ED' }}>
      {/* Top ticker */}
      <div className="border-b border-black/8 overflow-hidden h-9 flex items-center bg-[#171923]">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="font-mono text-[10px] text-white/25 tracking-[0.2em] uppercase mx-8">
              Semester 01 — The Foundation • Semester 02 — The Rhythm & The Road • Semester 03 — The Resolve •
            </span>
          ))}
        </div>
      </div>

      {/* Header row */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex items-end justify-between">
        <div>
          <span className="pill pill-ink mb-3 inline-flex">Three Worlds</span>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#171923]" style={{ letterSpacing: '-0.03em' }}>
            Three Semesters.<br />
            Three Stories.
          </h2>
        </div>
        {/* World nav */}
        <div className="hidden sm:flex items-center gap-2">
          {worlds.map((w, i) => (
            <button
              key={w.sem}
              onClick={() => { setActive(i); markChapterExplored(w.sem); unlockToken(w.token); }}
              type="button"
              className="w-10 h-10 rounded-full font-heading font-black text-sm transition-all"
              style={active === i
                ? { background: w.bg, color: w.textOnBg, transform: 'scale(1.1)' }
                : { background: 'rgba(23,25,35,0.08)', color: 'rgba(23,25,35,0.4)' }
              }
            >
              {w.num}
            </button>
          ))}
        </div>
      </div>

      {/* World panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={world.sem}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-4 sm:mx-6 lg:mx-8 mb-8 rounded-3xl overflow-hidden relative"
          style={{ background: world.bg, minHeight: 460 }}
        >
          {/* Big background number */}
          <div
            className="absolute -right-4 -bottom-8 font-heading font-black select-none pointer-events-none opacity-10"
            style={{ fontSize: 'clamp(140px, 22vw, 280px)', color: world.textOnBg, lineHeight: 1 }}
          >
            {world.num}
          </div>

          <div className="relative z-10 p-8 sm:p-12 flex flex-col h-full">
            {/* Top: Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                style={{ background: world.accentLight, color: world.textOnBg }}>
                Semester {world.num}
              </span>
              <span className="font-mono text-[11px]" style={{ color: `${world.textOnBg}60` }}>
                {world.tenure}
              </span>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded-full"
                style={{ background: world.accentLight, color: world.textOnBg }}>
                Led by {world.reps.join(' & ')}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-heading font-black mb-3"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.8rem)', letterSpacing: '-0.03em', color: world.textOnBg, lineHeight: 1 }}
            >
              {world.title}
            </h3>

            {/* Quote + Handwritten memory tag */}
            <div className="mb-7 max-w-xl flex flex-col gap-2">
              <p className="font-serif text-xl sm:text-2xl italic leading-relaxed" style={{ color: `${world.textOnBg}E6` }}>
                {world.quote}
              </p>
              <span className="font-hand text-xl tracking-wide" style={{ color: `${world.textOnBg}B3` }}>
                {world.sem === 1 && "✨ Day 1 in Y201: strangers slowly turning into family"}
                {world.sem === 2 && "🚌 Ooty bus songs & surviving lab submissions side-by-side"}
                {world.sem === 3 && "🤝 Q301 late hours: standing together through every test"}
              </span>
            </div>

            {/* Fragments grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {world.fragments.map((f, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl"
                  style={{ background: world.accentLight, border: `1px solid ${world.textOnBg}15` }}
                >
                  <div className="font-mono text-[9px] uppercase tracking-wider mb-1" style={{ color: `${world.textOnBg}60` }}>
                    {f.label}
                  </div>
                  <div className="font-display text-xs font-semibold leading-relaxed" style={{ color: world.textOnBg }}>
                    {f.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom: Punchline + Nav */}
            <div className="flex items-end justify-between gap-4 mt-auto pt-4"
              style={{ borderTop: `1px solid ${world.textOnBg}15` }}>
              <p className="font-display text-sm max-w-md" style={{ color: `${world.textOnBg}65` }}>
                {world.punchline}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => go(-1)} type="button"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105"
                  style={{ background: world.accentLight, color: world.textOnBg }}>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => go(1)} type="button"
                  className="flex items-center gap-2 px-4 h-10 rounded-full font-display font-bold text-sm transition-all hover:opacity-85"
                  style={{ background: world.textOnBg, color: world.bg }}>
                  Next World <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile dots */}
      <div className="flex justify-center gap-2 pb-8 sm:hidden">
        {worlds.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} type="button"
            className="w-2 h-2 rounded-full transition-all"
            style={{ background: active === i ? world.bg : 'rgba(23,25,35,0.2)' }} />
        ))}
      </div>
    </section>
  );
};
