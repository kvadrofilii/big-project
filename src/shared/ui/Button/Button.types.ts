import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'contained' | 'text' | 'outlined';

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: ButtonColor;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
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
