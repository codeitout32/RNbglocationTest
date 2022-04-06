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
    updateAdvertClickedStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    updateAdvertClickedSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        // singleAdvert: action.payload,
        success: "success",
      };
    },
    updateAdvertClickedError: (state, action: PayloadAction<object>) => {
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
  updateAdvertClickedStart,
  updateAdvertClickedSuccess,
  updateAdvertClickedError,
} = advertsSlice.actions;
export default advertsSlice.reducer;
