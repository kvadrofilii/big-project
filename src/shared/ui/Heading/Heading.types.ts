import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingColor = 'dark' | 'light' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export type HeadingAlign = 'start' | 'end' | 'center' | 'justify';

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
  variant?: HeadingVariant;
  color?: HeadingColor;
  disabled?: boolean;
  align?: HeadingAlign;
  ellipsis?: boolean;
}
