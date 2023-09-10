import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateUpdateSupport = {
  updateSupport: { data: null, loading: false, error: null },
};

export const updateSupport = createAsyncThunk('game/updateSupport', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/support/update`, data)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerUpdateSupport = {
  [updateSupport.pending]: (state) => {
    state.updateSupport.loading = true;
  },
  [updateSupport.fulfilled]: (state, action) => {
    state.updateSupport.loading = false;
    state.updateSupport.data = action.payload;
    state.updateSupport.error = null;
  },
  [updateSupport.rejected]: (state, action) => {
    state.updateSupport.loading = false;
    state.updateSupport.error = action.payload;
  },
};
