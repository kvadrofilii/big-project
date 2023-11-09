import { ImgHTMLAttributes, ReactNode } from 'react';

export interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}
