import { createSelector } from 'reselect';

import { UserState } from './user.reducer';

const selectUserReducer = (state: any): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
