import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Award, Laugh, Trophy, Heart } from 'lucide-react';

export const ClassmateMoments: React.FC = () => {
  const moments = [
    {
      title: 'Sujith’s C Code Exam Kit',
      category: 'Classmate Tradition',
      icon: Terminal,
      accent: 'text-sky-400',
      badge: 'B.E. CSE Tradition',
      text: `#include <stdio.h>\nRule 1: Keep calm and compile code.\nRule 2: If code runs on first try, check whether it's your PC.\nRule 3: One missing semicolon = Full emotional damage.\n\nconfidence = 100;\nfor(int bugs = 99; bugs > 0; bugs--) confidence++;\nprintf("Confidence Level : %d%%\\n", confidence);`,
      note: 'Shared by Sujith before practical evaluations to lighten the heavy exam stress.'
    },
    {
      title: 'Tharun’s Sticker & Meme Arsenal',
      category: 'Unrivalled Humour',
      icon: Laugh,
      accent: 'text-amber-400',
      badge: 'Class Legend',
      text: '“Nee kolandha.. Naan evlo paathurupen 😂”\nFrom the 81-passport photo family tree to hilarious movie reactions whenever extra classes were announced, Tharun kept the group smiling through the toughest weeks.',
      note: 'The unofficial morale officer of CSE G1.'
    },
    {
      title: 'Department Rank 1 & Rank 2',
      category: 'Academic Glory',
      icon: Trophy,
      accent: 'text-yellow-400',
      badge: 'CSEA Honors',
      text: 'Subisa Shree & Kalaiarasi secured Rank 1 and Rank 2 in academic excellence across the department. The whole class erupted in genuine, unanimous applause.',
      note: 'Demonstrating that G1 works hard and celebrates each other without jealousy.'
    },
    {
      title: 'National Kickboxing Gold (₹1 Lakh)',
      category: 'Sporting Milestone',
      icon: Award,
      accent: 'text-pink-400',
      badge: 'National Champion',
      text: 'Dharunish brought national honors to PSG Tech in kickboxing, followed immediately by 50 messages chanting: “Treat epo thala!? 🥊”',
      note: 'Celebrating achievements on and off the tech campus.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-mono-code mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>THE SPIRIT OF G1</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white mb-4">
            Moments That Made Us Smile
          </h2>
          <p className="text-slate-400 font-display text-base sm:text-lg">
            Because a class isn’t just defined by its representatives — it’s defined by the warm, quirky, brilliant people who fill the benches every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moments.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 sm:p-7 border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-lg bg-white/[0.04] ${m.accent}`}>
                      <m.icon className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-lg text-white">
                      {m.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-amber-300">
                    {m.badge}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-4 font-mono-code text-xs text-slate-200 whitespace-pre-line leading-relaxed">
                  {m.text}
                </div>
              </div>

              <div className="text-xs text-slate-400 font-light italic pt-3 border-t border-white/5">
                {m.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
