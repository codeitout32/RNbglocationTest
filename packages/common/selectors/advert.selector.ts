import { createSelector } from "@reduxjs/toolkit";

const advertReducer = (state: State) => state.advert;

export const advertSelector = createSelector(
  advertReducer,
  (advert) => advert?.advert
);
export const singleAdvertSelector = createSelector(
  advertReducer,
  (news) => news.singleAdvert
);
export const featuredAdvertSelector = createSelector(
  advertReducer,
  (news) => news.featuredAdvert
);
