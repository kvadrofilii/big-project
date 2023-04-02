import { FC } from 'react';

import clsx from 'clsx';

import css from './Text.m.css';
import { TextProps } from './Text.types';

export const Text: FC<TextProps> = (props) => {
  const {
    children,
    className,
    disabled = false,
    variant = 'p',
    color = 'dark',
    size = 'medium',
    align = 'start',
    ...restProps
  } = props;

  const styles = () => {
    return clsx(
      css.root,
      css[size],
      css[color],
      css[align],
      {
        [css.disabled]: disabled,
      },
      className,
    );
  };

  switch (variant) {
    case 'h1':
      return (
        <h1 className={styles()} {...restProps}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={styles()} {...restProps}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={styles()} {...restProps}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={styles()} {...restProps}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={styles()} {...restProps}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={styles()} {...restProps}>
          {children}
        </h6>
      );
    default:
    case 'p':
      return (
        <p className={styles()} {...restProps}>
          {children}
        </p>
      );
  }
};
