import { ReactNode } from 'react';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

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
