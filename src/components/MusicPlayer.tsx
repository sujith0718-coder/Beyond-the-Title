import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX, Disc3 } from 'lucide-react';
import { audioMgr, AudioState } from '../utils/audioManager';

export const MusicPlayer: React.FC = () => {
  const [state, setState] = useState<AudioState>(audioMgr.getState());
  const [showVol, setShowVol] = useState(false);

  React.useEffect(() => {
    const unsub = audioMgr.subscribe(setState);
    return unsub;
  }, []);

  const isPlaying = state.isPlaying && !state.isMuted;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-2.5 pl-2 pr-3 py-2 rounded-full border"
        style={{
          background: 'rgba(23,25,35,0.92)',
          backdropFilter: 'blur(20px)',
          borderColor: isPlaying ? 'rgba(255,215,106,0.35)' : 'rgba(255,248,237,0.08)',
          boxShadow: isPlaying ? '0 0 24px rgba(255,215,106,0.12)' : 'none',
        }}
      >
        {/* Play/Pause disc */}
        <button
          onClick={() => audioMgr.togglePlay()}
          type="button"
          className="relative w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: isPlaying ? '#FFD76A' : 'rgba(255,248,237,0.1)' }}
          title={isPlaying ? 'Pause' : 'Play Rathinamae'}
        >
          {isPlaying
            ? <Disc3 className="w-4 h-4 text-[#171923]" style={{ animation: 'spinSlow 3s linear infinite' }} />
            : <Play className="w-3.5 h-3.5 text-white/70 ml-0.5" />
          }
        </button>

        {/* Track info + EQ — desktop only */}
        <div className="hidden sm:flex flex-col gap-px cursor-pointer" onClick={() => audioMgr.togglePlay()}>
          <span className="font-heading font-bold text-[11px] text-white leading-none">Rathinamae</span>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[9px] text-white/30">Piano Cover</span>
            {isPlaying && (
              <div className="flex items-end gap-px h-2.5">
                {[0.5, 0.8, 0.4, 0.9, 0.6].map((h, i) => (
                  <span
                    key={i}
                    className="w-0.5 rounded-full"
                    style={{
                      height: `${h * 10}px`,
                      background: '#FFD76A',
                      animation: `pulse ${0.6 + i * 0.1}s ease-in-out infinite alternate`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Volume control */}
        <div
          className="relative flex items-center gap-1"
          onMouseEnter={() => setShowVol(true)}
          onMouseLeave={() => setShowVol(false)}
        >
          <button
            onClick={() => audioMgr.toggleMute()}
            type="button"
            className="p-1.5 rounded-full hover:bg-white/8 transition-all"
            title={state.isMuted ? 'Unmute' : 'Mute'}
          >
            {state.isMuted
              ? <VolumeX className="w-3.5 h-3.5 text-white/30" />
              : <Volume2 className="w-3.5 h-3.5 text-white/50" />
            }
          </button>

          <AnimatePresence>
            {showVol && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 64 }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden"
              >
                <input
                  type="range"
                  min="0" max="1" step="0.05"
                  value={state.isMuted ? 0 : state.volume}
                  onChange={(e) => audioMgr.setVolume(parseFloat(e.target.value))}
                  className="w-16 h-0.5 bg-white/20 rounded appearance-none cursor-pointer accent-[#FFD76A]"
                  title="Volume"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
