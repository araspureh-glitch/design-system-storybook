import type { Meta, StoryObj } from '@storybook/react';
import { Component339 } from './Component339';

const meta: Meta<typeof Component339> = {
  title: "charts/Component 339",
  component: Component339,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 339 | Page: charts | Node ID: 4:734 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Frame 1171275922",
      "Frame 1171275929"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Component339>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 1171275922"
},
};
