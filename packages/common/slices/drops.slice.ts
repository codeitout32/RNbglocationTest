import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DropsList {
  dropsList: Array<Object>;
  loading: boolean;
  singleDrops: object;
  success: string;
  error: object | string;
}

const initialState: DropsList = {
  dropsList: [{}],
  singleDrops: {
    relatedDrops: [],
  },
  loading: false,
  success: "",
  error: "",
};

export const newsSlice = createSlice({
  name: "dropsList",
  initialState,
  reducers: {
    fetchDropsStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchDropsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        dropsList: action.payload,
      };
    },
    fetchDropsError: (state, action: PayloadAction<T>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchSingleDropsStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchSingleDropsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        singleDrops: action.payload,
        success: "success",
      };
    },
    fetchSingleDropsError: (state, action: PayloadAction<T>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchRelatedDropsStart: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchRelatedDropsSuccess: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        singleDrops: {
          ...state.singleDrops,
          relatedDrops: action.payload,
        },
      };
    },
    fetchRelatedDropsError: (state, action: PayloadAction<object>) => {
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
  fetchDropsStart,
  fetchDropsSuccess,
  fetchDropsError,
  fetchSingleDropsStart,
  fetchSingleDropsSuccess,
  fetchSingleDropsError,
  fetchRelatedDropsStart,
  fetchRelatedDropsSuccess,
  fetchRelatedDropsError,
} = newsSlice.actions;

export default newsSlice.reducer;
