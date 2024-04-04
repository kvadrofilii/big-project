import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { Header } from './Header';

describe('Header', () => {
  test('Test render', () => {
    ComponentRender(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
