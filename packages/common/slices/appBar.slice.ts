import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppBar {
  isVisible: boolean;
}

const initialState: IAppBar = {
  isVisible: false,
};

export const appBarSlice = createSlice({
  initialState,
  name: "appBar",
  reducers: {
    toggleAppBarAction: (state, action) => ({ isVisible: !state.isVisible }),
    setIsAppBarVisibleAction: (state, action: PayloadAction<boolean>) => ({
      isVisible: action.payload,
    }),
    hideOnScrollUp: (state, action) => ({
      isVisible: state.isVisible ? false : true,
    }),
  },
});

export const appBarActions = appBarSlice.actions;
export default appBarSlice.reducer;
