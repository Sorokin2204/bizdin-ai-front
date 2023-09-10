import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetOrderSingle = {
  getOrderSingle: { data: null, loading: false, error: null },
};

export const getOrderSingle = createAsyncThunk('user/getOrderSingle', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/order/single/${data}`, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetOrderSingle = {
  [getOrderSingle.pending]: (state) => {
    state.getOrderSingle.loading = true;
  },
  [getOrderSingle.fulfilled]: (state, action) => {
    state.getOrderSingle.loading = false;
    state.getOrderSingle.data = action.payload;
    state.getOrderSingle.error = null;
  },
  [getOrderSingle.rejected]: (state, action) => {
    state.getOrderSingle.loading = false;
    state.getOrderSingle.error = action.payload;
  },
};
