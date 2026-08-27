import type { Meta, StoryObj } from '@storybook/react';
import { Component331 } from './Component331';

const meta: Meta<typeof Component331> = {
  title: "components/Component 331",
  component: Component331,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 331 | Page: components | Node ID: 4:529 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Component331>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
