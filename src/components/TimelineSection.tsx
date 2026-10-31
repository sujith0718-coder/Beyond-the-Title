import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Filter } from 'lucide-react';
import { timelineEvents } from '../data/timeline';
import { soundCtrl } from '../utils/sound';

export const TimelineSection: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');

  const filteredEvents = timelineEvents.filter((ev) => {
    if (selectedSemester === 'all') return true;
    return ev.semester === selectedSemester;
  });

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5 bg-[#090d16]/70">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono-code mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>444+ DAYS • CONTINUOUS TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white mb-4">
            The Living Timeline
          </h2>
          <p className="text-slate-400 font-display text-base sm:text-lg">
            How 81 individuals and six representatives walked through three semesters together — from Day 1 at PSG Tech to who we are today.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="text-xs text-slate-500 font-mono-code mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter by:
          </span>
          {(['all', 1, 2, 3] as const).map((sem) => (
            <button
              key={sem}
              onClick={() => {
                setSelectedSemester(sem);
                soundCtrl.playChime(440);
              }}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                selectedSemester === sem
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/50 text-slate-400 border border-white/5 hover:text-white'
              }`}
            >
              {sem === 'all' ? 'Full Journey' : `Semester ${sem}`}
            </button>
          ))}
        </div>

        {/* Timeline Line & Nodes */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          {filteredEvents.map((ev, index) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300 shadow-md shadow-amber-500/20" />

              {/* Event Card */}
              <div className="glass-panel p-5 sm:p-7 border border-white/5 group-hover:border-white/15 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono-code font-bold text-amber-400">
                    {ev.date}
                  </span>
                  <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    {ev.semesterBadge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {ev.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                  {ev.description}
                </p>

                {ev.highlightQuote && (
                  <div className="p-3 rounded-lg bg-black/30 border border-white/5 text-xs text-slate-300 italic mb-4 font-light">
                    &ldquo;{ev.highlightQuote}&rdquo;
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5 text-xs text-slate-400 font-mono-code">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>In charge:</span>
                  {ev.repsInCharge.map((r, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-white font-medium">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
