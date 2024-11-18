import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Global.css'; // Importera globala stilar
import { Product } from './types';
import { useCart } from './CartContext';

const ProductList = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Hämta produkter från customer.json
    fetch('/customer.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  if (products.length === 0) {
    return <p>Inga produkter tillgängliga</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h2>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h2>
          <p>{product.price} kr</p>
          <button onClick={() => addToCart(product)} className="btn primary">Köp</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
