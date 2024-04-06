import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

type TypographyColor =
  | 'dark'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'inherit';

export type TypographyCommon<T> = {
  color?: TypographyColor;
  disabled?: boolean;
  align?: CSSProperties['textAlign'];
  ellipsis?: boolean;
} & DetailedHTMLProps<HTMLAttributes<T>, T>;
