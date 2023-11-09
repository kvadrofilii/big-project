import { ArticleListItem } from './ArticleListItem';
import { article } from '../../mocks/data';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultGrid: Story = {
  args: {
    view: 'grid',
    article,
  },
};

export const DefaultList: Story = {
  args: {
    view: 'list',
    article,
  },
};
