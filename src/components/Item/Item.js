import React from 'react';

import styles from './styles.css';

const Item = props => (
  <div className={styles.Container}>
    <div className={styles.imageOuterContainer}>
      <div
        style={{
          background: `url(${props.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={styles.imageInnerContainer}
      />
    </div>
    <div className={styles.info}>
      <h5>{props.title}</h5>
      <p>{props.price}</p>
    </div>
  </div>
);

export default Item;
