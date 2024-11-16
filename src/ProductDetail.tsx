import { useParams, useNavigate } from 'react-router-dom';
import mockProducts from './mockProducts'; // Importera mockProducts


function ProductDetail() {
  const { id } = useParams<{ id: string }>(); // Hämtar ID från URL
  const navigate = useNavigate();

  // Hitta produkten med matchande ID
  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Produkten hittades inte!</p>;
  }

  return (
    <div>
      {/* Lägg till bilden om imageUrl finns */}
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

