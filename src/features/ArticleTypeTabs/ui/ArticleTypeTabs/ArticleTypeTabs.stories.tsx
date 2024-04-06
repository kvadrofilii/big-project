import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
  title: 'features/ArticleTypeTabs',
  component: ArticleTypeTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'all',
    onChangeType: () => {},
  },
};
