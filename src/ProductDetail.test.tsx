import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // Lägg till Routes och Route
import ProductDetail from './ProductDetail';
import { test, expect, vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...original,
    useParams: () => ({ id: '1' }), // Mocka useParams för att alltid returnera ett id
  };
});

test('displays product details including name, price, description, and stock', () => {
  render(
    <MemoryRouter initialEntries={['/products/1']}>
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Julgranskula')).toBeInTheDocument();
  expect(screen.getByText('Pris: 39 kr')).toBeInTheDocument();
  expect(screen.getByText('Beskrivning: Röd julgranskula')).toBeInTheDocument();
  expect(screen.getByText('Antal i lager: 10')).toBeInTheDocument();
});

test('renders a back button for navigation', () => {
  render(
    <MemoryRouter initialEntries={['/products/1']}>
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );

  const backButton = screen.getByRole('button', { name: /Tillbaka/i });
  expect(backButton).toBeInTheDocument();
});
