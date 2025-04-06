import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container>
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
        &copy; 2024 Product Catalog Management
      </Typography>
    </Container>
  );
};

export default Footer;
