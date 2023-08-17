import { memo } from 'react';

import clsx from 'clsx';

import css from './Button.m.css';
import { ButtonProps } from './Button.types';

export const Button = memo(function Button(props: ButtonProps) {
  const {
    children,
    className,
    color = 'primary',
    disabled = false,
    endIcon,
    fullWidth = false,
    size = 'medium',
    startIcon,
    variant = 'text',
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
        disabled ? css[`${variant}-disabled`] : css[`${variant}-${color}`],
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {startIcon && <span className={css.icon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={css.icon}>{endIcon}</span>}
    </button>
  );
});
