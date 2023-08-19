import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type TextVariant = 'p' | 'span';

export type TextColor = 'dark' | 'light' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export type TextFontSize = '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type TextAlign = 'start' | 'end' | 'center' | 'justify';

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
  color?: TextColor;
  disabled?: boolean;
  fontSize?: TextFontSize;
  align?: TextAlign;
  ellipsis?: boolean;
  variant?: TextVariant;
}
