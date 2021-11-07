import { CSSObject } from '@emotion/serialize';

import { GripSurfaceProps } from '../GripSurface/GripSurface';
export enum DragHandleVariant {
  'dots3x2',
  'dots4x2',
  'dots3x3',
  'cornerDots3x3',
  'wavyDots3x2',
  'wavyDots4x2',
  'wavyDots5x2',
  'lines3x2',
  'lines4x2',
  'cornerLines3x3',
}

export type DragHandleVariantType = keyof typeof DragHandleVariant;

interface DragHandleVariantDefinition {
  styles: CSSObject;
  surface: GripSurfaceProps;
}

const offsetDiagonalDots: GripSurfaceProps = {
  variant: 'dots',
  orientation: 'diagonal',
  style: { marginLeft: '-4px', marginTop: '2px' },
};

export const DragHandleVariants: {
  [key in keyof typeof DragHandleVariant]: DragHandleVariantDefinition;
} = {
  dots3x2: {
    styles: {
      width: '18px',
      height: '12px',
    },
    surface: { variant: 'dots' },
  },
  dots4x2: {
    styles: {
      width: '24px',
      height: '12px',
    },
    surface: { variant: 'dots' },
  },
  dots3x3: {
    styles: {
      width: '18px',
      height: '18px',
    },
    surface: { variant: 'dots' },
  },
  cornerDots3x3: {
    styles: {
      width: '18px',
      height: '18px',
      overflow: 'hidden',
      marginLeft: '-4px',
      clipPath: 'polygon(0 0, 110% 0, 0 110%)',
    },
    surface: offsetDiagonalDots,
  },
  wavyDots3x2: {
    styles: {
      width: '14px',
      height: '22px',
      overflow: 'hidden',
    },
    surface: offsetDiagonalDots,
  },
  wavyDots4x2: {
    styles: {
      width: '14px',
      height: '30px',
      overflow: 'hidden',
    },
    surface: offsetDiagonalDots,
  },
  wavyDots5x2: {
    styles: {
      width: '14px',
      height: '40px',
      overflow: 'hidden',
    },
    surface: offsetDiagonalDots,
  },
  lines3x2: {
    styles: {
      width: '18px',
      height: '12px',
    },
    surface: { variant: 'lines' },
  },
  lines4x2: {
    styles: {
      width: '24px',
      height: '12px',
    },
    surface: { variant: 'lines' },
  },

  cornerLines3x3: {
    styles: {
      width: '18px',
      height: '18px',
      overflow: 'hidden',
      clipPath: 'polygon(0 0, 110% 0, 0 110%)',
    },
    surface: { variant: 'lines', orientation: 'diagonal' },
  },
};
