import { memo, useCallback } from 'react';

import clsx from 'clsx';
import { Card } from 'shared/ui';

import css from './Tabs.m.css';
import { TabItem, TabsProps } from './Tabs.types';

export const Tabs = memo(function Tabs(props: TabsProps) {
  const { className, value, tabs, onTabClick } = props;

  const onClick = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={clsx(css.root, className)}>
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
    </div>
  );
});
