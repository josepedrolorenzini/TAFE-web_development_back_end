import React, { useState } from 'react';
 
const NewProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), name, description, price };
    addProduct(newProduct);
    setName('');
    setDescription('');
    setPrice('');
  };
 
  return (
    <div className="container">
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};
 
export default NewProduct;
