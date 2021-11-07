import { Meta, Story } from '@storybook/react';

import { GripSurface, GripSurfaceProps } from './GripSurface';

export default {
  title: 'Snowfox/Controls/GripSurface',
  component: GripSurface,
} as Meta;

const Template: Story<GripSurfaceProps> = (args) => (
  <GripSurface style={{ width: '84px', height: '84px' }} {...args} />
);

export const Dots = Template.bind({});

export const SmallDots = Template.bind({});
SmallDots.args = {
  size: 'sm',
};

export const LargeDots = Template.bind({});
LargeDots.args = {
  size: 'lg',
};

export const DiagonalDots = Template.bind({});
DiagonalDots.args = {
  orientation: 'diagonal',
};

export const Lines = Template.bind({});
Lines.args = {
  variant: 'lines',
};

export const ThinLines = Template.bind({});
ThinLines.args = {
  variant: 'lines',
  size: 'sm',
};

export const FatLines = Template.bind({});
FatLines.args = {
  variant: 'lines',
  size: 'lg',
};

export const DiagonalLines = Template.bind({});
DiagonalLines.args = {
  variant: 'lines',
  orientation: 'diagonal',
};
