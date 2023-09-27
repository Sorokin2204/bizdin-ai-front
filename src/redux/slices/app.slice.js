import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  theme: 'dark',
  activeSmartBlock: 'SWOT',
  activeSmartView: 'grid',
  showUserModal: false,
  activeSettingOption: 'Edit profile',
  activeLang: 'English',
  collapseLeftSideBar: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setActiveSmartBlock(state, action) {
      state.activeSmartBlock = action.payload;
    },
    setActiveSmartView(state, action) {
      state.activeSmartView = action.payload;
    },
    setShowUserModal(state, action) {
      state.showUserModal = action.payload;
    },
    setActiveSettingOption(state, action) {
      state.activeSettingOption = action.payload;
    },
    setActiveLang(state, action) {
      state.activeLang = action.payload;
    },
    setCollapseLeftSideBar(state, action) {
      state.collapseLeftSideBar = action.payload;
    },
  },
  extraReducers: {},
});
export const { setTheme, setActiveSmartBlock, setActiveSmartView, setShowUserModal, setActiveSettingOption, setActiveLang, setCollapseLeftSideBar } = appSlice.actions;
export const appReducer = appSlice.reducer;
