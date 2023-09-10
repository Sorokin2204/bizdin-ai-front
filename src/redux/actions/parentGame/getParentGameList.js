import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetParentGameList = {
  getParentGameList: { data: [], loading: false, error: null },
};

export const getParentGameList = createAsyncThunk('game/getParentGameList', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/parent-game/list`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetParentGameList = {
  [getParentGameList.pending]: (state) => {
    state.getParentGameList.loading = true;
  },
  [getParentGameList.fulfilled]: (state, action) => {
    state.getParentGameList.loading = false;
    state.getParentGameList.data = action.payload;
    state.getParentGameList.error = null;
  },
  [getParentGameList.rejected]: (state, action) => {
    state.getParentGameList.loading = false;
    state.getParentGameList.error = action.payload;
  },
};
