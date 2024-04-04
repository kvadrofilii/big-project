import { memo } from 'react';
import clsx from 'clsx';
import css from './Heading.m.css';
import typographyCss from '../../styles/typography.m.css';
import type { HeadingProps } from './Heading.types';

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

  const Tag = variant;

  return (
    <Tag
      className={clsx(
        css.root,
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
