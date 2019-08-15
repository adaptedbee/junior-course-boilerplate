import React from 'react';
import PropTypes from 'prop-types';
import { logger } from 'csssr-school-utils';

import Headline from '../Headline/Headline.js';

import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.minPriceInput = React.createRef();
    this.maxPriceInput = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);
    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const minPrice = this.parsePriceInput(this.minPriceInput.current.value);
    const maxPrice = this.parsePriceInput(this.maxPriceInput.current.value);
    this.props.updatePriceFilter(minPrice, maxPrice);
  }

  parsePriceInput(value) {
    if (value === '') {
      return null;
    }
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      return null;
    } else if (numberValue <= 0) {
      return 0;
    } else {
      return numberValue;
    }
  }

  render() {
    return (
      <form 
        className="filter-form"
        onSubmit={this.handleSubmit}>
        <Headline
          size={3}
          text={'Цена'} />
        <div className="filter-form__price-range-wrapper">
          <label 
            className="filter-form__label" 
            htmlFor="from-price">
            от
          </label>
          <input 
            className="filter-form__text-input filter-form__text-input--price" 
            id="from-price"
            type="text"
            defaultValue={this.props.minPrice}
            ref={this.minPriceInput} />
          <label 
            className="filter-form__label" 
            htmlFor="to-price">
            до
          </label>
          <input 
            className="filter-form__text-input filter-form__text-input--price" 
            id="to-price" 
            type="text"
            defaultValue={this.props.maxPrice}
            ref={this.maxPriceInput} />
        </div>
        <button 
          className="filter-form__button"
          type="submit">
          Применить
        </button>
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
