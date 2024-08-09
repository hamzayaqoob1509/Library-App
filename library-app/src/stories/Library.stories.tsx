import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Library from '@/components/Library';

export default {
  title: 'Components/Library',
  component: Library,
} as Meta<typeof Library>;

const Template: StoryFn<typeof Library> = (args: any) => <Library {...args as any} />;
export const Default = Template.bind({});
Default.args = {};
