import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetBannerList = {
  getBannerList: { data: null, loading: false, error: null },
};

export const getBannerList = createAsyncThunk('game/getBannerList', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/banner/list`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetBannerList = {
  [getBannerList.pending]: (state) => {
    state.getBannerList.loading = true;
  },
  [getBannerList.fulfilled]: (state, action) => {
    state.getBannerList.loading = false;
    state.getBannerList.data = action.payload;
    state.getBannerList.error = null;
  },
  [getBannerList.rejected]: (state, action) => {
    state.getBannerList.loading = false;
    state.getBannerList.error = action.payload;
  },
};
