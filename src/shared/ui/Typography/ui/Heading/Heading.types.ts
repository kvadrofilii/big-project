import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { TypographyAlign, TypographyColor } from '../../types/typography.types';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
  variant?: HeadingVariant;
  color?: TypographyColor;
  disabled?: boolean;
  align?: TypographyAlign;
  ellipsis?: boolean;
}
