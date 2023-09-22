import { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta = {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
