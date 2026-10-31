import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Heart } from 'lucide-react';
import { audioMgr } from '../utils/audioManager';
import { useGamification } from '../context/GamificationContext';

const reps = [
  {
    id: 'rithik',
    name: 'Rithik Loganathan',
    initial: 'RL',
    sem: '01',
    badge: 'The Pioneer',
    bg: '#315CFF',
    fg: '#FFF8ED',
    quote: '"Well guys, This is our group for the next 4 years! May this be a stress buster. Lets have a fun and chill journey!!"',
    action: 'Coordinated ₹550 English book bulk orders. Resolved library attendance confusion for 81 freshers. Shared all class numbers personally.',
    tribute: 'Made the first terrifying days of college feel manageable. Always answered DMs patiently.',
  },
  {
    id: 'vishnupriya',
    name: 'Vishnupriya T',
    initial: 'VT',
    sem: '01',
    badge: 'The Catalyst',
    bg: '#FFD76A',
    fg: '#171923',
    quote: '"Hey guys.. I\'ve got suggestions: Infinite loopers, Kinda from python, Platinum crew, PSG PRODUCTS Loading.. Choose one pah!"',
    action: 'Created the class WhatsApp group at 12:21 PM on Day 1. Shared SIGMA229 printing codes. Followed up with faculty on portions.',
    tribute: 'Laid the keystrokes for our digital community. Always followed through on every small detail.',
  },
  {
    id: 'sharvesh',
    name: 'Sharvesh PG',
    initial: 'SP',
    sem: '02',
    badge: 'The Voice',
    bg: '#7B4FFF',
    fg: '#FFF8ED',
    quote: '"Na bayangarama Kenji kettu kammiyana mark vanguna avungaluku mattum ketturukkenn..."',
    action: 'Organized the Ooty IV bus logistics. Pleaded with faculty for C lab marks. Sang "Moongil Thottam" for the group.',
    tribute: 'Turned every stressful situation into a memory. Stood up for classmates who were struggling.',
  },
  {
    id: 'thurika',
    name: 'Thurika G',
    initial: 'TG',
    sem: '02',
    badge: 'The Guardian',
    bg: '#FF684A',
    fg: '#171923',
    quote: '"Tomorrow in the lab exam, whatever you know, write it. Don\'t ask Anusha anything."',
    action: 'Managed 50+ classroom & lab shift changes. Distributed original 12th marksheets. Guided EP lab CA2 strategy.',
    tribute: 'Never let a deadline slip. Guided us with precision when schedules were chaotic.',
  },
  {
    id: 'abinayasri',
    name: 'Abinayasri R M',
    initial: 'AR',
    sem: '03',
    badge: 'The Soul',
    bg: '#D8F36A',
    fg: '#171923',
    quote: '"VK sir pasanga da namma... Let\'s be together and win together. Let\'s make him proud. ✨"',
    action: 'Penned the Sept 3 Turning Point message. Centralized all subject notes on Google Drive. Welcomed lateral entry friends into the group.',
    tribute: 'Speaks with genuine care. Her message on Sept 3 reminded all of us why our class matters.',
  },
  {
    id: 'sachin',
    name: 'Sachin Pranav M',
    initial: 'SM',
    sem: '03',
    badge: 'The Anchor',
    bg: '#171923',
    fg: '#FFF8ED',
    quote: '"Me and Abinaya spoke with sir. You guys can text or call sir regarding any official matters."',
    action: 'Coordinated CSEA events & hackathon registrations. Launched Design Thinking Club drive. Resolved timetable clashes.',
    tribute: 'Calm, clear, dependable. Gave direction exactly when the class needed it most.',
  },
];

