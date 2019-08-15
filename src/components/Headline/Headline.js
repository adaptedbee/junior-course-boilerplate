import React from 'react';
import PropTypes from 'prop-types';

import './Headline.css';

class Headline extends React.Component {
  render() {
    const Tag = `h${this.props.size > 6 ? 6 : this.props.size}`;

    return (
      <Tag className="headline">{this.props.text}</Tag>
    );
  }
}

Headline.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  text: PropTypes.string
};

export default Headline;
