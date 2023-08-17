import { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'normal' | 'outlined';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
}
