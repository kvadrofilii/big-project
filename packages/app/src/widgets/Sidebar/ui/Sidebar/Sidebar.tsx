import clsx from 'clsx';
import { memo, useMemo, useState } from 'react';
import CaretLeft from '~/shared/assets/icons/caret-left-fill.svg';
import { useAppSelector } from '~/shared/lib';
import { Flex, IconButton } from '~/shared/ui';
import { getSidebarLinks } from '../../model/selectors/getSidebarLinks';
import { NavbarLink } from '../NavbarLink/NavbarLink';
import css from './Sidebar.m.css';

type Props = {
  className?: string;
};

export const Sidebar = memo(function Sidebar({ className }: Props) {
  const [collapsed, setCollapsed] = useState(true);
  const navbarLinks = useAppSelector(getSidebarLinks);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const linksList = useMemo(
    () =>
      navbarLinks.map((item) => (
        <NavbarLink
          key={item.path}
          item={item}
          collapsed={collapsed}
        />
      )),
    [collapsed, navbarLinks],
  );

  return (
    <Flex
      direction="column"
      grow={2}
      justify="between"
      data-testid="sidebar"
      className={clsx(css.root, className, {
        [css.collapsed]: collapsed,
      })}
    >
      <nav className={css.navbar}>{linksList}</nav>

      <IconButton
        size="large"
        variant="outlined"
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={css.btn}
      >
        <CaretLeft className={css.icon} />
      </IconButton>
    </Flex>
  );
});
