/**
 * Sound Effects Utility using Web Audio API (Synthesized Synthesizer Sounds & Guitar Physical Modeling)
 * No external MP3 files needed!
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = true;
  private volume: number = 0.3; // Default guitar audio volume

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
   * Realistic Guitar String Pluck Synthesizer (Web Audio API)
   * Simulates guitar acoustics with fundamental pitch, plucked noise transient,
   * harmonic overtones, lowpass decay damping, and wood body resonance.
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

      // Master gain for this note
      const masterNoteGain = ctx.createGain();
      const stringVolumeMultiplier = [1.2, 1.1, 1.0, 0.95, 0.9, 0.85][stringIndex % 6] || 1.0;
      masterNoteGain.gain.setValueAtTime(this.volume * stringVolumeMultiplier, now);
      masterNoteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Body Resonance Filter (simulating guitar wooden body box ~150Hz)
      const bodyFilter = ctx.createBiquadFilter();
      bodyFilter.type = 'bandpass';
      bodyFilter.frequency.setValueAtTime(180, now);
      bodyFilter.Q.setValueAtTime(1.5, now);

      const bodyGain = ctx.createGain();
      bodyGain.gain.setValueAtTime(0.25, now);

      // String Lowpass Damping Filter (higher harmonics decay faster, lower strings last longer)
      const stringDampFilter = ctx.createBiquadFilter();
      stringDampFilter.type = 'lowpass';
      const initialCutoff = Math.min(8000, freq * 8);
      const endCutoff = Math.min(1500, freq * 2);
      stringDampFilter.frequency.setValueAtTime(initialCutoff, now);
      stringDampFilter.frequency.exponentialRampToValueAtTime(endCutoff, now + Math.min(0.5, duration));

      // 1. Pluck Noise Attack Transient (plectrum / pick touch sound)
      const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(freq * 2, now);
      noiseFilter.Q.setValueAtTime(3.0, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.35, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterNoteGain);
      noiseSource.start(now);

      // 2. Fundamental & Harmonics Oscillators (Acoustic Pluck Synthesis)
      // Guitar strings have strong 1st, 2nd, 3rd, and 4th harmonics with pluck attack phase
      const harmonics = [
        { mult: 1.0, type: 'sawtooth' as OscillatorType, gain: 0.7, decay: duration },
        { mult: 2.0, type: 'triangle' as OscillatorType, gain: 0.35, decay: duration * 0.7 },
        { mult: 3.0, type: 'sine' as OscillatorType, gain: 0.2, decay: duration * 0.5 },
        { mult: 4.0, type: 'sine' as OscillatorType, gain: 0.1, decay: duration * 0.3 },
      ];

      harmonics.forEach(({ mult, type, gain: hGainVal, decay }) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq * mult, now);

        // Very slight pitch bend on string pluck release tension
        osc.frequency.exponentialRampToValueAtTime(freq * mult, now + 0.03);

        oscGain.gain.setValueAtTime(0.001, now);
        oscGain.gain.linearRampToValueAtTime(hGainVal, now + 0.004); // Instant attack
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + Math.min(decay, duration));

        osc.connect(oscGain);
        oscGain.connect(stringDampFilter);

        osc.start(now);
        osc.stop(now + Math.min(decay, duration));
      });

      // Connect String filter -> Body Resonance -> Master -> Audio Context Output
      stringDampFilter.connect(masterNoteGain);
      
      // Also send partial signal through body resonance filter
      stringDampFilter.connect(bodyFilter);
      bodyFilter.connect(bodyGain);
      bodyGain.connect(masterNoteGain);

      masterNoteGain.connect(ctx.destination);

    } catch (e) {
      console.warn("Audio playback error:", e);
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
