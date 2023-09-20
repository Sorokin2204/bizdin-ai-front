import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateCreateGame = {
  createGame: { data: null, loading: false, error: null },
};

export const createGame = createAsyncThunk('game/createGame', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/game/create`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerCreateGame = {
  [createGame.pending]: (state) => {
    state.createGame.loading = true;
  },
  [createGame.fulfilled]: (state, action) => {
    state.createGame.loading = false;
    state.createGame.data = action.payload;
    state.createGame.error = null;
  },
  [createGame.rejected]: (state, action) => {
    state.createGame.loading = false;
    state.createGame.error = action.payload;
  },
};
