import React from 'react';
import { connect } from 'react-redux';

import Main from '../../hoc/Main';
import Item from '../../components/Item';

import * as actions from '../../store/actions/actions';

import styles from './styles.css';

class Shop extends React.Component {
  render() {
    let items =
      this.props.shop.length === 0 ? (
        <p className={styles.shopNoResults}>
          No results matched your search. Please try again.
        </p>
      ) : (
        this.props.shop.map(item => (
          <Item
            key={item.id}
            title={item.title}
            price={item.price + ' $'}
            imageUrl={item.image}
          />
        ))
      );

    return (
      <Main>
        <div className={styles.shopHeader}>
          <h4>Search by Title</h4>
          <input
            onKeyUp={e => {
              this.props.onShopSearch(e);
              console.log(this.props.shop);
              console.log(this.props.shop.length);
            }}
            type="text"
            placeholder="Enter the title..."
          />
        </div>
        <div className={styles.itemContainer}>{items}</div>
      </Main>
    );
  }
}

const mapStateToProps = state => {
  const { shop } = state;
  return {
    shop,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShopSearch: e => dispatch(actions.shopSearchInit(e.target.value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
