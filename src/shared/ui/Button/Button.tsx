import { FC } from 'react';

import cn from 'classnames';

import css from './Button.m.css';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = (props) => {
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
    ...otherProps
  } = props;

  const styles = () => {
    if (disabled) {
      switch (variant) {
        case 'contained': {
          return css['contained-disabled'];
        }
        case 'outlined': {
          return css['outlined-disabled'];
        }
        case 'text':
        default: {
          return css['text-disabled'];
        }
      }
    }

    if (variant === 'contained' && color === 'primary') {
      return css['contained-primary'];
    }
    if (variant === 'contained' && color === 'secondary') {
      return css['contained-secondary'];
    }
    if (variant === 'text' && color === 'primary') {
      return css['text-primary'];
    }
    if (variant === 'text' && color === 'secondary') {
      return css['text-secondary'];
    }
    if (variant === 'outlined' && color === 'primary') {
      return css['outlined-primary'];
    }
    if (variant === 'outlined' && color === 'secondary') {
      return css['outlined-secondary'];
    }
  };

  return (
    <button
      className={cn(
        css.root,
        styles(),
        {
          [css['full-width']]: fullWidth,
          [css.small]: size === 'small',
          [css.medium]: size === 'medium',
          [css.large]: size === 'large',
        },
        className,
      )}
      {...otherProps}
    >
      {startIcon && <span className={css.icon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={css.icon}>{endIcon}</span>}
    </button>
  );
};
