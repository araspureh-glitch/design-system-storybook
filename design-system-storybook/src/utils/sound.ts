/**
 * Sound Effects Utility using Web Audio API (Synthesized Synthesizer Sounds & Guitar Physical Modeling)
 * No external MP3 files needed!
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = true;
  private volume: number = 0.5; // Default loud audible guitar volume

  public getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public ensureAudioUnlocked(): Promise<void> {
    const ctx = this.getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      return ctx.resume().then(() => {}, () => {});
    }
    return Promise.resolve();
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    if (enabled) {
      this.ensureAudioUnlocked();
    }
  }

  public getEnabled(): boolean {
    return this.isEnabled;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  public getVolume(): number {
    return this.volume;
  }

  /** Subtle crisp click sound for buttons and navigation */
  public playClick() {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(this.volume * 0.8, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {
      // Ignore audio autoplay restrictions
    }
  }

  /** Soft hover pop sound for interactive elements */
  public playHover() {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(480, ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(this.volume * 0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } catch (e) {
      // Ignore
    }
  }

  /** Modern toggle switch or checkbox state change sound */
  public playToggle(isOn: boolean = true) {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const startFreq = isOn ? 400 : 600;
      const endFreq = isOn ? 750 : 300;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(this.volume * 0.6, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch (e) {
      // Ignore
    }
  }

  /** Gentle success / notification chime */
  public playSuccess() {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 major triad

      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + index * 0.06);

        gain.gain.setValueAtTime(this.volume * 0.5, now + index * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.06 + 0.15);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + index * 0.06);
        osc.stop(now + index * 0.06 + 0.15);
      });
    } catch (e) {
      // Ignore
    }
  }

  /**
   * Realistic Plucked Guitar Sound Engine (Web Audio API)
   * Plays on EVERY click attached to any fret or string!
   */
  public playGuitarNote(freqOrMidi: number, duration: number = 2.0, stringIndex: number = 0) {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const freq = freqOrMidi < 128 ? 440 * Math.pow(2, (freqOrMidi - 69) / 12) : freqOrMidi;
      const now = ctx.currentTime;

      // Master output gain
      const masterGain = ctx.createGain();
      const stringVolScale = [1.3, 1.2, 1.1, 1.0, 0.95, 0.9][stringIndex % 6] || 1.0;
      const effectiveVol = Math.max(0.1, this.volume) * stringVolScale;

      masterGain.gain.setValueAtTime(effectiveVol, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Lowpass Filter for natural string damping
      const lowpass = ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(Math.min(10000, freq * 10), now);
      lowpass.frequency.exponentialRampToValueAtTime(Math.min(2000, freq * 3), now + Math.min(0.4, duration));

      // Wooden body resonance filter
      const bodyResonance = ctx.createBiquadFilter();
      bodyResonance.type = 'bandpass';
      bodyResonance.frequency.setValueAtTime(160, now);
      bodyResonance.Q.setValueAtTime(2.0, now);

      const bodyGain = ctx.createGain();
      bodyGain.gain.setValueAtTime(0.3, now);

      // 1. Plectrum / Pick Pluck Transient (Attack noise burst)
      const noiseLen = Math.floor(ctx.sampleRate * 0.015); // 15ms noise attack
      const noiseBuf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < noiseLen; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (noiseLen * 0.3));
      }
      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = noiseBuf;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(effectiveVol * 0.5, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      noiseNode.connect(noiseGain);
      noiseGain.connect(masterGain);
      noiseNode.start(now);

      // 2. Harmonic Oscillators (Sub-bass, Fundamental, Overtones)
      const harmonics = [
        { ratio: 1.0, type: 'sawtooth' as OscillatorType, vol: 0.8 },
        { ratio: 2.0, type: 'triangle' as OscillatorType, vol: 0.4 },
        { ratio: 3.0, type: 'sine' as OscillatorType, vol: 0.2 },
        { ratio: 4.0, type: 'sine' as OscillatorType, vol: 0.1 },
      ];

      harmonics.forEach(({ ratio, type, vol: hVol }) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq * ratio, now);

        oscGain.gain.setValueAtTime(0.001, now);
        oscGain.gain.linearRampToValueAtTime(hVol, now + 0.003); // Instant attack
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + (duration / ratio));

        osc.connect(oscGain);
        oscGain.connect(lowpass);

        osc.start(now);
        osc.stop(now + (duration / ratio));
      });

      lowpass.connect(masterGain);
      lowpass.connect(bodyResonance);
      bodyResonance.connect(bodyGain);
      bodyGain.connect(masterGain);

      masterGain.connect(ctx.destination);

    } catch (e) {
      console.warn("Audio playback exception:", e);
    }
  }

  /** Real / Synthesized cat meow sound effect */
  public playMeow() {
    if (!this.isEnabled) return;
    try {
      const audio = new Audio('https://cdn.freesound.org/previews/415/415209_5121236-lq.mp3');
      audio.volume = Math.min(1, this.volume * 3);
      audio.play().catch(() => {
        this.playSynthMeow();
      });
    } catch (e) {
      this.playSynthMeow();
    }
  }

  private playSynthMeow() {
    const ctx = this.getAudioContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.4);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(this.volume * 2, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {}
  }
}

export const soundFx = new SoundManager();
