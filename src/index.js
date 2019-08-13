import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Headline from './components/Headline/Headline.js';
import Products from './components/Products/Products.js';
import Filter from './components/Filter/Filter.js';

function App() {
  return (
    <React.Fragment>
      <Headline />
      <div className="container">
        <div className="container__left">
          <Filter />
        </div>
        <div className="container__center">
          <Products />
        </div>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
