import React from 'react';
import { connect } from 'react-redux';

import Main from '../../hoc/Main';
import Order from '../../components/Order';

import * as actions from '../../store/actions/actions';

import styles from './styles.css';

class Orders extends React.Component {
  render() {
    let orders =
      this.props.orders.length === 0 ? (
        <p>No results match your search. Please try a different ID.</p>
      ) : (
        this.props.orders.map(order => (
          <Order
            key={order.id}
            id={order.id}
            name={order.name}
            email={order.email}
            address={order.address}
            date={order.date}
            total={order.total}
          />
        ))
      );

    return (
      <Main>
        <div className={styles.ordersHeader}>
          <h4>Search by order ID</h4>
          <input
            onKeyUp={e => this.props.onOrderSearch(e)}
            type="text"
            placeholder="Enter order ID..."
          />
        </div>
        {orders}
      </Main>
    );
  }
}

const mapStateToProps = state => {
  const { orders } = state;
  return {
    orders,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderSearch: e => dispatch(actions.orderSearchInit(e.target.value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
