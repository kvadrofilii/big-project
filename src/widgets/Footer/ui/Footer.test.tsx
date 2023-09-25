import { screen } from '@testing-library/react';

import { Footer } from './Footer';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';

describe('Footer', () => {
  test('Test render', () => {
    ComponentRender(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
