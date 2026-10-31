import React, { useState } from 'react';
import { CinematicOpening } from './components/CinematicOpening';
import { Navbar } from './components/Navbar';
import { LivePhoneSimulator } from './components/LivePhoneSimulator';
import { ThreeWorlds } from './components/ThreeWorlds';
import { TheSixReps } from './components/TheSixReps';
import { InteractiveMemoryDeck } from './components/InteractiveMemoryDeck';
import { CinematicFinale } from './components/CinematicFinale';
import { MusicPlayer } from './components/MusicPlayer';
import { MemoryTokenBanner } from './components/MemoryTokenBanner';
import { GamificationProvider } from './context/GamificationContext';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <GamificationProvider>
      <div style={{ background: '#171923', minHeight: '100vh', overflowX: 'hidden' }}>
        {!hasEntered ? (
          <CinematicOpening onEnter={() => setHasEntered(true)} />
        ) : (
          <div style={{ animation: 'fadeIn 0.5s ease both' }}>
            <Navbar />
            <main>
              <div id="chat-simulator">
                <LivePhoneSimulator />
              </div>
              <div id="three-worlds">
                <ThreeWorlds />
              </div>
              <div id="representatives">
                <TheSixReps />
              </div>
              <div id="memory-vault">
                <InteractiveMemoryDeck />
              </div>
              <div id="finale">
                <CinematicFinale />
              </div>
            </main>
            <MusicPlayer />
            <MemoryTokenBanner />
          </div>
        )}
      </div>
    </GamificationProvider>
  );
};

export default App;
