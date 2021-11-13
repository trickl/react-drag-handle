import styled from '@emotion/styled';
import { FunctionComponent, HTMLProps } from 'react';

import { GripSurface } from '../GripSurface/GripSurface';
import {
  DragHandleVariants,
  DragHandleVariantType,
} from './DragHandleVariants';

const defaultVariant = 'dots3x2';

export enum DragHandleSizeType {
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
}

export type DragHandleRotationDegrees = 0 | 90 | 180 | 270;

const fontSizeMap: { [key in keyof typeof DragHandleSizeType]: string } = {
  sm: '8px',
  md: '12px',
  lg: '16px',
};

export interface DragHandleProps
  extends Omit<HTMLProps<HTMLDivElement>, 'as' | 'size'> {
  variant?: DragHandleVariantType;
  size?: DragHandleSizeType;
  rotationDegrees?: DragHandleRotationDegrees;
  color?: string;
}

const Container: FunctionComponent<DragHandleProps> = ({
  variant,
  rotationDegrees,
  size,
  children,
  className,
  ...otherProps
}) => (
  <div className={className} {...otherProps}>
    {children}
  </div>
);

const StyledContainer = styled(Container)(
  ({ variant, rotationDegrees, size }) => {
    const { styles } = DragHandleVariants[variant ?? defaultVariant] ?? {};
    return {
      ...styles,
      transform: rotationDegrees ? `rotate(${rotationDegrees}deg)` : undefined,
      fontSize: fontSizeMap[size ?? 'md'],
    };
  }
);

const StyledGripSurface = styled(GripSurface)(() => ({
  width: '100%',
  height: '100%',
}));

export const DragHandle: FunctionComponent<DragHandleProps> = ({
  variant = defaultVariant,
  color,
  ...otherProps
}) => {
  return (
    <StyledContainer variant={variant} {...otherProps}>
      <StyledGripSurface
        color={color}
        {...DragHandleVariants[variant].surface}
      />
    </StyledContainer>
  );
};
