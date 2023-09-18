import { Meta, StoryObj } from '@storybook/react';
import { article } from 'entities/Article/mocks/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import AdminPanelPage from './AdminPanelPage';

const meta = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  parameters: {
    reactRouter: {
      routePath: '/articles/:id',
      routeParams: { id: '1' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
};
