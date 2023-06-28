import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath, AppRoutes } from 'shared/config';

import { NavbarLinks } from '../types/links.types';

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
        path: RoutePath.profile + userData.id,
        text: AppRoutes.PROFILE,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: AppRoutes.ARTICLES,
        authOnly: true,
      },
    );
  }

  return navbarLinks;
});
