// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import NewProduct from './NewProduct';
import productsData from './data';
import './styles.css';
import MyForm from './MyForm';
import MyUsers from './MyUsers';

const App = () => {
  const [products, setProducts] = useState(productsData);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

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
            <li>
              <Link to="/myForm">MyForm</Link>
            </li>
            <li>
              <Link to="/myusers">myUsers</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/new" element={<NewProduct addProduct={addProduct} />} />
          <Route path="/myForm" element={<MyForm />} />
          <Route path="/myUsers" element={<MyUsers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;