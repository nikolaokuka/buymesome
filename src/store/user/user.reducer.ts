import { AnyAction } from 'redux';

import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signOutSuccess, signInFailed, signUpFailed, signOutFailed } from './user.actions';
import { UserData } from '../../utils/firebase/firebase';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly loading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
