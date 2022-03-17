import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';

const newsReducer = (state: AppState) => state.news;

export const newsListSelector = createSelector(
  newsReducer,
  (news: any) => news.newsList ?? []
);
export const newNewsListSelector = createSelector(
  newsReducer,
  (news: any) => news.newNewsList
);
export const singleNewsSelector = createSelector(
  newsReducer,
  (news: any) => news.singleNews
);
export const newsLoadingSelector = createSelector(
  newsReducer,
  (news: any) => news.loading
);
export const newNewsLoadingSelector = createSelector(
  newsReducer,
  (news: any) => news.newNewsLoading
);
export const featuredNewsSelector = createSelector(
  newsReducer,
  (news: any) => news.featuredNews
);
export const recentNewsSelector = createSelector(
  newsReducer,
  (news: any) => news.recentNews
);
export const relatedNewsSelector = createSelector(
  newsReducer,
  (news: any) => news.relatedNews
);
export const recentNewsPaginationSelector = createSelector(
  newsReducer,
  (news: any) => news.recentNews.pagination
);
export const lastRefreshTimeSelector = createSelector(
  newsReducer,
  (news: any) => news.lastRefreshTime
);
export const newsUpdatedSelector = createSelector(
  newsReducer,
  (news: any) => news.isNewsUpdated
);
export const categoryNewsListSelector = createSelector(
  newsReducer,
  (news: any) => news.categoryNewsList
);
export const categoryNewsLoadingSelector = createSelector(
  newsReducer,
  (news: any) => news.isCategoryNewsLoading
);
