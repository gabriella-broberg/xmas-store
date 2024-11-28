import React from 'react';
import './global.css'; // Importera den globala CSS-filen
import ProductList from './ProductList'; // Importera ProductList

const HomePage: React.FC = () => {
    return (
        <div className="container">
            
            {/* Produktlistan */}
            <section>
                <h2>Våra produkter</h2>
                <ProductList /> {/* Rendera ProductList här */}
            </section>
        </div>
    );
};

export default HomePage;
