import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateCreateComment = {
  createComment: { data: null, loading: false, error: null },
};

export const createComment = createAsyncThunk('comment/createComment', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/comment/create`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerCreateComment = {
  [createComment.pending]: (state) => {
    state.createComment.loading = true;
  },
  [createComment.fulfilled]: (state, action) => {
    state.createComment.loading = false;
    state.createComment.data = action.payload;
    state.createComment.error = null;
  },
  [createComment.rejected]: (state, action) => {
    state.createComment.loading = false;
    state.createComment.error = action.payload;
  },
};
