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
}

const initialState: NewsList = {
  newsList: [{}],
  newNewsList: [{}],
  lastRefreshTime: null,
  loading: false,
  newNewsLoading: false,
  success: '',
  error: ''
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
      console.log("🚀~ readNewsId, isRead", readNewsId, isRead)
      state.newsList.res.rows =  state.newsList.res.rows.map((news: object) => {
        if (news.id === readNewsId) {
          return { ...news, isRead };
        }
        return news;
      });
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
          count: state.newsList.count + action.payload.count
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
  updateNewsStateToRead
} = newsSlice.actions;

export default newsSlice.reducer;
