import type { Meta, StoryObj } from '@storybook/react';
import { Card1 } from './Card1';

const meta: Meta<typeof Card1> = {
  title: "cards/card 1",
  component: Card1,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: card 1 | Page: cards | Node ID: 180:4576 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Boolean_18_13": {
    "control": "boolean",
    "description": "Figma property: Boolean#18:13"
  },
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "active",
      "hover",
      "selected",
      "default"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Card1>;

export const Primary: Story = {
  args: {
  "Boolean_18_13": true,
  "Property_1": "active"
},
};
