import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateGetCommentList = {
  getCommentList: { data: null, loading: false, error: null },
};

export const getCommentList = createAsyncThunk('comment/getCommentList', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/comment/list`)
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerGetCommentList = {
  [getCommentList.pending]: (state) => {
    state.getCommentList.loading = true;
  },
  [getCommentList.fulfilled]: (state, action) => {
    state.getCommentList.loading = false;
    state.getCommentList.data = action.payload;
    state.getCommentList.error = null;
  },
  [getCommentList.rejected]: (state, action) => {
    state.getCommentList.loading = false;
    state.getCommentList.error = action.payload;
  },
};
