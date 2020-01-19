import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { listWebsites } from '@/config';

import HomePage from '@/pages/1_HomePage';
import { NotFound } from '@/elements/Statics';

const App = () => {
  return (
    <div className="app">
      <Switch>
        {listWebsites.map(website => (
          <Route key={website.day} exact path={website.url} component={website.component} />
        ))}
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
