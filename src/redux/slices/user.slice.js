import { createSlice } from '@reduxjs/toolkit';

import { initStateAuthUser, reducerAuthUser } from '../actions/user/authUser';
import { initStateCreateUser, reducerCreateUser } from '../actions/user/createUser';
import { initStateLoginEmail, reducerLoginEmail } from '../actions/user/loginEmail';
import { initStateAuthAdmin, reducerAuthAdmin } from '../actions/user/authAdmin';

export const initialState = {
  ...initStateAuthUser,
  ...initStateCreateUser,
  ...initStateLoginEmail,
  ...initStateAuthAdmin,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetAuthUser(state) {
      state.authUser = initStateAuthUser.authUser;
    },
    resetCreateUser(state) {
      state.createUser = initStateCreateUser.createUser;
    },
    resetLoginEmail(state) {
      state.loginEmail = initStateLoginEmail.loginEmail;
    },
  },
  extraReducers: {
    ...reducerAuthUser,
    ...reducerCreateUser,
    ...reducerLoginEmail,
    ...reducerAuthAdmin,
  },
});
export const { resetAuthUser, resetCreateUser, resetLoginEmail } = userSlice.actions;
export const userReducer = userSlice.reducer;
