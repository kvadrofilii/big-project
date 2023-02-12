import { FC } from 'react';

import { cn } from 'shared/lib';

import css from './Footer.m.css';

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return <footer className={cn([css.root, className])}>Footer</footer>;
};
