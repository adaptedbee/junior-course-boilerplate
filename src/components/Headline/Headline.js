import React from 'react';
import PropTypes from 'prop-types';

import './Headline.css';

class Headline extends React.Component {
  render() {
    if (this.props.size === 1) {
      return (
        <h1 className="headline">{this.props.text}</h1>
      );
    } else if (this.props.size === 2) {
      return (
        <h2 className="headline">{this.props.text}</h2>
      );
    } else if (this.props.size === 3) {
      return (
        <h3 className="headline">{this.props.text}</h3>
      );
    } else if (this.props.size === 4) {
      return (
        <h4 className="headline">{this.props.text}</h4>
      );
    } else if (this.props.size === 5) {
      return (
        <h5 className="headline">{this.props.text}</h5>
      );
    } else {
      return (
        <h6 className="headline">{this.props.text}</h6>
      );
    }
    
  }
}

Headline.propTypes = {
  size: PropTypes.number,
  text: PropTypes.string
};

export default Headline;
