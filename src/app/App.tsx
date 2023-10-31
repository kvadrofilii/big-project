import { useEffect, Suspense } from 'react';

import { getUserIsMount, userActions } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
// import { Footer } from 'widgets/Footer';
import { Header } from '@/widgets/Header';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import css from './App.m.css';
import { AppRouter } from './providers/AppRouter';

const App = () => {
  const dispatch = useAppDispatch();
  const isMount = useAppSelector(getUserIsMount);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={css.root}>
      <Header />
      <div className={css.body}>
        <Sidebar className={css.sidebar} />
        <div className={css.main}>
          <Suspense fallback={<PageLoader />}>{isMount && <AppRouter />}</Suspense>
        </div>
        {/* <Footer className={css.footer} /> */}
      </div>
    </div>
  );
};

export default App;
