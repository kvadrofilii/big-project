import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type Color =
  | 'dark'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type FontSize = '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type Align = 'start' | 'end' | 'center' | 'justify';

export interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
  color?: Color;
  disabled?: boolean;
  fontSize?: FontSize;
  align?: Align;
  ellipsis?: boolean;
}
