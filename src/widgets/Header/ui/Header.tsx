import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { AppLink } from 'shared/ui';
import { ThemeSwitcher } from 'shared/ui';
import { LangSelect } from 'shared/ui';

import css from './Header.m.css';

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <header className={cn([css.root, className])}>
      <div className={css.wrapper}>
        <AppLink theme="inverted" to={'/'}>
          {t('MainPage')}
        </AppLink>
        <AppLink theme="inverted" to={'/about'}>
          {t('AboutPage')}
        </AppLink>
      </div>
      <div className={css.wrapper}>
        <LangSelect />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
