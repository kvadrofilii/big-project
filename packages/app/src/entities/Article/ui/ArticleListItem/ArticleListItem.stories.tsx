import type { Meta, StoryObj } from '@storybook/react';
import { article } from '../../mocks/data';
import { ArticleListItem } from './ArticleListItem';

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
