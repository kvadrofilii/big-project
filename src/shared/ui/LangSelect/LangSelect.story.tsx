import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LangSelect } from './LangSelect';

export default {
  title: 'shared/LangSelect',
  component: LangSelect,
} as ComponentMeta<typeof LangSelect>;

const Template: ComponentStory<typeof LangSelect> = (args) => <LangSelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
