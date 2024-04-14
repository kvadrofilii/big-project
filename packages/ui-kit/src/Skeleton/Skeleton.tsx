import clsx from 'clsx';
import type { CSSProperties, FC, HTMLAttributes } from 'react';
import css from './Skeleton.m.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
  shadow?: boolean;
};

export const Skeleton: FC<Props> = (props) => {
  const { className, height, width, borderRadius, shadow, style, ...rest } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius,
  };

  return (
    <div
      className={clsx(
        css.root,
        {
          [css.shadow]: shadow === true,
        },
        className,
      )}
      style={{ ...styles, ...style }}
      {...rest}
    />
  );
};
