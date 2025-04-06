import React, { createContext, useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/productService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const createProduct = async (product) => {
    const newProduct = await addProduct(product);
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const editProduct = async (id, updatedProduct) => {
    const product = await updateProduct(id, updatedProduct);
    setProducts((prevProducts) => prevProducts.map(p => (p.id === id ? product : p)));
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts((prevProducts) => prevProducts.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, createProduct, editProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
