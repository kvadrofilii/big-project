import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import { article } from '../../mocks/data';

export default {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const DefaultGrid = Template.bind({});
DefaultGrid.args = {
  view: 'grid',
  article,
};

export const DefaultList = Template.bind({});
DefaultList.args = {
  view: 'list',
  article,
};
