import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetTypePaymentList = {
  getTypePaymentList: { data: [], loading: false, error: null },
};

export const getTypePaymentList = createAsyncThunk('app/getTypePaymentList', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/type-payment/list`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetTypePaymentList = {
  [getTypePaymentList.pending]: (state) => {
    state.getTypePaymentList.loading = true;
  },
  [getTypePaymentList.fulfilled]: (state, action) => {
    state.getTypePaymentList.loading = false;
    state.getTypePaymentList.data = action.payload;
    state.getTypePaymentList.error = null;
  },
  [getTypePaymentList.rejected]: (state, action) => {
    state.getTypePaymentList.loading = false;
    state.getTypePaymentList.error = action.payload;
  },
};
