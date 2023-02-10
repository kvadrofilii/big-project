import css from './Header.m.css';
import { AppLink } from 'shared/ui';
import { ThemeSwitcher } from 'shared/ui';
import { cn } from 'shared/lib';
import { FC } from 'react';

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn([css.root, className])}>
      <div className={css.wrapper}>
        <AppLink theme="secondary" to={'/'}>
          Главная
        </AppLink>
        <AppLink theme="secondary" to={'/about'}>
          О сайте
        </AppLink>
      </div>
      <div className={css.wrapper}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
