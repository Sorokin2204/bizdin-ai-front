import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateCreatePayment = {
  createPayment: { data: null, loading: false, error: null },
};

export const createPayment = createAsyncThunk('order/createPayment', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/order/create-payment`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerCreatePayment = {
  [createPayment.pending]: (state) => {
    state.createPayment.loading = true;
  },
  [createPayment.fulfilled]: (state, action) => {
    state.createPayment.loading = false;
    state.createPayment.data = action.payload;
    state.createPayment.error = null;
  },
  [createPayment.rejected]: (state, action) => {
    state.createPayment.loading = false;
    state.createPayment.error = action.payload;
  },
};
