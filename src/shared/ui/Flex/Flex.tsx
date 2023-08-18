import clsx from 'clsx';

import css from './Flex.m.css';
import { FlexProps } from './Flex.types';

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    shrink,
    grow,
    wrap = 'nowrap',
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
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
