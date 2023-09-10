import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateUpdateParentGame = {
  updateParentGame: { data: null, loading: false, error: null },
};

export const updateParentGame = createAsyncThunk('game/updateParentGame', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/parent-game/update`, data)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerUpdateParentGame = {
  [updateParentGame.pending]: (state) => {
    state.updateParentGame.loading = true;
  },
  [updateParentGame.fulfilled]: (state, action) => {
    state.updateParentGame.loading = false;
    state.updateParentGame.data = action.payload;
    state.updateParentGame.error = null;
  },
  [updateParentGame.rejected]: (state, action) => {
    state.updateParentGame.loading = false;
    state.updateParentGame.error = action.payload;
  },
};
