import styled from '@emotion/styled';
import { FunctionComponent, HTMLProps } from 'react';

export interface GripSurfaceOwnProps {
  variant?: 'dots' | 'lines';
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'perpendicular' | 'diagonal';
}

const Background: FunctionComponent<
  GripSurfaceOwnProps & Omit<HTMLProps<HTMLDivElement>, 'as' | 'size'>
> = ({ variant, size, orientation, ...otherProps }) => <div {...otherProps} />;

const getBackgroundImage = (variant?: 'dots' | 'lines') => {
  switch (variant) {
    case 'lines':
      return 'linear-gradient(grey 30%, transparent 0), linear-gradient(grey 30%, transparent 0)';
    case 'dots':
    default:
      return 'radial-gradient(grey 30%, transparent 0), radial-gradient(grey 30%, transparent 0)';
  }
};

const getBackgroundSize = (size?: 'sm' | 'md' | 'lg'): string => {
  switch (size) {
    case 'sm':
      return '4px 4px';
    case 'lg':
      return '12px 12px';
    case 'md':
    default:
      return '6px 6px';
  }
};

const getTransform = (orientation?: 'perpendicular' | 'diagonal') => {
  switch (orientation) {
    case 'diagonal':
      return 'rotate(135deg)';
    case 'perpendicular':
    default:
      return 'none';
  }
};

const StyledBackground = styled(Background)(
  ({ variant, size, orientation }) => ({
    border: 'none',
    verticalAlign: 'middle',
    backgroundColor: 'transparent',
    width: '256px',
    height: '256px',
    margin: '-64px -64px',
    backgroundImage: getBackgroundImage(variant),
    backgroundSize: getBackgroundSize(size),
    transform: getTransform(orientation),
    backgroundRepeat: 'repeat',
    opacity: 0.5,

    '&:hover': {
      opacity: 1.0,
      cursor: 'grab',
      '&:active': {
        cursor: 'grabbing',
      },
    },
  })
);

const StyledContainer = styled.div(() => ({
  overflow: 'hidden',
}));

export type GripSurfaceProps = Omit<HTMLProps<HTMLDivElement>, 'size' | 'as'> &
  GripSurfaceOwnProps;

export const GripSurface: FunctionComponent<GripSurfaceProps> = ({
  variant = 'dots',
  size = 'md',
  orientation = 'perpendicular',
  ...otherProps
}) => {
  return (
    <StyledContainer {...otherProps}>
      <StyledBackground {...{ variant, size, orientation }} />
    </StyledContainer>
  );
};
