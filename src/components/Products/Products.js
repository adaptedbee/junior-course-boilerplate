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
