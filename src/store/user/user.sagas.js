import { all, call, put, takeLatest } from 'redux-saga/effects';

import { UserActionTypes } from './user.types';

import { signInSuccess, signInFailed, signUpSuccess, signUpFailed } from './user.actions';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase';

function* getSnapshotFromUserauth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    console.log(error);
    yield put(signInFailed(error.message));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error.message));
  }
}

function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserauth, user, additionalDetails);
}

function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserauth, user);
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
    yield call(getSnapshotFromUserauth, user);
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserauth, userAuth);
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}