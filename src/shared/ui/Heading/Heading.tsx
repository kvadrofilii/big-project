import { memo } from 'react';

import clsx from 'clsx';

import css from './Heading.m.css';
import { HeadingProps } from './Heading.types';

export const Heading = memo(function Heading(props: HeadingProps) {
  const {
    children,
    className,
    disabled = false,
    variant = 'h2',
    color = 'dark',
    align = 'start',
    ellipsis = false,
    ...rest
  } = props;

  const styles = () =>
    clsx(
      css.root,
      css[color],
      css[align],
      {
        [css.disabled]: disabled,
        [css.ellipsis]: ellipsis,
      },
      className,
    );

  switch (variant) {
    case 'h1':
      return (
        <h1 className={styles()} {...rest}>
          {children}
        </h1>
      );
    case 'h3':
      return (
        <h3 className={styles()} {...rest}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={styles()} {...rest}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={styles()} {...rest}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={styles()} {...rest}>
          {children}
        </h6>
      );
    case 'h2':
    default:
      return (
        <h2 className={styles()} {...rest}>
          {children}
        </h2>
      );
  }
});
