import { FC } from 'react';
import css from './Footer.m.css';
import { cn } from 'shared/lib';

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return <footer className={cn([css.root, className])}>Footer</footer>;
};
