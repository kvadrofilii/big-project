import { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';

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
