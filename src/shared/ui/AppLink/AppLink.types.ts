import { LinkProps } from 'react-router-dom';

type Color = 'primary' | 'secondary';

export type Variant = 'contained' | 'text' | 'outlined';

export type Size = 'small' | 'medium' | 'large';

export interface AppLinkProps extends LinkProps {
  className?: string;
  color?: Color;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}
