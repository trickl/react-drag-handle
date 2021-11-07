import { Meta, Story } from '@storybook/react';

import { DragHandle, DragHandleProps } from './DragHandle';

export default {
  title: 'Snowfox/Controls/DragHandle',
  component: DragHandle,
} as Meta;

const Template: Story<DragHandleProps> = (args) => <DragHandle {...args} />;

export const Dots3x2 = Template.bind({});
Dots3x2.args = {
  variant: 'dots3x2',
};

export const Dots4x2 = Template.bind({});
Dots4x2.args = {
  variant: 'dots4x2',
};

export const Dots3x3 = Template.bind({});
Dots3x3.args = {
  variant: 'dots3x3',
};

export const CornerDots3x3 = Template.bind({});
CornerDots3x3.args = {
  variant: 'cornerDots3x3',
};

export const WavyDots3x2 = Template.bind({});
WavyDots3x2.args = {
  variant: 'wavyDots3x2',
};

export const WavyDots4x2 = Template.bind({});
WavyDots4x2.args = {
  variant: 'wavyDots4x2',
};

export const WavyDots5x2 = Template.bind({});
WavyDots5x2.args = {
  variant: 'wavyDots5x2',
};

export const Lines3x2 = Template.bind({});
Lines3x2.args = {
  variant: 'lines3x2',
};

export const Lines4x2 = Template.bind({});
Lines4x2.args = {
  variant: 'lines4x2',
};

export const CornerLines3x3 = Template.bind({});
CornerLines3x3.args = {
  variant: 'cornerLines3x3',
};
