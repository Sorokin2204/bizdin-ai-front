import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetFilterGameList = {
  getFilterGameList: { data: [], loading: false, error: null },
};

export const getFilterGameList = createAsyncThunk('app/getFilterGameList', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/filter-game/list`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetFilterGameList = {
  [getFilterGameList.pending]: (state) => {
    state.getFilterGameList.loading = true;
  },
  [getFilterGameList.fulfilled]: (state, action) => {
    state.getFilterGameList.loading = false;
    state.getFilterGameList.data = action.payload;
    state.getFilterGameList.error = null;
  },
  [getFilterGameList.rejected]: (state, action) => {
    state.getFilterGameList.loading = false;
    state.getFilterGameList.error = action.payload;
  },
};
