import React from 'react';

import './Filter.css';

const Filter = props => {
  return <form className="filter-form">
    <h3 className="filter-form__headline">Цена</h3>
    <div className="filter-form__price-range-wrapper">
      <label 
        className="filter-form__label" 
        htmlFor="from-price">от</label>
      <input 
        className="filter-form__text-input filter-form__text-input--price" 
        id="from-price" 
        type="text" />
      <label 
        className="filter-form__label" 
        htmlFor="to-price">до</label>
      <input 
        className="filter-form__text-input filter-form__text-input--price" 
        id="to-price" 
        type="text" />
    </div>
    <button 
      className="filter-form__button"
      type="button">Применить</button>
  </form>;
}

export default Filter;
