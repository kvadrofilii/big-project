import { RoutePath } from 'shared/config';

export interface NavbarLinksType {
  path: string;
}

export const NavbarLinks: NavbarLinksType[] = [
  {
    path: RoutePath.main,
  },
  {
    path: RoutePath.about,
  },
  {
    path: RoutePath.profile,
  },
];
