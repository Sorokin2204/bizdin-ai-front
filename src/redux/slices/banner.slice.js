import { createSlice } from '@reduxjs/toolkit';
import { initStateCreateBanner, reducerCreateBanner } from '../actions/banner/createBanner';
import { initStateGetSingleBanner, reducerGetSingleBanner } from '../actions/banner/getSingleBanner';
import { initStateGetBannerList, reducerGetBannerList } from '../actions/banner/getBannerList';
import { initStateUpdateBanner, reducerUpdateBanner } from '../actions/banner/updateBanner';

export const initialState = {
  ...initStateCreateBanner,
  ...initStateGetSingleBanner,
  ...initStateGetBannerList,
  ...initStateUpdateBanner,
};

export const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    resetCreateBanner(state) {
      state.createBanner = initStateCreateBanner.createBanner;
    },
    resetUpdateBanner(state) {
      state.updateBanner = initStateUpdateBanner.updateBanner;
    },
  },
  extraReducers: {
    ...reducerCreateBanner,
    ...reducerGetSingleBanner,
    ...reducerGetBannerList,
    ...reducerUpdateBanner,
  },
});
export const { resetCreateBanner, resetUpdateBanner } = bannerSlice.actions;
export const bannerReducer = bannerSlice.reducer;
