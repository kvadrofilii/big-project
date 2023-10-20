import { ReactNode } from 'react';

import type { DropdownDirection } from '@/shared/types';

export interface DropdownItem {
  id: string | number;
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

export interface MenuProps {
  className?: string;
  items: DropdownItem[];
  children: ReactNode;
  disabled?: boolean;
  direction?: DropdownDirection;
}
