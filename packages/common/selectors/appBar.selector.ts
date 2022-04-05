import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "../store";

const appBarReducer = (state: AppState) => state.appBar;

export const selectIsAppBarVisible = createSelector(
  appBarReducer,
  (appBar) => appBar.isVisible
);

export const selectShowUpArrow = createSelector(
  appBarReducer,
  (appBar) => appBar.showTopIcon
);

export const selectGoToTop = createSelector(
  appBarReducer,
  (appBar) => appBar.goToTop
);
