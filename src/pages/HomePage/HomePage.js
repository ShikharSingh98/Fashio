import React from 'react';

import styles from './HomePage.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
    </div>
  );
};

export default HomePage;
