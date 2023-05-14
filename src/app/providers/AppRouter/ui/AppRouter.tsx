import { Suspense, useMemo, memo } from 'react';

import { getUserAuthData } from 'entities/User';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';
import { useAppSelector } from 'shared/lib';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = memo(function AppRouter() {
  const isAuth = useAppSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
          return false;
        }

        return true;
      }),
    [isAuth],
  );

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
});
