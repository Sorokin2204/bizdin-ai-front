import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateCreateBanner = {
  createBanner: { data: null, loading: false, error: null },
};

export const createBanner = createAsyncThunk('banner/createBanner', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/banner/create`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerCreateBanner = {
  [createBanner.pending]: (state) => {
    state.createBanner.loading = true;
  },
  [createBanner.fulfilled]: (state, action) => {
    state.createBanner.loading = false;
    state.createBanner.data = action.payload;
    state.createBanner.error = null;
  },
  [createBanner.rejected]: (state, action) => {
    state.createBanner.loading = false;
    state.createBanner.error = action.payload;
  },
};
