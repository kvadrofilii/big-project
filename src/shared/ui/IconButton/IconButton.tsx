import { FC } from 'react';

import cn from 'classnames';

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
    ...restProps
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
        case 'clear':
        default: {
          return css['clear-disabled'];
        }
      }
    }

    if (variant === 'contained' && color === 'primary') {
      return css['contained-primary'];
    }
    if (variant === 'contained' && color === 'secondary') {
      return css['contained-secondary'];
    }
    if (variant === 'clear' && color === 'primary') {
      return css['clear-primary'];
    }
    if (variant === 'clear' && color === 'secondary') {
      return css['clear-secondary'];
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
          [css.small]: size === 'small',
          [css.medium]: size === 'medium',
          [css.large]: size === 'large',
          [css.xl]: size === 'xl',
        },
        className,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
