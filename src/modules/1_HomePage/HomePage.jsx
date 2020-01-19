import React, { Component } from 'react';

import { Header, Welcome, TodayWebsite, ListWebsite } from './atomics';

class HomePage extends Component {
  render() {
    return (
        <div className="p-home-page">
          <Header />

          <div className="p-home-page__container">
            <Welcome />
            <TodayWebsite />
            <ListWebsite />
          </div>
        </div>
    );
  }
}

export default HomePage;
