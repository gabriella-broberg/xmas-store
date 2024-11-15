import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

test('displays a list of products with name and price', () => {
  const mockProducts = [
    { id: 1, name: 'Julgranskula', price: 29 },
    { id: 2, name: 'Julstjärna', price: 49 },
  ];

  render(<ProductList products={mockProducts} />);

  // Kontrollera att produkterna visas korrekt
  expect(screen.getByText('Julgranskula')).toBeInTheDocument();
  expect(screen.getByText('29 kr')).toBeInTheDocument();
  expect(screen.getByText('Julstjärna')).toBeInTheDocument();
  expect(screen.getByText('49 kr')).toBeInTheDocument();
});


test('displays a message if the product list is empty', () => {
    render(<ProductList products={[]} />);
  
    // Kontrollera att meddelandet visas
    expect(screen.getByText('Inga produkter tillgängliga')).toBeInTheDocument();
  });
  