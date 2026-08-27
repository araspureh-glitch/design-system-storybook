import type { Meta, StoryObj } from '@storybook/react';
import { Card2 } from './Card2';

const meta: Meta<typeof Card2> = {
  title: "cards/card 2 ",
  component: Card2,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: card 2  | Page: cards | Node ID: 180:4619 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "active",
      "hover",
      "selected"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Card2>;

export const Primary: Story = {
  args: {
  "Property_1": "active"
},
};
