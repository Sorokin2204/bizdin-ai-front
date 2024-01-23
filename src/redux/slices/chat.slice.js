import { createSlice } from '@reduxjs/toolkit';
import { initStateChatGetList, reducerChatGetList } from '../actions/chat/chatGetList';
import { initStateChatSendMessage, reducerChatSendMessage } from '../actions/chat/chatSendMessage';
import { initStateChatGetMessages, reducerChatGetMessages } from '../actions/chat/chatGetMessages';
import { initStateChatFavorite, reducerChatFavorite } from '../actions/chat/chatFavorite';
export const initialState = {
  ...initStateChatGetList,
  ...initStateChatSendMessage,
  ...initStateChatGetMessages,
  ...initStateChatFavorite,
  activeConversation: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    resetChatGetList(state, action) {
      state.chatGetList = initStateChatGetList.chatGetList;
    },
    setActiveConversation(state, action) {
      state.activeConversation = action.payload;
    },
    resetChatSendMessage(state, action) {
      state.chatSendMessage = initStateChatSendMessage.chatSendMessage;
    },
  },
  extraReducers: {
    ...reducerChatGetList,
    ...reducerChatSendMessage,
    ...reducerChatGetMessages,
    ...reducerChatFavorite,
  },
});
export const { resetChatGetList, setActiveConversation } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
