import { useCallback, useState, memo, useMemo } from 'react';

import clsx from 'clsx';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { Avatar, Button, Flex, LangSelect, Menu } from 'shared/ui';

import css from './Header.m.css';
import { HeaderProps } from './Header.types';
import { getHeaderLinks } from '../../model/selectors/getHeaderLinks';
import { NavbarLink } from '../NavbarLink/NavbarLink';

export const Header = memo(function Header({ className }: HeaderProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useAppSelector(getUserAuthData);
  const navbarLinks = useAppSelector(getHeaderLinks);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const linksList = useMemo(() => navbarLinks.map((item) => <NavbarLink key={item.path} item={item} />), [navbarLinks]);

  return (
    <header data-testid="header" className={clsx(css.root, className)}>
      <nav className={css.wrapper}>{linksList}</nav>
      <Flex gap={2}>
        <LangSelect />
        <ThemeSwitcher />
        {authData ? (
          <Menu
            direction="bottom left"
            items={[
              {
                id: 1,
                content: t('Profile'),
                href: RoutePath.profile + authData.id,
              },
              {
                id: 2,
                content: t('Logout'),
                onClick: onLogout,
              },
            ]}
          >
            <Avatar size={28} src={authData?.avatar} className={css.avatar} />
          </Menu>
        ) : (
          <>
            <Button variant="contained" onClick={onShowModal}>
              {t('Enter')}
            </Button>
            {isAuthModal && <LoginModal isOpened={isAuthModal} onClose={onCloseModal} />}
          </>
        )}
      </Flex>
    </header>
  );
});
