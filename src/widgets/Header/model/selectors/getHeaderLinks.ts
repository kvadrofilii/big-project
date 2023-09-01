import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath, AppRoutes } from 'shared/config';

import type { NavbarLinks } from '../types/links.types';

export const getHeaderLinks = createSelector(getUserAuthData, (userData) => {
  const navbarLinks: NavbarLinks[] = [
    {
      path: RoutePath.main,
      text: AppRoutes.MAIN,
    },
    {
      path: RoutePath.about,
      text: AppRoutes.ABOUT,
    },
  ];

  if (userData) {
    navbarLinks.push(
      {
        path: RoutePath.articles,
        text: AppRoutes.ARTICLES,
        authOnly: true,
      },
      {
        path: RoutePath.article_create,
        text: AppRoutes.ARTICLE_CREATE,
        authOnly: true,
      },
    );
  }

  return navbarLinks;
});
