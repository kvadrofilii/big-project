import { ButtonHTMLAttributes, ReactNode } from 'react';

export type Color = 'primary' | 'secondary';
// | 'success'
// | 'error'
// | 'info'
// | 'warning'

export type Size = 'small' | 'medium' | 'large';

export type Variant = 'contained' | 'text' | 'outlined';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: Color;
  disabled?: boolean;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  size?: Size;
  startIcon?: ReactNode;
  variant?: Variant;
  type?: 'submit' | 'reset' | 'button';
}
