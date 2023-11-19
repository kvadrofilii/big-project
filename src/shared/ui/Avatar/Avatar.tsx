import { CSSProperties, useMemo } from 'react';

import clsx from 'clsx';

import cls from './Avatar.m.css';
import PersonIcon from '../../assets/icons/person-circle.svg';
import { AppImage } from '../AppImage/AppImage';
import { Skeleton } from '../Skeleton/Skeleton';

import type { AvatarProps } from './Avatar.types';

export const Avatar = (props: AvatarProps) => {
  const { className, src, size, alt = '' } = props;
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  const fallback = (
    <Skeleton
      width={size}
      height={size}
      borderRadius="50%"
    />
  );
  const errorFallback = (
    <PersonIcon
      style={styles}
      className={className}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={clsx(cls.root, className)}
    />
  );
};
