import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NewsList {
  newsList: Array<Object>;
  loading: boolean;
  success: string;
  error: string;
}

const initialState: NewsList = {
  newsList: [{}],
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
  },
});

// Action creators are generated for each case reducer function
export const { fetchNewsStart, fetchNewsSuccess, fetchNewsError } =
  newsSlice.actions;

export default newsSlice.reducer;
