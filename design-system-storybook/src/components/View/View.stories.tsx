import type { Meta, StoryObj } from '@storybook/react';
import { View } from './View';

const meta: Meta<typeof View> = {
  title: "date and time/view",
  component: View,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: view | Page: date and time | Node ID: 181:6775 | Type: COMPONENT_SET",
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
      "Frame 604"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof View>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 601"
},
};
