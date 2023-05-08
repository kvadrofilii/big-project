import { CSSProperties, useMemo } from 'react';

import clsx from 'clsx';

import cls from './Avatar.m.css';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return <img src={src} alt={alt || ''} style={styles} className={clsx(cls.root, className)} />;
};
