import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import NewProduct from './components/NewProduct';
import productsData from './data';
import './styles.css';
import SingleProduct from './components/SingleProduct';
 
const App = () => {
    const [products, setProducts] = useState(productsData);
   
    const addProduct = (product) => {
      setProducts([...products, product]);
    };
    console.log(products)
    return (
        
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Product List</Link>
              </li>
              <li>
                <Link to="/new">Create New Product</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route path="/new" element={<NewProduct addProduct={addProduct} />} />
            <Route path="/:id" element={<SingleProduct products={products} />} />
          </Routes>
        </div>
      </Router>
      
    );
  };
   
  export default App;
  