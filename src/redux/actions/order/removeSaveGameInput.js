import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateRemoveSaveGameInput = {
  removeSaveGameInput: { data: null, loading: false, error: null },
};

export const removeSaveGameInput = createAsyncThunk('order/removeSaveGameInput', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(
      `${process.env.REACT_APP_SERVER_API}/order/save-game-input`,
      {
        orderId: data,
      },
      {
        headers: { 'auth-token': localStorage.getItem('auth-token') },
      },
    )
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerRemoveSaveGameInput = {
  [removeSaveGameInput.pending]: (state) => {
    state.removeSaveGameInput.loading = true;
  },
  [removeSaveGameInput.fulfilled]: (state, action) => {
    state.removeSaveGameInput.loading = false;
    state.removeSaveGameInput.data = action.payload;
    state.removeSaveGameInput.error = null;
  },
  [removeSaveGameInput.rejected]: (state, action) => {
    state.removeSaveGameInput.loading = false;
    state.removeSaveGameInput.error = action.payload;
  },
};
