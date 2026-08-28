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
      "description": "Figma variant property for active preview"
    }
  },
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Default: Story = {
  args: {
    "Property_1": "Dashboard"
  },
};

export const Dashboard: Story = {
  args: {
    "Property_1": "Dashboard"
  },
};

export const Sustainability: Story = {
  args: {
    "Property_1": "Sustainability"
  },
};

export const EnergyGrid: Story = {
  name: "Energy Grid",
  args: {
    "Property_1": "Energy Grid"
  },
};

export const SmartSystems: Story = {
  name: "Smart Systems",
  args: {
    "Property_1": "Smart Systems"
  },
};

export const Reports: Story = {
  args: {
    "Property_1": "Reports"
  },
};

export const Settings: Story = {
  args: {
    "Property_1": "Settings"
  },
};

export const LogOut: Story = {
  name: "Log Out",
  args: {
    "Property_1": "Log Out"
  },
};
