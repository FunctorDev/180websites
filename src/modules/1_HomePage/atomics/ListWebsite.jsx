import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { listWebsites } from '@/config/website';

class ListWebsite extends Component {
  render() {
    return (
      <div className="p-home-page-list">
        {listWebsites.map(website => (
          <div key={website.day} className="p-home-page-list__item">
            <span>Day {website.day}</span>
            <Link to={website.url} className="u-mgl-5 u-color-indigo u-text-bold">{website.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}

ListWebsite.defaultProps = {};

ListWebsite.propTypes = {};

export default ListWebsite;
