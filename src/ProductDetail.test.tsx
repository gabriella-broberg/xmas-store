import { render, screen } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import { expect, test } from 'vitest';

test('displays product details including name, price, description, and stock', () => {
  const mockProduct = {
    id: 1,
    name: 'Julgranskula',
    price: 29,
    description: 'Röd julgranskula',
    stock: 10,
  };

  render(<ProductDetail product={mockProduct} />);

  // Kontrollera att produktens detaljer visas
  expect(screen.getByText('Julgranskula')).toBeInTheDocument();
  expect(screen.getByText('29 kr')).toBeInTheDocument();
  expect(screen.getByText('Röd julgranskula')).toBeInTheDocument();
  expect(screen.getByText('Antal i lager: 10')).toBeInTheDocument();
});

test('renders a back button for navigation', () => {
  const mockProduct = {
    id: 1,
    name: 'Julgranskula',
    price: 29,
    description: 'Röd julgranskula',
    stock: 10,
  };

  render(<ProductDetail product={mockProduct} />);

  // Kontrollera att "Tillbaka"-knappen visas
  const backButton = screen.getByRole('button', { name: /Tillbaka/i });
  expect(backButton).toBeInTheDocument();
});
