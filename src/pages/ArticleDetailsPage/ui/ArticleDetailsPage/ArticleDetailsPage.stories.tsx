import { ComponentStory, ComponentMeta } from '@storybook/react';
import { article } from 'entities/Article/mocks/data';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    reactRouter: {
      routePath: '/articles/:id',
      routeParams: { id: '1' },
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];
