import React from 'react';
import ReactDOM from 'react-dom';

import Headline from './components/Headline/Headline.js';
import Products from './components/Products/Products.js';
import Filter from './components/Filter/Filter.js';

import './index.css';
import products from './products.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    const productsPrices = products.map(item => item.price);
    this.state = {
      minPrice: Math.min(...productsPrices),
      maxPrice: Math.max(...productsPrices)
    };
  }

  updatePriceFilter = (minPrice, maxPrice) => {
    if (minPrice !== null) {
      this.setState({
        minPrice: minPrice
      });
    }
    if (maxPrice !== null && maxPrice !== 0) {
      this.setState({
        maxPrice: maxPrice
      });
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Headline
          size={1}
          text={'Список товаров'} />
        <div className="container">
          <div className="container__left">
            <Filter 
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              updatePriceFilter={this.updatePriceFilter} />
          </div>
          <div className="container__center">
            <Products
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
