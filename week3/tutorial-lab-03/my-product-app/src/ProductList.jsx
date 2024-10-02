// src/ProductList.jsx
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h1>Available Products</h1>
      {products.map(product => (
        <div className="product" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
