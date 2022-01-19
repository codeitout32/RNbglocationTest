import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NewsList {
  newsList: Array<Object>;
  loading: boolean;
  singleNews: object;
  success: string;
  error: object | string;
  featuredNews: object | string;
}

const initialState: NewsList = {
  newsList: [{}],
  singleNews: {
    relatedNews: [],
  },
  featuredNews: [{}],
  loading: false,
  success: "",
  error: "",
};

export const newsSlice = createSlice({
  name: "newsList",
  initialState,
  reducers: {
    fetchNewsStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchNewsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        newsList: action.payload,
      };
    },
    fetchNewsError: (state, action: PayloadAction<T>) => {
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
    fetchSingleNewsError: (state, action: PayloadAction<T>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchRelatedNewsStart: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchRelatedNewsSuccess: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        singleNews: {
          ...state.singleNews,
          relatedNews: action.payload,
        },
      };
    },
    fetchRelatedNewsError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchFeaturedNewsStart: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchFeaturedNewsSuccess: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        featuredNews: action.payload,
      };
    },
    fetchFeaturedNewsError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
  fetchSingleNewsStart,
  fetchSingleNewsSuccess,
  fetchSingleNewsError,
  fetchRelatedNewsStart,
  fetchRelatedNewsSuccess,
  fetchRelatedNewsError,

  fetchFeaturedNewsStart,
  fetchFeaturedNewsSuccess,
  fetchFeaturedNewsError,
} = newsSlice.actions;

export default newsSlice.reducer;
