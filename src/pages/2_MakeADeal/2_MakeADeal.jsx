import React, { Fragment } from 'react';

import { Helmet } from 'react-helmet';

import MakeADealModule from '@/modules/2_MakeADeal';

class MakeADeal extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Day 2 - Make a deal</title>
        </Helmet>

        <MakeADealModule />
      </Fragment>
    );
  }
}

export default MakeADeal;
