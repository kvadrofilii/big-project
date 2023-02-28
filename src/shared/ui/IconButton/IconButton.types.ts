import { ButtonHTMLAttributes } from 'react';

export type Color = 'primary' | 'secondary';
//| 'success'
//| 'error'
//| 'info'
//| 'warning'

export type Size = 'small' | 'medium' | 'large';

export type Variant = 'contained' | 'clear' | 'outlined';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: Color;
  disabled?: boolean;
  size?: Size;
  variant?: Variant;
}
