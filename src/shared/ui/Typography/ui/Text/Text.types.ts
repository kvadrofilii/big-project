import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { TypographyAlign, TypographyColor } from '../../types/typography.types';

export type TextVariant = 'p' | 'span';

export type TextFontSize = '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
  color?: TypographyColor;
  disabled?: boolean;
  fontSize?: TextFontSize;
  align?: TypographyAlign;
  ellipsis?: boolean;
  variant?: TextVariant;
}
