import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import { CartProvider } from './CartContext';
import CartButton from './CartButton';
import CartPage from './CartPage'; 
import HomePage from './HomePage'; // Importera HomePage

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Header */}
        <header className="christmas-banner">
        <div className="logo">Jultema</div>
          <CartButton />
        </header>

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Hem som startsida */}
            <Route path="/products" element={<ProductList />} /> {/* Produktlista */}
            <Route path="/products/:id" element={<ProductDetail />} /> {/* Produktdetaljer */}
            <Route path="/cart" element={<CartPage />} /> {/* Varukorg */}
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>© 2024 Jultema. Alla rättigheter förbehållna.</p>
        </footer>
      </Router>
    </CartProvider>
  );
}

export default App;
