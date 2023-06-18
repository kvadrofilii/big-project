import { memo } from 'react';

import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { AppRoutes } from 'shared/config';
import { useAppSelector } from 'shared/lib';
import { AppLink } from 'shared/ui';

import { NavbarLinkProps } from './NavbarLink.types';

export const NavbarLink = memo(function NavbarLink({ item }: NavbarLinkProps) {
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
    [AppRoutes.NOT_FOUND]: t('404'),
  };

  return (
    <AppLink to={item.path} variant="inverted">
      {routeTranslate[item.text]}
    </AppLink>
  );
});
