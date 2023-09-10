import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetCountryList = {
  getCountryList: { data: [], loading: false, error: null },
};

export const getCountryList = createAsyncThunk('app/getCountryList', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/country/list`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetCountryList = {
  [getCountryList.pending]: (state) => {
    state.getCountryList.loading = true;
  },
  [getCountryList.fulfilled]: (state, action) => {
    state.getCountryList.loading = false;
    state.getCountryList.data = action.payload;
    state.getCountryList.error = null;
  },
  [getCountryList.rejected]: (state, action) => {
    state.getCountryList.loading = false;
    state.getCountryList.error = action.payload;
  },
};
