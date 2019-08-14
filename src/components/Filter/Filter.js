import React from 'react';

import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.minPriceInput = React.createRef();
    this.maxPriceInput = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updatePriceFilter(this.parsePriceInput(this.minPriceInput.current.value), this.parsePriceInput(this.maxPriceInput.current.value));
  }

  parsePriceInput(value) {
    const numberValue = Number(value);
    if (numberValue <= 0) {
      return null;
    } else {
      return numberValue;
    }
  }

  render() {
    return (
      <form 
        className="filter-form"
        onSubmit={this.handleSubmit}>
        <h3 className="filter-form__headline">Цена</h3>
        <div className="filter-form__price-range-wrapper">
          <label 
            className="filter-form__label" 
            htmlFor="from-price">от</label>
          <input 
            className="filter-form__text-input filter-form__text-input--price" 
            id="from-price"
            type="text"
            defaultValue={this.props.minPrice}
            ref={this.minPriceInput} />
          <label 
            className="filter-form__label" 
            htmlFor="to-price">до</label>
          <input 
            className="filter-form__text-input filter-form__text-input--price" 
            id="to-price" 
            type="text"
            defaultValue={this.props.maxPrice}
            ref={this.maxPriceInput} />
        </div>
        <button 
          className="filter-form__button"
          type="submit">Применить</button>
      </form>
    );
  }
}

export default Filter;
