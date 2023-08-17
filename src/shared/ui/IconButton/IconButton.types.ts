import { ButtonHTMLAttributes } from 'react';

export type IconButtonColor = 'primary' | 'secondary';
// | 'success'
// | 'error'
// | 'info'
// | 'warning'

export type IconButtonSize = 'small' | 'medium' | 'large' | 'xl';

export type IconButtonVariant = 'contained' | 'clear' | 'outlined';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: IconButtonColor;
  disabled?: boolean;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}
