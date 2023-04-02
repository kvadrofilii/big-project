import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './NotFoundPage.m.css';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return <div className={clsx(css.root, className)}>{t('404')}</div>;
};
