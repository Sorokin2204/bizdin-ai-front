import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetSingleSupport = {
  getSingleSupport: { data: null, loading: false, error: null },
};

export const getSingleSupport = createAsyncThunk('support/getSingleSupport', async (slug, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/support/single/${slug}`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetSingleSupport = {
  [getSingleSupport.pending]: (state) => {
    state.getSingleSupport.loading = true;
  },
  [getSingleSupport.fulfilled]: (state, action) => {
    state.getSingleSupport.loading = false;
    state.getSingleSupport.data = action.payload;
    state.getSingleSupport.error = null;
  },
  [getSingleSupport.rejected]: (state, action) => {
    state.getSingleSupport.loading = false;
    state.getSingleSupport.error = action.payload;
  },
};
