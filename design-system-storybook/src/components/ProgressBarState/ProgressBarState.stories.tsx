import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressBarState } from './ProgressBarState';

const meta: Meta<typeof ProgressBarState> = {
  title: 'nav bar/ProgressBarState',
  component: ProgressBarState,
  parameters: {
    docs: {
      description: {
        component:
          'Progress Bar State component set combining a text label and a progress bar. Figma Node ID: 181:6746 | Page: nav bar.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#3a3a3c' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
    layout: 'padded',
  },
  argTypes: {
    Property_1: {
      control: { type: 'select' },
      options: ['normal', 'hover'],
      description: 'Figma variant options',
    },
    label: { control: 'text' },
    progress: {
      control: { type: 'select' },
      options: ['0%', '20%', '40%', '60%', '80%', '100%'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBarState>;

export const Normal: Story = {
  args: {
    Property_1: 'normal',
    label: 'HVAC',
    progress: '0%',
  },
};

export const Hover: Story = {
  args: {
    Property_1: 'hover',
    label: 'HVAC',
    progress: '0%',
  },
};

export const AllVariants: Story = {
  name: 'All Variants (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '40px', background: '#3a3a3c', borderRadius: '16px', maxWidth: '600px' }}>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>normal</div>
        <ProgressBarState Property_1="normal" label="HVAC" progress="0%" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>hover</div>
        <ProgressBarState Property_1="hover" label="HVAC" progress="0%" />
      </div>
    </div>
  ),
};
