import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, CheckCircle2, X, Sparkles, MessageSquare } from 'lucide-react';
import { representatives, Representative } from '../data/representatives';
import { soundCtrl } from '../utils/sound';

export const RepresentativesGallery: React.FC = () => {
  const [selectedRep, setSelectedRep] = useState<Representative | null>(null);

  const handleSelectRep = (rep: Representative) => {
    soundCtrl.playChime(659.25);
    setSelectedRep(rep);
  };

  return (
    <section id="representatives" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5 bg-[#070a10]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-mono-code mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>SIX REPRESENTATIVES • EQUAL HONOUR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white mb-4">
            Six People, One Journey
          </h2>
          <p className="text-slate-400 font-display text-base sm:text-lg">
            Celebrating the six classmates who carried the responsibility of representing CSE G1 across three unforgettable semesters.
          </p>
        </div>

        {/* 6 Cards Grid (Equal Visual Grandeur) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {representatives.map((rep) => (
            <motion.div
              key={rep.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-amber-400/30 relative overflow-hidden group cursor-pointer"
              onClick={() => handleSelectRep(rep)}
            >
              {/* Accent Glow Top Border */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 group-hover:opacity-100 opacity-60"
                style={{ backgroundColor: rep.accentColor }}
              />

              <div>
                {/* Semester & Tenure badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] font-mono-code px-2.5 py-0.5 rounded-full font-semibold border"
                    style={{
                      backgroundColor: `${rep.accentColor}15`,
                      color: rep.accentColor,
                      borderColor: `${rep.accentColor}30`,
                    }}
                  >
                    Semester {rep.semester}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono-code">
                    {rep.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-serif-title font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {rep.name}
                </h3>
                <span className="text-xs text-slate-400 font-display block mb-4">
                  {rep.roleTitle}
                </span>

                {/* Quote Excerpt */}
                <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 mb-5 text-xs text-slate-300 font-light leading-relaxed italic">
                  &ldquo;{rep.quote}&rdquo;
                </div>

                {/* Brief bio */}
                <p className="text-xs text-slate-400 font-light line-clamp-3 leading-relaxed mb-6">
                  {rep.bio}
                </p>
              </div>

              {/* Bottom stats & Action */}
              <div>
                <div className="grid grid-cols-2 gap-2 py-3 border-t border-white/5 mb-4 text-center">
                  {rep.stats.slice(0, 2).map((st, i) => (
                    <div key={i} className="p-2 rounded-lg bg-white/[0.02]">
                      <span className="text-sm font-bold text-white font-mono-code block">
                        {st.value}
                      </span>
                      <span className="text-[10px] text-slate-500 font-light block">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-amber-400 font-mono-code pt-1">
                  <span>View Contributions</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rep Detailed Modal */}
        <AnimatePresence>
          {selectedRep && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                className="glass-panel p-6 sm:p-10 max-w-2xl w-full border border-white/15 relative max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedRep(null)}
                  type="button"
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono-code font-bold"
                      style={{
                        backgroundColor: `${selectedRep.accentColor}20`,
                        color: selectedRep.accentColor,
                      }}
                    >
                      {selectedRep.semesterTitle}
                    </span>
                    <span className="text-xs text-slate-500 font-mono-code">
                      {selectedRep.tenure}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif-title font-bold text-white mb-2">
                    {selectedRep.name}
                  </h3>
                  <p className="text-sm text-slate-400 font-display">
                    {selectedRep.roleTitle} • {selectedRep.badge}
                  </p>
                </div>

                {/* Bio */}
                <div className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {selectedRep.bio}
                </div>

                {/* Signature Chat Moment */}
                <div className="chat-bubble-rep p-4 rounded-xl border border-emerald-500/30 mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono-code font-bold text-emerald-400 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Signature Moment: {selectedRep.signatureMoment.headline}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 italic font-light mb-2">
                    &ldquo;{selectedRep.signatureMoment.chatExcerpt}&rdquo;
                  </p>
                  <span className="text-[10px] text-slate-400 font-mono-code block">
                    {selectedRep.signatureMoment.context}
                  </span>
                </div>

                {/* Key Contributions */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono-code text-amber-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Verified Achievements & Contributions
                  </h4>
                  <div className="space-y-3">
                    {selectedRep.keyContributions.map((kc, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display font-bold text-sm text-white">
                            {kc.title}
                          </span>
                          <span className="text-[10px] font-mono-code text-slate-400">
                            {kc.dateOrPeriod}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-light leading-relaxed mb-2">
                          {kc.description}
                        </p>
                        <div className="text-[11px] text-emerald-400/90 font-mono-code flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{kc.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Classmate Appreciation Note */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/20 text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                  <strong className="text-amber-300 font-display block mb-1">
                    Classmate Appreciation:
                  </strong>
                  &ldquo;{selectedRep.peerAppreciation}&rdquo;
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
