import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetOrderListAdmin = {
  getOrderListAdmin: { data: null, loading: false, error: null },
};

export const getOrderListAdmin = createAsyncThunk('order/getOrderListAdmin', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/order/list-admin`, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetOrderListAdmin = {
  [getOrderListAdmin.pending]: (state) => {
    state.getOrderListAdmin.loading = true;
  },
  [getOrderListAdmin.fulfilled]: (state, action) => {
    state.getOrderListAdmin.loading = false;
    state.getOrderListAdmin.data = action.payload;
    state.getOrderListAdmin.error = null;
  },
  [getOrderListAdmin.rejected]: (state, action) => {
    state.getOrderListAdmin.loading = false;
    state.getOrderListAdmin.error = action.payload;
  },
};
