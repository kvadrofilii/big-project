import clsx from 'clsx';
import { memo, type ButtonHTMLAttributes } from 'react';
import type { Size } from '~/shared/types';
import css from './IconButton.m.css';

type IconButtonColor = 'primary' | 'secondary' | 'inherit';
// | 'success'
// | 'error'
// | 'info'
// | 'warning'

type IconButtonSize = Size | 'xl';

type IconButtonVariant = 'contained' | 'clear' | 'outlined';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: IconButtonColor;
  disabled?: boolean;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  tag?: 'button' | 'span';
};

export const IconButton = memo(function IconButton(props: Props) {
  const {
    children,
    className,
    color = 'primary',
    disabled,
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
