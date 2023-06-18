import { FC, memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './ArticlesPage.m.css';
import { ArticlesPageProps } from './ArticlesPage.types';

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return <div className={clsx(css.root, className)} />;
};

export default memo(ArticlesPage);
