import { FC } from 'react';
import clsx from 'clsx';
import css from './Loader.m.css';
import type { LoaderProps } from './Loader.types';

export const Loader: FC<LoaderProps> = ({ className }) => (
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
