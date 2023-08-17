import { LinkProps } from 'react-router-dom';

type AppLinkColor = 'primary' | 'secondary';

export type AppLinkVariant = 'contained' | 'text' | 'outlined';

export type AppLinkSize = 'small' | 'medium' | 'large';

export interface AppLinkProps extends LinkProps {
  className?: string;
  color?: AppLinkColor;
  variant?: AppLinkVariant;
  size?: AppLinkSize;
  fullWidth?: boolean;
}
