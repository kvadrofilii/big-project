import { memo, useCallback } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config';
import { useAppSelector } from 'shared/lib';
import { Button } from 'shared/ui';

import css from './ArticleDetailsPageHeader.m.css';
import { ArticleDetailsPageHeaderProps } from './ArticleDetailsPageHeader.types';
import { getArticleDetailsData } from '../../../../entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader(
  props: ArticleDetailsPageHeaderProps,
) {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useAppSelector(getCanEditArticle);
  const article = useAppSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(`${RoutePath.articles}/${article?.id}/edit`);
    }
  }, [article?.id, navigate]);

  return (
    <div className={clsx(css.root, className)}>
      <Button variant="outlined" onClick={onBackToList}>
        {t('Return')}
      </Button>
      {canEdit && (
        <Button variant="outlined" onClick={onEditArticle}>
          {t('Edit')}
        </Button>
      )}
    </div>
  );
});
