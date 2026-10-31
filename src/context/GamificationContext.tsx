import React, { createContext, useContext, useState } from 'react';
import { audioMgr } from '../utils/audioManager';

export interface MemoryToken {
  id: string;
  title: string;
  semester: number;
  icon: string;
  tagline: string;
  howToUnlock: string;
}

export const MEMORY_TOKENS: MemoryToken[] = [
  {
    id: 'token-genesis',
    title: 'The Inception Shard',
    semester: 1,
    icon: '✨',
    tagline: '13 Aug 2025: 81 strangers became CSE G1.',
    howToUnlock: 'Explore Day Zero in the Chat Simulator'
  },
  {
    id: 'token-library',
    title: 'PSG Reality Check',
    semester: 1,
    icon: '📚',
    tagline: '“Bcoz namma irukkuradhu PSG 😂”',
    howToUnlock: 'Replay the Library Hours scenario'
  },
  {
    id: 'token-auction',
    title: '₹30 Lakh Bidder',
    semester: 1,
    icon: '🧮',
    tagline: 'Y201 Row 1 Calculator Bidding War',
    howToUnlock: 'Trigger the Calculator Auction moment'
  },
  {
    id: 'token-moongil',
    title: 'Voice of the Batch',
    semester: 2,
    icon: '🎵',
    tagline: 'Moongil Thottam Melody Version ft. Sharvesh',
    howToUnlock: 'Play the simulated audio note'
  },
  {
    id: 'token-ooty',
    title: 'The Nilgiri Voyager',
    semester: 2,
    icon: '🚌',
    tagline: '21 Mar 2026: Radio Astronomy Centre & Karnataka Garden',
    howToUnlock: 'Travel to Semester 2 in Three Worlds'
  },
  {
    id: 'token-prank',
    title: 'April Fools Survivor',
    semester: 2,
    icon: '🃏',
    tagline: 'Saturday Compensation Class Panic',
    howToUnlock: 'Inspect the Saturday class prank'
  },
  {
    id: 'token-unity',
    title: 'VK Sir Pasanga',
    semester: 3,
    icon: '❤️‍🩹',
    tagline: 'The Sept 3 Turning Point: Let’s make him proud ✨',
    howToUnlock: 'Inspect the September 3 Manifesto'
  },
  {
    id: 'token-custodian',
    title: 'The Class Custodian',
    semester: 3,
    icon: '🏆',
    tagline: 'Honoured all six class representatives equally',
    howToUnlock: 'Inspect all 6 representatives'
  }
];

interface GamificationContextType {
  unlockedTokens: string[];
  unlockToken: (id: string) => void;
  isUnlocked: (id: string) => boolean;
  totalTokens: number;
  recentUnlocked: MemoryToken | null;
  clearRecentUnlocked: () => void;
  exploredChapters: number[];
  markChapterExplored: (sem: number) => void;
  easterEggCount: number;
  triggerEasterEgg: (eggName: string) => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const GamificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [unlockedTokens, setUnlockedTokens] = useState<string[]>(['token-genesis']);
  const [recentUnlocked, setRecentUnlocked] = useState<MemoryToken | null>(null);
  const [exploredChapters, setExploredChapters] = useState<number[]>([1]);
  const [easterEggCount, setEasterEggCount] = useState<number>(0);

  const unlockToken = (id: string) => {
    if (unlockedTokens.includes(id)) return;
    const token = MEMORY_TOKENS.find((t) => t.id === id);
    if (token) {
      setUnlockedTokens((prev) => [...prev, id]);
      setRecentUnlocked(token);
      audioMgr.playUnlockChime();

      setTimeout(() => {
        setRecentUnlocked(null);
      }, 4200);
    }
  };

  const isUnlocked = (id: string) => unlockedTokens.includes(id);

  const clearRecentUnlocked = () => setRecentUnlocked(null);

  const markChapterExplored = (sem: number) => {
    if (!exploredChapters.includes(sem)) {
      setExploredChapters((prev) => [...prev, sem]);
    }
    if (sem === 2) unlockToken('token-ooty');
    if (sem === 3) unlockToken('token-unity');
  };

  const triggerEasterEgg = (_eggName: string) => {
    setEasterEggCount((prev) => prev + 1);
    audioMgr.playUnlockChime();
  };

  return (
    <GamificationContext.Provider
      value={{
        unlockedTokens,
        unlockToken,
        isUnlocked,
        totalTokens: MEMORY_TOKENS.length,
        recentUnlocked,
        clearRecentUnlocked,
        exploredChapters,
        markChapterExplored,
        easterEggCount,
        triggerEasterEgg,
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within GamificationProvider');
  }
  return context;
};
