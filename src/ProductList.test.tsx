import { test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      products: [
        { id: 1, name: 'Julgranskula', price: 39, imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Julstjärna', price: 49, imageUrl: 'https://via.placeholder.com/150' },
      ],
    }),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('renders a list of products', async () => {
  render(
    <CartProvider>
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    </CartProvider>
  );

  expect(await screen.findByText('Julgranskula')).toBeInTheDocument();
  expect(screen.getByText('39 kr')).toBeInTheDocument();
  expect(screen.getByText('Julstjärna')).toBeInTheDocument();
  expect(screen.getByText('49 kr')).toBeInTheDocument();
});
