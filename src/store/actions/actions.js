import * as types from './actionTypes';

export const orderSearchInit = val => {
  return { type: types.ORDER_SEARCH_INIT, payload: val };
};

export const shopSearchInit = val => {
  return { type: types.SHOP_SEARCH_INIT, payload: val };
};
