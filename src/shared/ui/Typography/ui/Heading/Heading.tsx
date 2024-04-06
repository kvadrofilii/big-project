import clsx from 'clsx';
import { type CSSProperties, memo } from 'react';
import typographyCss from '../../styles/typography.m.css';
import type { TypographyCommon } from '../../types/Typography.types';
import css from './Heading.m.css';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = TypographyCommon<HTMLParagraphElement> & {
  variant?: HeadingVariant;
};

export const Heading = memo(function Heading(props: Props) {
  const {
    children,
    className,
    style,
    disabled,
    variant = 'h2',
    color = 'dark',
    align,
    ellipsis,
    ...rest
  } = props;

  const Tag = variant;

  return (
    <Tag
      className={clsx(
        css.root,
        typographyCss[color],
        {
          [typographyCss.disabled]: disabled,
          [typographyCss.ellipsis]: ellipsis,
        },
        className,
      )}
      style={
        {
          '--heading-text-align': align || 'start',
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Tag>
  );
});
