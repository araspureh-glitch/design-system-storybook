import type { Meta, StoryObj } from '@storybook/react';
import { Date } from './Date';

const meta: Meta<typeof Date> = {
  title: "date and time/date ",
  component: Date,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: date  | Page: date and time | Node ID: 181:5913 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Frame 1171275911",
      "Frame 1171275912"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Date>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 1171275912"
},
};
