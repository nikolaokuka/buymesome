import { CategoriesActionTypes } from './categories.types';

export const fetchCategoriesStart = () => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailed = (error) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_FAILED,
  payload: error,
});
