import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: "nav bar/nav bar ",
  component: NavBar,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: nav bar  | Page: nav bar | Node ID: 181:4864 | Type: COMPONENT_SET",
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
      "Sustainability",
      "Energy Grid",
      "reports",
      "settings",
      "log out"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
  args: {
  "Property_1": "Dashboard"
},
};
