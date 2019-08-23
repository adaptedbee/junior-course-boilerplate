import React from 'react';
import { logger } from 'csssr-school-utils';
import shallowCompare from 'react-addons-shallow-compare';

export default function logRender(HoccedComponent) {
  return class extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (shallowCompare(this, nextProps, nextState)) {
        logger.call(this, HoccedComponent.name, nextProps, nextState);
      }
      return shallowCompare(this, nextProps, nextState);
    }

    render() {
      return (
        <HoccedComponent {...this.props} />
      );
    }
  }
}
