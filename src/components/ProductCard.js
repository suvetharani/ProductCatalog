import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onDelete }) => {
  return (
    <Card style={{ width: '200px', margin: '10px' }}>
      <CardMedia component="img" height="140" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">{product.price}</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
          <Button variant="contained" color="primary" component={Link} to={`/edit/${product.id}`}>Edit</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
