import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundCtrl } from '../utils/sound';

export const FinalMessage: React.FC = () => {
  const triggerConfetti = () => {
    soundCtrl.playMemoryRevealSound();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#fbbf24', '#38bdf8', '#a855f7', '#10b981', '#f43f5e']
    });
  };

  const repsList = [
    { name: 'Rithik Loganathan', sem: 'Semester 1' },
    { name: 'Vishnupriya', sem: 'Semester 1' },
    { name: 'Sharvesh', sem: 'Semester 2' },
    { name: 'Thurika', sem: 'Semester 2' },
    { name: 'Abinayasri', sem: 'Semester 3' },
    { name: 'Sachin Pranav', sem: 'Semester 3' },
  ];

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/10 overflow-hidden text-center bg-gradient-to-b from-[#07090e] via-[#0d131f] to-[#05070a]">
      {/* Background Orbs */}
      <div className="ambient-orb w-[500px] h-[500px] bg-amber-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="ambient-orb w-[300px] h-[300px] bg-purple-600/15 top-10 right-10" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Heart Icon Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-8 shadow-xl shadow-amber-500/10"
        >
          <Heart className="w-8 h-8 fill-amber-400/20 text-amber-400 animate-pulse" />
        </motion.div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-title font-extrabold text-white mb-8 leading-tight">
          Titles Change. <span className="gradient-text-gold">Memories Stay.</span>
        </h2>

        {/* Sincere English Message */}
        <div className="text-base sm:text-xl text-slate-300 font-display font-light leading-relaxed max-w-2xl mb-8 space-y-4">
          <p>
            Titles change. Semesters pass. Responsibilities move to new hands.
          </p>
          <p>
            But the little things people do for one another — the early morning hall checks, the exam night survival notes, the negotiated second chances, and the simple patience to listen — become part of a journey we will remember for the rest of our lives.
          </p>
        </div>

        {/* Authentic Tamil/Tanglish Emotional Passage */}
        <div className="glass-panel p-6 sm:p-8 max-w-2xl border border-amber-400/20 text-xs sm:text-sm text-slate-200 font-mono-code mb-10 leading-relaxed italic bg-black/40">
          <p className="mb-3 text-amber-300 font-semibold">
            &ldquo;Appo idhellam just normal class updates ah dhaan irundhuchu.
          </p>
          <p className="mb-3">
            Oru reminder. Oru message. Oru follow-up. Oru small help.
          </p>
          <p className="mb-3">
            Aana ippo thirumbi paakumbodhu, andha chinna chinna moments dhaan namma college journey oda oru part ah irukku.
          </p>
          <p className="text-emerald-300 font-semibold">
            To our six representatives — thanks for being part of these memories. ❤️&rdquo;
          </p>
        </div>

        {/* Six Names Together */}
        <div className="w-full max-w-3xl mb-12">
          <div className="text-xs font-mono-code text-slate-400 uppercase tracking-widest mb-4">
            Honouring Our Six Class Representatives
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {repsList.map((r, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-amber-400/30 transition-all text-center"
              >
                <span className="font-display font-bold text-sm text-white block">
                  {r.name}
                </span>
                <span className="text-[11px] font-mono-code text-amber-400/80 block mt-0.5">
                  {r.sem}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Confetti Celebration Button */}
        <button
          onClick={triggerConfetti}
          type="button"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-display font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-amber-500/25 mb-16"
        >
          <Sparkles className="w-5 h-5 text-slate-950" />
          <span>Celebrate Our Representatives 🎉</span>
        </button>

        {/* Footer info */}
        <div className="pt-8 border-t border-white/10 w-full max-w-2xl text-xs text-slate-500 font-mono-code flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-slate-400" />
            <span>B.E. Computer Science and Engineering • Section G1</span>
          </div>
          <div>PSG College of Technology (Batch 2025–2029)</div>
        </div>
      </div>
    </section>
  );
};
