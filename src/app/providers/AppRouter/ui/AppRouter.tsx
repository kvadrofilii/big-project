import { Layout } from 'app/Layout/Layout';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { routePath } from 'shared/config';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routePath.main} element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path={routePath.about} element={<AboutPage />} />
      <Route path={routePath['not-found']} element={<NotFoundPage />} />
    </Route>,
  ),
);

export const AppRouter = () => <RouterProvider router={router} />;
