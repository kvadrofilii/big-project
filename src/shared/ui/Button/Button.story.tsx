import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  variant: 'primary',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  variant: 'outline',
};
