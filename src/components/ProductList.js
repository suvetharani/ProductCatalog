import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from '@mui/material';

const ProductList = () => {
  const { products, removeProduct } = useContext(ProductContext);

  return (
    <div>
      <h2>Product Catalog</h2>
      <Button variant="contained" color="primary" component={Link} to="/add">Add Product</Button>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={() => removeProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
