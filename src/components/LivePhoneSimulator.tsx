import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ShieldCheck, Play, Pause, Shuffle } from 'lucide-react';
import { audioMgr } from '../utils/audioManager';
import { useGamification } from '../context/GamificationContext';

interface LiveMessage {
  id: string;
  sender: string;
  time: string;
  text: string;
  isRep?: boolean;
  avatarColor: string;
  reactions?: string[];
  audioTrack?: boolean;
}

interface Scenario {
  id: string;
  title: string;
  sem: string;
  date: string;
  tag: string;
  tagBg: string;
  tagText: string;
  punchline: string;
  messages: LiveMessage[];
}

const scenarios: Scenario[] = [
  {
    id: 'naming',
    title: 'Group Name War',
    sem: 'Sem 1',
    date: '13 Aug 2025',
    tag: 'Day Zero',
    tagBg: '#315CFF',
    tagText: '#FFF8ED',
    punchline: '"Parama Padi daa 😂" — 81 strangers brainstorming their 4-year group name.',
    messages: [
      { id: '1', sender: 'Vishnupriya T', time: '8:19 PM', text: 'Hey guys.. I\'ve got suggestions: Infinite loopers, Kinda from python, Platinum crew, PSG PRODUCTS Loading.. Choose one pah!', isRep: true, avatarColor: '#FFD76A', reactions: ['🔥', '😂'] },
      { id: '2', sender: 'Classmate', time: '8:25 PM', text: 'Guyss what about "Parama Padi daa" 😂', avatarColor: '#555', reactions: ['😂'] },
      { id: '3', sender: 'Rithik Loganathan', time: '8:26 PM', text: 'Athula onnu illa keela potru 😅', isRep: true, avatarColor: '#315CFF', reactions: ['🤣'] },
      { id: '4', sender: 'Rithik Loganathan', time: '9:04 PM', text: 'Well guys, This is our group for the next 4 years! May this be a stress buster. Lets have a fun and chill journey!! 🎉', isRep: true, avatarColor: '#315CFF', reactions: ['❤️', '🤝'] },
    ]
  },
  {
    id: 'library',
    title: 'PSG Reality Check',
    sem: 'Sem 1',
    date: '15 Aug 2025',
    tag: 'Freshers',
    tagBg: '#D8F36A',
    tagText: '#171923',
    punchline: '"Bcoz namma irukkuradhu PSG 😂" — The answer that explained everything.',
    messages: [
      { id: 'l1', sender: 'Classmate', time: '5:37 PM', text: 'Does library hour has mandatory attendance? I thought those were free periods 🤦🏼‍♂️', avatarColor: '#555' },
      { id: 'l2', sender: 'Rithik Loganathan', time: '5:44 PM', text: 'I have passed on the message to tutor! Once i receive info will intimate', isRep: true, avatarColor: '#315CFF' },
      { id: 'l3', sender: 'Rithik Loganathan', time: '6:30 PM', text: 'Guys, library hours are free hours. No attendance. We can use it for any productive purpose.', isRep: true, avatarColor: '#315CFF', reactions: ['🥳', '🙌'] },
      { id: 'l4', sender: 'Classmate', time: '8:25 PM', text: 'Schl la teacher leave na maths teacher vara mari yaarum vara matangalae...?', avatarColor: '#555' },
      { id: 'l5', sender: 'Rithik Loganathan', time: '8:26 PM', text: 'Ithu oru nalla kelvi 😅... anaa ithu clg vara maatanga... Bcoz namma irukkuradhu PSG 😂', isRep: true, avatarColor: '#315CFF', reactions: ['😂', '💯'] },
    ]
  },
  {
    id: 'auction',
    title: '₹30L Calculator Auction',
    sem: 'Sem 1',
    date: '15 Oct 2025',
    tag: 'Comedy Classic',
    tagBg: '#FF684A',
    tagText: '#FFF8ED',
    punchline: 'When an fx-991ES calculator turned Y201 Row 1 into Wall Street.',
    messages: [
      { id: 'a1', sender: 'Vishnuvardhan N', time: '12:06 PM', text: 'Calculator found in chemistry lab.... Contact kavin for recovery', avatarColor: '#7B4FFF' },
      { id: 'a2', sender: 'Vishnuvardhan N', time: '12:10 PM', text: 'If nobody comes, auction begins at Y201 1 ROW. Bidders welcome base price 50 rupees', avatarColor: '#7B4FFF' },
      { id: 'a3', sender: 'Prem', time: '12:18 PM', text: '55', avatarColor: '#10b981' },
      { id: 'a4', sender: 'Rehaan', time: '12:18 PM', text: '60', avatarColor: '#0ea5e9' },
      { id: 'a5', sender: 'Santhosh', time: '12:19 PM', text: '30,00,000', avatarColor: '#ef4444' },
      { id: 'a6', sender: 'Rehaan', time: '12:19 PM', text: 'Sold 🗣🗣🗣', avatarColor: '#0ea5e9', reactions: ['💀', '🤣'] },
      { id: 'a7', sender: 'Vishnupriya T', time: '12:23 PM', text: 'Auction venue change panikonga😅! First batch go to English lab!', isRep: true, avatarColor: '#FFD76A', reactions: ['😂'] },
    ]
  },
  {
    id: 'moongil',
    title: 'Moongil Thottam ft. Sharvesh',
    sem: 'Sem 2',
    date: '28 Feb 2026',
    tag: 'Singing Legend',
    tagBg: '#7B4FFF',
    tagText: '#FFF8ED',
    punchline: 'The voice note leak that became our class\'s unofficial happy anthem.',
    messages: [
      { id: 'm1', sender: 'Sharvesh PG', time: '10:54 AM', text: 'Moongil thottam-Melody version ft. Sharvesh 🎵 [Audio Note - 0:42]', isRep: true, avatarColor: '#7B4FFF', audioTrack: true, reactions: ['🎤', '❤️‍🔥'] },
      { id: 'm2', sender: 'Rithik Loganathan', time: '10:55 AM', text: 'Isai Kadavul Sharvesh 🙏🏻☠️', isRep: true, avatarColor: '#315CFF', reactions: ['💀'] },
      { id: 'm3', sender: 'Tharun .', time: '10:56 AM', text: '😭😭😭😭 50 shades of Moongil Thottam ft. Sharvesh will be released soon', avatarColor: '#f59e0b', reactions: ['🤣'] },
    ]
  },
  {
    id: 'aprilfools',
    title: 'Saturday Class Prank',
    sem: 'Sem 2',
    date: '1 Apr 2026',
    tag: 'April Fools',
    tagBg: '#FF684A',
    tagText: '#FFF8ED',
    punchline: '"Pala per saabam unna summa vidathuuu da ☠️" — The prank that got everyone.',
    messages: [
      { id: 'af1', sender: 'Sharvesh PG', time: '4:40 PM', text: 'Guys, since this week\'s Tuesday and Friday are holidays, compensation classes will be held on April 4th (working Saturday). Attendance is mandatory.', isRep: true, avatarColor: '#7B4FFF', reactions: ['😱', '💔'] },
      { id: 'af2', sender: 'Vishnupriya T', time: '4:41 PM', text: 'April fools ah thambi!? Official circular pls', isRep: true, avatarColor: '#FFD76A' },
      { id: 'af3', sender: 'Sharvesh PG', time: '4:43 PM', text: 'Therinja seriiii 😂 I did my part! Dedicated to those planning to go home for Good Friday', isRep: true, avatarColor: '#7B4FFF', reactions: ['🤣', '👏'] },
      { id: 'af4', sender: 'Rithik Loganathan', time: '4:45 PM', text: 'Pala per saabam unna summa vidathuuu da ☠️', isRep: true, avatarColor: '#315CFF', reactions: ['😂'] },
    ]
  },
  {
    id: 'sept3',
    title: 'The Sept 3 Turning Point',
    sem: 'Sem 3',
    date: '3 Sept 2026',
    tag: 'Emotional Anchor',
    tagBg: '#D8F36A',
    tagText: '#171923',
    punchline: '"VK sir pasanga da namma... Let\'s make him proud ✨" — Class solidarity.',
    messages: [
      { id: 's1', sender: 'Abinayasri R M', time: '6:36 PM', text: 'Hi guys.. Pls ellarum knjm namma sir soldra badi behave panalaama.. for sir\'s sake. He is saying "iniyum complain vandha I will step down"... His responsibility is only to teach us, but he is doing beyond that only for us. Let\'s be together and win together. Let\'s make him proud. ✨', isRep: true, avatarColor: '#D8F36A', reactions: ['❤️‍🩹', '🫂'] },
      { id: 's2', sender: 'Deepa T', time: '7:28 PM', text: 'Veerakumar Sir is a very good tutor and supportive too. Everyone work together and make him feel proud.', avatarColor: '#f59e0b' },
      { id: 's3', sender: 'Rithik Loganathan', time: '7:32 PM', text: 'Grp feels wholesome guyss for the first time 🫶🏻', isRep: true, avatarColor: '#315CFF', reactions: ['❤️'] },
      { id: 's4', sender: 'Sachin Pranav M', time: '7:57 PM', text: 'Really happy to see all this. Kandipa ithu nadakum..', isRep: true, avatarColor: '#FF684A', reactions: ['🤝'] },
    ]
  },
];

