import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const initStateChatFavorite = {
  chatFavorite: { data: null, loading: false, error: null },
};

export const chatFavorite = createAsyncThunk('user/chatFavorite', async (data, { rejectWithValue, fulfillWithValue }) => {
  const token = localStorage?.getItem('token-access');
  if (!token) rejectWithValue({ error: 'PROBLEM_WITH_TOKEN' });
  return await axios
    .post(`${process.env.REACT_APP_SERVER_API}/chat/conversations/favorite/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return fulfillWithValue(res.data);
    })
    .catch((res) => {
      return rejectWithValue(res.response.data);
    });
});

export const reducerChatFavorite = {
  [chatFavorite.pending]: (state) => {
    state.chatFavorite.data = null;
    state.chatFavorite.loading = true;
  },
  [chatFavorite.fulfilled]: (state, action) => {
    state.chatFavorite.loading = false;
    state.chatFavorite.data = action.payload;
    state.chatFavorite.error = null;
  },
  [chatFavorite.rejected]: (state, action) => {
    state.chatFavorite.data = null;
    state.chatFavorite.loading = false;
    state.chatFavorite.error = action.payload;
  },
};
