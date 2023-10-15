import { ReactNode } from 'react';

export interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
}
