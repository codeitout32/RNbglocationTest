import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Advert {
  advert: Array<Object>;
  loading: boolean;
  singleAdvert: object;
  success: string;
  error: object | string;
  featuredAdvert: object | string;
  userID: object;
  notificationConfig: object;
}

const initialState: Advert = {
  advert: {
    advert: [],
  },
  singleAdvert: {
    relatedAdvert: [],
  },
  categories: [],
  loading: false,
  success: "",
  error: "",
  isDark: true,
  userID: {},
  notificationConfig: {},
};

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    getUserIdStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getUserIdSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        userID: action.payload,
        success: "success",
      };
    },
    getUserIdError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    updateNotificationStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    updateNotificationSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        userID: {
          ...state.userID,
          notification_status: !state?.userID?.notification_status,
        },
        success: "success",
      };
    },
    updateNotificationError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchCategoriesStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    },
    fetchCategoriesError: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    setDarkMode: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        isDark: action.payload,
      };
    },
    updateNotification: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        notificationConfig: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesError,
  setDarkMode,
  getUserIdStart,
  getUserIdSuccess,
  getUserIdError,
  updateNotificationStart,
  updateNotificationSuccess,
  updateNotificationError,
} = assetsSlice.actions;

export default assetsSlice.reducer;
