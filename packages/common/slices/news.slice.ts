import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import formatISO from "date-fns/formatISO";

export interface NewsList {
  newsList: Array<Object>;
  newNewsList: Array<Object>;
  categoryNewsList: Array<Object>;
  loading: boolean;
  newNewsLoading: boolean;
  success: string;
  lastRefreshTime: string | null;
  error: object | string;
  isNewsUpdated: boolean;
  isCategoryNewsLoading: boolean;
  newsReadCount: {
    totalCount: number,
    leftToRead: number
  },
}

const initialState: NewsList = {
  newsList: [{}],
  newNewsList: [{}],
  categoryNewsList: [{}],
  lastRefreshTime: null,
  loading: false,
  newNewsLoading: false,
  success: "",
  error: "",
  isNewsUpdated: false,
  singleNews: {},
  isCategoryNewsLoading: false,
  newsReadCount: {
    totalCount: 0,
    leftToRead: 0
  },
};

export const newsSlice = createSlice({
  name: "newsList",
  initialState,
  reducers: {
    fetchNewsStart: (state, action) => {
      console.log("fetchNewsStart action", action);
      return {
        ...state,
        loading: true,
        newsList: { ...state.newsList, pagination: action.payload },
      };
    },
    fetchNewsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        newsList: { ...state.newsList, ...action.payload },
        lastRefreshTime: new Date().toISOString(),
        newsReadCount: {
          totalCount: action.payload.res?.rows?.length,
          leftToRead: 0
        },
      };
    },

    fetchNewsError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchSingleNewsStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchSingleNewsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        singleNews: action.payload,
        success: "success",
      };
    },
    fetchSingleNewsError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    updateNewsStateToRead: (state, action) => {
      const { readNewsId, isRead } = action.payload;
      const allNews = state.newsList?.res?.rows;
      const res = allNews.map((item) => {
        if (item.id === readNewsId) {
          return { ...item, isRead };
        }
        return item;
      });
      
      const readNews = {
        res: {
          rows: [...res],
          count: res.length,
        },
      };
 
      return {
        ...state,
        loading: false,
        newsList: readNews,
        newsReadCount: {
          ...state.newsReadCount,
          leftToRead: state.newsReadCount.leftToRead + 1
        },
      };
    },

    fetchNewNewsStart: (state, action) => {
      return {
        ...state,
        newNewsLoading: true,
      };
    },
    fetchNewNewsSuccess: (state, action) => {
      const newRows = action.payload?.res?.rows || [];
      const oldNews = state.newsList?.res?.rows || [];
      const oldUnreadNews = oldNews?.filter?.((item: any) => !item.isRead);
      const oldReadNews = oldNews?.filter?.((item: any) => item.isRead);
      const newNews = {
        res: {
          rows: [...newRows, ...oldUnreadNews, ...oldReadNews],
          count: state?.newsList?.res?.count + action.payload?.count ?? 0,
          newNewsCount: action.payload?.res?.count,
          unreadNewsCount: oldUnreadNews.length,
        },
      };
      console.log("state: ", state.newsReadCount)
      return {
        ...state,
        newNewsList: action.payload,
        newsList: newNews,
        lastRefreshTime: new Date().toISOString(),
        newsReadCount: {
          totalCount: oldUnreadNews?.length + newRows?.length,
          leftToRead: newRows?.length > 0 ? 0 : state?.newsReadCount?.leftToRead,
        },
        newNewsLoading: false,
      };
    },
    fetchNewNewsError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        newNewsLoading: false,
        error: action.payload,
      };
    },
    updateNewsAction: (state, action) => {
      const reset = action.payload?.reset;
      if (reset) {
        return {
          ...state,
          isNewsUpdated: false,
        };
      } else {
        return {
          ...state,
          isNewsUpdated: true,
        };
      }
    },
    fetchCategoryNewsStart: (state: any, action: PayloadAction<object>) => {
      return {
        ...state,
        isCategoryNewsLoading: true,
      };
    },
    fetchCategoryNewsSuccess: (state: any, action: PayloadAction<object>) => {
      return {
        ...state,
        isCategoryNewsLoading: false,
        categoryNewsList: action.payload,
      };
    },
    fetchCategoryNewsError: (state: any, action: PayloadAction<object>) => {
      return {
        ...state,
        isCategoryNewsLoading: false,
        error: action.payload,
      };
    },
  },
});

export const {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
  fetchNewNewsStart,
  fetchNewNewsSuccess,
  fetchNewNewsError,
  updateNewsStateToRead,
  updateNewsAction,
  fetchCategoryNewsStart,
  fetchCategoryNewsSuccess,
  fetchCategoryNewsError,
  fetchSingleNewsStart,
  fetchSingleNewsSuccess,
  fetchSingleNewsError,
} = newsSlice.actions;

export default newsSlice.reducer;
