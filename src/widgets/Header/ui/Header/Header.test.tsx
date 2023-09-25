import { screen } from '@testing-library/react';

import { Header } from './Header';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';

describe('Header', () => {
  test('Test render', () => {
    ComponentRender(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
