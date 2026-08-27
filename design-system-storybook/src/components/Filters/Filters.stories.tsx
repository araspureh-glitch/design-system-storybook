import type { Meta, StoryObj } from '@storybook/react';
import { Filters } from './Filters';

const meta: Meta<typeof Filters> = {
  title: "date and time/Filters",
  component: Filters,
  parameters: {
    docs: {
      description: {
        component: "Figma Layer: Filters | Page: date and time | Node ID: 181:5885 | Type: COMPONENT_SET",
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
      "Frame 1171275912",
      "Frame 1171275913"
    ],
    "description": "Figma property: Property 1"
  }
},
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const Primary: Story = {
  args: {
  "Property_1": "Frame 1171275911"
},
};
