import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Advert {
  advert: Array<Object>;
  loading: boolean;
  singleAdvert: object;
  success: string;
  error: object | string;
  featuredAdvert: object | string;
}

const initialState: Advert = {
  advert: [{}],
  singleAdvert: {
    relatedAdvert: [],
  },
  featuredAdvert: [{}],
  loading: false,
  success: "",
  error: "",
};

export const advertSlice = createSlice({
  name: "advert",
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
        advert: action.payload,
      };
    },
    fetchAdvertError: (state, action: PayloadAction<T>) => {
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
    fetchSingleAdvertError: (state, action: PayloadAction<T>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchRelatedAdvertStart: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchRelatedAdvertSuccess: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        singleAdvert: {
          ...state.singleAdvert,
          relatedAdvert: action.payload,
        },
      };
    },
    fetchRelatedAdvertError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchFeaturedAdvertStart: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchFeaturedAdvertSuccess: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        featuredAdvert: action.payload,
      };
    },
    fetchFeaturedAdvertError: (state, action: PayloadAction<object>) => {
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
  fetchAdvertStart,
  fetchAdvertSuccess,
  fetchAdvertError,
  fetchSingleAdvertStart,
  fetchSingleAdvertSuccess,
  fetchSingleAdvertError,
  fetchRelatedAdvertStart,
  fetchRelatedAdvertSuccess,
  fetchRelatedAdvertError,

  fetchFeaturedAdvertStart,
  fetchFeaturedAdvertSuccess,
  fetchFeaturedAdvertError,
} = advertSlice.actions;

export default advertSlice.reducer;
