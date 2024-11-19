import { test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import ProductDetail from './ProductDetail';

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      products: [
        {
          id: 1,
          name: 'Julgranskula',
          price: 39,
          description: 'Röd julgranskula',
          stock: 10,
          imageUrl: 'https://via.placeholder.com/150',
        },
      ],
    }),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('displays product details', async () => {
  render(
    <CartProvider>
      <MemoryRouter initialEntries={['/products/1']}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    </CartProvider>
  );

  expect(await screen.findByText('Julgranskula')).toBeInTheDocument();
  expect(screen.getByText('Pris: 39 kr')).toBeInTheDocument();
  expect(screen.getByText('Beskrivning: Röd julgranskula')).toBeInTheDocument();
  expect(screen.getByText('Antal i lager: 10')).toBeInTheDocument();
});
