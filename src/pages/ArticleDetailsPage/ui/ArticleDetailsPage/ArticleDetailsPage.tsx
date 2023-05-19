import { FC, memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './ArticleDetailsPage.m.css';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return <div className={clsx(css.root, className)}>article</div>;
};

export default memo(ArticleDetailsPage);