export const LivePhoneSimulator: React.FC = () => {
  const [activeId, setActiveId] = useState('naming');
  const [notification, setNotification] = useState<string | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [userReactions, setUserReactions] = useState<Record<string, string>>({});
  const { unlockToken } = useGamification();

  const active = scenarios.find((s) => s.id === activeId) || scenarios[0];

  const tokenMap: Record<string, string> = {
    naming: 'token-genesis', library: 'token-library',
    auction: 'token-auction', moongil: 'token-moongil',
    aprilfools: 'token-prank', sept3: 'token-unity',
  };

  const selectScenario = (sc: Scenario) => {
    audioMgr.playNotificationPing?.();
    setActiveId(sc.id);
    setIsAudioPlaying(false);
    if (tokenMap[sc.id]) unlockToken(tokenMap[sc.id]);
    setNotification(`${sc.messages[0].sender}: ${sc.messages[0].text.slice(0, 60)}...`);
    setTimeout(() => setNotification(null), 3500);
  };

  const shuffle = () => {
    const others = scenarios.filter((s) => s.id !== activeId);
    selectScenario(others[Math.floor(Math.random() * others.length)]);
  };

  const react = (msgId: string, emoji: string) => {
    setUserReactions((prev) => ({ ...prev, [msgId]: prev[msgId] === emoji ? '' : emoji }));
  };

  return (
    <section id="chat-simulator" className="py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#171923' }}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[100px]"
          style={{ background: 'rgba(49,92,255,0.08)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="pill pill-cobalt mb-3 inline-flex">Live Chat Archive</span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#FFF8ED]" style={{ letterSpacing: '-0.03em' }}>
              The Phone That<br />
              <span style={{ color: '#FFD76A' }}>Never Slept.</span>
            </h2>
          </div>
          <button
            onClick={shuffle}
            type="button"
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 text-sm font-display font-medium transition-all"
          >
            <Shuffle className="w-4 h-4" />
            Random Moment
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Left: Scenario selector */}
          <div>
            {/* Scenario pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {scenarios.map((sc) => {
                const isActive = sc.id === activeId;
                return (
                  <button
                    key={sc.id}
                    onClick={() => selectScenario(sc)}
                    type="button"
                    className="px-4 py-2 rounded-full text-xs font-mono font-medium transition-all border"
                    style={isActive
                      ? { background: sc.tagBg, color: sc.tagText, borderColor: sc.tagBg, transform: 'scale(1.05)' }
                      : { background: 'rgba(255,248,237,0.04)', color: 'rgba(255,248,237,0.5)', borderColor: 'rgba(255,248,237,0.08)' }
                    }
                  >
                    {sc.title}
                  </button>
                );
              })}
            </div>

            {/* Active scenario context panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/8 p-6"
                style={{ background: 'rgba(255,248,237,0.03)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold"
                    style={{ background: active.tagBg, color: active.tagText }}
                  >
                    {active.tag}
                  </span>
                  <span className="font-mono text-[10px] text-white/30">{active.sem} • {active.date}</span>
                </div>

                <p className="font-serif text-base text-amber-100/90 italic mb-0 leading-relaxed">
                  "{active.punchline}"
                </p>

                {/* Feel-good sticky note */}
                <div className="mt-4 pt-3 border-t border-white/10 font-hand text-xl text-[#FFD76A] flex items-center gap-2">
                  <span>📌 Class Note:</span>
                  <span className="opacity-90">
                    {active.id === 'naming' && 'The birth of our iconic group — Parama Padi daa! ❤️'}
                    {active.id === 'library' && 'Helping 81 freshers navigate PSG Tech on Day 3'}
                    {active.id === 'auction' && 'Legendary Y201 humor when exams were stressing us out 😂'}
                    {active.id === 'moongil' && 'Classic Moongil canteen conversations after 4th hour ☕'}
                    {active.id === 'aprilfools' && 'Mini heart-attack before someone noticed the date 💀'}
                    {active.id === 'sept3' && 'The moment G1 stood together as one family ✨'}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: 'Memories', val: '7' },
                { label: 'Semesters', val: '3' },
                { label: 'Representatives', val: '6' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 border border-white/6 text-center" style={{ background: 'rgba(255,248,237,0.02)' }}>
                  <div className="font-heading font-black text-2xl text-[#FFD76A]">{s.val}</div>
                  <div className="font-mono text-[10px] text-white/30 mt-0.5 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="relative mx-auto w-full max-w-[340px]">
            {/* Notification */}
            <AnimatePresence>
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -top-16 left-0 right-0 z-30 p-3 rounded-2xl border border-[#315CFF]/30 backdrop-blur-xl flex items-start gap-2.5"
                  style={{ background: 'rgba(23,25,35,0.96)' }}
                >
                  <div className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                    <Bell className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[9px] text-[#25D366] font-bold mb-0.5">CSE G1 Students 📈</div>
                    <p className="font-display text-xs text-white/70 line-clamp-1">{notification}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phone frame */}
            <div className="rounded-[38px] p-2.5 shadow-2xl" style={{ background: 'linear-gradient(160deg, #2a2d3e 0%, #1a1c28 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="rounded-[30px] overflow-hidden flex flex-col" style={{ minHeight: 580, background: '#0b1014' }}>
                {/* WhatsApp header */}
                <div className="flex items-center gap-2.5 px-3.5 py-3 border-b border-white/5" style={{ background: '#1F2C34' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-black text-xs"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: 'white' }}>
                    G1
                  </div>
                  <div className="flex-1">
                    <div className="text-[12px] font-bold text-white font-display">CSE G1 Students 📈</div>
                    <div className="text-[10px] font-mono" style={{ color: '#25D366' }}>81 members • {active.sem}</div>
                  </div>
                  <div className="font-mono text-[9px] text-white/30">{active.date}</div>
                </div>

                {/* Messages */}
                <div className="flex-1 px-3 py-3 space-y-2.5 overflow-y-auto">
                  {/* Date pill */}
                  <div className="flex justify-center">
                    <span className="px-3 py-0.5 rounded-full font-mono text-[9px] text-white/30 border border-white/6" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      {active.date}
                    </span>
                  </div>

                  <AnimatePresence mode="popLayout">
                    {active.messages.map((m, i) => (
                      <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        className="flex flex-col gap-0.5 max-w-[88%]"
                      >
                        <div className={`p-2.5 rounded-xl ${m.isRep ? 'bubble-rep' : 'bubble-them'}`}>
                          {/* Sender */}
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-[10px] font-bold" style={{ color: m.isRep ? '#315CFF' : '#FFD76A' }}>
                                {m.sender}
                              </span>
                              {m.isRep && (
                                <span className="inline-flex items-center gap-0.5 px-1 py-px rounded text-[7px] font-mono font-bold"
                                  style={{ background: 'rgba(49,92,255,0.2)', color: '#315CFF', border: '1px solid rgba(49,92,255,0.3)' }}>
                                  <ShieldCheck className="w-2 h-2" /> REP
                                </span>
                              )}
                            </div>
                            <span className="font-mono text-[9px] text-white/25">{m.time}</span>
                          </div>

                          {/* Message text */}
                          <p className="text-[11px] text-white/85 font-display font-light leading-relaxed">{m.text}</p>

                          {/* Audio note */}
                          {m.audioTrack && (
                            <div className="mt-2 p-2 rounded-lg flex items-center gap-2.5 border border-[#7B4FFF]/30" style={{ background: 'rgba(123,79,255,0.1)' }}>
                              <button
                                onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                                type="button"
                                className="w-7 h-7 rounded-full flex items-center justify-center"
                                style={{ background: '#7B4FFF' }}
                              >
                                {isAudioPlaying ? <Pause className="w-3 h-3 text-white" /> : <Play className="w-3 h-3 text-white ml-0.5" />}
                              </button>
                              <div className="flex-1">
                                <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(123,79,255,0.2)' }}>
                                  <div className={`h-full rounded-full transition-all ${isAudioPlaying ? 'w-2/3' : 'w-1/5'}`} style={{ background: '#7B4FFF' }} />
                                </div>
                                <span className="font-mono text-[9px] text-[#7B4FFF] mt-0.5 block">
                                  {isAudioPlaying ? 'Playing...' : 'Moongil Thottam • 0:42'}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Reactions row */}
                          <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/5">
                            <div className="flex gap-0.5">
                              {m.reactions?.map((r, ri) => (
                                <span key={ri} className="text-xs px-1 rounded-full" style={{ background: 'rgba(0,0,0,0.3)' }}>{r}</span>
                              ))}
                              {userReactions[m.id] && (
                                <span className="text-xs px-1.5 rounded-full font-bold animate-pulse" style={{ background: 'rgba(49,92,255,0.25)', color: '#315CFF' }}>
                                  {userReactions[m.id]}
                                </span>
                              )}
                            </div>
                            <div className="flex gap-0.5 opacity-50 hover:opacity-100 transition-opacity">
                              {['😂', '❤️', '🔥'].map((emoji) => (
                                <button key={emoji} onClick={() => react(m.id, emoji)} type="button" className="text-xs hover:scale-125 transition-transform">{emoji}</button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Bottom bar */}
                <div className="px-3.5 py-2.5 border-t border-white/5" style={{ background: '#1F2C34' }}>
                  <p className="font-mono text-[9px] text-[#FFD76A] italic text-center">{active.punchline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
