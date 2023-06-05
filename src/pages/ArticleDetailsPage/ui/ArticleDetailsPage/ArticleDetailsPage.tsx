import { FC, memo } from 'react';

import clsx from 'clsx';
import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import css from './ArticleDetailsPage.m.css';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className={clsx(css.root, className)}>{t('Article not found')}</div>;
  }

  return (
    <div className={clsx(css.root, className)}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);