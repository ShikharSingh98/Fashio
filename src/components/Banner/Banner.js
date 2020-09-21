import React from 'react';

import styles from './Banner.module.css';
import logo from '../../assets/cover.png';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.punchLine}>
        <span>Be Exclusive</span>
        <span>Be Devine</span>
        <span>Be Yourself</span>
      </div>
      <img className={styles.image} src={logo} alt="banner" />
    </div>
  );
};

export default Banner;
