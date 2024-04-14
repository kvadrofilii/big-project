import clsx from 'clsx';
import { memo, useCallback, type ReactNode } from 'react';
import { Card } from '../Card/Card';
import { Flex } from '../Flex/Flex';
import css from './Tabs.m.css';

export type TabItem = {
  value: string;
  content: ReactNode;
};

type Props = {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
};

export const Tabs = memo(function Tabs(props: Props) {
  const { className, value, tabs, onTabClick } = props;

  const onClick = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex
      className={clsx(css.root, className)}
      gap={1}
    >
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
