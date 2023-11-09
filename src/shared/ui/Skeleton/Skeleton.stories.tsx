import { Skeleton } from './Skeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100,
  },
};
