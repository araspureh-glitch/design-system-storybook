import type { Meta, StoryObj } from '@storybook/react';
import { Map } from './Map';

const meta: Meta<typeof Map> = {
  title: "components/map",
  component: Map,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: map | Page: components | Node ID: 4:617 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof Map>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 601"
},
};
