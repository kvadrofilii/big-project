import { HTMLAttributes, ReactNode } from 'react';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';

export type FlexAlign = 'start' | 'center' | 'end';

export type FlexDirection = 'row' | 'column';

export type FlexGap = 1 | 2 | 3 | 4 | 5 | 6;

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
}
