import React from 'react';
import Collections from '../../components/Collections/Collections';

import styles from './ShopPage.module.css';

import SHOP_DATA from './SHOP_DATA';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => {
          return <Collections key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
