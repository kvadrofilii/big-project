import { render, screen } from '@testing-library/react';

import { Text } from './Text';

describe('Text', () => {
  test('Test render', () => {
    render(<Text>Test</Text>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test primary color', () => {
    render(<Text color="primary">Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('primary');
  });
});
