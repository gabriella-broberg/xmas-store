import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import './Global.css'; 

const CartButton = () => {
  const { cart } = useCart(); // Hämta cart från kontexten

  return (
    <div className="cart-button">
      <Link to="/cart">
        🛒 Varukorg ({cart.length})
      </Link>
    </div>
  );
};

export default CartButton;
