import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib';

import { Footer } from './Footer';

describe('Footer', () => {
  test('Test render', () => {
    renderWithTranslation(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
