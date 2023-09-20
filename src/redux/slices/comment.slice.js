import { createSlice } from '@reduxjs/toolkit';
import { initStateCreateComment, reducerCreateComment } from '../actions/comment/createComment';
import { initStateGetCommentList, reducerGetCommentList } from '../actions/comment/getCommentList';
import { initStateGetCommentListAdmin, reducerGetCommentListAdmin } from '../actions/comment/getCommentListAdmin';
import { initStateUpdateComment, reducerUpdateComment } from '../actions/comment/updateComment';

export const initialState = {
  ...initStateCreateComment,
  ...initStateGetCommentList,
  ...initStateGetCommentListAdmin,
  ...initStateUpdateComment,
  editCommentId: null,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setEditCommentId(state, action) {
      state.editCommentId = action.payload;
    },
    resetUpdateComment(state, action) {
      state.updateComment = initStateUpdateComment.updateComment;
    },
    resetCreateComment(state, action) {
      state.createComment = initStateCreateComment.createComment;
    },
  },
  extraReducers: {
    ...reducerCreateComment,
    ...reducerGetCommentList,
    ...reducerGetCommentListAdmin,
    ...reducerUpdateComment,
  },
});
export const { setEditCommentId, resetUpdateComment, resetCreateComment } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
