import { ReactNode } from 'react';

import type { DropdownDirection } from '@/shared/types';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface ListBoxProps {
  className?: string;
  options?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  direction?: DropdownDirection;
  label?: string;
}
