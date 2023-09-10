import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetSupportList = {
  getSupportList: { data: [], loading: false, error: null },
};

export const getSupportList = createAsyncThunk('game/getSupportList', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/support/list`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetSupportList = {
  [getSupportList.pending]: (state) => {
    state.getSupportList.loading = true;
  },
  [getSupportList.fulfilled]: (state, action) => {
    state.getSupportList.loading = false;
    state.getSupportList.data = action.payload;
    state.getSupportList.error = null;
  },
  [getSupportList.rejected]: (state, action) => {
    state.getSupportList.loading = false;
    state.getSupportList.error = action.payload;
  },
};
