import styled from '@emotion/styled';
import { FunctionComponent, HTMLProps } from 'react';

import { GripSurface } from '../GripSurface/GripSurface';
import {
  DragHandleVariants,
  DragHandleVariantType,
} from './DragHandleVariants';

const defaultVariant = 'dots3x2';

export interface DragHandleProps extends Omit<HTMLProps<HTMLDivElement>, 'as'> {
  variant?: DragHandleVariantType;
}

const Container: FunctionComponent<DragHandleProps> = ({
  variant,
  children,
  className,
  ...otherProps
}) => (
  <div className={className} {...otherProps}>
    {children}
  </div>
);

const StyledContainer = styled(Container)(({ variant }) => {
  const { styles } = DragHandleVariants[variant ?? defaultVariant] ?? {};
  return styles;
});

const StyledGripSurface = styled(GripSurface)(() => ({
  width: '100%',
  height: '100%',
}));

export const DragHandle: FunctionComponent<DragHandleProps> = ({
  variant = defaultVariant,
  ...otherProps
}) => {
  return (
    <StyledContainer variant={variant} {...otherProps}>
      <StyledGripSurface {...DragHandleVariants[variant].surface} />
    </StyledContainer>
  );
};
