import clsx from 'clsx';
import { type CSSProperties, type ImgHTMLAttributes, useMemo } from 'react';
import PersonIcon from '../../assets/icons/person-circle.svg';
import { AppImage } from '../AppImage/AppImage';
import { Skeleton } from '../Skeleton/Skeleton';
import cls from './Avatar.m.css';

export type Props = ImgHTMLAttributes<HTMLImageElement> & {
  size?: number;
};

export const Avatar = (props: Props) => {
  const { className, size, style, ...rest } = props;
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} borderRadius="50%" />;
  const errorFallback = <PersonIcon style={{ ...styles, ...style }} className={className} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      style={{ ...styles, ...style }}
      className={clsx(cls.root, className)}
      {...rest}
    />
  );
};
