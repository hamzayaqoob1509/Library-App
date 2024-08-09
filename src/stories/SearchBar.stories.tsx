import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchBar from '@/components/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta<typeof SearchBar>;

const Template: StoryFn<typeof SearchBar> = (args: any) => <SearchBar {...args as any} />;
export const Default = Template.bind({});
Default.args = {};
