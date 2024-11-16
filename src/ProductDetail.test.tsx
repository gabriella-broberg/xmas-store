import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// Mocka fetch
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
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
    })
  ) as unknown as typeof fetch; // Använd `as unknown` för att övervinna typkonflikten
});

afterEach(() => {
  vi.resetAllMocks();
});

// Test för ProductDetail
describe('ProductDetail', () => {
  test('displays product details', async () => {
    render(
      <MemoryRouter initialEntries={['/products/1']}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Kontrollera att data hämtas och visas korrekt
    expect(await screen.findByText('Julgranskula')).toBeInTheDocument();
    expect(await screen.findByText('Pris: 39 kr')).toBeInTheDocument();
    expect(await screen.findByText('Beskrivning: Röd julgranskula')).toBeInTheDocument();
  });
});
