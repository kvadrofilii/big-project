import { useEffect, Suspense } from 'react';
import { getUserIsMount, userActions } from '~/entities/User';
import { useAppDispatch, useAppSelector } from '~/shared/lib';
import { Header } from '~/widgets/Header';
import { PageLoader } from '~/widgets/PageLoader';
import { Sidebar } from '~/widgets/Sidebar';
import { AppRouter } from './providers/AppRouter';
import css from './App.m.css';

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
      </div>
    </div>
  );
};

export default App;
