import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CategoriesActionTypes } from './categories.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './categories.actions';

function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed(error.message));
  }
};

function* onFetchCategoriesAsync() {
  yield takeLatest(CategoriesActionTypes.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([
    call(onFetchCategoriesAsync)
  ]);
}