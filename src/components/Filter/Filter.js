import React from 'react';
import PropTypes from 'prop-types';
import { logger } from 'csssr-school-utils';

import Headline from '../Headline/Headline.js';
import PriceInput from '../PriceInput/PriceInput.js';
import Discount from 'csssr-school-input-discount';

import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      discountValue: 0
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);
    return true;
  }

  handleMinPriceChange = (value) => {
    this.props.updatePriceFilter(value, this.props.maxPrice);
  }
  handleMaxPriceChange = (value) => {
    this.props.updatePriceFilter(this.props.minPrice, value);
  }
  handleDiscountChange = (event) => {
    this.setState({
      discountValue: event.target.value
    });
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
            defaultValue={this.props.minPrice}
            onPriceChange={this.handleMinPriceChange}
          />
          <label className="filter-form__label">до</label>
          <PriceInput
            defaultValue={this.props.maxPrice}
            onPriceChange={this.handleMaxPriceChange}
          />
        </div>
        <Discount 
          title="Скидка" 
          name="sale" 
          value={this.state.discountValue} 
          onChange={this.handleDiscountChange} 
        />
      </form>
    );
  }
}

Filter.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  updatePriceFilter: PropTypes.func
};

export default Filter;
