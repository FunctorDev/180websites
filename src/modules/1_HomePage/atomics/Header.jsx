import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
        <div className="p-home-page-header">
          <a href="" className="p-home-page-header__item">About</a>
          <a href="" className="p-home-page-header__item">Contact</a>
          <a href="" className="p-home-page-header__item">Github</a>
        </div>
    );
  }
}

Header.defaultProps = {};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
