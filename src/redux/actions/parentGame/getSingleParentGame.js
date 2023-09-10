import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetSingleParentGame = {
  getSingleParentGame: { data: null, loading: false, error: null },
};

export const getSingleParentGame = createAsyncThunk('parentGame/getSingleParentGame', async (slug, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/parent-game/single/${slug}`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetSingleParentGame = {
  [getSingleParentGame.pending]: (state) => {
    state.getSingleParentGame.loading = true;
  },
  [getSingleParentGame.fulfilled]: (state, action) => {
    state.getSingleParentGame.loading = false;
    state.getSingleParentGame.data = action.payload;
    state.getSingleParentGame.error = null;
  },
  [getSingleParentGame.rejected]: (state, action) => {
    state.getSingleParentGame.loading = false;
    state.getSingleParentGame.error = action.payload;
  },
};
