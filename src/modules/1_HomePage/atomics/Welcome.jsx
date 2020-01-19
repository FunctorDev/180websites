/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Welcome extends Component {
  render() {
    return (
      <div className="p-home-page-welcome">
        <h1 className="p-home-page-welcome__hi">Hi!</h1>
        <div className="p-home-page-welcome__info">
          <p className="u-mgy-5">I'm Thanh Luan and I am making</p>
          <h2 className="u-mg-0 u-color-neon-carrot">180 websites in 180 days.</h2>
        </div>
      </div>
    );
  }
}

Welcome.defaultProps = {};

Welcome.propTypes = {
  children: PropTypes.node
};

export default Welcome;
