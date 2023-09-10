import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateCreateParentGame = {
  createParentGame: { data: null, loading: false, error: null },
};

export const createParentGame = createAsyncThunk('parentGame/createParentGame', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/parent-game/create`, data)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerCreateParentGame = {
  [createParentGame.pending]: (state) => {
    state.createParentGame.loading = true;
  },
  [createParentGame.fulfilled]: (state, action) => {
    state.createParentGame.loading = false;
    state.createParentGame.data = action.payload;
    state.createParentGame.error = null;
  },
  [createParentGame.rejected]: (state, action) => {
    state.createParentGame.loading = false;
    state.createParentGame.error = action.payload;
  },
};
