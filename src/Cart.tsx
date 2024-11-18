import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Varukorg</h1>
      {cart.length === 0 ? (
        <p>Varukorgen är tom</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} kr
              <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
