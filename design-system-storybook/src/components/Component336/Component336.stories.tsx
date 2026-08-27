import type { Meta, StoryObj } from '@storybook/react';
import { Component336 } from './Component336';

const meta: Meta<typeof Component336> = {
  title: "cards/Component 336",
  component: Component336,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Component 336 | Page: cards | Node ID: 4:639 | Type: COMPONENT_SET",
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
      "Frame 602",
      "Frame 603"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Component336>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 601"
},
};
