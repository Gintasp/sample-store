import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

const Menu = props => {
  return (
    <nav>
      <div className={styles.Brand}>
        <Link to="/">T-Shirt Store</Link>
      </div>
      <ul className={styles.MenuRight}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
