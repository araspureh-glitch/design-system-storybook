import type { Meta, StoryObj } from '@storybook/react';
import { Component332 } from './Component332';

const meta: Meta<typeof Component332> = {
  title: "components/Component 332",
  component: Component332,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 332 | Page: components | Node ID: 4:457 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Component332>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
