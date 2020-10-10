import React from 'react';

import styles from './Collection.module.css';

import CollectionItem from '../CollectionItem/CollectionItem';

const Collections = ({ title, items }) => {
  return (
    <div>
      <h1 className={styles.heading}>{title}</h1>
      <div className={styles.itemsContainer}>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => {
            return <CollectionItem key={id} {...otherProps} />;
          })}
      </div>
    </div>
  );
};

export default Collections;
