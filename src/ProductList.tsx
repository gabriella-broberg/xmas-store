import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { Product } from './types';

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Hämta produkter från customer.json
    fetch('/customer.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product: Product) => {
    alert(`${product.name} har lagts till i varukorgen!`);
  };

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
          <button onClick={() => addToCart(product)}>Köp</button>
        </article>
      ))}
    </div>
  );
}

export default ProductList;
