import { FC } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { routePath } from 'shared/config';
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
      </div>
    </header>
  );
};
