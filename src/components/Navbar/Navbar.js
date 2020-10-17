import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import styles from './Navbar.module.css';

const Navbar = ({ currentUser }) => {
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
            HOME
          </Link>
          <Link className={styles.navbarLink} to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <div className={styles.navbarButton} onClick={() => auth.signOut()}>
              Sign Out
            </div>
          ) : (
            <Link className={styles.navbarButton} to="/signin">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
