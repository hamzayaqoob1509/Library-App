import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AssetModal from '@/components/AssetModal';

export default {
  title: 'Components/AssetModal',
  component: AssetModal,
} as Meta<typeof AssetModal>;

const Template: StoryFn<typeof AssetModal> = (args) => <AssetModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
