import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.heroContainer}>
        <div className={styles.buttonContainer}>
          <h3>Welcome to T-Shirt Store</h3>
          <div className={styles.buttonFlex}>
            <button>
              <Link to="/shop">Start Shopping</Link>
            </button>
            <button>
              <Link to="/orders">View Orders</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
