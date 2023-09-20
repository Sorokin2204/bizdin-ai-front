import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateUpdateBanner = {
  updateBanner: { data: null, loading: false, error: null },
};

export const updateBanner = createAsyncThunk('game/updateBanner', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/banner/update`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerUpdateBanner = {
  [updateBanner.pending]: (state) => {
    state.updateBanner.loading = true;
  },
  [updateBanner.fulfilled]: (state, action) => {
    state.updateBanner.loading = false;
    state.updateBanner.data = action.payload;
    state.updateBanner.error = null;
  },
  [updateBanner.rejected]: (state, action) => {
    state.updateBanner.loading = false;
    state.updateBanner.error = action.payload;
  },
};
