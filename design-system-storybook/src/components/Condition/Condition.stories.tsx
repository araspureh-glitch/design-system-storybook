import type { Meta, StoryObj } from '@storybook/react';
import { Condition } from './Condition';

const meta: Meta<typeof Condition> = {
  title: "nav bar/condition ",
  component: Condition,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: condition  | Page: nav bar | Node ID: 181:6753 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "good",
      "optimal",
      "excellent"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Condition>;

export const Primary: Story = {
  args: {
  "Property_1": "good"
},
};
