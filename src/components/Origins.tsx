import React, { useState } from 'react';
import { Sparkles, Clock, CheckCircle2, HeartHandshake } from 'lucide-react';
import { soundCtrl } from '../utils/sound';

export const Origins: React.FC = () => {
  const [selectedNameVote, setSelectedNameVote] = useState<string | null>('Parama Padi daa 😂');

  const namesList = [
    { name: 'Kinda from python', author: 'Group Poll', votes: 18 },
    { name: 'Parama Padi daa 😂', author: 'Classmate Suggestion', votes: 45 },
    { name: 'Infinite loopers', author: 'Early Suggestion', votes: 12 },
    { name: 'Platinum crew', author: 'Early Suggestion', votes: 14 },
    { name: 'Gossip gurus', author: 'Early Suggestion', votes: 8 },
    { name: 'PSG PRODUCTS Loading..', author: 'Early Suggestion', votes: 21 },
    { name: 'Cse payaluga 😅', author: 'Casual Banter', votes: 32 }
  ];

  const handleVote = (name: string) => {
    setSelectedNameVote(name);
    soundCtrl.playChime(523.25);
  };

  return (
    <section id="origins" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-mono-code mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>13 AUGUST 2025 • DAY ZERO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white mb-4">
            The Journey Begins
          </h2>
          <p className="text-slate-400 font-display text-base sm:text-lg">
            Before roll numbers were memorized or permanent ID cards arrived, 81 strangers met in a WhatsApp chat. Here is how our class started communicating.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: The Birth of the Group & Hrithik's Message */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center gap-3 text-xs font-mono-code text-slate-400 mb-4 pb-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>12:21 PM • 13 August 2025</span>
                <span className="ml-auto text-amber-300/80">Group Created</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                A Classroom with No Walls
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Vishnupriya created the group at 12:21 PM. By late evening, students from across Tamil Nadu and beyond were adding each other. Nobody knew who was a hosteller or day scholar yet, but the group quickly became the heartbeat of our college lives.
              </p>

              {/* Verified WhatsApp Bubble */}
              <div className="chat-bubble-received p-4 sm:p-5 relative border-l-4 border-l-emerald-400 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-xs sm:text-sm text-emerald-400 font-mono-code">
                    Rithik Loganathan (Semester 1 Rep)
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono-code">9:04 pm</span>
                </div>
                <p className="text-sm sm:text-base text-slate-100 font-light leading-relaxed">
                  &ldquo;Well guys, This is our group for the next 4 years! Feel free to share your thoughts!! May this group be a stress buster. You can use this group if you have doubts also!!! Lets have a fun and chill journey!! 🎉&rdquo;
                </p>
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                  <span>The manifesto that guided us for three full semesters</span>
                </div>
              </div>
            </div>

            {/* Induction report & Library facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5">
                <div className="text-amber-400 font-mono-code text-xs mb-1">THE FORMALITY</div>
                <div className="text-base font-bold text-white mb-2">Induction Report: 4-5 Pages</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Vishnupriya confirmed the rules with faculty: name, roll no on first page, stick files optional.
                </p>
              </div>
              <div className="glass-panel p-5">
                <div className="text-emerald-400 font-mono-code text-xs mb-1">THE REALITY CHECK</div>
                <div className="text-base font-bold text-white mb-2">&ldquo;Namma Irukradhu PSG&rdquo;</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When freshers feared missing library biometric attendance, Hrithik clarified free hours culture.
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Interactive Group Name Brainstorm */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-mono-code text-amber-300">INTERACTIVE MEMORY</div>
                  <h3 className="text-xl font-bold text-white font-display">The Name Brainstorm</h3>
                </div>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>

              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-light">
                Vishnupriya posted the original list of creative names on Day 1 at 8:19 PM. Vote for your favourite memory below:
              </p>

              {/* Name Options */}
              <div className="space-y-2.5">
                {namesList.map((item) => {
                  const isSelected = selectedNameVote === item.name;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => handleVote(item.name)}
                      className={`w-full p-3.5 rounded-xl text-left transition-all duration-200 flex items-center justify-between border ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400/50 text-white shadow-md shadow-amber-500/10'
                          : 'bg-slate-900/40 border-white/5 text-slate-300 hover:bg-slate-800/40 hover:border-white/10'
                      }`}
                    >
                      <div>
                        <div className="font-display font-semibold text-sm sm:text-base flex items-center gap-2">
                          <span>{item.name}</span>
                          {isSelected && <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold">Class Favourite</span>}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono-code">
                          {item.author}
                        </div>
                      </div>
                      <div className="text-xs font-mono-code text-slate-400 flex items-center gap-1.5">
                        <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Reaction Note */}
              <div className="mt-6 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-400 italic text-center">
                &ldquo;Eat 5 star do nothing 😁👍🏻&rdquo; — The prevailing sentiment that night.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
