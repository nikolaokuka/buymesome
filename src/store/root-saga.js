import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/categories.sagas';
import { userSaga } from './user/user.sagas';

export function* rootSaga() {
  yield all([
    call(categoriesSaga),
    call(userSaga),
  ]);
}