import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  comment: {
    id: '1',
    text: 'some comment',
    user: {
      id: '1',
      username: 'admin',
      avatar: 'https://forum.kaboom2.ru/data/avatars/o/70/70758.jpg',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya' },
  },
  isLoading: true,
};
