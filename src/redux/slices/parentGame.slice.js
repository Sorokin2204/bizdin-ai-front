import { createSlice } from '@reduxjs/toolkit';
import { initStateCreateParentGame, reducerCreateParentGame } from '../actions/parentGame/createParentGame';
import { initStateGetSingleParentGame, reducerGetSingleParentGame } from '../actions/parentGame/getSingleParentGame';
import { initStateGetParentGameList, reducerGetParentGameList } from '../actions/parentGame/getParentGameList';
import { initStateUpdateParentGame, reducerUpdateParentGame } from '../actions/parentGame/updateParentGame';

export const initialState = {
  ...initStateCreateParentGame,
  ...initStateGetSingleParentGame,
  ...initStateGetParentGameList,
  ...initStateUpdateParentGame,
};

export const parentGameSlice = createSlice({
  name: 'parentGame',
  initialState,
  reducers: {
    resetCreateParentGame(state) {
      state.createParentGame = initStateCreateParentGame.createParentGame;
    },
    resetUpdateParentGame(state) {
      state.updateParentGame = initStateUpdateParentGame.updateParentGame;
    },
  },
  extraReducers: {
    ...reducerCreateParentGame,
    ...reducerGetSingleParentGame,
    ...reducerGetParentGameList,
    ...reducerUpdateParentGame,
  },
});
export const { resetCreateParentGame, resetUpdateParentGame } = parentGameSlice.actions;
export const parentGameReducer = parentGameSlice.reducer;
