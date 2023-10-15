import { AppRoutes } from 'shared/config';

export interface NavbarLinks {
  path: string;
  text: AppRoutes;
  icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  authOnly?: boolean;
}
