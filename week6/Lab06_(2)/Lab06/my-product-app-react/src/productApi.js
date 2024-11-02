import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; 

// function to fetch products
export async function fetchProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// function to create a new product
export async function createProduct(productData) {
  try {
    const response = await axios.post(`${BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}
