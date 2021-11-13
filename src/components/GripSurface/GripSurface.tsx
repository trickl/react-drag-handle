import styled from '@emotion/styled';
import { FunctionComponent, HTMLProps } from 'react';

export interface GripSurfaceOwnProps {
  variant?: 'dots' | 'lines';
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'perpendicular' | 'diagonal';
  color?: string;
}

const Background: FunctionComponent<
  GripSurfaceOwnProps & Omit<HTMLProps<HTMLDivElement>, 'as' | 'size'>
> = ({ variant, size, orientation, ...otherProps }) => <div {...otherProps} />;

const getTileImage = (variant?: 'dots' | 'lines', color = 'grey') => {
  switch (variant) {
    case 'lines':
      return `linear-gradient(${color} 30%, transparent 0), linear-gradient(${color} 30%, transparent 0)`;
    case 'dots':
    default:
      return `radial-gradient(${color} 30%, transparent 0), radial-gradient(${color} 30%, transparent 0)`;
  }
};

const getTileSize = (size?: 'sm' | 'md' | 'lg'): string => {
  switch (size) {
    case 'sm':
      return '0.35em 0.35em';
    case 'lg':
      return '1em 1em';
    case 'md':
    default:
      return '0.5em 0.5em';
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
  ({ variant, size, orientation, color }) => ({
    border: 'none',
    verticalAlign: 'middle',
    backgroundColor: 'transparent',
    width: '20em',
    height: '20em',
    margin: '-5em -5em',
    padding: '0.90em',
    backgroundImage: getTileImage(variant, color),
    backgroundSize: getTileSize(size),
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
  color = 'grey',
  ...otherProps
}) => {
  return (
    <StyledContainer {...otherProps}>
      <StyledBackground {...{ variant, size, orientation, color }} />
    </StyledContainer>
  );
};
