import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { getUserAuthData } from '@/entities/User';
import { AppRoutes } from '@/shared/config';
import { useAppSelector } from '@/shared/lib';
import { AppLink, IconButton } from '@/shared/ui';

import css from './NavbarLink.m.css';

import type { NavbarLinkProps } from './NavbarLink.types';

export const NavbarLink = memo(function NavbarLink(props: NavbarLinkProps) {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useAppSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  const routeTranslate = {
    [AppRoutes.MAIN]: t('Main'),
    [AppRoutes.ABOUT]: t('About'),
    [AppRoutes.PROFILE]: t('Profile'),
    [AppRoutes.ARTICLES]: t('Articles'),
    [AppRoutes.ARTICLE_DETAILS]: t('Article'),
    [AppRoutes.ARTICLE_CREATE]: t('Create'),
    [AppRoutes.ARTICLE_EDIT]: t('Edit'),
    [AppRoutes.ADMIN_PANEL]: t('Admin panel'),
    [AppRoutes.FORBIDDEN]: t('Forbidden'),
    [AppRoutes.NOT_FOUND]: t('404'),
  };

  return (
    <AppLink className={css.root} to={item.path} variant="text" fullWidth>
      <IconButton size="large" type="button" color="inherit">
        <item.icon />
      </IconButton>
      {!collapsed && routeTranslate[item.text]}
    </AppLink>
  );
});
