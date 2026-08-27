import type { Meta, StoryObj } from '@storybook/react';
import { DateFilters } from './DateFilters';

const meta: Meta<typeof DateFilters> = {
  title: "date and time/Date filters",
  component: DateFilters,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Date filters | Page: date and time | Node ID: 181:6006 | Type: COMPONENT_SET",
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
type Story = StoryObj<typeof DateFilters>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 1171275911"
},
};
