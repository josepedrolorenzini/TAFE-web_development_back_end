
import React, { useEffect, useState } from 'react';
import { fetchProducts } from './productApi';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();
      setProducts(productsData);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Available Products</h1>
      {products.map(product => (
        <div className="product" key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
