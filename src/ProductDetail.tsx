import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Product } from './types';

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Hämta produkter och filtrera fram rätt produkt
    fetch('/customer.json')
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.products.find((p: Product) => p.id === Number(id));
        setProduct(foundProduct || null);
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <p>Produkten hittades inte!</p>;
  }

  return (
    <div>
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} style={{ width: '300px', height: 'auto' }} />}
      <h1>{product.name}</h1>
      <p>Pris: {product.price} kr</p>
      {product.description && <p>Beskrivning: {product.description}</p>}
      {product.stock && <p>Antal i lager: {product.stock}</p>}
      <button onClick={() => navigate(-1)}>Tillbaka</button>
    </div>
  );
}

export default ProductDetail;
