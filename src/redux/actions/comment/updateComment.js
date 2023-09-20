import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateUpdateComment = {
  updateComment: { data: null, loading: false, error: null },
};

export const updateComment = createAsyncThunk('comment/updateComment', async (data, { rejectWithValue, fulfillWithValue }) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/comment/update`, data, { headers: { 'auth-token': localStorage.getItem('auth-token') } })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerUpdateComment = {
  [updateComment.pending]: (state) => {
    state.updateComment.loading = true;
  },
  [updateComment.fulfilled]: (state, action) => {
    state.updateComment.loading = false;
    state.updateComment.data = action.payload;
    state.updateComment.error = null;
  },
  [updateComment.rejected]: (state, action) => {
    state.updateComment.loading = false;
    state.updateComment.error = action.payload;
  },
};
