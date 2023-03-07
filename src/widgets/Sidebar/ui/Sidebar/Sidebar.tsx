import { FC, useState } from 'react';

import cn from 'classnames';
import { IconButton } from 'shared/ui';
import CaretLeft from 'widgets/assets/icons/caret-left-fill.svg';

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
      <IconButton
        size="large"
        variant="outlined"
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={css.btn}
      >
        <CaretLeft />
      </IconButton>
    </div>
  );
};
