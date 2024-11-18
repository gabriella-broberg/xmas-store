import React from 'react';
import './global.css'; // Importera den globala CSS-filen
import ProductList from './ProductList'; // Importera ProductList

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <h1>Jultema</h1>
            <p>Utforska våra fantastiska erbjudanden och julinspiration!</p>
            
            {/* Produktlistan */}
            <section>
                <h2>Våra produkter</h2>
                <ProductList /> {/* Rendera ProductList här */}
            </section>
        </div>
    );
};

export default HomePage;
