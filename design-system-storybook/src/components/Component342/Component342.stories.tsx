import type { Meta, StoryObj } from '@storybook/react';
import { Component342 } from './Component342';

const meta: Meta<typeof Component342> = {
  title: "components/Component 342",
  component: Component342,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 342 | ID: 4:755",
      },
    },
  },
  argTypes: {
    "Property_1": {
      "control": {
        "type": "select"
      },
      "options": [
        "Frame 1171275925",
        "Frame 1171275932"
      ],
      "description": "Figma variant state property"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component342>;

export const Active: Story = {
  args: {
    "Property_1": "Frame 1171275932"
  },
};

export const Inactive: Story = {
  args: {
    "Property_1": "Frame 1171275925"
  },
};
