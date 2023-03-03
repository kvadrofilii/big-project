import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib';

import { Footer } from './Footer';

describe('Footer', () => {
  test('Test render', () => {
    ComponentRender(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
