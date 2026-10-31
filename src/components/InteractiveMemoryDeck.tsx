import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, Heart, Laugh, Flame } from 'lucide-react';
import { memories } from '../data/memories';
import { audioMgr } from '../utils/audioManager';

export const InteractiveMemoryDeck: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reactions, setReactions] = useState<Record<string, { h: number; l: number; f: number }>>({});
  const [dragStart, setDragStart] = useState<number | null>(null);

  const mem = memories[idx];
  const cur = reactions[mem.id] || { h: 24, l: 42, f: 19 };

  const next = () => { audioMgr.playPop?.(); setFlipped(false); setIdx((i) => (i + 1) % memories.length); };
  const prev = () => { audioMgr.playPop?.(); setFlipped(false); setIdx((i) => (i === 0 ? memories.length - 1 : i - 1)); };
  const flip = () => { audioMgr.playUnlockChime?.(); setFlipped((f) => !f); };
  const react = (type: 'h' | 'l' | 'f') => {
    audioMgr.playPop?.();
    setReactions((prev) => ({ ...prev, [mem.id]: { ...cur, [type]: cur[type] + 1 } }));
  };

  // Semester color mapping
  const semColor: Record<number, { bg: string; fg: string; accent: string }> = {
    1: { bg: '#315CFF', fg: '#FFF8ED', accent: 'rgba(255,248,237,0.15)' },
    2: { bg: '#FF684A', fg: '#171923', accent: 'rgba(23,25,35,0.12)' },
    3: { bg: '#D8F36A', fg: '#171923', accent: 'rgba(23,25,35,0.08)' },
  };
  const sc = semColor[mem.semester] || semColor[1];

  return (
    <section id="memory-vault" className="py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#FFF8ED' }}>
      {/* Top label */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="pill pill-ink mb-3 inline-flex">Memory Vault</span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#171923]" style={{ letterSpacing: '-0.03em' }}>
              Flip &amp;<br />
              <span style={{ color: '#315CFF' }}>Discover.</span>
            </h2>
            <p className="font-display text-sm text-[#171923]/50 mt-3 max-w-sm">
              Tap any card to reveal the real WhatsApp quote behind each memory.
            </p>
          </div>

          {/* Progress */}
          <div className="self-start sm:self-auto">
            <div className="font-mono text-[10px] text-[#171923]/40 mb-2 text-right">
              {idx + 1} of {memories.length}
            </div>
            <div className="w-36 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(23,25,35,0.08)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: sc.bg }}
                animate={{ width: `${((idx + 1) / memories.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className="relative cursor-pointer select-none mb-8"
          onClick={flip}
          onTouchStart={(e) => setDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (dragStart === null) return;
            const dx = e.changedTouches[0].clientX - dragStart;
            if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
            else { flip(); }
            setDragStart(null);
          }}
        >
          <AnimatePresence mode="wait">
            {!flipped ? (
              <motion.div
                key={`f-${mem.id}`}
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
                style={{ background: sc.bg, minHeight: 340 }}
              >
                {/* Background semester number */}
                <div
                  className="absolute -right-2 -bottom-6 font-heading font-black select-none pointer-events-none leading-none opacity-10"
                  style={{ fontSize: 'clamp(120px, 20vw, 220px)', color: sc.fg }}
                >
                  {mem.semester.toString().padStart(2, '0')}
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between" style={{ minHeight: 280 }}>
                  <div className="flex items-start justify-between">
                    <span className="px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: sc.accent, color: sc.fg }}>
                      {mem.categoryLabel}
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: `${sc.fg}50` }}>{mem.date}</span>
                  </div>

                  <div className="py-8">
                    <h3 className="font-heading font-black leading-tight mb-3"
                      style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: sc.fg, letterSpacing: '-0.02em' }}>
                      {mem.title}
                    </h3>
                    <p className="font-display text-sm leading-relaxed" style={{ color: `${sc.fg}70` }}>
                      {mem.caption}
                    </p>
                  </div>

                  <div className="flex items-center justify-between" style={{ borderTop: `1px solid ${sc.fg}15`, paddingTop: '1rem' }}>
                    <div className="flex items-center gap-1.5 font-mono text-[10px]" style={{ color: `${sc.fg}60` }}>
                      <RotateCcw className="w-3 h-3" />
                      Tap to reveal quote
                    </div>
                    <span className="font-mono text-[10px]" style={{ color: `${sc.fg}40` }}>Sem {mem.semester.toString().padStart(2, '0')}</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`b-${mem.id}`}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#171923]/8"
                style={{ background: '#171923', minHeight: 340 }}
              >
                <div className="relative z-10 flex flex-col justify-between" style={{ minHeight: 280 }}>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/30">Verified WhatsApp Quote</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  </div>

                  <div className="py-8">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider mb-3" style={{ color: sc.bg }}>
                      {mem.sender || 'CSE G1 Classmate'}
                    </div>
                    <blockquote className="font-serif text-xl sm:text-3xl italic text-[#FFF8ED] leading-relaxed">
                      "{mem.excerpt}"
                    </blockquote>
                    {mem.tanglishQuote && (
                      <p className="mt-4 font-hand text-2xl text-[#FFD76A] tracking-wide">
                        {mem.tanglishQuote} ✨
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,248,237,0.06)', paddingTop: '1rem' }}>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/30">
                      <RotateCcw className="w-3 h-3" />
                      Tap to flip back
                    </div>
                    <span className="font-mono text-[9px] text-white/20">{mem.tags?.[0]}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Reactions */}
          <div className="flex items-center gap-2">
            {[
              { icon: <Laugh className="w-4 h-4" />, count: cur.l, key: 'l' as const, color: '#FFD76A' },
              { icon: <Heart className="w-4 h-4" />, count: cur.h, key: 'h' as const, color: '#FF684A' },
              { icon: <Flame className="w-4 h-4" />, count: cur.f, key: 'f' as const, color: '#FF8C6B' },
            ].map((r) => (
              <button
                key={r.key}
                onClick={() => react(r.key)}
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs font-medium border transition-all hover:scale-105 active:scale-95"
                style={{ background: `${r.color}10`, borderColor: `${r.color}25`, color: r.color }}
              >
                {r.icon}
                <span>{r.count}</span>
              </button>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              type="button"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#171923]/15 hover:bg-[#171923]/5 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-[#171923]" />
            </button>
            <button
              onClick={next}
              type="button"
              className="flex items-center gap-2 px-5 h-10 rounded-full font-display font-bold text-sm transition-all hover:opacity-85 hover:scale-105"
              style={{ background: '#171923', color: '#FFF8ED' }}
            >
              Next Memory <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
