import { ArticleSortSelector } from './ArticleSortSelector';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sort: 'title',
    order: 'asc',
  },
};
