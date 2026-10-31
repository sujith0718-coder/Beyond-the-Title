import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { audioMgr } from '../utils/audioManager';

interface CinematicOpeningProps {
  onEnter: () => void;
}

const words = ['BEYOND', 'THE', 'TITLE.'];
const wordColors = ['text-ivory', 'text-butter', 'text-coral'];

export const CinematicOpening: React.FC<CinematicOpeningProps> = ({ onEnter }) => {
  const [phase, setPhase] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [entered, setEntered] = useState(false);
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 1800);
    const t4 = setTimeout(() => setPhase(4), 2600);

    const onMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      const cx = (e.clientX / window.innerWidth - 0.5) * 60;
      const cy = (e.clientY / window.innerHeight - 0.5) * 30;
      mouseX.set(cx);
      mouseY.set(cy);
    };
    window.addEventListener('mousemove', onMove);

    return () => {
      clearTimeout(t1); clearTimeout(t2);
      clearTimeout(t3); clearTimeout(t4);
      window.removeEventListener('mousemove', onMove);
    };
  }, [mouseX, mouseY]);

  const handleEnter = () => {
    if (entered) return;
    setEntered(true);
    audioMgr.playMusic(true);
    audioMgr.playUnlockChime();
    setTimeout(onEnter, 400);
  };

  const toggleMute = () => {
    audioMgr.toggleMute();
    setIsMuted((m) => !m);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#171923] overflow-hidden select-none cursor-default"
      style={{ perspective: '1200px' }}
    >
      {/* ── ANIMATED BACKGROUND BLOBS ── */}
      <motion.div
        className="absolute rounded-full blur-[120px] pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(49,92,255,0.22) 0%, transparent 70%)',
          x: springX,
          y: springY,
          top: '10%', left: '0%',
        }}
      />
      <motion.div
        className="absolute rounded-full blur-[140px] pointer-events-none"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(255,104,74,0.18) 0%, transparent 70%)',
          x: springX,
          y: springY,
          bottom: '5%', right: '-5%',
        }}
      />
      <motion.div
        className="absolute rounded-full blur-[100px] pointer-events-none"
        style={{
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(255,215,106,0.14) 0%, transparent 70%)',
          top: '40%', left: '60%',
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── FLOATING GRID LINES ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,248,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,248,237,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
      />

      {/* ── CORNER LABEL ── */}
      <div className="absolute top-6 left-6 z-20">
        <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
          CSE G1 • PSG Tech • 2025–29
        </span>
      </div>

      {/* ── SOUND TOGGLE ── */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleMute}
          type="button"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          {!isMuted ? (
            <><Volume2 className="w-3.5 h-3.5 text-[#FFD76A]" /><span>Audio on</span></>
          ) : (
            <><VolumeX className="w-3.5 h-3.5" /><span>Muted</span></>
          )}
        </button>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-5xl w-full px-6 text-center flex flex-col items-center">

        {/* Pre-title label */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="pill pill-cobalt">
                A tribute to six class representatives
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MEGA TITLE — word by word */}
        <div className="flex flex-col items-center gap-0 leading-none mb-6">
          {words.map((word, wi) => (
            <AnimatePresence key={word}>
              {phase >= wi + 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 40, skewY: 3 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: wi * 0.05 }}
                  className="overflow-hidden"
                >
                  <span
                    className={`font-heading font-black block ${wordColors[wi]}`}
                    style={{ fontSize: 'clamp(3.5rem, 13vw, 9.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
                  >
                    {word}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Quote line & Heartfelt note */}
        <AnimatePresence>
          {phase >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              <p className="font-serif italic text-lg sm:text-2xl text-amber-100/80 font-normal max-w-lg leading-relaxed">
                "Some roles last for a semester.{' '}
                <span className="text-[#FFD76A] not-italic font-medium">The bond lasts a lifetime.</span>"
              </p>

              {/* Sweet handwritten dedication */}
              <div className="font-hand text-2xl sm:text-3xl text-[#FFD76A]/90 rotate-[-1.5deg] tracking-wide flex items-center gap-2">
                <span>With love from all 81 classmates in CSE G1</span>
                <span className="text-xl">💛</span>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={handleEnter}
                type="button"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full font-heading font-bold text-[#171923] text-base sm:text-lg shadow-2xl transition-all"
                style={{
                  background: 'linear-gradient(135deg, #FFD76A 0%, #FF684A 100%)',
                  boxShadow: '0 12px 35px rgba(255, 104, 74, 0.35)',
                }}
              >
                <span>Step Into Our Memories</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                {/* Glow ring */}
                <span className="absolute inset-0 rounded-full animate-pulse-ring opacity-60" />
              </motion.button>

              {/* Gentle hint */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="flex items-center gap-2 pt-2 text-white/40 text-xs font-display font-medium"
              >
                <span>🎵 Best experienced with sound on</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip */}
      {phase < 4 && (
        <button
          onClick={() => setPhase(4)}
          type="button"
          className="absolute bottom-6 font-mono text-xs text-white/25 hover:text-white/50 transition-colors tracking-widest uppercase"
        >
          Skip →
        </button>
      )}

      {/* Bottom marquee ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/5 h-8 flex items-center bg-white/[0.02]">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array(3).fill(null).map((_, i) => (
            <span key={i} className="font-mono text-[10px] text-white/20 tracking-[0.25em] uppercase mx-8">
              Beyond the Title • CSE G1 • PSG College of Technology • Three Semesters • Six Representatives •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
