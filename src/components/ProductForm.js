import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const ProductForm = () => {
  const { createProduct, editProduct, products } = useContext(ProductContext);
  const [product, setProduct] = useState({ name: '', price: '', image: '', description: '' });
  const { id } = useParams();
  const navigate = useNavigate();  // Use useNavigate here

  useEffect(() => {
    if (id) {
      const existingProduct = products.find((product) => product.id === Number(id));
      if (existingProduct) {
        setProduct(existingProduct);
      }
    }
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editProduct(id, product);
    } else {
      createProduct(product);
    }
    navigate('/');  // Use navigate instead of history.push
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={product.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Price"
        name="price"
        value={product.price}
        onChange={handleChange}
        fullWidth
        required
        type="number"
      />
      <TextField
        label="Image URL"
        name="image"
        value={product.image}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Description"
        name="description"
        value={product.description}
        onChange={handleChange}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        {id ? 'Update Product' : 'Add Product'}
      </Button>
    </form>
  );
};

export default ProductForm;
