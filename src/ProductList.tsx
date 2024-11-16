import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { Product } from './types';

interface ProductListProps {
  products?: Product[]; // Gör products till en valfri prop
}

function ProductList({ products: initialProducts }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts || []);

  useEffect(() => {
    if (!initialProducts) {
      // Mockade produkter med placeholder-bilder
      const mockProducts: Product[] = [
        { id: 1, name: 'Julgranskula', price: 39, imageUrl: 'https://www.rusta.com/cdn-cgi/image/quality=60,width=1264,format=auto/globalassets/productimages/773014080104-1031-p.jpg?ref=680CEA1DA0' },
        { id: 2, name: 'Julstjärna 2', price: 49, imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Tomte 3', price: 39, imageUrl: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Julgran 4', price: 99, imageUrl: 'https://via.placeholder.com/150' },
      ];
      setProducts(mockProducts);
    }
  }, [initialProducts]);

  if (products.length === 0) {
    return <p>Inga produkter tillgängliga</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <article key={product.id} style={{ marginBottom: '20px' }}>
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h2>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h2>
          <p>{product.price} kr</p>
        </article>
      ))}
    </div>
  );
}

export default ProductList;
