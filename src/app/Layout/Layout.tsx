import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';

import css from './Layout.m.css';

export const Layout = () => {
  return (
    <div className={css.root}>
      <Header />
      <div className={css.body}>
        <Sidebar className={css.sidebar} />
        <div className={css.main}>
          <Outlet />
        </div>
        <Footer className={css.footer} />
      </div>
    </div>
  );
};
