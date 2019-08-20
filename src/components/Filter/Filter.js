import React from 'react';
import PropTypes from 'prop-types';
import { logger } from 'csssr-school-utils';

import Headline from '../Headline/Headline.js';

import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPriceValue: this.props.minPrice,
      maxPriceValue: this.props.maxPrice
    };
  }

  handleMinPriceChange = (event) => {
    this.setState({ 
      minPriceValue: event.target.value 
    });
  }
  handleMaxPriceChange = (event) => {
    this.setState({
      maxPriceValue: event.target.value
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);
    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const parsedMinPrice = this.parsePriceInput(this.state.minPriceValue);
    const parsedMaxPrice = this.parsePriceInput(this.state.maxPriceValue);
    const minPrice = parsedMinPrice !== null ? parsedMinPrice : this.props.minPrice;
    const maxPrice = parsedMaxPrice !== null ? parsedMaxPrice : this.props.maxPrice;
    this.props.updatePriceFilter(minPrice, maxPrice);
  }

  parsePriceInput = (value) => {
    const string = value.replace(/\D/g, '');
    const integer = parseInt(string, 10);
    if (string.length === 0 || isNaN(integer) || integer < 0) {
      return null;
    }

    return integer;
  };

  render() {
    return (
      <form 
        className="filter-form"
        onSubmit={this.handleSubmit}
      >
        <Headline
          size={3}
          text={'Цена'}
        />
        <div className="filter-form__price-range-wrapper">
          <label 
            className="filter-form__label" 
            htmlFor="from-price"
          >
            от
          </label>
          <input 
            className="filter-form__text-input filter-form__text-input--price" 
            id="from-price"
            type="text"
            value={this.state.minPriceValue}
            onChange={this.handleMinPriceChange}
          />
          <label 
            className="filter-form__label" 
            htmlFor="to-price"
          >
            до
          </label>
          <input 
            className="filter-form__text-input filter-form__text-input--price" 
            id="to-price" 
            type="text"
            value={this.state.maxPriceValue}
            onChange={this.handleMaxPriceChange}
          />
        </div>
        <button 
          className="filter-form__button"
          type="submit"
        >
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
