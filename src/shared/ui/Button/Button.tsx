import { memo } from 'react';

import clsx from 'clsx';

import css from './Button.m.css';

import type { ButtonProps } from './Button.types';

export const Button = memo(function Button(props: ButtonProps) {
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
      className={clsx(css.root, css[size], fullWidth && css['full-width'], css[variant], css[color], className)}
      {...rest}
    >
      {startIcon && <span className={css.icon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={css.icon}>{endIcon}</span>}
    </button>
  );
});
