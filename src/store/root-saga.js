import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/categories.sagas';

export function* rootSaga() {
  yield all([
    call(categoriesSaga)
  ]);
}