import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetSingleBanner = {
  getSingleBanner: { data: null, loading: false, error: null },
};

export const getSingleBanner = createAsyncThunk('banner/getSingleBanner', async (slug, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/banner/single/${slug}`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetSingleBanner = {
  [getSingleBanner.pending]: (state) => {
    state.getSingleBanner.loading = true;
  },
  [getSingleBanner.fulfilled]: (state, action) => {
    state.getSingleBanner.loading = false;
    state.getSingleBanner.data = action.payload;
    state.getSingleBanner.error = null;
  },
  [getSingleBanner.rejected]: (state, action) => {
    state.getSingleBanner.loading = false;
    state.getSingleBanner.error = action.payload;
  },
};
