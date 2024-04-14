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
          flexDirection: direction || 'row',
          flexGrow: grow || 0,
          flexShrink: shrink || 1,
          flexWrap: wrap || 'nowrap',
          gap: gap ? `calc(var(--space) * ${gap})` : 0,
          alignItems: align || 'flex-start',
          justifyContent: justify || 'flex-start',
          flexBasis: basis || 'auto',
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
};
