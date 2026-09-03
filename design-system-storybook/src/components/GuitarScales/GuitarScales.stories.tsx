import type { Meta, StoryObj } from '@storybook/react';
import { GuitarScales } from './GuitarScales';

const meta: Meta<typeof GuitarScales> = {
  title: 'audio/Guitar Scales Visualizer',
  component: GuitarScales,
  parameters: {
    docs: {
      description: {
        component:
          'Interactive Guitar Fretboard & Scales Audio Visualizer built with Web Audio API physical modeling synth sound.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    initialRootKey: {
      control: 'select',
      options: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
      description: 'Root key of the scale',
    },
    initialScaleId: {
      control: 'select',
      options: [
        'pentatonic-minor',
        'pentatonic-major',
        'blues',
        'major',
        'natural-minor',
        'harmonic-minor',
        'melodic-minor',
        'dorian',
        'phrygian',
        'lydian',
        'mixolydian',
        'locrian',
        'phrygian-dominant',
        'hirajoshi',
        'chromatic',
      ],
      description: 'Music scale or mode',
    },
    initialTuningId: {
      control: 'select',
      options: ['standard', 'drop-d', 'half-step-down', 'open-d', 'open-g', 'dadgad'],
      description: 'Guitar tuning configuration',
    },
    initialFrets: {
      control: 'select',
      options: [12, 15, 21, 24],
      description: 'Number of frets visible on fretboard',
    },
    displayMode: {
      control: 'radio',
      options: ['notes', 'intervals'],
      description: 'Label mode for scale notes on fretboard',
    },
    soundEnabled: {
      control: 'boolean',
      description: 'Enable audio playback by default',
    },
    volume: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
      description: 'Synthesizer audio output volume',
    },
    bpm: {
      control: { type: 'range', min: 60, max: 240, step: 10 },
      description: 'Scale playback tempo in Beats Per Minute (BPM)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GuitarScales>;

export const DefaultPentatonicMinor: Story = {
  args: {
    initialRootKey: 'A',
    initialScaleId: 'pentatonic-minor',
    initialTuningId: 'standard',
    initialFrets: 15,
    displayMode: 'notes',
    soundEnabled: true,
    volume: 0.4,
    bpm: 120,
  },
};

export const CMajorScale: Story = {
  args: {
    initialRootKey: 'C',
    initialScaleId: 'major',
    initialTuningId: 'standard',
    initialFrets: 15,
    displayMode: 'intervals',
    soundEnabled: true,
    volume: 0.4,
    bpm: 130,
  },
};

export const EBluesScale: Story = {
  args: {
    initialRootKey: 'E',
    initialScaleId: 'blues',
    initialTuningId: 'standard',
    initialFrets: 15,
    displayMode: 'notes',
    soundEnabled: true,
    volume: 0.4,
    bpm: 110,
  },
};

export const AHarmonicMinor: Story = {
  args: {
    initialRootKey: 'A',
    initialScaleId: 'harmonic-minor',
    initialTuningId: 'standard',
    initialFrets: 15,
    displayMode: 'intervals',
    soundEnabled: true,
    volume: 0.4,
    bpm: 140,
  },
};

export const DropDTuning: Story = {
  args: {
    initialRootKey: 'D',
    initialScaleId: 'pentatonic-minor',
    initialTuningId: 'drop-d',
    initialFrets: 15,
    displayMode: 'notes',
    soundEnabled: true,
    volume: 0.4,
    bpm: 120,
  },
};

export const FullFretboard24Frets: Story = {
  args: {
    initialRootKey: 'E',
    initialScaleId: 'dorian',
    initialTuningId: 'standard',
    initialFrets: 24,
    displayMode: 'notes',
    soundEnabled: true,
    volume: 0.4,
    bpm: 150,
  },
};

export const ExoticJapaneseHirajoshi: Story = {
  args: {
    initialRootKey: 'E',
    initialScaleId: 'hirajoshi',
    initialTuningId: 'standard',
    initialFrets: 15,
    displayMode: 'intervals',
    soundEnabled: true,
    volume: 0.4,
    bpm: 100,
  },
};
