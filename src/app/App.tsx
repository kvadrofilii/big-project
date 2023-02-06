import { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Layout } from 'layouts/Layout/Layout';
import { useTheme } from 'shared/contexts/theme-context/useTheme';
import { cn } from 'shared/lib/classNames';
import 'app/styles/index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
