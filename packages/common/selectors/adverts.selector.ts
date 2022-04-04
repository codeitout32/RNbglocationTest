import { createSelector } from "@reduxjs/toolkit";

const advertsReducer = (state: State) => state.adverts;

export const advertListSelector = createSelector(
  advertsReducer,
  (adverts) => adverts?.advertList
);
export const advertLoadingSelector = createSelector(
  advertsReducer,
  (adverts) => adverts?.loading
);
