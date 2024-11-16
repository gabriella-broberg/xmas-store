import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { test, expect } from 'vitest';
import ProductList from './ProductList';
import { Product } from './types';

test('displays a list of products with name and price', () => {
  const mockProducts: Product[] = [
    { id: 1, name: 'Julgranskula', price: 29, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Julstjärna', price: 49, imageUrl: 'https://via.placeholder.com/150' },
  ];

  render(
    <MemoryRouter>
      <ProductList products={mockProducts} />
    </MemoryRouter>
  );

  expect(screen.getByText('Julgranskula')).toBeInTheDocument();
  expect(screen.getByText('29 kr')).toBeInTheDocument();
  expect(screen.getByText('Julstjärna')).toBeInTheDocument();
  expect(screen.getByText('49 kr')).toBeInTheDocument();
});
