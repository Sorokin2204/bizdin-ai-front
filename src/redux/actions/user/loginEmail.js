import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateLoginEmail = {
  loginEmail: { data: null, loading: false, error: null },
};

export const loginEmail = createAsyncThunk('user/loginEmail', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/user/login/mail`, {
      params: data,
    })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerLoginEmail = {
  [loginEmail.pending]: (state) => {
    state.loginEmail.loading = true;
  },
  [loginEmail.fulfilled]: (state, action) => {
    state.loginEmail.loading = false;
    state.loginEmail.data = action.payload;
    state.loginEmail.error = null;
  },
  [loginEmail.rejected]: (state, action) => {
    state.loginEmail.loading = false;
    state.loginEmail.error = action.payload;
  },
};
