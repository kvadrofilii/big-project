import { memo, useState } from 'react';

import clsx from 'clsx';
import CaretLeft from 'shared/assets/icons/caret-left-fill.svg';
import { IconButton } from 'shared/ui';

import css from './Sidebar.m.css';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={clsx(css.root, className, {
        [css.collapsed]: collapsed,
      })}
    >
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
});
