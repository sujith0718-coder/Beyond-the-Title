import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sparkles, Compass, CheckCircle } from 'lucide-react';
import { soundCtrl } from '../utils/sound';

export const SemesterChapters: React.FC = () => {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);

  const chapters = [
    {
      sem: 1 as const,
      num: '01',
      title: 'The Foundation',
      tenure: 'August 2025 – January 2026',
      reps: ['Rithik Loganathan', 'Vishnupriya'],
      color: '#38bdf8', // Blue
      borderColor: 'border-sky-500/30',
      glowColor: 'glass-glow-blue',
      badge: 'Chapter 01 • Freshers Year',
      summary: 'From the first confusing days of induction reports and temporary ID cards to managing bulk textbook purchases and building our first Python programs.',
      highlights: [
        {
          title: '₹550 English Book & ₹140 Chem Manuals',
          desc: 'Reps organized complete class bulk orders to save everyone hours standing in book depot lines and avoid stock shortages.',
          date: 'August 2025'
        },
        {
          title: 'The SIGMA229 Printing Code',
          desc: 'Arranged with campus A-block printing stalls so classmates could print Chapter 4 lecture notes seamlessly using a class code.',
          date: 'November 2025'
        },
        {
          title: 'The Y201 Calculator Auction',
          desc: 'When a calculator was found in the lab, Y201 briefly became an impromptu comedy auction starting at ₹50 up to ₹30 Lakhs.',
          date: 'October 2025'
        },
        {
          title: 'Blue Spiral Binding Consensus',
          desc: 'Reps held a class poll between Green, Blue, Yellow, and Violet so everyone submitted uniform Python records for faculty review.',
          date: 'December 2025'
        }
      ],
      quote: '“Some roles last for a semester. The impact can stay much longer.”'
    },
    {
      sem: 2 as const,
      num: '02',
      title: 'The Rhythm & The Road',
      tenure: 'January 2026 – July 2026',
      reps: ['Sharvesh', 'Thurika'],
      color: '#ec4899', // Pink / Purple
      borderColor: 'border-pink-500/30',
      glowColor: 'glass-glow-purple',
      badge: 'Chapter 02 • Moving Forward',
      summary: 'Engineering Graphics mini-drafters in G301, C Programming algorithms, the unforgettable Nilgiri hills Industrial Visit to Ooty, and navigating intense EP Lab exams.',
      highlights: [
        {
          title: 'The Ooty Expedition (RAC & Karnataka Garden)',
          desc: 'March 21, 2026: Coordinated 80+ classmates across two buses to the Radio Astronomy Centre and botanical gardens in the Nilgiris.',
          date: 'March 21, 2026'
        },
        {
          title: '“Moongil Thottam” by Sharvesh',
          desc: 'Class rep Sharvesh’s musical audio went viral in the group, becoming our class’s unofficial happy anthem and running joke.',
          date: 'February 2026'
        },
        {
          title: 'The April Fools Saturday Prank',
          desc: 'Sharvesh announced mandatory Saturday compensation classes for Good Friday, tricking hostelers into a hilarious panic.',
          date: 'April 1, 2026'
        },
        {
          title: 'EP Lab CA2 Survival Warning',
          desc: 'Thurika warned the class on gate pins, flip-flops, and strict invigilation the night before the exam, helping everyone pass.',
          date: 'May 28, 2026'
        }
      ],
      quote: '“Not every contribution becomes a big moment. Sometimes, the smallest updates make the biggest difference.”'
    },
    {
      sem: 3 as const,
      num: '03',
      title: 'The Resolve',
      tenure: 'August 2026 – Present',
      reps: ['Abinayasri', 'Sachin Pranav'],
      color: '#10b981', // Emerald
      borderColor: 'border-emerald-500/30',
      glowColor: 'glass-glow-emerald',
      badge: 'Chapter 03 • Sophomore Strength',
      summary: 'Room Q301, welcoming lateral entry classmates, Discrete Structures 20-sum assignments, centralizing every study material on Google Drive, and rallying behind tutor Veerakumar Sir.',
      highlights: [
        {
          title: 'The September 3 Unity Call',
          desc: 'Abinayasri delivered a heartfelt speech when tutor Veerakumar Sir faced pressure: "Let\'s be together and win together. Let\'s make him proud."',
          date: 'September 3, 2026'
        },
        {
          title: 'The Centralized Google Drive Hub',
          desc: 'Created an open-access repository for COA, Linear Algebra, and Discrete Structure slides so no student was left behind before tutorials.',
          date: 'October 7, 2026'
        },
        {
          title: '“Dictator Sachin” Admin Banter',
          desc: 'Sachin toggled admin settings during Design Thinking Club recruitments, inspiring good-natured jokes across the class.',
          date: 'August 26, 2026'
        },
        {
          title: 'Commitcon 2026 & Technical Mobilization',
          desc: 'Coordinated attendance exemptions and projector splitters for 40+ classmates competing in national technical hackathons.',
          date: 'October 9, 2026'
        }
      ],
      quote: '“VK sir pasanga da namma... Let’s prove ourselves through our discipline and hard work.”'
    }
  ];

  const current = chapters.find((c) => c.sem === activeTab)!;

  const handleTabChange = (tab: 1 | 2 | 3) => {
    setActiveTab(tab);
    soundCtrl.playChime(tab === 1 ? 440 : tab === 2 ? 523.25 : 659.25);
  };

  return (
    <section id="chapters" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5 bg-[#0a0e17]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-mono-code mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>THREE SEMESTERS • THREE CHAPTERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white mb-4">
            A Journey in Three Movements
          </h2>
          <p className="text-slate-400 font-display text-base sm:text-lg">
            Every semester had its own spirit, its own struggles, and two representatives who stepped forward to shoulder the responsibility for all of us.
          </p>
        </div>

        {/* Chapter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {chapters.map((ch) => {
            const isActive = ch.sem === activeTab;
            return (
              <button
                key={ch.sem}
                onClick={() => handleTabChange(ch.sem)}
                type="button"
                className={`relative px-5 py-3 rounded-xl font-display font-semibold text-sm sm:text-base transition-all duration-300 flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-slate-800/90 text-white shadow-lg border-white/20 scale-[1.02]'
                    : 'bg-slate-900/40 text-slate-400 border-white/5 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: ch.color }}
                />
                <span>Chapter {ch.num}: {ch.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeChapterGlow"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 rounded-full"
                    style={{ backgroundColor: ch.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Chapter Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.sem}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className={`glass-panel p-6 sm:p-10 border ${current.borderColor} relative overflow-hidden`}
          >
            {/* Ambient Background Gradient for chapter */}
            <div
              className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ backgroundColor: current.color }}
            />

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono-code text-slate-400 block mb-1">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif-title font-extrabold text-white">
                  Chapter {current.num}: {current.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400 mt-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{current.tenure}</span>
                </div>
              </div>

              {/* Reps Tag */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-mono-code mr-1">Representatives:</span>
                {current.reps.map((rep) => (
                  <span
                    key={rep}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold font-display text-white border shadow-sm"
                    style={{
                      backgroundColor: `${current.color}15`,
                      borderColor: `${current.color}40`,
                    }}
                  >
                    {rep}
                  </span>
                ))}
              </div>
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-4xl">
              {current.summary}
            </p>

            {/* Verified Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {current.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/15 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono-code text-amber-400/90 font-medium">
                      {h.date}
                    </span>
                    <CheckCircle className="w-4 h-4 text-emerald-400/80" />
                  </div>
                  <h4 className="text-base font-bold font-display text-white mb-2">
                    {h.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Banner */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 italic text-xs sm:text-sm text-slate-300 font-serif-title">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{current.quote}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