export const TheSixReps: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [inspected, setInspected] = useState<string[]>([]);
  const [repHearts, setRepHearts] = useState<Record<string, number>>({
    rithik: 38,
    vishnupriya: 42,
    sharvesh: 39,
    thurika: 46,
    abinayasri: 53,
    sachin: 48,
  });
  const { unlockToken, triggerEasterEgg } = useGamification();

  const sendHeart = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRepHearts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    audioMgr.playPop?.();
  };

  const select = (rep: typeof reps[0]) => {
    audioMgr.playPop?.();
    setActiveId(rep.id === activeId ? null : rep.id);
    if (!inspected.includes(rep.id)) {
      const next = [...inspected, rep.id];
      setInspected(next);
      if (next.length >= 6) unlockToken('token-custodian');
    }
  };

  const active = reps.find((r) => r.id === activeId);

  return (
    <section id="representatives" className="relative" style={{ background: '#171923' }}>
      {/* Divider */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,248,237,0.08), transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="pill pill-ivory mb-3 inline-flex">The Six Representatives</span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#FFF8ED]" style={{ letterSpacing: '-0.03em' }}>
              Six People.<br />
              <span style={{ color: '#FFD76A' }}>One Class Family.</span>
            </h2>
          </div>
          <div className="self-start sm:self-auto">
            <div className="font-mono text-xs text-white/25 mb-1">{inspected.length} / 6 honoured</div>
            <div className="flex gap-1">
              {reps.map((r) => (
                <div key={r.id} className="w-2 h-2 rounded-full transition-all" style={{ background: inspected.includes(r.id) ? r.bg : 'rgba(255,248,237,0.1)' }} />
              ))}
            </div>
          </div>
        </div>

        {/* Six name grid — asymmetric, equal importance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {reps.map((rep) => {
            const isActive = rep.id === activeId;
            const isDone = inspected.includes(rep.id);
            return (
              <motion.button
                key={rep.id}
                onClick={() => select(rep)}
                type="button"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex flex-col items-center gap-3 p-5 rounded-3xl text-center border transition-all duration-300"
                style={{
                  background: isActive ? rep.bg : isDone ? `${rep.bg}12` : 'rgba(255,248,237,0.03)',
                  borderColor: isActive ? rep.bg : isDone ? `${rep.bg}30` : 'rgba(255,248,237,0.06)',
                  transform: isActive ? 'scale(1.04)' : undefined,
                }}
              >
                {/* Avatar circle */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-black text-sm transition-all"
                  style={{ background: isActive ? 'rgba(255,255,255,0.2)' : `${rep.bg}20`, color: isActive ? rep.fg : rep.bg }}
                >
                  {rep.initial}
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider mb-1" style={{ color: isActive ? `${rep.fg}70` : 'rgba(255,248,237,0.3)' }}>
                    Sem {rep.sem}
                  </div>
                  <div className="font-heading font-bold text-xs leading-tight" style={{ color: isActive ? rep.fg : '#FFF8ED' }}>
                    {rep.name}
                  </div>
                  <div
                    className="text-[9px] font-mono mt-1.5 px-2 py-0.5 rounded-full inline-block"
                    style={{ background: isActive ? 'rgba(255,255,255,0.15)' : `${rep.bg}15`, color: isActive ? rep.fg : rep.bg }}
                  >
                    {rep.badge}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence>
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, height: 0, y: 10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div
                className="mt-2 rounded-3xl p-8 sm:p-10 relative overflow-hidden"
                style={{ background: active.bg }}
              >
                {/* Big initial behind */}
                <div
                  className="absolute -right-4 -top-4 font-heading font-black opacity-10 select-none pointer-events-none leading-none"
                  style={{ fontSize: 'clamp(100px, 18vw, 200px)', color: active.fg }}
                >
                  {active.initial}
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr] gap-8">
                  {/* Quote */}
                  <div className="flex flex-col gap-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: `${active.fg}60` }}>Signature Words</span>
                    <blockquote className="font-serif text-lg sm:text-2xl italic leading-snug" style={{ color: active.fg }}>
                      <Quote className="w-4 h-4 inline mr-1 opacity-40 -mt-1" />
                      {active.quote}
                    </blockquote>
                  </div>

                  {/* Action */}
                  <div className="flex flex-col gap-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: `${active.fg}60` }}>Behind the Scenes</span>
                    <p className="font-display text-xs sm:text-sm leading-relaxed" style={{ color: `${active.fg}90` }}>{active.action}</p>
                  </div>

                  {/* Tribute */}
                  <div className="flex flex-col gap-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: `${active.fg}60` }}>What G1 Remembers</span>
                    <p className="font-serif text-xs sm:text-sm leading-relaxed italic" style={{ color: `${active.fg}95` }}>"{active.tribute}"</p>
                    <span className="font-hand text-lg mt-1" style={{ color: `${active.fg}80` }}>
                      ~ from your grateful classmates ❤️
                    </span>
                  </div>
                </div>

                {/* Bottom: name + Send Love heart button + close */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mt-8 pt-6" style={{ borderTop: `1px solid ${active.fg}15` }}>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-wider mb-1" style={{ color: `${active.fg}60` }}>Semester {active.sem} Representative</div>
                    <div className="font-heading font-black text-2xl sm:text-4xl" style={{ color: active.fg }}>{active.name}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={(e) => sendHeart(active.id, e)}
                      type="button"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm shadow-lg transition-transform"
                      style={{ background: active.fg, color: active.bg }}
                      title="Tap to send appreciation"
                    >
                      <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
                      <span>Send Love</span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-black/10">
                        {repHearts[active.id] || 0}
                      </span>
                    </motion.button>

                    <button
                      onClick={() => setActiveId(null)}
                      type="button"
                      className="px-4 py-2 rounded-full font-mono text-xs transition-all hover:opacity-75"
                      style={{ background: `${active.fg}15`, color: active.fg }}
                    >
                      Close ×
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Easter egg prompt */}
        {inspected.length === 6 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center"
          >
            <button
              onClick={() => { triggerEasterEgg('All Six Honoured'); alert('🏆 Class Custodian Unlocked!\n\nYou\'ve honoured all six representatives.\n\n"PSG PRODUCTS Loading... Parama Padi daa! 📈❤️"'); }}
              type="button"
              className="font-mono text-xs text-[#FFD76A] hover:underline"
            >
              ✨ All six honoured — click for the class secret
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
