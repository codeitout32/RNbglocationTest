import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';

const newsReducer = (state: AppState) => state.news;

export const newsListSelector = createSelector(
  newsReducer,
  news => news.newsList??[]
);
export const newNewsListSelector = createSelector(
  newsReducer,
  news => news.newNewsList
);
export const singleNewsSelector = createSelector(
  newsReducer,
  news => news.singleNews
);
export const newsLoadingSelector = createSelector(
  newsReducer,
  news => news.loading
);
export const newNewsLoadingSelector = createSelector(
  newsReducer,
  news => news.newNewsLoading
);
export const featuredNewsSelector = createSelector(
  newsReducer,
  news => news.featuredNews
);
export const recentNewsSelector = createSelector(
  newsReducer,
  news => news.recentNews
);
export const relatedNewsSelector = createSelector(
  newsReducer,
  news => news.relatedNews
);
export const recentNewsPaginationSelector = createSelector(
  newsReducer,
  news => news.recentNews.pagination
);
export const lastRefreshTimeSelector = createSelector(
  newsReducer,
  news => news.lastRefreshTime
);

export const newsUpdatedSelector = createSelector(
  newsReducer,
  news => news.isNewsUpdated
);
