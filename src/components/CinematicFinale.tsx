import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioMgr } from '../utils/audioManager';

const repsList = [
  { name: 'Rithik Loganathan', sem: '01', bg: '#315CFF', fg: '#FFF8ED' },
  { name: 'Vishnupriya T',     sem: '01', bg: '#FFD76A', fg: '#171923' },
  { name: 'Sharvesh PG',       sem: '02', bg: '#7B4FFF', fg: '#FFF8ED' },
  { name: 'Thurika G',         sem: '02', bg: '#FF684A', fg: '#171923' },
  { name: 'Abinayasri R M',    sem: '03', bg: '#D8F36A', fg: '#171923' },
  { name: 'Sachin Pranav M',   sem: '03', bg: '#171923', fg: '#FFF8ED' },
];

export const CinematicFinale: React.FC = () => {
  const [celebrated, setCelebrated] = useState(false);

  const celebrate = () => {
    audioMgr.playUnlockChime?.();
    setCelebrated(true);
    confetti({ particleCount: 140, spread: 90, origin: { y: 0.6 }, colors: ['#315CFF', '#FF684A', '#FFD76A', '#D8F36A', '#7B4FFF', '#FFF8ED'] });
    setTimeout(() => {
      confetti({ particleCount: 70, angle: 60, spread: 60, origin: { x: 0 }, colors: ['#FFD76A', '#315CFF'] });
      confetti({ particleCount: 70, angle: 120, spread: 60, origin: { x: 1 }, colors: ['#FF684A', '#D8F36A'] });
    }, 300);
  };

  return (
    <section id="finale" className="relative overflow-hidden" style={{ background: '#171923' }}>
      {/* Divider */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,248,237,0.08), transparent)' }} />

      {/* Full-bleed marquee band */}
      <div className="overflow-hidden h-10 flex items-center" style={{ background: '#FFD76A' }}>
        <div className="animate-marquee-r whitespace-nowrap flex">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="font-mono text-[11px] text-[#171923]/50 tracking-[0.2em] uppercase mx-8">
              Titles Change • Memories Stay • Rithik • Vishnupriya • Sharvesh • Thurika • Abinayasri • Sachin •
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-24">
        {/* Big headline */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="pill pill-ivory mb-5 inline-flex">A tribute from CSE G1</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-[#FFF8ED]"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 6.5rem)', letterSpacing: '-0.04em', lineHeight: 0.95 }}
          >
            Titles<br />
            Change.<br />
            <span className="font-serif italic font-normal text-[#FFD76A]">Memories</span><br />
            Stay.
          </motion.h2>
        </div>

        {/* Six reps name wall — bold color blocks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-16"
        >
          {repsList.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
              className="rounded-2xl p-5 flex flex-col gap-2 shadow-lg"
              style={{ background: r.bg }}
            >
              <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: `${r.fg}60` }}>
                Sem {r.sem}
              </span>
              <span className="font-heading font-bold text-sm sm:text-base leading-tight" style={{ color: r.fg }}>
                {r.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tanglish tribute box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-3xl p-8 sm:p-12 mb-12 border border-white/10 relative overflow-hidden warm-card-glow"
          style={{ background: 'rgba(255,248,237,0.03)' }}
        >
          {/* Big quote mark */}
          <div className="absolute -top-6 -left-2 font-serif font-black text-9xl opacity-5 text-[#FFF8ED] select-none pointer-events-none leading-none">
            "
          </div>

          <blockquote className="relative z-10 font-serif text-lg sm:text-2xl leading-relaxed italic">
            <p className="text-[#FFD76A] font-normal mb-3">
              "Appo idhellam just normal class updates ah dhaan irundhuchu.
            </p>
            <p className="text-white/70 font-light mb-3">
              Oru reminder. Oru message. Oru follow-up. Oru small help.
            </p>
            <p className="text-white/70 font-light mb-5">
              Aana ippo thirumbi paakumbodhu, andha chinna chinna moments dhaan namma college journey oda oru part ah irukku.
            </p>
            <p className="text-[#D8F36A] font-medium not-italic font-sans text-base sm:text-lg">
              To our six representatives — thanks for being part of these memories. ❤️
            </p>
          </blockquote>

          {/* Sweet handwritten signature */}
          <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
            <span className="font-hand text-2xl text-[#FFD76A] tracking-wide">
              Dedicated with love by the 81 students of CSE G1 ✨
            </span>
            <span className="font-mono text-xs text-white/30 uppercase tracking-widest">
              PSG Tech • Batch 2025–2029
            </span>
          </div>
        </motion.div>

        {/* Celebrate button */}
        <div className="text-center mb-16 flex flex-col items-center gap-3">
          <motion.button
            onClick={celebrate}
            type="button"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-heading font-bold text-lg transition-all shadow-2xl relative overflow-hidden group"
            style={{
              background: celebrated
                ? 'linear-gradient(135deg, #D8F36A, #315CFF)'
                : 'linear-gradient(135deg, #FFD76A, #FF684A)',
              color: '#171923',
              boxShadow: '0 16px 40px rgba(255,104,74,0.3)',
            }}
          >
            <Sparkles className="w-5 h-5" />
            <span>{celebrated ? 'Love Sent! All Six Honoured 🎉' : 'Celebrate Our Representatives 🎉'}</span>
          </motion.button>
          <span className="font-display text-xs text-white/40">
            {celebrated ? '❤️ 1,842 hugs & thank-yous sent by G1 classmates' : 'Tap to shower appreciation & confetti'}
          </span>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,248,237,0.06)' }}>
          <div className="flex items-center gap-2 font-mono text-[10px] text-white/20">
            <GraduationCap className="w-4 h-4" />
            B.E. Computer Science & Engineering — Section G1
          </div>
          <div className="font-mono text-[10px] text-white/20">
            PSG College of Technology — Batch 2025–2029
          </div>
        </div>
      </div>
    </section>
  );
};
