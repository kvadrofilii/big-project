import { render, screen } from '@testing-library/react';

import { Heading } from './Heading';

describe('Heading', () => {
  test('Test render', () => {
    render(<Heading>Test</Heading>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test primary color', () => {
    render(<Heading color="primary">Test</Heading>);
    expect(screen.getByText('Test')).toHaveClass('primary');
  });
});
