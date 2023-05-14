import { memo } from 'react';

import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/lib';
import { AppLink } from 'shared/ui';

import { NavbarLinksType } from '../../model/links';

interface NavbarLinkProps {
  item: NavbarLinksType;
}

export const NavbarLink = memo(function NavbarLink({ item }: NavbarLinkProps) {
  const { t } = useTranslation('profile');
  const isAuth = useAppSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink to={item.path} variant="inverted">
      {t(item.text)}
    </AppLink>
  );
});
