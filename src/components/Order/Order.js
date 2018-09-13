import React from 'react';

import styles from './styles.css';

const Order = props => (
  <div className={styles.orderContainer}>
    <p>
      <span>Order ID: </span>
      {props.id}
    </p>
    <p>
      <span>Buyer Name: </span>
      {props.name}
    </p>
    <p>
      <span>Email: </span>
      {props.email}
    </p>
    <p>
      <span>Address: </span>
      {props.address}
    </p>
    <p>
      <span>Date Ordered: </span>
      {props.date}
    </p>
    <p>
      <span>Total amount: </span>
      {props.total}
    </p>
  </div>
);

export default Order;
