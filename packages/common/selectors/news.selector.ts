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
