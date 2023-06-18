/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import CalendarPlusIcon from 'shared/assets/icons/calendar-plus.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import {
  DynamicReducerLoader,
  ReducersList,
  useAppDispatch,
  useAppSelector,
  useInitialEffect,
} from 'shared/lib';
import { Avatar, Heading, Skeleton, Text } from 'shared/ui';

import css from './ArticleDetails.m.css';
import {
  getArticleDetailsIsLoading,
  getArticleDetailsError,
  getArticleDetailsData,
} from '../../model/selectors/articleDetails';
import { fetchArticlesById } from '../../model/services/fetchArticlesById/fetchArticlesById';
import { articleDetailsReducer } from '../../model/slice/articleDetails.slice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article.types';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE: {
      return <ArticleCodeBlock key={block.id} className={css.block} block={block} />;
    }
    case ArticleBlockType.IMAGE: {
      return <ArticleImageBlock key={block.id} className={css.block} block={block} />;
    }
    case ArticleBlockType.TEXT: {
      return <ArticleTextBlock key={block.id} className={css.block} block={block} />;
    }
    default: {
      return null;
    }
  }
};

export const ArticleDetails = memo(function ArticleDetails(props: ArticleDetailsProps) {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const article = useAppSelector(getArticleDetailsData);
  const error = useAppSelector(getArticleDetailsError);

  useInitialEffect(() => {
    dispatch(fetchArticlesById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton width={200} height={200} borderRadius="50%" className={css.avatar} />
        <Skeleton width={300} height={32} borderRadius="10px" className={css.title} />
        <Skeleton width={600} height={40} borderRadius="10px" className={css.skeleton} />
        <Skeleton width="100%" height={40} borderRadius="10px" className={css.skeleton} />
        <Skeleton width="100%" height={40} borderRadius="10px" className={css.skeleton} />
      </>
    );
  } else if (error) {
    content = <Text>{t('An error occurred while downloading')}</Text>;
  } else {
    content = (
      <div className={clsx(css.root, className)}>
        <div className={css['avatar-wrapper']}>
          <Avatar size={200} src={article?.img} className={css.avatar} />
        </div>
        <Heading className={css.title} variant="h1">
          {article?.title}
        </Heading>
        <Text className={css.subtitle} fontSize="2xl">
          {article?.subtitle}
        </Text>
        <div className={css['article-info-wrapper']}>
          <div className={css['article-info']}>
            <EyeIcon className={css.icons} />
            <Text>{article?.views}</Text>
          </div>
          <div className={css['article-info']}>
            <CalendarPlusIcon className={css.icons} />
            <Text>{article?.createdAt}</Text>
          </div>
        </div>
        {article?.blocks.map(renderBlock)}
      </div>
    );
  }

  return <DynamicReducerLoader reducers={reducers}>{content}</DynamicReducerLoader>;
});
