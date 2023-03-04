/* eslint-disable i18next/no-literal-string */
import { FC, useCallback, useState } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { routePath } from 'shared/config';
import { AppLink, Button, LangSelect, Modal, ThemeSwitcher } from 'shared/ui';

import css from './Header.m.css';

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <header data-testid="header" className={cn(css.root, className)}>
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
        <Button variant="contained" onClick={onToggleModal}>
          {t('Enter')}
        </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam laudantium!
        </Modal>
      </div>
    </header>
  );
};
