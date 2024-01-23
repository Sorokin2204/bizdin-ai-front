import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateChatGetList = {
  chatGetList: { data: null, loading: false, error: null },
};

export const chatGetList = createAsyncThunk('user/chatGetList', async (data, { rejectWithValue, fulfillWithValue }) => {
  const token = localStorage?.getItem('token-access');
  if (!token) rejectWithValue({ error: 'PROBLEM_WITH_TOKEN' });
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/chat/conversations/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerChatGetList = {
  [chatGetList.pending]: (state) => {
    state.chatGetList.loading = true;
  },
  [chatGetList.fulfilled]: (state, action) => {
    state.chatGetList.loading = false;
    state.chatGetList.data = action.payload;
    state.chatGetList.error = null;
  },
  [chatGetList.rejected]: (state, action) => {
    state.chatGetList.loading = false;
    state.chatGetList.error = action.payload;
  },
};
