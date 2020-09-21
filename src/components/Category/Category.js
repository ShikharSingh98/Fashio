import React from 'react';

import styles from './Category.module.css';

const Category = ({ imageUrl, title }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className={styles.text}>
        <span>{title}</span>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default Category;
