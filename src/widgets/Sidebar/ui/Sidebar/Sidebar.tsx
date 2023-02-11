import { FC, useState } from 'react';
import { cn } from 'shared/lib';
import css from './Sidebar.m.css';
import ArrowSquare from 'widgets/assets/icons/arrow-square.svg';
import { Button } from 'shared/ui';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cn([css.root, className], { [css.collapsed]: collapsed })}>
      <Button variant="clear" type="button" onClick={onToggle} className={css.btn}>
        <ArrowSquare />
      </Button>
    </div>
  );
};
