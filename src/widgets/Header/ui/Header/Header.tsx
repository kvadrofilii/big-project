import { useCallback, useState, memo, useMemo } from 'react';

import clsx from 'clsx';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { Button, LangSelect, ThemeSwitcher } from 'shared/ui';

import css from './Header.m.css';
import { NavbarLinks } from '../../model/links';
import { NavbarLink } from '../NavbarLink/NavbarLink';

export interface HeaderProps {
  className?: string;
}

export const Header = memo(function Header({ className }: HeaderProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useAppSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const linksList = useMemo(
    () => NavbarLinks.map((item) => <NavbarLink key={item.path} item={item} />),
    [],
  );

  return (
    <header data-testid="header" className={clsx(css.root, className)}>
      <div className={css.wrapper}>{linksList}</div>
      <div className={css.wrapper}>
        <LangSelect />
        <ThemeSwitcher />
        {authData ? (
          <Button variant="contained" onClick={onLogout}>
            {t('Logout')}
          </Button>
        ) : (
          <>
            <Button variant="contained" onClick={onShowModal}>
              {t('Enter')}
            </Button>
            {isAuthModal && <LoginModal isOpened={isAuthModal} onClose={onCloseModal} />}
          </>
        )}
      </div>
    </header>
  );
});
