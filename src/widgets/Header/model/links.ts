import { RoutePath } from 'shared/config';

export interface NavbarLinksType {
  path: string;
  text: string;
  authOnly?: boolean;
}

export const NavbarLinks: NavbarLinksType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    authOnly: true,
  },
];
