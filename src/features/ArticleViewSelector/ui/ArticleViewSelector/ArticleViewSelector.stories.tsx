import { ArticleViewSelector } from './ArticleViewSelector';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    view: 'grid',
  },
};
