import type { Meta, StoryObj } from '@storybook/react';
import { Zones } from './Zones';

const meta: Meta<typeof Zones> = {
  title: "components/zones",
  component: Zones,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: zones | Page: components | Node ID: 4:590 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Zones>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 601"
},
};
