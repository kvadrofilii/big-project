import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('Button', () => {
  test('Test render', () => {
    render(<IconButton>Test</IconButton>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test clear variant', () => {
    render(<IconButton variant="clear">Test</IconButton>);
    expect(screen.getByText('Test')).toHaveClass('clear-primary');
  });
});
