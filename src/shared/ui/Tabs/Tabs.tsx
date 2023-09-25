import { memo, useCallback } from 'react';

import clsx from 'clsx';

import css from './Tabs.m.css';

import type { TabItem, TabsProps } from './Tabs.types';
import { Flex } from '../Flex/Flex';
import { Card } from '../Card/Card';

export const Tabs = memo(function Tabs(props: TabsProps) {
  const { className, value, tabs, onTabClick } = props;

  const onClick = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex className={clsx(css.root, className)} gap={1}>
      {tabs.map((tab) => (
        <Card
          className={css.tab}
          key={tab.value}
          variant={tab.value === value ? 'normal' : 'outlined'}
          onClick={onClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </Flex>
  );
});
