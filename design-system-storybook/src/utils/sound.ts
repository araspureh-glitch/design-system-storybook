/**
 * Sound Effects Utility using Web Audio API (Synthesized Synthesizer Sounds & Guitar Physical Modeling)
 * No external MP3 files needed!
 */

export type GuitarTonePreset = 'acoustic' | 'electric' | 'overdrive' | 'synth';

class SoundManager {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = true;
  private volume: number = 0.55; // Audible master volume
  private distortionCurve: Float32Array | null = null;

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

  private getDistortionCurve(amount: number = 50): Float32Array {
    if (this.distortionCurve) return this.distortionCurve;
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    this.distortionCurve = curve;
    return curve;
  }

  /** Guitar string pluck click sound for buttons and navigation */
  public playClick() {
    if (!this.isEnabled) return;
    try {
      this.playGuitarNote(330 + Math.random() * 200, 1.2, 0, 'acoustic');
    } catch (e) {
      // Ignore
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
   * Plucked Guitar Sound Engine supporting Acoustic, Electric Clean, Overdrive, and Synth presets
   */
  public playGuitarNote(
    freqOrMidi: number,
    duration: number = 2.0,
    stringIndex: number = 0,
    preset: GuitarTonePreset = 'acoustic'
  ) {
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
      const effectiveVol = Math.max(0.12, this.volume) * stringVolScale;

      masterGain.gain.setValueAtTime(effectiveVol, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Lowpass Filter for string damping
      const lowpass = ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      const maxCutoff = preset === 'electric' || preset === 'overdrive' ? 14000 : 9000;
      lowpass.frequency.setValueAtTime(Math.min(maxCutoff, freq * 12), now);
      lowpass.frequency.exponentialRampToValueAtTime(Math.min(2500, freq * 3), now + Math.min(0.4, duration));

      // Overdrive Distortion Effect Node if preset is overdrive
      let toneOutputNode: AudioNode = lowpass;
      if (preset === 'overdrive') {
        const waveshaper = ctx.createWaveShaper();
        waveshaper.curve = this.getDistortionCurve(60) as any;
        waveshaper.oversample = '4x';
        
        const cabFilter = ctx.createBiquadFilter();
        cabFilter.type = 'peaking';
        cabFilter.frequency.setValueAtTime(3200, now);
        cabFilter.Q.setValueAtTime(1.2, now);
        cabFilter.gain.setValueAtTime(6, now);

        lowpass.connect(waveshaper);
        waveshaper.connect(cabFilter);
        toneOutputNode = cabFilter;
      }

      // Wooden body resonance filter
      const bodyResonance = ctx.createBiquadFilter();
      bodyResonance.type = 'bandpass';
      bodyResonance.frequency.setValueAtTime(preset === 'electric' ? 400 : 160, now);
      bodyResonance.Q.setValueAtTime(1.8, now);

      const bodyGain = ctx.createGain();
      bodyGain.gain.setValueAtTime(0.3, now);

      // 1. Plectrum / Pick Pluck Transient (Attack noise burst)
      const noiseLen = Math.floor(ctx.sampleRate * (preset === 'synth' ? 0.005 : 0.015));
      const noiseBuf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < noiseLen; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (noiseLen * 0.3));
      }
      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = noiseBuf;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(effectiveVol * 0.6, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      noiseNode.connect(noiseGain);
      noiseGain.connect(masterGain);
      noiseNode.start(now);

      // 2. Harmonic Oscillators based on Tone Preset
      let harmonics = [
        { ratio: 1.0, type: 'sawtooth' as OscillatorType, vol: 0.8 },
        { ratio: 2.0, type: 'triangle' as OscillatorType, vol: 0.4 },
        { ratio: 3.0, type: 'sine' as OscillatorType, vol: 0.2 },
        { ratio: 4.0, type: 'sine' as OscillatorType, vol: 0.1 },
      ];

      if (preset === 'electric') {
        harmonics = [
          { ratio: 1.0, type: 'square' as OscillatorType, vol: 0.6 },
          { ratio: 2.0, type: 'sawtooth' as OscillatorType, vol: 0.4 },
          { ratio: 3.0, type: 'sine' as OscillatorType, vol: 0.3 },
          { ratio: 4.0, type: 'triangle' as OscillatorType, vol: 0.15 },
        ];
      } else if (preset === 'overdrive') {
        harmonics = [
          { ratio: 1.0, type: 'sawtooth' as OscillatorType, vol: 0.9 },
          { ratio: 2.0, type: 'square' as OscillatorType, vol: 0.5 },
          { ratio: 3.0, type: 'sawtooth' as OscillatorType, vol: 0.3 },
        ];
      } else if (preset === 'synth') {
        harmonics = [
          { ratio: 1.0, type: 'sawtooth' as OscillatorType, vol: 0.7 },
          { ratio: 2.0, type: 'sine' as OscillatorType, vol: 0.5 },
          { ratio: 3.0, type: 'square' as OscillatorType, vol: 0.2 },
        ];
      }

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

      toneOutputNode.connect(masterGain);
      toneOutputNode.connect(bodyResonance);
      bodyResonance.connect(bodyGain);
      bodyGain.connect(masterGain);

      masterGain.connect(ctx.destination);

    } catch (e) {
      console.warn("Audio playback exception:", e);
    }
  }

  /**
   * Realistic Piano Sound Engine (Web Audio API)
   * Plucks/strikes piano string with hammer attack envelope & acoustic body dampening
   */
  public playPianoNote(freqOrMidi: number, duration: number = 2.5) {
    if (!this.isEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      if (ctx.state === 'suspended') ctx.resume();
      const freq = freqOrMidi < 128 ? 440 * Math.pow(2, (freqOrMidi - 69) / 12) : freqOrMidi;
      const now = ctx.currentTime;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(this.volume * 0.7, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(Math.min(6000, freq * 6), now);
      filter.frequency.exponentialRampToValueAtTime(Math.min(1200, freq * 2), now + 0.5);

      const harmonics = [
        { mult: 1.0, vol: 0.8, type: 'sine' as OscillatorType },
        { mult: 2.0, vol: 0.35, type: 'triangle' as OscillatorType },
        { mult: 3.0, vol: 0.15, type: 'sine' as OscillatorType },
        { mult: 4.0, vol: 0.05, type: 'sine' as OscillatorType },
      ];

      harmonics.forEach(({ mult, vol: hVol, type }) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq * mult, now);

        oscGain.gain.setValueAtTime(0.001, now);
        oscGain.gain.linearRampToValueAtTime(hVol, now + 0.002);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + (duration / mult));

        osc.connect(oscGain);
        oscGain.connect(filter);

        osc.start(now);
        osc.stop(now + (duration / mult));
      });

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);
    } catch (e) {
      console.warn('Piano audio error:', e);
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
