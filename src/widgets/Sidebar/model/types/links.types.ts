import { AppRoutes } from '@/shared/consts/route';

export interface NavbarLinks {
  path: string;
  text: AppRoutes;
  icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  authOnly?: boolean;
}
