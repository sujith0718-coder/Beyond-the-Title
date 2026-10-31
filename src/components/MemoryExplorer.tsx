import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Dices, X, Tag } from 'lucide-react';
import { memories, ClassMemory } from '../data/memories';
import { soundCtrl } from '../utils/sound';

export const MemoryExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');
  const [activeModalMemory, setActiveModalMemory] = useState<ClassMemory | null>(null);

  const categories = [
    { id: 'all', label: 'All Memories', icon: '✨' },
    { id: 'funny', label: 'Funny 😂', icon: '😂' },
    { id: 'academic', label: 'Academic 📚', icon: '📚' },
    { id: 'coordination', label: 'Coordination 📋', icon: '📋' },
    { id: 'emotional', label: 'Emotional 🥹', icon: '🥹' },
    { id: 'nostalgic', label: 'Nostalgic ❤️', icon: '❤️' },
  ];

  const filteredMemories = memories.filter((m) => {
    const matchesCategory = selectedCategory === 'all' || m.category === selectedCategory;
    const matchesSemester = selectedSemester === 'all' || m.semester === selectedSemester;
    return matchesCategory && matchesSemester;
  });

  const handleRandomMemory = () => {
    soundCtrl.playMemoryRevealSound();
    const randomIndex = Math.floor(Math.random() * memories.length);
    setActiveModalMemory(memories[randomIndex]);
  };

  const openMemoryModal = (memory: ClassMemory) => {
    soundCtrl.playChime(587.33);
    setActiveModalMemory(memory);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-mono-code mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE EXPLORATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white mb-2">
              Memory Explorer
            </h2>
            <p className="text-slate-400 font-display text-base">
              Filter by emotion or semester, or let chance reveal an old classroom moment.
            </p>
          </div>

          {/* Random Memory Discovery Button */}
          <button
            onClick={handleRandomMemory}
            type="button"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/30 border border-amber-400/40 text-amber-300 font-display font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-amber-500/10 shrink-0"
          >
            <Dices className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Discover a Random Memory</span>
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  soundCtrl.playChime(440);
                }}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Semester Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-slate-400 font-mono-code">Semester:</span>
            {(['all', 1, 2, 3] as const).map((sem) => (
              <button
                key={sem}
                onClick={() => {
                  setSelectedSemester(sem);
                  soundCtrl.playChime(523.25);
                }}
                type="button"
                className={`px-2.5 py-1 rounded text-xs font-mono-code transition-all ${
                  selectedSemester === sem
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40 font-bold'
                    : 'bg-slate-900/30 text-slate-400 border border-transparent hover:text-white'
                }`}
              >
                {sem === 'all' ? 'All' : `S${sem}`}
              </button>
            ))}
          </div>
        </div>

        {/* Memories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMemories.map((m) => (
            <motion.div
              key={m.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => openMemoryModal(m)}
              className="glass-panel p-5 cursor-pointer flex flex-col justify-between group hover:border-amber-400/30 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-amber-300">
                    Sem {m.semester} • {m.date}
                  </span>
                  <span className="text-xs">{m.category === 'funny' ? '😂' : m.category === 'academic' ? '📚' : m.category === 'emotional' ? '🥹' : '❤️'}</span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-amber-300 transition-colors mb-2">
                  {m.title}
                </h3>

                <p className="text-xs text-slate-300 font-light line-clamp-3 mb-4 leading-relaxed italic bg-black/20 p-2.5 rounded-lg border border-white/5">
                  &ldquo;{m.excerpt}&rdquo;
                </p>
              </div>

              <div>
                {m.tanglishQuote && (
                  <div className="text-[11px] text-amber-400/90 font-mono-code mb-3 truncate">
                    {m.tanglishQuote}
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    {m.reactions.map((r, i) => (
                      <span key={i} className="text-xs">{r}</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono-code text-slate-400 group-hover:text-amber-400 transition-colors">
                    Click to Inspect →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Memory Inspection */}
        <AnimatePresence>
          {activeModalMemory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-panel p-6 sm:p-8 max-w-xl w-full border border-amber-400/30 relative max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalMemory(null)}
                  type="button"
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-2 text-xs font-mono-code text-amber-300 mb-2">
                  <span>Semester {activeModalMemory.semester}</span>
                  <span>•</span>
                  <span>{activeModalMemory.date}</span>
                </div>

                <h3 className="text-2xl font-serif-title font-bold text-white mb-4">
                  {activeModalMemory.title}
                </h3>

                {/* Actual Excerpt */}
                <div className="chat-bubble-received p-4 mb-6 border-l-4 border-l-amber-400">
                  <div className="text-xs font-mono-code text-amber-300/90 mb-1 font-bold">
                    {activeModalMemory.sender || 'Class Highlight'}
                  </div>
                  <p className="text-sm text-slate-100 font-light leading-relaxed whitespace-pre-line">
                    &ldquo;{activeModalMemory.excerpt}&rdquo;
                  </p>
                </div>

                {/* Context Caption */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  <div className="font-semibold text-amber-300 font-mono-code text-xs uppercase tracking-wider">
                    Why This Mattered:
                  </div>
                  <p>{activeModalMemory.caption}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/10">
                  {activeModalMemory.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono-code text-slate-400"
                    >
                      <Tag className="w-3 h-3 text-amber-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
