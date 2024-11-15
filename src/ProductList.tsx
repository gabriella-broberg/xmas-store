import React from 'react';

function ProductList({ products = [] }) {
  if (products.length === 0) {
    return <p>Inga produkter tillgängliga</p>;
  }

  return (
    <div>
      {products.map(product => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price} kr</p>
        </article>
      ))}
    </div>
  );
}

export default ProductList;
