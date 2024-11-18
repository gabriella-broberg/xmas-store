import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import { CartProvider } from './CartContext';
import CartButton from './CartButton';
import CartPage from './CartPage'; 

function App() {
  return (
    <CartProvider>
          <Router>
      <header>
        <CartButton /> {/* Knappen visas alltid i headern */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} /> {/* Lägg till en ny rutt */}
        </Routes>
      </main>
    </Router>
    </CartProvider>
  );
}

export default App;
