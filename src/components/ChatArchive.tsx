import React, { useState } from 'react';
import { MessageSquareQuote, Play, Pause, ShieldCheck, Info, Sparkles, Filter } from 'lucide-react';
import { chatThreads, ChatThread } from '../data/chatSnippets';
import { soundCtrl } from '../utils/sound';

export const ChatArchive: React.FC = () => {
  const [selectedThreadId, setSelectedThreadId] = useState<string>(chatThreads[0].id);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeSemFilter, setActiveSemFilter] = useState<number | 'all'>('all');

  const activeThread = chatThreads.find((t) => t.id === selectedThreadId) || chatThreads[0];

  const filteredThreads = chatThreads.filter((t) => {
    if (activeSemFilter === 'all') return true;
    return t.semester === activeSemFilter;
  });

  const handleThreadSelect = (thread: ChatThread) => {
    setSelectedThreadId(thread.id);
    setIsPlayingAudio(false);
    soundCtrl.playChime(493.88); // B4 chime
  };

  const toggleMockAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    if (!isPlayingAudio) {
      soundCtrl.playMemoryRevealSound();
    }
  };

  return (
    <section id="archive" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-mono-code mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>THE REAL MOMENTS • VERIFIED CHAT ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white mb-4">
            Voices from the Archive
          </h2>
          <p className="text-slate-400 font-display text-base sm:text-lg">
            Real WhatsApp conversations from our class group. No exaggerated dialogue. No fabricated quotations. Just authentic moments that defined our journey.
          </p>
        </div>

        {/* Semester Filter Pill */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-xs text-slate-500 font-mono-code flex items-center gap-1 mr-2">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {(['all', 1, 2, 3] as const).map((sem) => (
            <button
              key={sem}
              onClick={() => setActiveSemFilter(sem)}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all ${
                activeSemFilter === sem
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                  : 'bg-slate-900/40 text-slate-400 border border-white/5 hover:text-white'
              }`}
            >
              {sem === 'all' ? 'All Threads' : `Semester ${sem}`}
            </button>
          ))}
        </div>

        {/* Two Column Layout: Thread Selector on Left, Chat View on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Thread List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-2 px-1">
              Select Conversation ({filteredThreads.length})
            </div>
            {filteredThreads.map((thread) => {
              const isSelected = thread.id === activeThread.id;
              return (
                <button
                  key={thread.id}
                  onClick={() => handleThreadSelect(thread)}
                  type="button"
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 border ${
                    isSelected
                      ? 'bg-slate-800/90 border-amber-400/40 text-white shadow-lg shadow-black/40 scale-[1.01]'
                      : 'bg-slate-900/40 border-white/5 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono-code px-2 py-0.5 rounded-md bg-white/5 text-amber-300">
                      Sem {thread.semester} • {thread.date}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    )}
                  </div>
                  <h4 className="font-display font-semibold text-sm sm:text-base text-white mb-1">
                    {thread.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1 font-light">
                    {thread.topic}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Interactive Chat Bubble View */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-5 sm:p-7 border border-white/10 relative">
              {/* WhatsApp Mock Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold font-serif-title">
                    G1
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">
                      {activeThread.title}
                    </h3>
                    <span className="text-xs text-emerald-400 font-mono-code">
                      {activeThread.date} • Verified Transcript
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-[11px] font-mono-code">
                  Sem {activeThread.semester}
                </div>
              </div>

              {/* Editorial Caption Alert */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/20 text-xs text-amber-200/90 mb-6 flex items-start gap-2.5 leading-relaxed font-light">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-amber-300 mb-0.5">Editorial Context:</strong>
                  {activeThread.editorialCaption}
                </div>
              </div>

              {/* Chat Messages Container */}
              <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
                {activeThread.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-3.5 sm:p-4 rounded-xl relative text-left ${
                      msg.isRep
                        ? 'chat-bubble-rep border border-emerald-400/30'
                        : 'chat-bubble-received'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-mono-code font-bold ${msg.isRep ? 'text-emerald-300' : 'text-amber-400'}`}>
                          {msg.sender}
                        </span>
                        {msg.isRep && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono-code">
                            <ShieldCheck className="w-2.5 h-2.5" /> REP
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono-code shrink-0">
                        {msg.time}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-100 font-light leading-relaxed whitespace-pre-line">
                      {msg.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Special Audio Note Mock for Sharvesh or Sujith */}
              {(activeThread.id === 'thread-april-fools' || activeThread.id.includes('moongil')) && (
                <div className="mt-6 p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleMockAudio}
                      type="button"
                      className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-transform active:scale-95 shadow-md shadow-purple-600/30"
                    >
                      {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                    <div>
                      <span className="text-xs font-mono-code text-purple-300 block font-semibold">
                        Audio Note • Moongil Thottam (Sharvesh Cover)
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {isPlayingAudio ? 'Playing simulated class audio note...' : '0:42 • Click to hear chime snippet'}
                      </span>
                    </div>
                  </div>
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
