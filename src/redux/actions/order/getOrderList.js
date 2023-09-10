import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetOrderList = {
  getOrderList: { data: null, loading: false, error: null },
};

export const getOrderList = createAsyncThunk('order/getOrderList', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/order/list`, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetOrderList = {
  [getOrderList.pending]: (state) => {
    state.getOrderList.loading = true;
  },
  [getOrderList.fulfilled]: (state, action) => {
    state.getOrderList.loading = false;
    state.getOrderList.data = action.payload;
    state.getOrderList.error = null;
  },
  [getOrderList.rejected]: (state, action) => {
    state.getOrderList.loading = false;
    state.getOrderList.error = action.payload;
  },
};
