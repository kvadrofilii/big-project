import { LinkProps } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'base' | 'inverted';

export interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: Variant;
}
