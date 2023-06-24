import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardAction } from './CardAction';

export default {
  title: 'shared/CardAction',
  component: CardAction,
  args: {
    to: '/',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardAction>;

const Template: ComponentStory<typeof CardAction> = (args) => <CardAction {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
};
