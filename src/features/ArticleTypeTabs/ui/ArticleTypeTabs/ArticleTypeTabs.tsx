import { memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { TabItem, Tabs } from '@/shared/ui';

import type { ArticleTypeTabsProps } from './ArticleTypeTabs.types';
import type { ArticleType } from '@/entities/Article';

export const ArticleTypeTabs = memo(function ArticleTypeTabs(props: ArticleTypeTabsProps) {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: 'all',
        content: t('All'),
      },
      {
        value: 'it',
        content: t('it'),
      },
      {
        value: 'science',
        content: t('Science'),
      },
      {
        value: 'economics',
        content: t('Economics'),
      },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return <Tabs className={className} tabs={typeTabs} value={value} onTabClick={onTabClick} />;
});
