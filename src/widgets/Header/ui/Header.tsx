import { FC, useCallback, useState } from 'react';

import clsx from 'clsx';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { routePath } from 'shared/config';
import { AppLink, Button, LangSelect, ThemeSwitcher } from 'shared/ui';

import css from './Header.m.css';

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

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
        <Button variant="contained" onClick={onShowModal}>
          {t('Enter')}
        </Button>
        <LoginModal isOpened={isAuthModal} onClose={onCloseModal} />
      </div>
    </header>
  );
};
