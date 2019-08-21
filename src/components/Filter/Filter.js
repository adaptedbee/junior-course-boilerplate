import React from 'react';
import PropTypes from 'prop-types';
import { logger } from 'csssr-school-utils';

import Headline from '../Headline/Headline.js';
import PriceInput from '../PriceInput/PriceInput.js';
import Discount from 'csssr-school-input-discount';
import shallowCompare from 'react-addons-shallow-compare';

import './Filter.css';

class Filter extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (shallowCompare(this, nextProps, nextState)) {
      logger.call(this, this.constructor.name, nextProps, nextState);
    }
    return shallowCompare(this, nextProps, nextState);
  }

  handleMinPriceChange = (value) => {
    this.props.updatePriceFilter(value, this.props.maxPrice);
  }
  handleMaxPriceChange = (value) => {
    this.props.updatePriceFilter(this.props.minPrice, value);
  }
  handleDiscountChange = (value) => {
    this.props.updateDiscount(value);
  }

  render() {
    return (
      <form className="filter-form">
        <Headline
          size={3}
          text={'Цена'}
        />
        <div className="filter-form__price-range-wrapper">
          <label className="filter-form__label">от</label>
          <PriceInput 
            value={this.props.minPrice}
            onChange={this.handleMinPriceChange}
          />
          <label className="filter-form__label">до</label>
          <PriceInput
            value={this.props.maxPrice}
            onChange={this.handleMaxPriceChange}
          />
        </div>
        <Discount 
          title="Скидка" 
          name="sale" 
          value={this.props.discount} 
          onChange={this.handleDiscountChange} 
        />
      </form>
    );
  }
}

Filter.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  discount: PropTypes.number,
  updatePriceFilter: PropTypes.func,
  updateDiscount: PropTypes.func
};

export default Filter;
