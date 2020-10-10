import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
