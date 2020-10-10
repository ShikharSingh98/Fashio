import React from 'react';

import styles from './HomePage.module.css';

import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
    </div>
  );
};

export default HomePage;
