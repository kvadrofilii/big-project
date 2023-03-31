import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type Color =
  | 'dark'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type Size = 'small' | 'medium' | 'large';

export type Align = 'start' | 'end' | 'center' | 'justify';

export interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
  variant?: Variant;
  color?: Color;
  disabled?: boolean;
  size?: Size;
  align?: Align;
}
