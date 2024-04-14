import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleEdit, getRouteArticles } from '~/shared/consts/route';
import { useAppSelector } from '~/shared/lib';
import { Button, Flex } from '~/shared/ui';
import { getArticleDetailsData } from '../../../../entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import type { ArticleDetailsPageHeaderProps } from './ArticleDetailsPageHeader.types';

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader(
  props: ArticleDetailsPageHeaderProps,
) {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useAppSelector(getCanEditArticle);
  const article = useAppSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(getRouteArticleEdit(article?.id));
    }
  }, [article?.id, navigate]);

  return (
    <Flex
      className={className}
      justify="between"
    >
      <Button
        variant="outlined"
        onClick={onBackToList}
      >
        {t('Return')}
      </Button>
      {canEdit && (
        <Button
          variant="outlined"
          onClick={onEditArticle}
        >
          {t('Edit')}
        </Button>
      )}
    </Flex>
  );
});
