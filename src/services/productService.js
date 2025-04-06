import axios from 'axios';

// Simulated API endpoint (You can replace it with your backend API)
const apiUrl = 'https://fakestoreapi.com/products'; // Fake API for demo purposes

export const getProducts = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(apiUrl, product);
  return response.data;
};

export const updateProduct = async (id, updatedProduct) => {
  const response = await axios.put(`${apiUrl}/${id}`, updatedProduct);
  return response.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`${apiUrl}/${id}`);
};
