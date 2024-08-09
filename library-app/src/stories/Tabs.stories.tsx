import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tabs from '@/components/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args: any) => <Tabs {...args as any} />;
export const Default = Template.bind({});
Default.args = {};
