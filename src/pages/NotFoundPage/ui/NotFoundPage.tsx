import { FC } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import css from './NotFoundPage.m.css';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return <div className={cn(css.root, className)}>{t('404')}</div>;
};
