import React from 'react';

import styles from './CollectionItem.module.css';

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} alt="collection-item" />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>&#8377;{price}/-</span>
      </div>
      <button className={styles.button}>ADD TO BAG</button>
    </div>
  );
};

export default CollectionItem;
