import { HTMLAttributes, ReactNode } from 'react';

export type Variant = 'normal' | 'outlined';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: Variant;
}
