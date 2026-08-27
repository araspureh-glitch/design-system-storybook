import type { Meta, StoryObj } from '@storybook/react';
import { Component328 } from './Component328';

const meta: Meta<typeof Component328> = {
  title: "components/Component 328",
  component: Component328,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 328 | Page: components | Node ID: 4:493 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Component328>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 602"
},
};
