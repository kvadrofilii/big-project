import { ReactNode } from 'react';

import type { DropdownDirection } from 'shared/types';

export interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  direction?: DropdownDirection;
}
