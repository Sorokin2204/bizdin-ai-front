import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetCommentListAdmin = {
  getCommentListAdmin: { data: null, loading: false, error: null },
};

export const getCommentListAdmin = createAsyncThunk('comment/getCommentListAdmin', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/comment/list-admin`, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetCommentListAdmin = {
  [getCommentListAdmin.pending]: (state) => {
    state.getCommentListAdmin.loading = true;
  },
  [getCommentListAdmin.fulfilled]: (state, action) => {
    state.getCommentListAdmin.loading = false;
    state.getCommentListAdmin.data = action.payload;
    state.getCommentListAdmin.error = null;
  },
  [getCommentListAdmin.rejected]: (state, action) => {
    state.getCommentListAdmin.loading = false;
    state.getCommentListAdmin.error = action.payload;
  },
};
