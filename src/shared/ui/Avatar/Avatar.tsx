import { CSSProperties, useMemo } from 'react';

import clsx from 'clsx';

import cls from './Avatar.m.css';

import type { AvatarProps } from './Avatar.types';

export const Avatar = (props: AvatarProps) => {
  const { className, src, size, alt } = props;
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return <img src={src} alt={alt || ''} style={styles} className={clsx(cls.root, className)} />;
};
