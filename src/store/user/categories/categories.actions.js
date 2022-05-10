import { CategoriesActionTypes } from './categories.types';

export const setCategoriesMap = (categoriesMap) => ({
  type: CategoriesActionTypes.SET_CATEGORIES_MAP,
  payload: categoriesMap,
});
