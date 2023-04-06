import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Color =
  | 'dark'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type Align = 'start' | 'end' | 'center' | 'justify';

export interface HeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
  variant?: Variant;
  color?: Color;
  disabled?: boolean;
  align?: Align;
}
