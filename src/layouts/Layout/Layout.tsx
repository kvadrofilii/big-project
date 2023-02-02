import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Outlet />
    </>
  );
};
