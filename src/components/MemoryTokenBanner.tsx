import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Sparkles, Lock } from 'lucide-react';
import { useGamification, MEMORY_TOKENS } from '../context/GamificationContext';

const tokenColors: Record<number, string> = { 1: '#315CFF', 2: '#FF684A', 3: '#D8F36A' };

export const MemoryTokenBanner: React.FC = () => {
  const { recentUnlocked, clearRecentUnlocked, unlockedTokens, totalTokens } = useGamification();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Live unlock toast */}
      <AnimatePresence>
        {recentUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: -60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.92 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-2xl max-w-sm w-[calc(100%-2rem)]"
            style={{ background: 'rgba(23,25,35,0.96)', backdropFilter: 'blur(24px)', borderColor: `${tokenColors[recentUnlocked.semester]}50` }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl"
              style={{ background: `${tokenColors[recentUnlocked.semester]}15`, border: `1px solid ${tokenColors[recentUnlocked.semester]}30` }}>
              {recentUnlocked.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[9px] uppercase tracking-widest font-bold mb-0.5" style={{ color: tokenColors[recentUnlocked.semester] }}>
                Memory Shard Unlocked!
              </div>
              <div className="font-heading font-bold text-sm text-[#FFF8ED] truncate">{recentUnlocked.title}</div>
              <div className="font-display text-[11px] text-white/40 truncate">{recentUnlocked.tagline}</div>
            </div>
            <button onClick={clearRecentUnlocked} type="button" className="p-1 rounded-full hover:bg-white/8 text-white/30 hover:text-white/70 shrink-0">
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating vault pill — bottom left */}
      <div className="fixed bottom-5 left-5 z-40">
        <motion.button
          onClick={() => setOpen(true)}
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full border shadow-lg transition-all"
          style={{
            background: 'rgba(23,25,35,0.92)',
            backdropFilter: 'blur(20px)',
            borderColor: unlockedTokens.length === totalTokens ? 'rgba(216,243,106,0.4)' : 'rgba(255,248,237,0.1)',
          }}
        >
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#FFD76A' }}>
            <Trophy className="w-3 h-3 text-[#171923]" />
          </div>
          <span className="font-mono text-[11px] font-bold" style={{ color: '#FFD76A' }}>
            {unlockedTokens.length}/{totalTokens}
          </span>
          <span className="font-mono text-[10px] text-white/30 hidden sm:inline">Shards</span>
        </motion.button>
      </div>

      {/* Vault modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(23,25,35,0.92)', backdropFilter: 'blur(16px)' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl border border-white/8 p-7 sm:p-9"
              style={{ background: '#1A1D28' }}
            >
              <button onClick={() => setOpen(false)} type="button"
                className="absolute top-5 right-5 p-2 rounded-full border border-white/8 hover:bg-white/8 text-white/40 hover:text-white/70 transition-all">
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2.5 mb-1">
                <Sparkles className="w-4 h-4 text-[#FFD76A]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Archive Vault</span>
              </div>
              <h3 className="font-heading font-black text-2xl text-[#FFF8ED] mb-1">Memory Shards</h3>
              <p className="font-display text-xs text-white/30 mb-7">
                Explore the website to unlock all {totalTokens} shards — {unlockedTokens.length} collected so far.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MEMORY_TOKENS.map((token) => {
                  const isUnlocked = unlockedTokens.includes(token.id);
                  const color = tokenColors[token.semester];
                  return (
                    <div
                      key={token.id}
                      className="p-4 rounded-2xl border transition-all"
                      style={isUnlocked
                        ? { background: `${color}10`, borderColor: `${color}25` }
                        : { background: 'rgba(255,248,237,0.02)', borderColor: 'rgba(255,248,237,0.05)' }
                      }
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl">{isUnlocked ? token.icon : <Lock className="w-5 h-5 text-white/15" />}</span>
                        <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${color}15`, color }}>
                          Sem {token.semester.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <div className="font-heading font-bold text-sm text-[#FFF8ED] mb-0.5">
                        {isUnlocked ? token.title : 'Locked'}
                      </div>
                      <div className="font-display text-[11px] text-white/35 line-clamp-2">
                        {isUnlocked ? token.tagline : token.howToUnlock}
                      </div>
                    </div>
                  );
                })}
              </div>

              {unlockedTokens.length === totalTokens && (
                <div className="mt-5 p-4 rounded-2xl text-center" style={{ background: 'rgba(216,243,106,0.08)', border: '1px solid rgba(216,243,106,0.2)' }}>
                  <p className="font-heading font-bold text-sm" style={{ color: '#D8F36A' }}>
                    🏆 You are a true Keeper of G1 Memories!
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
