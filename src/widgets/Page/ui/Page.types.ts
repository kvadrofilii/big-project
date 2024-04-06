import { ReactNode } from 'react';
import { TestProps } from '~/shared/types';

export interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
