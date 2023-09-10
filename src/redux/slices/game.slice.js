import { createSlice } from '@reduxjs/toolkit';
import { initStateCreateGame, reducerCreateGame } from '../actions/game/createGame';
import { initStateGetSingleGame, reducerGetSingleGame } from '../actions/game/getSingleGame';
import { initStateGetGameList, reducerGetGameList } from '../actions/game/getGameList';
import { initStateUpdateGame, reducerUpdateGame } from '../actions/game/updateGame';

export const initialState = {
  ...initStateCreateGame,
  ...initStateGetSingleGame,
  ...initStateGetGameList,
  ...initStateUpdateGame,
  activePackages: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setActivePackages(state, action) {
      state.activePackages = action.payload;
    },
    resetGetSingleGame(state) {
      state.getSingleGame = initStateGetSingleGame.getSingleGame;
    },
    resetCreateGame(state) {
      state.createGame = initStateCreateGame.createGame;
    },
    resetUpdateGame(state) {
      state.updateGame = initStateUpdateGame.updateGame;
    },
  },
  extraReducers: {
    ...reducerCreateGame,
    ...reducerGetSingleGame,
    ...reducerGetGameList,
    ...reducerUpdateGame,
  },
});
export const { resetGetSingleGame, resetCreateGame, resetUpdateGame, setActivePackages } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
