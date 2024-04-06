import clsx from 'clsx';
import type { CSSProperties, HTMLAttributes } from 'react';
import css from './Flex.m.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  align?: CSSProperties['alignItems'];
  basis?: CSSProperties['flexBasis'];
  direction?: CSSProperties['flexDirection'];
  fullWidth?: boolean;
  gap?: CSSProperties['gap'];
  grow?: CSSProperties['flexGrow'];
  justify?: CSSProperties['justifyContent'];
  shrink?: CSSProperties['flexShrink'];
  wrap?: CSSProperties['flexWrap'];
};

export const Flex = (props: Props) => {
  const {
    align,
    basis,
    className,
    children,
    justify,
    direction,
    gap,
    shrink,
    grow,
    wrap,
    fullWidth,
    ...rest
  } = props;

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
