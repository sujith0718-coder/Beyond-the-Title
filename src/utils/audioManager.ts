// Comprehensive Audio & Background Music Manager for Beyond the Title
// Handles background music (RATHINAMO-Piano-Cover.mp3) with smooth fade-in/out, volume control, and sound FX

class AudioManager {
  private bgAudio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 0.35; // Comfortable volume
  private listeners: Set<(state: AudioState) => void> = new Set();
  private audioContext: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.bgAudio = new Audio('/RATHINAMO-Piano-Cover.mp3');
      this.bgAudio.loop = true;
      this.bgAudio.volume = this.volume;
      this.bgAudio.preload = 'auto';

      this.bgAudio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.bgAudio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });
    }
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach((listener) => listener(state));
  }

  public subscribe(listener: (state: AudioState) => void) {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  public getState(): AudioState {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
    };
  }

  public async playMusic(fadeIn = true) {
    if (!this.bgAudio) return;
    try {
      if (fadeIn) {
        this.bgAudio.volume = 0;
        await this.bgAudio.play();
        this.fadeTo(this.isMuted ? 0 : this.volume, 2000);
      } else {
        this.bgAudio.volume = this.isMuted ? 0 : this.volume;
        await this.bgAudio.play();
      }
      this.isPlaying = true;
      this.notify();
    } catch {
      // Browser autoplay policy might require user gesture first
      this.isPlaying = false;
      this.notify();
    }
  }

  public pauseMusic(fadeOut = true) {
    if (!this.bgAudio || !this.isPlaying) return;
    if (fadeOut) {
      this.fadeTo(0, 1000, () => {
        this.bgAudio?.pause();
        this.isPlaying = false;
        this.notify();
      });
    } else {
      this.bgAudio.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pauseMusic(true);
    } else {
      this.playMusic(true);
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.bgAudio) {
      if (this.isMuted) {
        this.fadeTo(0, 400);
      } else {
        this.fadeTo(this.volume, 600);
        if (!this.isPlaying) {
          this.playMusic(true);
        }
      }
    }
    this.notify();
  }

  public setVolume(newVol: number) {
    this.volume = Math.max(0, Math.min(1, newVol));
    if (this.bgAudio && !this.isMuted) {
      this.bgAudio.volume = this.volume;
    }
    this.notify();
  }

  private fadeTo(targetVol: number, durationMs: number, onComplete?: () => void) {
    if (!this.bgAudio) return;
    const startVol = this.bgAudio.volume;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      if (this.bgAudio) {
        this.bgAudio.volume = startVol + (targetVol - startVol) * progress;
      }
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (onComplete) onComplete();
      }
    };
    requestAnimationFrame(step);
  }

  // --- Web Audio FX (Chimes, Clicks, Pings) ---
  private initAudioContext() {
    if (!this.audioContext && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioContext = new AudioCtx();
    }
    if (this.audioContext?.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  public playNotificationPing() {
    if (this.isMuted) return;
    try {
      this.initAudioContext();
      if (!this.audioContext) return;

      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now); // A5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    } catch {
      // ignore
    }
  }

  public playPop() {
    if (this.isMuted) return;
    try {
      this.initAudioContext();
      if (!this.audioContext) return;

      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.05);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.start(now);
      osc.stop(now + 0.07);
    } catch {
      // ignore
    }
  }

  public playUnlockChime() {
    if (this.isMuted) return;
    try {
      this.initAudioContext();
      if (!this.audioContext) return;

      const now = this.audioContext.currentTime;
      const chord = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Achievement Chord)
      chord.forEach((freq, i) => {
        const osc = this.audioContext!.createOscillator();
        const gain = this.audioContext!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0.05, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.6);

        osc.connect(gain);
        gain.connect(this.audioContext!.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.65);
      });
    } catch {
      // ignore
    }
  }
}

export interface AudioState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
}

export const audioMgr = new AudioManager();
