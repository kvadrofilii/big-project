import { Popover } from './Popover';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Popover',
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
