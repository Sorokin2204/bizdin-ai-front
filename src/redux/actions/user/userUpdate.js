import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateUserUpdate = {
  userUpdate: { data: null, loading: false, error: null },
};

export const userUpdate = createAsyncThunk('user/userUpdate', async (data, { rejectWithValue, fulfillWithValue }) => {
  const token = localStorage?.getItem('token-access');
  if (!token) rejectWithValue({ error: 'PROBLEM_WITH_TOKEN' });
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/account/user/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerUserUpdate = {
  [userUpdate.pending]: (state) => {
    state.userUpdate.loading = true;
  },
  [userUpdate.fulfilled]: (state, action) => {
    state.userUpdate.loading = false;
    state.userUpdate.data = action.payload;
    state.userUpdate.error = null;
  },
  [userUpdate.rejected]: (state, action) => {
    state.userUpdate.loading = false;
    state.userUpdate.error = action.payload;
  },
};
