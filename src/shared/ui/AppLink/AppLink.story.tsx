import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Link',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Link',
  variant: 'secondary',
};

export const Base = Template.bind({});
Base.args = {
  children: 'Link',
  variant: 'base',
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: 'Link',
  variant: 'inverted',
};
