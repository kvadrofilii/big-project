import type { Meta, StoryObj } from '@storybook/react';
import { article } from '../../mocks/data';
import { ArticleList } from './ArticleList';

const meta = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultGrid: Story = {
  args: {
    articles: new Array(9).fill(0).map((_, index) => ({
      ...article,
      id: String(index),
    })),
    isLoading: false,
    view: 'grid',
  },
};

export const DefaultList: Story = {
  args: {
    articles: new Array(9).fill(0).map((_, index) => ({
      ...article,
      id: String(index),
    })),
    isLoading: false,
    view: 'list',
  },
};

export const LoadingList: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: 'list',
  },
};

export const LoadingGrid: Story = {
  args: {
    articles: [],
    isLoading: true,
    view: 'grid',
  },
};
