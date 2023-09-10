import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateChangeTypePaymentOrder = {
  changeTypePaymentOrder: { data: null, loading: false, error: null },
};

export const changeTypePaymentOrder = createAsyncThunk('user/changeTypePaymentOrder', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/order/change-payment`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerChangeTypePaymentOrder = {
  [changeTypePaymentOrder.pending]: (state) => {
    state.changeTypePaymentOrder.loading = true;
  },
  [changeTypePaymentOrder.fulfilled]: (state, action) => {
    state.changeTypePaymentOrder.loading = false;
    state.changeTypePaymentOrder.data = action.payload;
    state.changeTypePaymentOrder.error = null;
  },
  [changeTypePaymentOrder.rejected]: (state, action) => {
    state.changeTypePaymentOrder.loading = false;
    state.changeTypePaymentOrder.error = action.payload;
  },
};
