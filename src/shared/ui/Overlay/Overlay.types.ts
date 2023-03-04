import { ReactNode } from 'react';

export interface OverlayProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
