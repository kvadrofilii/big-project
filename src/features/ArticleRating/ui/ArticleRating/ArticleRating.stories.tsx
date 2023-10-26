import { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
  },
  decorators: [],
};
