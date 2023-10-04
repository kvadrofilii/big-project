import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import ArticlesPage from './ArticlesPage';

const meta = {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};
