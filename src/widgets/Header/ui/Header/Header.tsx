import { useCallback, useState, memo, useMemo } from 'react';

import clsx from 'clsx';
import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { AvatarMenu } from 'features/AvatarMenu';
import { NotificationButton } from 'features/NotificationButton';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/lib';
import { Button, Flex, LangSelect } from 'shared/ui';

import css from './Header.m.css';
import { getHeaderLinks } from '../../model/selectors/getHeaderLinks';
import { NavbarLink } from '../NavbarLink/NavbarLink';

import type { HeaderProps } from './Header.types';

export const Header = memo(function Header({ className }: HeaderProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useAppSelector(getUserAuthData);
  const navbarLinks = useAppSelector(getHeaderLinks);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const linksList = useMemo(() => navbarLinks.map((item) => <NavbarLink key={item.path} item={item} />), [navbarLinks]);

  return (
    <header data-testid="header" className={clsx(css.root, className)}>
      <nav className={css.wrapper}>{linksList}</nav>
      <Flex gap={2}>
        <LangSelect />
        <ThemeSwitcher />

        {authData ? (
          <>
            <NotificationButton />
            <AvatarMenu />
          </>
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
