import React from 'react';
import PropTypes from 'prop-types';
import { logger } from 'csssr-school-utils';

import ProductItem from 'csssr-school-product-card';

import products from '../../products.json';
import './Products.css';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? "starFill" : ""} />;
};

class Products extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);
    return true;
  }

  render() {
    return (
      <ul className="products">
        {products
          .filter(item => item.price >= this.props.minPrice && item.price <= this.props.maxPrice)
          .map((item) => 
          <div className="product">
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
          </div>
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
