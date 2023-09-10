import { createSlice } from '@reduxjs/toolkit';
import { initStateGetCountryList, reducerGetCountryList } from '../actions/app/getCountryList';
import { initStateGetFilterGameList, reducerGetFilterGameList } from '../actions/app/getFilterGameList';
import { initStateGetTypePaymentList, reducerGetTypePaymentList } from '../actions/app/getTypePayment';

export const initialState = {
  ...initStateGetCountryList,
  ...initStateGetFilterGameList,
  ...initStateGetTypePaymentList,
  activeFilter: null,
  activePayment: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
    },
    setActivePayment(state, action) {
      state.activePayment = action.payload;
    },
  },
  extraReducers: {
    ...reducerGetCountryList,
    ...reducerGetFilterGameList,
    ...reducerGetTypePaymentList,
  },
});
export const { setActiveFilter, setActivePayment } = appSlice.actions;
export const appReducer = appSlice.reducer;
