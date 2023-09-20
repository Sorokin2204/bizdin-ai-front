import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateCreateSupport = {
  createSupport: { data: null, loading: false, error: null },
};

export const createSupport = createAsyncThunk('support/createSupport', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/support/create`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerCreateSupport = {
  [createSupport.pending]: (state) => {
    state.createSupport.loading = true;
  },
  [createSupport.fulfilled]: (state, action) => {
    state.createSupport.loading = false;
    state.createSupport.data = action.payload;
    state.createSupport.error = null;
  },
  [createSupport.rejected]: (state, action) => {
    state.createSupport.loading = false;
    state.createSupport.error = action.payload;
  },
};
