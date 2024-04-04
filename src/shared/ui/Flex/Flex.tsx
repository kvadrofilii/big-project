import clsx from 'clsx';
import css from './Flex.m.css';
import type { FlexProps } from './Flex.types';
import type { CSSProperties } from 'react';

export const Flex = (props: FlexProps) => {
  const { align, basis, className, children, justify, direction, gap, shrink, grow, wrap, fullWidth, ...rest } = props;

  return (
    <div
      className={clsx(css.root, fullWidth && css['full-width'], className)}
      style={
        {
          '--flex-direction': direction || 'row',
          '--flex-grow': grow || 0,
          '--flex-shrink': shrink || 1,
          '--flex-wrap': wrap || 'nowrap',
          '--gap': gap ? `calc(var(--space) * ${gap})` : 0,
          '--align-items': align || 'flex-start',
          '--justify-content': justify || 'flex-start',
          '--flex-basis': basis || 'auto',
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
};
