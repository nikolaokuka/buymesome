import { createSelector } from 'reselect';
import { CategoriesState } from './categories.reducer';
import { CategoryMap } from './categories.types';

const selectCategoriesReducer = (state: any): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories): CategoryMap => categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.loading
);
