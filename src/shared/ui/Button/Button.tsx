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
        {
          [css['full-width']]: fullWidth,
          [css[`${variant}-disabled`]]: disabled,
          [css['contained-primary']]: variant === 'contained' && color === 'primary',
          [css['contained-secondary']]: variant === 'contained' && color === 'secondary',
          [css['text-primary']]: variant === 'text' && color === 'primary',
          [css['text-secondary']]: variant === 'text' && color === 'secondary',
          [css['outlined-primary']]: variant === 'outlined' && color === 'primary',
          [css['outlined-secondary']]: variant === 'outlined' && color === 'secondary',
        },
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
