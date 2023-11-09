import { StoreDecorator } from '@/shared/config/testing';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
