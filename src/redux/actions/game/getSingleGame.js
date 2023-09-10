import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetSingleGame = {
  getSingleGame: { data: null, loading: false, error: null },
};

export const getSingleGame = createAsyncThunk('game/getSingleGame', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/game/single/${data?.id ? data.id : data.slug}`, {
      params: {
        ...(data.client && { client: true }),
        ...(data.parentSlug && { parentSlug: data.parentSlug }),
        ...(data.id && { byId: true }),
      },
    })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetSingleGame = {
  [getSingleGame.pending]: (state) => {
    state.getSingleGame.loading = true;
  },
  [getSingleGame.fulfilled]: (state, action) => {
    state.getSingleGame.loading = false;
    state.getSingleGame.data = action.payload;
    state.getSingleGame.error = null;
  },
  [getSingleGame.rejected]: (state, action) => {
    state.getSingleGame.loading = false;
    state.getSingleGame.error = action.payload;
  },
};
