import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.brand} to="/">
          <img
            className={styles.brandLogo}
            src="https://img.icons8.com/ios/50/000000/tags.png"
            alt="brand-logo"
          />
          <h1 className={styles.brandName}>Fashio</h1>
        </Link>
        <div className={styles.navbarLinks}>
          <Link className={styles.navbarLink} to="/">
            Home
          </Link>
          <Link className={styles.navbarLink} to="/shop">
            SHOP
          </Link>
          <Link className={styles.navbarLink} to="/shop">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
