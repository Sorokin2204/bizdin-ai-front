import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateUpdateOrder = {
  updateOrder: { data: null, loading: false, error: null },
};

export const updateOrder = createAsyncThunk('order/updateOrder', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/order/update`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerUpdateOrder = {
  [updateOrder.pending]: (state) => {
    state.updateOrder.loading = true;
  },
  [updateOrder.fulfilled]: (state, action) => {
    state.updateOrder.loading = false;
    state.updateOrder.data = action.payload;
    state.updateOrder.error = null;
  },
  [updateOrder.rejected]: (state, action) => {
    state.updateOrder.loading = false;
    state.updateOrder.error = action.payload;
  },
};
