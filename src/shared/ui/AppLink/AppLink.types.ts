import type { Size, Variant } from '@/shared/types';
import type { LinkProps } from 'react-router-dom';

type AppLinkColor = 'primary' | 'secondary';

export interface AppLinkProps extends LinkProps {
  className?: string;
  color?: AppLinkColor;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}
