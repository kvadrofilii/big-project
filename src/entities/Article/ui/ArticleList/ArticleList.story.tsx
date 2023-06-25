import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleList } from './ArticleList';
import { article } from '../../mocks/data';

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const DefaultGrid = Template.bind({});
DefaultGrid.args = {
  articles: new Array(9).fill(0).map((_, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: 'grid',
};

export const DefaultList = Template.bind({});
DefaultList.args = {
  articles: new Array(9).fill(0).map((_, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: 'list',
};

export const LoadingList = Template.bind({});
LoadingList.args = {
  articles: [],
  isLoading: true,
  view: 'list',
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
  articles: [],
  isLoading: true,
  view: 'grid',
};
