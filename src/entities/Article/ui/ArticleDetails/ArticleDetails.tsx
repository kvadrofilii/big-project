/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import CalendarPlusIcon from '@/shared/assets/icons/calendar-plus.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { DynamicReducerLoader, ReducersList, useAppDispatch, useAppSelector, useInitialEffect } from '@/shared/lib';
import { Avatar, Flex, Heading, Skeleton, Text } from '@/shared/ui';
import css from './ArticleDetails.m.css';
import {
  getArticleDetailsIsLoading,
  getArticleDetailsError,
  getArticleDetailsData,
} from '../../model/selectors/articleDetails';
import { fetchArticlesById } from '../../model/services/fetchArticlesById/fetchArticlesById';
import { articleDetailsReducer } from '../../model/slices/articleDetails.slice';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import type { ArticleDetailsProps } from './ArticleDetails.types';
import type { ArticleBlock } from '../../model/types/article.types';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case 'code': {
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          block={block}
        />
      );
    }
    case 'image': {
      return (
        <ArticleImageBlockComponent
          key={block.id}
          block={block}
        />
      );
    }
    case 'text': {
      return (
        <ArticleTextBlockComponent
          key={block.id}
          block={block}
        />
      );
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
      <Flex
        gap={2}
        direction="column"
        align="start"
      >
        <Skeleton
          width={200}
          height={200}
          borderRadius="50%"
          className={css.avatar}
        />
        <Skeleton
          width={300}
          height={32}
          borderRadius="10px"
        />
        <Skeleton
          width={600}
          height={40}
          borderRadius="10px"
        />
        <Skeleton
          width="100%"
          height={40}
          borderRadius="10px"
        />
        <Skeleton
          width="100%"
          height={40}
          borderRadius="10px"
        />
      </Flex>
    );
  } else if (error) {
    content = <Text>{t('An error occurred while downloading')}</Text>;
  } else {
    content = (
      <Flex
        className={clsx(css.root, className)}
        gap={2}
        direction="column"
        align="start"
      >
        <Flex
          className={css['avatar-wrapper']}
          justify="center"
        >
          <Avatar
            size={200}
            src={article?.img}
            className={css.avatar}
          />
        </Flex>
        <Heading variant="h1">{article?.title}</Heading>
        <Text fontSize="2xl">{article?.subtitle}</Text>
        <Flex gap={2}>
          <Flex gap={1}>
            <EyeIcon className={css.icons} />
            <Text>{article?.views}</Text>
          </Flex>
          <Flex gap={1}>
            <CalendarPlusIcon className={css.icons} />
            <Text>{article?.createdAt}</Text>
          </Flex>
        </Flex>
        {article?.blocks.map(renderBlock)}
      </Flex>
    );
  }

  return <DynamicReducerLoader reducers={reducers}>{content}</DynamicReducerLoader>;
});
