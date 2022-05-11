import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    case CartActionTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
