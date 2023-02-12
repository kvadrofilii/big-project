import { Suspense } from 'react';

import { Layout } from 'app/Layout/Layout';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>,
  ),
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
