import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slices/app.slice';
import { userReducer } from './slices/user.slice';
import { chatReducer } from './slices/chat.slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    chat: chatReducer,
  },
});
