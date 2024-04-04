import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SortOrder } from '@/shared/types';
import { Flex, Select, SelectOption } from '@/shared/ui';
import type { ArticleSortSelectorProps } from './ArticleSortSelector.types';
import type { ArticleSortField } from '@/entities/Article';

export const ArticleSortSelector = memo(function ArticleSortSelector(props: ArticleSortSelectorProps) {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascending order'),
      },
      {
        value: 'desc',
        content: t('descending order'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: 'createdAt',
        content: t('date of creation'),
      },
      {
        value: 'title',
        content: t('by name'),
      },
      {
        value: 'views',
        content: t('by views'),
      },
    ],
    [t],
  );

  return (
    <Flex
      className={className}
      gap={1}
    >
      <Select<ArticleSortField>
        label={t('Sort by')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </Flex>
  );
});
