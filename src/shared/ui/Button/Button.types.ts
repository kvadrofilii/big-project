import type { Color, Size, Variant } from '@/shared/types';
import type { ButtonHTMLAttributes, ReactElement } from 'react';

type CommonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: Color;
  fullWidth?: boolean;
  size?: Size;
  variant?: Variant;
};

type StartIconProps = CommonButtonProps & {
  startIcon?: ReactElement;
  endIcon?: never;
};

type EndIconProps = CommonButtonProps & {
  endIcon?: ReactElement;
  startIcon?: never;
};

export type ButtonProps = StartIconProps | EndIconProps;
