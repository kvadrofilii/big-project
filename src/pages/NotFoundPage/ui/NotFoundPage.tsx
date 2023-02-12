import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';

import css from './NotFoundPage.m.css';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return <div className={cn([css.root, className])}>{t('404')}</div>;
};
