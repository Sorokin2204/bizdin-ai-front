import { createSlice } from '@reduxjs/toolkit';
import { initStateCreateComment, reducerCreateComment } from '../actions/comment/createComment';

export const initialState = {
  ...initStateCreateComment,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: {
    ...reducerCreateComment,
  },
});
export const {} = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
