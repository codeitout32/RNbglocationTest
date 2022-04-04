import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppBar {
  advertList: Array<Object>;
  loading: boolean;
  singleAdvert: object;
  success: string;
  error: object | string;
}

const initialState: IAppBar = {
  advertList: [{}],
  singleAdvert: {
    relatedAdvert: [],
  },
  loading: false,
  success: "",
  error: "",
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    fetchAdvertStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchAdvertSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        advertList: action.payload,
      };
    },
    fetchAdvertError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchSingleAdvertStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchSingleAdvertSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        singleAdvert: action.payload,
        success: "success",
      };
    },
    fetchSingleAdvertError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const {
  fetchAdvertStart,
  fetchAdvertSuccess,
  fetchAdvertError,
  fetchSingleAdvertStart,
  fetchSingleAdvertSuccess,
  fetchSingleAdvertError,
} = advertsSlice.actions;
export default advertsSlice.reducer;
