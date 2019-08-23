import React from 'react';
import PropTypes from 'prop-types';

import Headline from '../Headline/Headline.js';
import PriceInput from '../PriceInput/PriceInput.js';
import Discount from 'csssr-school-input-discount';
import withInputState from '../../hocs/withInputState.js';
import logRender from '../../hocs/logRender.js';

import './Filter.css';

const DiscountWithState = withInputState(Discount);

class Filter extends React.Component {
  handleMinPriceChange = (value) => {
    this.props.updatePriceFilter(value, this.props.maxPrice);
  }
  handleMaxPriceChange = (value) => {
    this.props.updatePriceFilter(this.props.minPrice, value);
  }
  handleDiscountChange = (event) => {
    this.props.updateDiscount(Number(event.target.value));
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
        <DiscountWithState 
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

export default logRender(Filter);
