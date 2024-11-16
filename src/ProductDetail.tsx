import { Product } from './types';

function ProductDetail({ product }: { product?: Product }) { 
  if (!product) {
    return <p>Ingen produkt vald</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price} kr</p>
      {product.description && <p>{product.description}</p>}
      {product.stock && <p>Antal i lager: {product.stock}</p>}
    </div>
  );
}

export default ProductDetail;
