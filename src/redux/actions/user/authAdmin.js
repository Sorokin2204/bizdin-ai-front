import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateAuthAdmin = {
  authAdmin: { data: null, loading: false, error: null },
};

export const authAdmin = createAsyncThunk('user/authAdmin', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/user/auth-admin`, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerAuthAdmin = {
  [authAdmin.pending]: (state) => {
    state.authAdmin.loading = true;
  },
  [authAdmin.fulfilled]: (state, action) => {
    state.authAdmin.loading = false;
    state.authAdmin.data = action.payload;
    state.authAdmin.error = null;
  },
  [authAdmin.rejected]: (state, action) => {
    state.authAdmin.loading = false;
    state.authAdmin.error = action.payload;
  },
};
