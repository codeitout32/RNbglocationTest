import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import formatISO from 'date-fns/formatISO';

export interface NewsList {
  newsList: Array<Object>;
  newNewsList: Array<Object>;
  loading: boolean;
  newNewsLoading: boolean;
  success: string;
  lastRefreshTime: string | null;
  error: object | string;
  isNewsUpdated: boolean;
}

const initialState: NewsList = {
  newsList: [{}],
  newNewsList: [{}],
  lastRefreshTime: null,
  loading: false,
  newNewsLoading: false,
  success: '',
  error: '',
  isNewsUpdated: false
};

export const newsSlice = createSlice({
  name: 'newsList',
  initialState,
  reducers: {
    fetchNewsStart: (state, action) => {
      return {
        ...state,
        loading: true
      };
    },
    fetchNewsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        newsList: action.payload,
        lastRefreshTime: new Date().toISOString()
      };
    },
    updateNewsStateToRead: (state, action) => {
      const { readNewsId, isRead } = action.payload;
      const allNews = state.newsList?.res?.rows;
      const res = allNews.map(item => {
        if (item.id === readNewsId) {
          return { ...item, isRead };
        }
        return item;
      });
      const readNews = {
        res: {
          rows: [...res],
          count: res.length
        }
      };
      return {
        ...state,
        loading: false,
        newsList: readNews
      };
    },

    fetchNewsError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    },
    fetchNewNewsStart: (state, action) => {
      return {
        ...state,
        newNewsLoading: true
      };
    },
    fetchNewNewsSuccess: (state, action) => {
      const newRows = action.payload?.res?.rows;
      const oldNews = state.newsList?.res?.rows;
      const newNews = {
        res: {
          rows: [...newRows, ...oldNews],
          count: state.newsList.res.count + action.payload.count
        }
      };

      return {
        ...state,
        newNewsLoading: false,
        newNewsList: action.payload,
        newsList: newNews,
        lastRefreshTime: new Date().toISOString()
      };
    },
    fetchNewNewsError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        newNewsLoading: false,
        error: action.payload
      };
    },
    updateNewsAction: (state, action) => {
      const reset = action.payload?.reset;
      if (reset) {
        return {
          ...state,
          isNewsUpdated: false
        };
      } else {
        return {
          ...state,
          isNewsUpdated: true
        };
      }
    }
  }
});

export const {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
  fetchNewNewsStart,
  fetchNewNewsSuccess,
  fetchNewNewsError,
  updateNewsStateToRead,
  updateNewsAction
} = newsSlice.actions;

export default newsSlice.reducer;
