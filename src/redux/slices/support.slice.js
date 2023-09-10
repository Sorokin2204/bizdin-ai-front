import { createSlice } from '@reduxjs/toolkit';
import { initStateCreateSupport, reducerCreateSupport } from '../actions/support/createSupport';
import { initStateGetSingleSupport, reducerGetSingleSupport } from '../actions/support/getSingleSupport';
import { initStateGetSupportList, reducerGetSupportList } from '../actions/support/getSupportList';
import { initStateUpdateSupport, reducerUpdateSupport } from '../actions/support/updateSupport';

export const initialState = {
  ...initStateCreateSupport,
  ...initStateGetSingleSupport,
  ...initStateGetSupportList,
  ...initStateUpdateSupport,
};

export const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    resetCreateSupport(state) {
      state.createSupport = initStateCreateSupport.createSupport;
    },
    resetUpdateSupport(state) {
      state.updateSupport = initStateUpdateSupport.updateSupport;
    },
  },
  extraReducers: {
    ...reducerCreateSupport,
    ...reducerGetSingleSupport,
    ...reducerGetSupportList,
    ...reducerUpdateSupport,
  },
});
export const { resetCreateSupport, resetUpdateSupport } = supportSlice.actions;
export const supportReducer = supportSlice.reducer;
