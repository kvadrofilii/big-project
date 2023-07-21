import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Welcome to the Hell!',
};
