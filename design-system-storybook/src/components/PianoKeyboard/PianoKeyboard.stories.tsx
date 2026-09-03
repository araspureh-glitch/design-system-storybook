import type { Meta, StoryObj } from '@storybook/react';
import { PianoKeyboard } from './PianoKeyboard';

const meta: Meta<typeof PianoKeyboard> = {
  title: 'audio/Piano Keyboard Synthesizer',
  component: PianoKeyboard,
  parameters: {
    docs: {
      description: {
        component: 'Interactive 2-Octave Piano Keyboard Synthesizer built with Web Audio API.',
      },
    },
  },
  argTypes: {
    volume: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
      description: 'Audio output volume',
    },
    highlightRoot: {
      control: 'select',
      options: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
      description: 'Highlight root key',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PianoKeyboard>;

export const DefaultCPiano: Story = {
  args: {
    volume: 0.5,
    highlightRoot: 'C',
  },
};

export const APianoKey: Story = {
  args: {
    volume: 0.6,
    highlightRoot: 'A',
  },
};
