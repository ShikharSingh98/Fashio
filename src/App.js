import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';

const HatPage = () => {
  return <div>HATS PAGE</div>;
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatPage} />
      </Switch>
    </div>
  );
};

export default App;
