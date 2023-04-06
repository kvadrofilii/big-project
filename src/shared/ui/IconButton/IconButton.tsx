import { FC } from 'react';

import clsx from 'clsx';

import css from './IconButton.m.css';
import { IconButtonProps } from './IconButton.types';

export const IconButton: FC<IconButtonProps> = (props) => {
  const {
    children,
    className,
    color = 'primary',
    disabled = false,
    size = 'medium',
    variant = 'clear',
    ...rest
  } = props;

  return (
    <button
      type="button"
      className={clsx(
        css.root,
        css[size],
        {
          [css[`${variant}-disabled`]]: disabled,
          [css['contained-primary']]: variant === 'contained' && color === 'primary',
          [css['contained-secondary']]: variant === 'contained' && color === 'secondary',
          [css['clear-primary']]: variant === 'clear' && color === 'primary',
          [css['clear-secondary']]: variant === 'clear' && color === 'secondary',
          [css['outlined-primary']]: variant === 'outlined' && color === 'primary',
          [css['outlined-secondary']]: variant === 'outlined' && color === 'secondary',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
