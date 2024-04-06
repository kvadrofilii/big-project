import { memo } from 'react';
import CalendarPlusIcon from '@/shared/assets/icons/calendar-plus.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { useAppSelector } from '@/shared/lib';
import { Avatar, Flex, Heading, Text } from '@/shared/ui';
import { getArticleDetailsData } from '../../model/selectors/articleDetails';
import { renderBlock } from './renderBlock';
import css from './ArticleDetails.m.css';

export const ArticleDetailsContent = memo(function ArticleDetails() {
  const article = useAppSelector(getArticleDetailsData);

  return (
    <Flex
      className={css.root}
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
});
