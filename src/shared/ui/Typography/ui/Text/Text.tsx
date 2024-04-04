import { memo } from 'react';
import clsx from 'clsx';
import css from './Text.m.css';
import typographyCss from '../../styles/typography.m.css';
import type { TextProps } from './Text.types';

export const Text = memo(function Text(props: TextProps) {
  const {
    children,
    className,
    disabled = false,
    color = 'dark',
    fontSize = 'md',
    align = 'start',
    ellipsis = false,
    variant = 'p',
    ...rest
  } = props;

  const Tag = variant;

  return (
    <Tag
      className={clsx(
        css.root,
        css[fontSize],
        typographyCss[color],
        typographyCss[align],
        {
          [typographyCss.disabled]: disabled,
          [typographyCss.ellipsis]: ellipsis,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
});
