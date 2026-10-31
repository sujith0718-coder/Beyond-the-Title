import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, ShieldAlert, BookOpenCheck, Clock, CheckCircle2 } from 'lucide-react';

export const WorkBehindTheRole: React.FC = () => {
  const pillars = [
    {
      title: 'The Hall-Shifting Navigators',
      subtitle: '50+ Classroom & Lab Displacements',
      icon: MapPin,
      accent: 'text-sky-400',
      borderAccent: 'hover:border-sky-500/40',
      description:
        'Between J208, G301, Y201, 3AI Lab, AIR Lab, SCPS Lab, and CC Lab on the 3rd floor of the library, PSG Tech campus is vast. When teachers swapped hours at 7:30 AM, our reps tested the rooms, unlocked doors, and posted updates before anyone walked to the wrong block.',
      verifiedFact: 'Managed morning hall checks from Day 1 to Semester 3 across all 4 departments.'
    },
    {
      title: 'The Trusted Treasurers',
      subtitle: 'Flawless Accounting for 81 Students',
      icon: DollarSign,
      accent: 'text-amber-400',
      borderAccent: 'hover:border-amber-500/40',
      description:
        'Handling money for a class of 81 is notoriously difficult. From ₹550 English book bulk orders in Sem 1, to ₹140 Chemistry lab manuals, to ₹1,450 Ooty IV bus fees, every GPay screenshot and cash envelope was verified, balanced, and submitted without a single rupee misplaced.',
      verifiedFact: 'Total class funds coordinated across 3 semesters: Over ₹1,70,000 without discrepancies.'
    },
    {
      title: 'The Faculty Advocates',
      subtitle: 'Pleading for Marks & Second Chances',
      icon: BookOpenCheck,
      accent: 'text-emerald-400',
      borderAccent: 'hover:border-emerald-500/40',
      description:
        'When 15+ students scored 5 or below on C Lab PAT portal tests, Sharvesh went to sir’s cabin to negotiate re-evaluations. When Discrete Structures tutorials overwhelmed students, Abinaya secured re-test dates. They took the heat so classmates had a second chance.',
      verifiedFact: 'Negotiated re-tests and assignment extensions in C, Discrete Maths, and Linear Algebra.'
    },
    {
      title: 'The Disciplinary Shield',
      subtitle: 'Protecting Students from Penalties',
      icon: ShieldAlert,
      accent: 'text-pink-400',
      borderAccent: 'hover:border-pink-500/40',
      description:
        'Reps repeatedly cautioned the class before inspections: wearing ID cards properly, dupattas for lab sessions, not roaming during free periods, and staying out of the academic block before 10:15 AM during audit weeks to prevent HoD reprimands.',
      verifiedFact: 'Protected classmates from attendance cuts, dress code citations, and audit issues.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5 bg-[#080c14]/60">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-mono-code mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>UNSEEN DEDICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white mb-4">
            The Work Behind the Role
          </h2>
          <p className="text-slate-300 font-display text-base sm:text-lg italic max-w-2xl mx-auto">
            &ldquo;Not every contribution becomes a big moment. Sometimes, the smallest updates make the biggest difference to an ordinary college day.&rdquo;
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-panel p-6 sm:p-8 border border-white/5 ${p.borderAccent} transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-white/[0.04] border border-white/10 ${p.accent}`}>
                    <p.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                      {p.title}
                    </h3>
                    <span className="text-xs font-mono-code text-slate-400 block">
                      {p.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono-code text-amber-300/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{p.verifiedFact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Thought Banner */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            While the rest of us simply walked into classrooms, six people arrived 15 minutes early, stayed back after the last bell, answered messages late at night, and spoke on our behalf. That is what lies <span className="text-amber-300 font-medium">Beyond the Title</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
