import type { Color } from '@/shared/types';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type IconButtonColor = 'primary' | 'secondary' | 'inherit';
// | 'success'
// | 'error'
// | 'info'
// | 'warning'

export type IconButtonSize = Color | 'xl';

export type IconButtonVariant = 'contained' | 'clear' | 'outlined';

export type IconButtonTag = 'button' | 'span';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: IconButtonColor;
  disabled?: boolean;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  children: ReactNode;
  tag?: IconButtonTag;
}
