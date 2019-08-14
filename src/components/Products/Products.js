import React from 'react';

import ProductItem from 'csssr-school-product-card';

import products from '../../products.json';
import './Products.css';
import PropTypes from 'prop-types';

const PRODUCTS_LIMIT = 3;

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? "starFill" : ""} />;
};

class Products extends React.Component {
  render() {
    return (
      <ul className="products">
        {products
          .filter(item => {
            if (this.props.minPrice !== 0) {
              return item.price >= this.props.minPrice;
            } else {
              return item;
            }
          })
          .filter(item => {
            if (this.props.maxPrice !== 0) {
              return item.price <= this.props.maxPrice;
            } else {
              return item;
            }
          })
          .slice(0, PRODUCTS_LIMIT)
          .map((item) => 
          <ProductItem
            key={item.id}
            isInStock={item.isInStock}
            img={item.img}
            title={item.title}
            price={item.price + ' ₽'}
            subPriceContent={item.subPriceContent}
            maxRating={item.maxRating}
            rating={item.rating}
            ratingComponent={ratingComponent}
          />
        )}
      </ul>
    );
  }
}

Products.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number
};

export default Products;
