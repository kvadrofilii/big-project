import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/box2-heart-fill.svg';
import ArticlesIcon from '@/shared/assets/icons/collection-fill.svg';
import MainIcon from '@/shared/assets/icons/house-fill.svg';
import { AppRoutes, getRouteAbout, getRouteArticles, getRouteMain } from '@/shared/consts/route';
import type { NavbarLinks } from '../types/links.types';

export const getSidebarLinks = createSelector(getUserAuthData, (userData) => {
  const navbarLinks: NavbarLinks[] = [
    {
      path: getRouteMain(),
      text: AppRoutes.MAIN,
      icon: MainIcon,
    },
    {
      path: getRouteAbout(),
      text: AppRoutes.ABOUT,
      icon: AboutIcon,
    },
  ];

  if (userData) {
    navbarLinks.push(
      {
        path: getRouteArticles(),
        text: AppRoutes.ARTICLES,
        icon: ArticlesIcon,
        authOnly: true,
      },
      // {
      //  path: getRouteArticleCreate(),
      //  text: AppRoutes.ARTICLE_CREATE,
      //  authOnly: true,
      // },
    );
  }

  return navbarLinks;
});
