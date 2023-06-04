import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from './Heading';

export default {
  title: 'shared/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Welcome to the Hell!',
};
