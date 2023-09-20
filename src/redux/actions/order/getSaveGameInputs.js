import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetSaveGameInputs = {
  getSaveGameInputs: { data: null, loading: false, error: null },
};

export const getSaveGameInputs = createAsyncThunk('order/getSaveGameInputs', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/order/save-game-inputs`, { ...(data && { params: { gameId: data } }), headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetSaveGameInputs = {
  [getSaveGameInputs.pending]: (state) => {
    state.getSaveGameInputs.loading = true;
  },
  [getSaveGameInputs.fulfilled]: (state, action) => {
    state.getSaveGameInputs.loading = false;
    state.getSaveGameInputs.data = action.payload;
    state.getSaveGameInputs.error = null;
  },
  [getSaveGameInputs.rejected]: (state, action) => {
    state.getSaveGameInputs.loading = false;
    state.getSaveGameInputs.error = action.payload;
  },
};
