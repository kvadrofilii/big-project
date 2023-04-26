import { useEffect, Suspense } from 'react';

import { AppRouter } from 'app/providers/AppRouter';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';

import css from './App.m.css';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={css.root}>
      <Header />
      <div className={css.body}>
        <Sidebar className={css.sidebar} />
        <div className={css.main}>
          <Suspense fallback={<PageLoader />}>
            <AppRouter />
          </Suspense>
        </div>
        <Footer className={css.footer} />
      </div>
    </div>
  );
};

export default App;
