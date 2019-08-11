import React from 'react';

import products from '../../products.json';
import './Products.css';

const Products = props => {
  const productsLimit = 3;
  
  return <ul className="products">
    {products.slice(0, productsLimit).map((item, index) => <li key={item.id}>{item.name}</li>)}
  </ul>;
}

export default Products;
