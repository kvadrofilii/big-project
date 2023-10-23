import clsx from 'clsx';

import css from './Flex.m.css';

import type { FlexProps } from './Flex.types';

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'start',
    direction = 'row',
    gap,
    shrink,
    grow,
    wrap = 'nowrap',
    fullWidth,
    ...rest
  } = props;

  return (
    <div
      className={clsx(
        css.root,
        css[`justify-${justify}`],
        css[`align-${align}`],
        css[`direction-${direction}`],
        gap && css[`gap-${gap}`],
        shrink && css[`shrink-${shrink}`],
        grow && css[`grow-${grow}`],
        wrap && css[`wrap-${wrap}`],
        fullWidth && css['full-width'],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
