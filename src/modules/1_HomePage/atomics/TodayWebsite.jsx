/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { listWebsites } from '@/config/website';

import { last } from 'ramda';

class TodayWebsite extends Component {
  render() {
    const todayWeb = last(listWebsites);

    return (
      <div className="p-home-page-today-website">
        <h2 className="u-color-charcoal-light-5">Today's Website</h2>
        <Link to={todayWeb.url} className="u-color-indigo u-fz-24">{todayWeb.title}</Link>
      </div>
    );
  }
}

TodayWebsite.defaultProps = {};

TodayWebsite.propTypes = {};

export default TodayWebsite;
