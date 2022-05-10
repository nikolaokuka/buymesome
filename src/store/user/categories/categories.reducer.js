import { CategoriesActionTypes } from './categories.types';

const INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: action.payload,
      };
    default:
      return state;
  }
};
