import React, { Fragment } from 'react';

import { Helmet } from 'react-helmet';

import Home from '@/modules/1_HomePage';

class HomePage extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home page</title>
        </Helmet>

        <Home />
      </Fragment>
    );
  }
}

export default HomePage;
