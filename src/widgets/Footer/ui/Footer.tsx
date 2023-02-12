import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';

import css from './Footer.m.css';

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation();

  return <footer className={cn([css.root, className])}>{t('Footer')}</footer>;
};
