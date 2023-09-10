import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/user.slice';
import { gameReducer } from './slices/game.slice';
import { appReducer } from './slices/app.slice';
import { parentGameReducer } from './slices/parentGame.slice';
import { supportReducer } from './slices/support.slice';
import { bannerReducer } from './slices/banner.slice';
import { orderReducer } from './slices/order.slice';
import { commentReducer } from './slices/comment.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    parentGame: parentGameReducer,
    app: appReducer,
    support: supportReducer,
    banner: bannerReducer,
    order: orderReducer,
    comment: commentReducer,
  },
});
