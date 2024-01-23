import { createSlice } from '@reduxjs/toolkit';
import { initStateUserSignUp, reducerUserSignUp } from '../actions/user/userSignUp';
import { initStateUserSignIn, reducerUserSignIn } from '../actions/user/userSignIn';
import { initStateUserAuth, reducerUserAuth } from '../actions/user/userAuth';
import { initStateUserUpdate, reducerUserUpdate } from '../actions/user/userUpdate';
export const initialState = {
  ...initStateUserSignUp,
  ...initStateUserSignIn,
  ...initStateUserAuth,
  ...initStateUserUpdate,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserSignIn(state, action) {
      state.userSignIn = initStateUserSignIn.userSignIn;
    },
    resetUserSignUp(state, action) {
      state.userSignUp = initStateUserSignUp.userSignUp;
    },
  },
  extraReducers: {
    ...reducerUserSignUp,
    ...reducerUserSignIn,
    ...reducerUserAuth,
    ...reducerUserUpdate,
  },
});
export const { resetUserSignUp, resetUserSignIn } = userSlice.actions;
export const userReducer = userSlice.reducer;
