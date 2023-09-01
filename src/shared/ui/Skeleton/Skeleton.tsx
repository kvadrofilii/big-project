import { CSSProperties, FC } from 'react';

import clsx from 'clsx';

import css from './Skeleton.m.css';

import type { SkeletonProps } from './Skeleton.types';

export const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, height, width, borderRadius } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius,
  };

  return <div className={clsx(css.root, className)} style={styles} />;
};
