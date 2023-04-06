import { FC } from 'react';

import clsx from 'clsx';

import css from './Text.m.css';
import { TextProps } from './Text.types';

export const Text: FC<TextProps> = (props) => {
  const {
    children,
    className,
    disabled = false,
    color = 'dark',
    fontSize = 'md',
    align = 'start',
    ...rest
  } = props;

  return (
    <p
      className={clsx(
        css.root,
        css[fontSize],
        css[color],
        css[align],
        {
          [css.disabled]: disabled,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};
