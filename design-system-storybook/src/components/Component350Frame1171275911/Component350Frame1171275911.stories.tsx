import type { Meta, StoryObj } from '@storybook/react';
import { Component350Frame1171275911 } from './Component350Frame1171275911';

const meta: Meta<typeof Component350Frame1171275911> = {
  title: "cards/Component 350/Frame 1171275911",
  component: Component350Frame1171275911,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 350/Frame 1171275911 | Page: cards | Node ID: 4:891 | Type: COMPONENT",
      },
    },
  },
  argTypes: {
    "title": {
      "control": "text",
      "description": "Card Heading Title"
    },
    "percent": {
      "control": {
        "type": "range",
        "min": 0,
        "max": 100,
        "step": 1
      },
      "description": "Progress Percentage (0-100)"
    },
    "showIcon": {
      "control": "boolean",
      "description": "Show Health Plus Icon"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component350Frame1171275911>;

export const Default: Story = {
  args: {
    "title": "Smart City Health Score",
    "percent": 82,
    "showIcon": true
  },
};
