import { memo } from 'react';
import clsx from 'clsx';
import css from './IconButton.m.css';
import type { IconButtonProps } from './IconButton.types';

export const IconButton = memo(function IconButton(props: IconButtonProps) {
  const {
    children,
    className,
    color = 'primary',
    disabled = false,
    size = 'medium',
    variant = 'clear',
    tag = 'button',
    ...rest
  } = props;

  const Tag = tag;

  return (
    <Tag
      className={clsx(
        css.root,
        css[size],
        disabled ? css[`${variant}-disabled`] : css[`${variant}-${color}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
});
