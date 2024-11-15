import React from 'react';

function ProductDetail({ product }) {
  if (!product) {
    return <p>Ingen produkt vald</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price} kr</p>
      <p>{product.description}</p>
      <p>Antal i lager: {product.stock}</p>
      <button>Tillbaka</button>
    </div>
  );
}

export default ProductDetail;
