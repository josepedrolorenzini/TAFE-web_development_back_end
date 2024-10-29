import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h1>Available Products</h1>
      {products.map( product => (
        <div className="product" key={product.id}>
        <Link to={`/${product.id}`} > 
        <h2>{product.name}</h2>
        </Link>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

/*
const products = [
 { id: 1, name: 'Product 1', price: '$10' },
 { id: 2, name: 'Product 2', price: '$20' },
 { id: 3, name: 'Product 3', price: '$30' },
];

const ProductList = () => {
 return (
   <div>
     <h1>Product List</h1>
     <ul>
       {products.map(product => (
         <li key={product.id}>
           {product.name} - {product.price}
         </li>
       ))}
     </ul>
   </div>
 );
};

export default ProductList;

*/