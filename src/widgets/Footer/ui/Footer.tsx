import { FC } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import css from './Footer.m.css';

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <footer data-testid="footer" className={cn(css.root, className)}>
      {t('Footer')}
    </footer>
  );
};
