import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateCreateOrder = {
  createOrder: { data: null, loading: false, error: null },
};

export const createOrder = createAsyncThunk('order/createOrder', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/order/create`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerCreateOrder = {
  [createOrder.pending]: (state) => {
    state.createOrder.loading = true;
  },
  [createOrder.fulfilled]: (state, action) => {
    state.createOrder.loading = false;
    state.createOrder.data = action.payload;
    state.createOrder.error = null;
  },
  [createOrder.rejected]: (state, action) => {
    state.createOrder.loading = false;
    state.createOrder.error = action.payload;
  },
};
