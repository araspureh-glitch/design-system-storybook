import type { Meta, StoryObj } from '@storybook/react';
import { Component318 } from './Component318';

const meta: Meta<typeof Component318> = {
  title: "components/Component 318",
  component: Component318,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 318 | ID: 4:565",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "Frame 601",
        "Frame 602"
      ],
      "description": "Figma variant state property"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component318>;

export const Active: Story = {
  args: {
    "Property_1": "Frame 601"
  },
};

export const Inactive: Story = {
  args: {
    "Property_1": "Frame 602"
  },
};
