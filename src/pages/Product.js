import React from 'react';
import ProductCard from '../components/ProductCard';
import '../css/product.css';

function Product() {
  return (
    <div className='productdivision'>
      <h1 className='topheading'> Featured Product</h1>
      <ProductCard />
      
    </div>
  );
}

export default Product;