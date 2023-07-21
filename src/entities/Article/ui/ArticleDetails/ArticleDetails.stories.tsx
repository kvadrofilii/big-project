import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { ArticleDetails } from './ArticleDetails';
import { article } from '../../mocks/data';

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  }),
];
