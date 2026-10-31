import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Heart, ShieldCheck, Users, Calendar } from 'lucide-react';
import { soundCtrl } from '../utils/sound';

export const Hero: React.FC = () => {
  const handleExplore = () => {
    soundCtrl.playChime(659.25); // E5 chime
    const el = document.getElementById('origins');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Semesters Relived', value: '03', icon: Calendar },
    { label: 'Class Representatives', value: '06', icon: ShieldCheck },
    { label: 'Classmates United', value: '81+', icon: Users },
    { label: 'College Journey', value: '1 Family', icon: Heart },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Cinematic Ambient Background Lights */}
      <div className="ambient-orb w-[500px] h-[500px] bg-amber-500/10 top-10 left-1/2 -translate-x-1/2 animate-pulse-glow" />
      <div className="ambient-orb w-[400px] h-[400px] bg-purple-600/15 -top-10 -left-20" />
      <div className="ambient-orb w-[450px] h-[450px] bg-blue-600/15 top-1/3 -right-20" />

      {/* Subtle Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-mono-code mb-8 shadow-inner shadow-amber-500/10"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>CSE G1 • BEYOND THE DESIGNATION</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-title font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
        >
          Beyond The{' '}
          <span className="gradient-text-gold inline-block">Title.</span>
        </motion.h1>

        {/* Theme Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-slate-200 max-w-3xl mb-4 leading-snug"
        >
          More than a designation. <span className="text-amber-300/90 italic">A part of our journey.</span>
        </motion.p>

        {/* Story description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed font-light"
        >
          Three semesters. Six representatives. Countless little moments, late-night timetable shifts, book runs, and reminders that quietly held our class together.
        </motion.p>

        {/* Tanglish Emotional Hook */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-slate-300 font-mono-code mb-10 max-w-xl italic"
        >
          &ldquo;Appo idhellam just normal class updates ah dhaan irundhuchu... Ippo thirumbi paakumbodhu, namma college journey-oda irreplaceable memories.&rdquo;
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <button
            onClick={handleExplore}
            type="button"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-display font-bold text-base sm:text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Relive the Journey</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl pt-4 border-t border-white/10"
        >
          {stats.map((st, i) => (
            <div
              key={i}
              className="p-3 sm:p-4 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-md text-center hover:border-amber-400/20 transition-colors"
            >
              <div className="flex items-center justify-center gap-1.5 text-amber-400/80 mb-1">
                <st.icon className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  {st.value}
                </span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                {st.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
