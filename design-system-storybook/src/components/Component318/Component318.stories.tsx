import type { Meta, StoryObj } from '@storybook/react';
import { Component318 } from './Component318';

const meta: Meta<typeof Component318> = {
  title: "components/Component 318",
  component: Component318,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 318 | Page: components | Node ID: 4:565 | Type: COMPONENT_SET",
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
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Component318>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
