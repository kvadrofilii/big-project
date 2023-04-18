import { ButtonHTMLAttributes, ReactNode } from 'react';

export type Color = 'primary' | 'secondary';
// | 'success'
// | 'error'
// | 'info'
// | 'warning'

export type Size = 'small' | 'medium' | 'large';

export type Variant = 'contained' | 'text' | 'outlined';

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: Color;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: Size;
  variant?: Variant;
  type?: 'submit' | 'reset' | 'button';
}

interface StartIconProps extends CommonButtonProps {
  startIcon?: ReactNode;
  endIcon?: never;
}

interface EndIconProps extends CommonButtonProps {
  endIcon?: ReactNode;
  startIcon?: never;
}

export type ButtonProps = StartIconProps | EndIconProps;
