import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from './Icons';

const meta: Meta<typeof Icons> = {
  title: "components/icons",
  component: Icons,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: icons | Page: components | Node ID: 180:4419 | Type: COMPONENT_SET",
      },
    },
  },
  argTypes: {
  "Property_1": {
    "control": {
      "type": "select"
    },
    "options": [
      "Dashboard",
      "Energy Grid",
      "Log Out",
      "Reports",
      "Settings",
      "Smart Systems",
      "Sustainability"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Primary: Story = {
  args: {
  "Property_1": "Dashboard"
},
};
