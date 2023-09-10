import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateUpdateGame = {
  updateGame: { data: null, loading: false, error: null },
};

export const updateGame = createAsyncThunk('game/updateGame', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/game/update`, data)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerUpdateGame = {
  [updateGame.pending]: (state) => {
    state.updateGame.loading = true;
  },
  [updateGame.fulfilled]: (state, action) => {
    state.updateGame.loading = false;
    state.updateGame.data = action.payload;
    state.updateGame.error = null;
  },
  [updateGame.rejected]: (state, action) => {
    state.updateGame.loading = false;
    state.updateGame.error = action.payload;
  },
};
