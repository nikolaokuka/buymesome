import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case UserActionTypes.SIGN_IN_FAILED:
    case UserActionTypes.SIGN_UP_FAILED:
    case UserActionTypes.SIGN_OUT_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
