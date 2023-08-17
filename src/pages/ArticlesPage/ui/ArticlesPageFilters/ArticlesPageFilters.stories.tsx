import { Meta, StoryObj } from '@storybook/react';

import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
  title: 'pages/ArticlesPageFilters',
  component: ArticlesPageFilters,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};