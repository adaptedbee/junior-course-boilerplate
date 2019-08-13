import React from 'react';

import './Filter.css';
import products from '../../products.json';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    const productsPrices = products.map(item => item.price);
    this.state = {
      minPrice: Math.min(...productsPrices),
      maxPrice: Math.max(...productsPrices)
    };

    this.minPriceInput = React.createRef();
    this.maxPriceInput = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      minPrice: this.parsePriceInput(this.minPriceInput.current.value),
      maxPrice: this.parsePriceInput(this.maxPriceInput.current.value),
    });
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
            defaultValue={this.state.minPrice}
            ref={this.minPriceInput} />
          <label 
            className="filter-form__label" 
            htmlFor="to-price">до</label>
          <input 
            className="filter-form__text-input filter-form__text-input--price" 
            id="to-price" 
            type="text"
            defaultValue={this.state.maxPrice}
            ref={this.maxPriceInput} />
        </div>
        <button 
          className="filter-form__button"
          type="submit">Применить</button>

        <p>{this.state.minPrice}</p>
        <p>{this.state.maxPrice}</p>
      </form>
    );
  }
}

export default Filter;
