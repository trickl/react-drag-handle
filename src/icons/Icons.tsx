import { ReactElement } from 'react';

import {
  DragHandle,
  DragHandleProps,
} from '../components/DragHandle/DragHandle';

export type IconProps = Omit<DragHandleProps, 'variant' | 'rotationDegrees'>;

export const Dots3x2 = (props: IconProps): ReactElement => (
  <DragHandle variant="dots3x2" {...props} />
);

export const Dots2x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="dots3x2" rotationDegrees={90} {...props} />
);

export const Dots4x2 = (props: IconProps): ReactElement => (
  <DragHandle variant="dots4x2" {...props} />
);

export const Dots2x4 = (props: IconProps): ReactElement => (
  <DragHandle variant="dots4x2" rotationDegrees={90} {...props} />
);

export const Dots3x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="dots3x3" {...props} />
);

export const CornerDotsTopLeft3x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="cornerDots3x3" {...props} />
);

export const CornerDotsTopRight3x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="cornerDots3x3" rotationDegrees={90} {...props} />
);

export const CornerDotsBottomRight3x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="cornerDots3x3" rotationDegrees={180} {...props} />
);

export const CornerDotsBottomLeft3x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="cornerDots3x3" rotationDegrees={270} {...props} />
);

export const WavyDots3x2 = (props: IconProps): ReactElement => (
  <DragHandle variant="wavyDots3x2" {...props} />
);

export const WavyDots2x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="wavyDots3x2" rotationDegrees={90} {...props} />
);

export const WavyDots4x2 = (props: IconProps): ReactElement => (
  <DragHandle variant="wavyDots4x2" {...props} />
);

export const WavyDots2x4 = (props: IconProps): ReactElement => (
  <DragHandle variant="wavyDots4x2" rotationDegrees={90} {...props} />
);

export const WavyDots5x2 = (props: IconProps): ReactElement => (
  <DragHandle variant="wavyDots5x2" {...props} />
);

export const WavyDots2x5 = (props: IconProps): ReactElement => (
  <DragHandle variant="wavyDots5x2" rotationDegrees={90} {...props} />
);

export const Lines3x2 = (props: IconProps): ReactElement => (
  <DragHandle variant="lines3x2" {...props} />
);

export const Lines2x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="lines3x2" rotationDegrees={90} {...props} />
);

export const Lines4x2 = (props: IconProps): ReactElement => (
  <DragHandle variant="lines4x2" {...props} />
);

export const Lines2x4 = (props: IconProps): ReactElement => (
  <DragHandle variant="lines4x2" rotationDegrees={90} {...props} />
);

export const CornerLinesTopLeft3x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="cornerLines3x3" {...props} />
);

export const CornerLinesTopRight3x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="cornerLines3x3" rotationDegrees={90} {...props} />
);

export const CornerLinesBottomRight3x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="cornerLines3x3" rotationDegrees={180} {...props} />
);

export const CornerLinesBottomLeft3x3 = (props: IconProps): ReactElement => (
  <DragHandle variant="cornerLines3x3" rotationDegrees={270} {...props} />
);

const Icons = {
  Dots3x2,
  Dots2x3,
  Dots4x2,
  Dots2x4,
  Dots3x3,
  CornerDotsTopLeft3x3,
  CornerDotsTopRight3x3,
  CornerDotsBottomRight3x3,
  CornerDotsBottomLeft3x3,
  WavyDots3x2,
  WavyDots2x3,
  WavyDots4x2,
  WavyDots2x4,
  WavyDots5x2,
  WavyDots2x5,
  Lines3x2,
  Lines2x3,
  Lines4x2,
  Lines2x4,
  CornerLinesTopLeft3x3,
  CornerLinesTopRight3x3,
  CornerLinesBottomRight3x3,
  CornerLinesBottomLeft3x3,
};

export default Icons;
