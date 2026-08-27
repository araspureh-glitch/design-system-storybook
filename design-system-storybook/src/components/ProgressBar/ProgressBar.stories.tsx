import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'nav bar/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          'Progress Bar component set supporting Active/Disabled states and customizable percentage fills. Figma Node ID: 181:6689 | Page: nav bar.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1c1c1e' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
    layout: 'padded',
  },
  argTypes: {
    Procent_104_26: {
      control: 'boolean',
      description: 'Show percentage label',
    },
    State: {
      control: { type: 'select' },
      options: ['Active', 'Disabled'],
      description: 'Figma property: State',
    },
    Procent: {
      control: { type: 'select' },
      options: ['0%', '20%', '40%', '60%', '80%', '100%'],
      description: 'Figma property: Procent',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    Procent_104_26: true,
    State: 'Active',
    Procent: '60%',
  },
};

export const Disabled: Story = {
  args: {
    Procent_104_26: true,
    State: 'Disabled',
    Procent: '40%',
  },
};

export const AllVariants: Story = {
  name: 'All Variants (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px', background: '#3a3a3c', borderRadius: '16px', maxWidth: '600px' }}>
      <ProgressBar State="Active" Procent="0%" Procent_104_26={true} />
      <ProgressBar State="Disabled" Procent="0%" Procent_104_26={true} />
      <ProgressBar State="Active" Procent="20%" Procent_104_26={true} />
      <ProgressBar State="Active" Procent="40%" Procent_104_26={true} />
      <ProgressBar State="Active" Procent="60%" Procent_104_26={true} />
      <ProgressBar State="Active" Procent="80%" Procent_104_26={true} />
      <ProgressBar State="Active" Procent="100%" Procent_104_26={true} />
    </div>
  ),
};
