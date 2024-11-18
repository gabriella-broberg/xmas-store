import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p>Din varukorg är tom</p>;
  }

  return (
    <div>
      <h1>Varukorg</h1>
      {cart.map((product) => (
        <div key={product.id} style={{ marginBottom: '20px' }}>
          <h2>{product.name}</h2>
          <p>{product.price} kr</p>
          <button onClick={() => removeFromCart(product.id)}>Ta bort</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;