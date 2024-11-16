import { test, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from './ProductList';


// Mocka fetch-data
const mockProducts = [
  { id: 1, name: 'Julgranskula', price: 39, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Julstjärna', price: 49, imageUrl: 'https://via.placeholder.com/150' },
];

// Typa fetch korrekt
type FetchMock = vi.Mock<Promise<{ json: () => Promise<{ products: typeof mockProducts }> }>>;

beforeEach(() => {
  // Mocka global.fetch
  global.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          products: mockProducts,
        }),
    })
  ) as FetchMock;
});

afterEach(() => {
  vi.restoreAllMocks(); // Återställ mockar
});

test('renders a list of products', async () => {
  render(
    <MemoryRouter>
      <ProductList />
    </MemoryRouter>
  );

  // Vänta på att produkterna laddas och renderas
  expect(await screen.findByText('Julgranskula')).toBeInTheDocument();
  expect(screen.getByText('39 kr')).toBeInTheDocument();
  expect(screen.getByText('Julstjärna')).toBeInTheDocument();
  expect(screen.getByText('49 kr')).toBeInTheDocument();
});

test('handles fetch error gracefully', async () => {
  // Mocka fetch för att returnera ett fel
  global.fetch = vi.fn().mockImplementation(() => Promise.reject(new Error('Failed to fetch')));

  render(
    <MemoryRouter>
      <ProductList />
    </MemoryRouter>
  );

  // Vänta på att fallback-meddelandet visas
  expect(await screen.findByText('Inga produkter tillgängliga')).toBeInTheDocument();
});
