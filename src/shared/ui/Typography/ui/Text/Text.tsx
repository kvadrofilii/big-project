import clsx from 'clsx';
import { memo, type CSSProperties } from 'react';
import typographyCss from '../../styles/typography.m.css';
import type { TypographyCommon } from '../../types/Typography.types';
import css from './Text.m.css';

type TextVariant = 'p' | 'span';

type TextFontSize = '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type Props = TypographyCommon<HTMLParagraphElement> & {
  fontSize?: TextFontSize;
  variant?: TextVariant;
};

export const Text = memo(function Text(props: Props) {
  const {
    children,
    className,
    style,
    disabled,
    color = 'dark',
    fontSize = 'md',
    align,
    ellipsis,
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
        {
          [typographyCss.disabled]: disabled,
          [typographyCss.ellipsis]: ellipsis,
        },
        className,
      )}
      style={
        {
          '--text-text-align': align || 'start',
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Tag>
  );
});
