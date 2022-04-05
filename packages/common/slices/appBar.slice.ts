import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppBar {
  isVisible: boolean;
  showTopIcon: boolean;
  goToTop: boolean;
}

const initialState: IAppBar = {
  isVisible: false,
  showTopIcon: false,
  goToTop: false,
};

export const appBarSlice = createSlice({
  initialState,
  name: "appBar",
  reducers: {
    toggleAppBarAction: (state, action) => ({
      ...state,
      isVisible: !state.isVisible,
    }),
    setIsAppBarVisibleAction: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isVisible: action.payload,
    }),
    hideOnScrollUp: (state, action) => ({
      ...state,
      isVisible: state.isVisible ? false : true,
    }),

    setShowTopIcon: (state, action) => ({
      ...state,
      showTopIcon: action.payload,
    }),

    setGoToTop: (state, action) => ({
      ...state,
      // showTopIcon: false,
      goToTop: action.payload,
    }),
  },
});

export const appBarActions = appBarSlice.actions;
export default appBarSlice.reducer;
