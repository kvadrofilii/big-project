import { screen } from '@testing-library/react';
import { UserRole } from '~/entities/User/testing';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '~/shared/consts/route';
import { ComponentRender } from '~/shared/lib/tests/ComponentRender/ComponentRender';
import { AppRouter } from './AppRouter';

describe('AppRouter', () => {
  test('Страница должна отрендериться', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    // Асинхронный вызов метода для проверки lazy-компонентов
    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    ComponentRender(<AppRouter />, {
      route: '/asfasfasfasf',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Редирект неавторизованного пользователя на главную', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ к закрытой страницы для авторизованного пользователя', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { isMount: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ запрещен (отсутствует роль)', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { isMount: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ разрешен (присутствует роль)', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { isMount: true, authData: { roles: [UserRole.ADMIN] } },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
