import { RatingCard } from './RatingCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '/RatingCard',
  component: RatingCard,
  tags: ['autodocs'],
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [],
};
