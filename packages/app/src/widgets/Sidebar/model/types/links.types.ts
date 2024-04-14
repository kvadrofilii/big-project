import { AppRoutes } from '~/shared/consts/route';

export type NavbarLinks = {
  path: string;
  text: AppRoutes;
  icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  authOnly?: boolean;
};
