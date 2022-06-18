import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CATEGORIES_ACTION_TYPES } from './categories.types';
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
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([
    call(onFetchCategoriesAsync)
  ]);
}
