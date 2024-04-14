import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import css from './Loader.m.css';

export const Loader: FC<HTMLAttributes<HTMLPreElement>> = ({ className }) => (
  <div className={clsx(css.root, className)}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
