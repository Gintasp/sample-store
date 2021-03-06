import * as types from '../actions/actionTypes';
import goods from '../data/goods.json';
import orders from '../data/orders.js';

const initialState = {
  shop: goods,
  orders: orders,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDER_SEARCH_INIT:
      return {
        ...state,
        orders: !action.payload
          ? orders
          : state.orders.filter(order => {
              return order.id
                .toLowerCase()
                .trim()
                .includes(action.payload.trim().toLowerCase());
            }),
      };
    case types.SHOP_SEARCH_INIT:
      return {
        ...state,
        shop: !action.payload
          ? goods
          : state.shop.filter(item => {
              return item.title
                .toLowerCase()
                .trim()
                .includes(action.payload.trim().toLowerCase());
            }),
      };
    default:
      return state;
  }
};

export default reducer;
