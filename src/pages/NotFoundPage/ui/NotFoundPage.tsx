import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui';

import css from './NotFoundPage.m.css';
import { NotFoundPageProps } from './NotFoundPage.types';

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return <Page className={clsx(css.root, className)}>{t('404')}</Page>;
};
