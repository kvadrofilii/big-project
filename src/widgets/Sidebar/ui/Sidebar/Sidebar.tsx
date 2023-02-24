import { FC, useState } from 'react';

import cn from 'classnames';
import { Button } from 'shared/ui';
import ArrowSquare from 'widgets/assets/icons/arrow-square.svg';

import css from './Sidebar.m.css';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={cn(css.root, className, { [css.collapsed]: collapsed })}>
      <Button
        data-testid="sidebar-toggle"
        variant="clear"
        type="button"
        onClick={onToggle}
        className={css.btn}
      >
        <ArrowSquare />
      </Button>
    </div>
  );
};
