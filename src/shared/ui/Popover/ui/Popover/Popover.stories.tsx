import { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';

const meta = {
  title: '/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: 'Button',
    children: 'Content',
  },
  decorators: [],
};
