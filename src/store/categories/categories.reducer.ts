import { AnyAction } from 'redux';
import { Category } from './categories.types';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './categories.actions';

export type CategoriesState = {
  readonly categories: Category[];
  readonly loading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action: AnyAction): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      loading: true,
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      loading: false,
    };
  }

  if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  }

  return state;
};
