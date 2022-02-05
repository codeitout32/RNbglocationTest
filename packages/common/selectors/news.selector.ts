import { createSelector } from "@reduxjs/toolkit";

const newsReducer = (state: State) => state.news;

export const newsListSelector = createSelector(
  newsReducer,
  (news) => news.newsList
);
export const singleNewsSelector = createSelector(
  newsReducer,
  (news) => news.singleNews
);
export const newsLoadingSelector = createSelector(
  newsReducer,
  (news) => news.loading
);
export const featuredNewsSelector = createSelector(
  newsReducer,
  (news) => news.featuredNews
);
