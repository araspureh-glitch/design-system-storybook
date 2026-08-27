import type { Meta, StoryObj } from '@storybook/react';
import { Card3 } from './Card3';

const meta: Meta<typeof Card3> = {
  title: "cards/card 3 ",
  component: Card3,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: card 3  | Page: cards | Node ID: 181:4698 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Default",
      "hover"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Card3>;

export const Primary: Story = {
  args: {
  "Property_1": "Default"
},
};
