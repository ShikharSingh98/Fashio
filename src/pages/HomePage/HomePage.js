import React from 'react';

import styles from './HomePage.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default HomePage;
