import React from 'react';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.brand}>
          <img
            className={styles.brandLogo}
            src="https://img.icons8.com/ios/50/000000/tags.png"
            alt="brand-logo"
          />
          <h1 className={styles.brandName}>Fashio</h1>
        </div>
        <div className={styles.navbarLinks}>
          <span>Home</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
