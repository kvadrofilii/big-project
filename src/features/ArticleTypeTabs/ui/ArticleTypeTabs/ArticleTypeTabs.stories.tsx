import { ArticleTypeTabs } from './ArticleTypeTabs';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'all',
  },
};
