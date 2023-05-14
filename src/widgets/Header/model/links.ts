import { RoutePath, AppRoutes } from 'shared/config';

export interface NavbarLinksType {
  path: string;
  text: AppRoutes;
  authOnly?: boolean;
}

export const NavbarLinks: NavbarLinksType[] = [
  {
    path: RoutePath.main,
    text: AppRoutes.MAIN,
  },
  {
    path: RoutePath.about,
    text: AppRoutes.ABOUT,
  },
  {
    path: RoutePath.profile,
    text: AppRoutes.PROFILE,
    authOnly: true,
  },
];
