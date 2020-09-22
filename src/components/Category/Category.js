import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './Category.module.css';

const Category = ({ imageUrl, title, linkUrl, history, match }) => {
  console.log(match);
  return (
    <div
      className={styles.container}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(Category);
