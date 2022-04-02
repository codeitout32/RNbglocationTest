import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "../store";

const appBarReducer = (state: AppState) => state.appBar;

export const selectIsAppBarVisible = createSelector(
  appBarReducer,
  (appBar) => appBar.isVisible
);
