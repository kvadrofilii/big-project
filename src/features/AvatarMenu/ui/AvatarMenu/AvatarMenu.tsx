import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { isUserAdmin, isUserManager, userActions, getUserAuthData } from '~/entities/User';
import { getRouteAdmin, getRouteProfile } from '~/shared/consts/route';
import { useAppSelector, useAppDispatch } from '~/shared/lib';
import { Avatar, Menu } from '~/shared/ui';
import type { AvatarMenuProps } from './AvatarMenu.types';
import css from './AvatarMenu.m.css';

export const AvatarMenu = memo(function AvatarMenu(props: AvatarMenuProps) {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector(isUserAdmin);
  const isMAnager = useAppSelector(isUserManager);
  const authData = useAppSelector(getUserAuthData);

  const isAdminPanelAvailable = isAdmin || isMAnager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Menu
      className={className}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                id: 0,
                content: t('Admin panel'),
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          id: 1,
          content: t('Profile'),
          href: getRouteProfile(authData.id),
        },
        {
          id: 2,
          content: t('Logout'),
          onClick: onLogout,
        },
      ]}
    >
      <Avatar
        size={28}
        src={authData?.avatar}
        className={css.avatar}
      />
    </Menu>
  );
});
