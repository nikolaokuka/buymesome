import { CategoriesActionTypes } from './categories.types';

const INITIAL_STATE = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
