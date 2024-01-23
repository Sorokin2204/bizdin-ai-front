import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateChatGetMessages = {
  chatGetMessages: { data: null, loading: false, error: null },
};

export const chatGetMessages = createAsyncThunk('chat/chatGetMessages', async (data, { rejectWithValue, fulfillWithValue }) => {
  const token = localStorage?.getItem('token-access');
  if (!token) rejectWithValue({ error: 'PROBLEM_WITH_TOKEN' });
  return await axios
    .get(`${process.env.REACT_APP_SERVER_API}/chat/messages/?conversationId=${data}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerChatGetMessages = {
  [chatGetMessages.pending]: (state) => {
    state.chatGetMessages.loading = true;
  },
  [chatGetMessages.fulfilled]: (state, action) => {
    state.chatGetMessages.loading = false;
    state.chatGetMessages.data = action.payload;
    state.chatGetMessages.error = null;
  },
  [chatGetMessages.rejected]: (state, action) => {
    state.chatGetMessages.loading = false;
    state.chatGetMessages.error = action.payload;
  },
};
