import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders Hello, TDD!', () => {
  render(<App />);
  const heading = screen.getByText(/Hello, TDD!/i);
  expect(heading).toBeInTheDocument();
});
