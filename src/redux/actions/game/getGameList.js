import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetGameList = {
  getGameList: { data: [], loading: false, error: null },
};

export const getGameList = createAsyncThunk('game/getGameList', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/game/list`, {
      params: {
        ...(data && { client: true }),
      },
    })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetGameList = {
  [getGameList.pending]: (state) => {
    state.getGameList.loading = true;
  },
  [getGameList.fulfilled]: (state, action) => {
    state.getGameList.loading = false;
    state.getGameList.data = action.payload;
    state.getGameList.error = null;
  },
  [getGameList.rejected]: (state, action) => {
    state.getGameList.loading = false;
    state.getGameList.error = action.payload;
  },
};
