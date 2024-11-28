import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import { useState, useEffect } from 'react';
import { Product } from './types';

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Hämta produkten från backend via proxy
    fetch(`/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const foundProduct = data.products.find((p: Product) => p.id === Number(id));
        setProduct(foundProduct || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        setError('Kunde inte hämta produktinformation.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Laddar produktinformation...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Produkten hittades inte!</p>;
  }

  return (
    <div className="card-product-detail">
      <img src={product.imageUrl} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      <h2>{product.name}</h2>
      <p>Pris: {product.price} kr</p>
      {product.description && <p>Beskrivning: {product.description}</p>}
      {product.stock && <p>Antal i lager: {product.stock}</p>}
     
      

      <button onClick={() => addToCart(product)} className="btn primary">
        Köp
      </button>
    
    </div>
  );
}

export default ProductDetail;
