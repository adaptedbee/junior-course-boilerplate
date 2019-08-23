import React from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from 'csssr-school-utils';
import ProductItem from 'csssr-school-product-card';

import products from '../../products.json';
import './Products.css';
import logRender from '../../hocs/logRender.js';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? "starFill" : ""} />;
};

const ProductWithLog = logRender(ProductItem);

class Products extends React.Component {
  formatPrice = (number) => {
    return formatMoney(number, 0, '.', ' ') + ' ₽';
  }

  render() {
    return (
      <ul className="products">
        {products
          .filter(item => item.price >= this.props.minPrice && item.price <= this.props.maxPrice)
          .filter(item => this.props.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= this.props.discount/100))
          .map((item) => 
          <div 
            className="product"
            key={item.id}
          >
            <ProductWithLog
              isInStock={item.isInStock}
              img={item.img}
              title={item.title}
              price={this.formatPrice(item.price)}
              subPriceContent={item.oldPrice ? this.formatPrice(item.oldPrice) : ''}
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
  maxPrice: PropTypes.number,
  discount: PropTypes.number
};

export default logRender(Products);
