import { CategoryItem } from '../categories/categories.types';
import { CART_ACTION_TYPES, CartItem } from './cart.types';
import { createAction, withMatcher, ActionWithPayload } from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems: CartItem[], itemToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === itemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], itemToRemove: CartItem): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id === itemToRemove.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
};

const clearCartItem = (cartItems: CartItem[], itemToClear: CartItem): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => createAction(
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
));

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(
  CART_ACTION_TYPES.SET_CART_ITEMS,
  cartItems
));

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], itemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, itemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], itemToClear: CartItem) => {
  const newCartItems = clearCartItem(cartItems, itemToClear);
  return setCartItems(newCartItems);
};
