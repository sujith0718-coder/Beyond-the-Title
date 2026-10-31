import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Disc3, Play } from 'lucide-react';
import { audioMgr, AudioState } from '../utils/audioManager';

export const Navbar: React.FC = () => {
  const [audioState, setAudioState] = useState<AudioState>(audioMgr.getState());
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    const unsub = audioMgr.subscribe(setAudioState);
    return () => { window.removeEventListener('scroll', onScroll); unsub(); };
  }, []);

  const navLinks = [
    { label: 'Chat', href: '#chat-simulator' },
    { label: 'Worlds', href: '#three-worlds' },
    { label: 'Reps', href: '#representatives' },
    { label: 'Memories', href: '#memory-vault' },
    { label: 'Finale', href: '#finale' },
  ];

  const isPlaying = audioState.isPlaying && !audioState.isMuted;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#171923]/92 backdrop-blur-xl border-b border-white/8 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Beyond the Title">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-heading font-black text-sm"
            style={{ background: 'linear-gradient(135deg, #FFD76A, #FF684A)', color: '#171923' }}
          >
            G1
          </div>
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-sm text-white/90 group-hover:text-white transition-colors hidden sm:block">
              Beyond the Title
            </span>
            <span className="font-hand text-lg text-[#FFD76A] hidden lg:inline-block -rotate-2">
              • 81 strong ❤️
            </span>
          </div>
        </a>

        {/* Center nav — desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-lg font-display text-xs font-medium text-white/50 hover:text-white hover:bg-white/8 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: Music control */}
        <div className="flex items-center gap-2">
          {/* Mini music player */}
          <button
            onClick={() => audioMgr.togglePlay()}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            title={isPlaying ? 'Pause music' : 'Play music'}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isPlaying ? 'bg-[#FFD76A]' : 'bg-white/20'}`}>
              {isPlaying
                ? <Disc3 className="w-3 h-3 text-[#171923]" style={{ animation: 'spinSlow 4s linear infinite' }} />
                : <Play className="w-2.5 h-2.5 text-white ml-0.5" />
              }
            </div>
            <span className="font-mono text-[10px] text-white/40 hidden sm:inline">
              {isPlaying ? 'Rathinamae' : 'Play music'}
            </span>
            {/* EQ bars */}
            {isPlaying && (
              <div className="hidden sm:flex items-end gap-px h-3">
                {[0.4, 0.8, 0.5, 0.9, 0.6].map((h, i) => (
                  <span
                    key={i}
                    className="w-px rounded-full bg-[#FFD76A]"
                    style={{
                      height: `${h * 12}px`,
                      animation: `pulse 0.8s ease-in-out ${i * 0.12}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
            )}
          </button>

          {/* Mute toggle */}
          <button
            onClick={() => audioMgr.toggleMute()}
            type="button"
            className="p-2 rounded-full hover:bg-white/8 text-white/40 hover:text-white/80 transition-all"
            title={audioState.isMuted ? 'Unmute' : 'Mute'}
          >
            {audioState.isMuted
              ? <VolumeX className="w-4 h-4" />
              : <Volume2 className="w-4 h-4" />
            }
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-white/60"
            aria-label="Menu"
          >
            <div className="w-4.5 h-3.5 flex flex-col justify-between">
              <span className={`h-px w-full bg-current transition-all origin-center ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-px w-full bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-px w-full bg-current transition-all origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#171923]/98 border-t border-white/8"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg font-display text-sm font-medium text-white/60 hover:text-white hover:bg-white/6 transition-all"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
