import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateChatSendMessage = {
  chatSendMessage: { data: null, loading: false, error: null },
};

export const chatSendMessage = createAsyncThunk('user/chatSendMessage', async (data, { rejectWithValue, fulfillWithValue }) => {
  const token = localStorage?.getItem('token-access');
  if (!token) rejectWithValue({ error: 'PROBLEM_WITH_TOKEN' });
  return await axios
    .post(
      `${process.env.REACT_APP_SERVER_API}/conversation_test/`,
      {
        name: 'gpt-3.5-turbo',
        frequency_penalty: 0,
        presence_penalty: 0,
        total_tokens: 4096,
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 1,
        openaiApiKey: null,
        message: [
          {
            content: data?.message,
            tool: 'chat',
            message_type: 0,
          },
        ],
        conversationId: data?.conversationId || null,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerChatSendMessage = {
  [chatSendMessage.pending]: (state) => {
    state.chatSendMessage.loading = true;
  },
  [chatSendMessage.fulfilled]: (state, action) => {
    state.chatSendMessage.loading = false;
    state.chatSendMessage.data = action.payload;
    state.chatSendMessage.error = null;
  },
  [chatSendMessage.rejected]: (state, action) => {
    state.chatSendMessage.loading = false;
    state.chatSendMessage.error = action.payload;
  },
};
