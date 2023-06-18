import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './Footer.m.css';
import { FooterProps } from './Footer.types';

export const Footer: FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <footer data-testid="footer" className={clsx(css.root, className)}>
      {t('Footer')}
    </footer>
  );
};
