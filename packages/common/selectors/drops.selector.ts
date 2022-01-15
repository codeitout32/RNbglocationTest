import { createSelector } from "@reduxjs/toolkit";

const dropsReducer = (state: State) => state.drops;

export const dropsListSelector = createSelector(
  dropsReducer,
  (drops) => drops.dropsList
);
export const singleDropsSelector = createSelector(
  dropsReducer,
  (drops) => drops.singleDrops
);
