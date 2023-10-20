import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/box2-heart-fill.svg';
import ArticlesIcon from '@/shared/assets/icons/collection-fill.svg';
import MainIcon from '@/shared/assets/icons/house-fill.svg';
import { RoutePath, AppRoutes } from '@/shared/config';

import type { NavbarLinks } from '../types/links.types';

export const getSidebarLinks = createSelector(getUserAuthData, (userData) => {
  const navbarLinks: NavbarLinks[] = [
    {
      path: RoutePath.main,
      text: AppRoutes.MAIN,
      icon: MainIcon,
    },
    {
      path: RoutePath.about,
      text: AppRoutes.ABOUT,
      icon: AboutIcon,
    },
  ];

  if (userData) {
    navbarLinks.push(
      {
        path: RoutePath.articles,
        text: AppRoutes.ARTICLES,
        icon: ArticlesIcon,
        authOnly: true,
      },
      // {
      //  path: RoutePath.article_create,
      //  text: AppRoutes.ARTICLE_CREATE,
      //  authOnly: true,
      // },
    );
  }

  return navbarLinks;
});
