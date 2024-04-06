import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { FooterProps } from './Footer.types';
import css from './Footer.m.css';

export const Footer: FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <footer
      data-testid="footer"
      className={clsx(css.root, className)}
    >
      {t('Footer')}
    </footer>
  );
};
