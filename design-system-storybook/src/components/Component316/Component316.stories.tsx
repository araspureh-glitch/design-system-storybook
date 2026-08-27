import type { Meta, StoryObj } from '@storybook/react';
import { Component316 } from './Component316';

const meta: Meta<typeof Component316> = {
  title: "components/Component 316",
  component: Component316,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 316 | Page: components | Node ID: 4:541 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Component316>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
