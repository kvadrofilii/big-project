import clsx from 'clsx';
import { memo, type ButtonHTMLAttributes, type ReactElement } from 'react';
import type { Color, Size, Variant } from '@/shared/types';
import css from './Button.m.css';

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

type Props = StartIconProps | EndIconProps;

export const Button = memo(function Button(props: Props) {
  const {
    children,
    className,
    color = 'primary',
    endIcon,
    fullWidth,
    size = 'medium',
    startIcon,
    variant = 'contained',
    type = 'button',
    ...rest
  } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        css.root,
        css[size],
        fullWidth && css['full-width'],
        css[variant],
        css[color],
        className,
      )}
      {...rest}
    >
      {startIcon && <span className={css.icon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={css.icon}>{endIcon}</span>}
    </button>
  );
});
