import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: "typography/Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: "Design System Typography Specimen showing Headlines, Paragraphs, and Button / Link styles.",
      },
    },
  },
  argTypes: {
    darkMode: {
      control: 'boolean',
      description: 'Toggle between Light and Dark mode specimens',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const LightMode: Story = {
  name: "Light Mode Specimen",
  args: {
    darkMode: false,
  },
};

export const DarkMode: Story = {
  name: "Dark Mode Specimen",
  args: {
    darkMode: true,
  },
};
