import { Suspense } from 'react';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { PageError } from 'widgets/PageError';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';

import css from './Layout.m.css';

export const Layout = () => {
  return (
    <ErrorBoundary FallbackComponent={<PageError />}>
      <div className={css.root}>
        <Header />
        <div className={css.body}>
          <Sidebar className={css.sidebar} />
          <div className={css.main}>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </div>
          <Footer className={css.footer} />
        </div>
      </div>
    </ErrorBoundary>
  );
};
