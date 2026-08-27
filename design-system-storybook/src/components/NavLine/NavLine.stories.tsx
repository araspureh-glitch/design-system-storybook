import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavLine } from './NavLine';

const meta: Meta<typeof NavLine> = {
  title: 'nav bar/NavLine',
  component: NavLine,
  parameters: {
    docs: {
      description: {
        component:
          'Horizontal NavLine tab group container hosting Nav components. Figma Node ID: 181:4808 | Page: nav bar.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#13171f' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
    layout: 'centered',
  },
  argTypes: {
    Property_1: {
      control: { type: 'select' },
      options: ['Default', 'Variant2', 'Variant3'],
      description: 'Figma active variant configuration',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavLine>;

export const Default: Story = {
  args: {
    Property_1: 'Default',
  },
};

export const Variant2: Story = {
  args: {
    Property_1: 'Variant2',
  },
};

export const Variant3: Story = {
  args: {
    Property_1: 'Variant3',
  },
};

export const AllVariants: Story = {
  name: 'All Variants (Like Figma Canvas)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '40px', background: '#1c1c1e', borderRadius: '16px' }}>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>Default (Efficiency Hovered)</div>
        <NavLine Property_1="Default" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>Variant2 (Default Blank)</div>
        <NavLine Property_1="Variant2" />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px' }}>Variant3 (Efficiency Selected)</div>
        <NavLine Property_1="Variant3" />
      </div>
    </div>
  ),
};
