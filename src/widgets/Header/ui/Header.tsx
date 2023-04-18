import { FC, useCallback, useState } from 'react';

import clsx from 'clsx';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { routePath } from 'shared/config';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { AppLink, Button, LangSelect, ThemeSwitcher } from 'shared/ui';

import css from './Header.m.css';

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
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
    setIsAuthModal(false);
  }, [dispatch]);

  return (
    <header data-testid="header" className={clsx(css.root, className)}>
      <div className={css.wrapper}>
        <AppLink variant="inverted" to={routePath.main}>
          {t('MainPage')}
        </AppLink>
        <AppLink variant="inverted" to={routePath.about}>
          {t('AboutPage')}
        </AppLink>
      </div>
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
};
