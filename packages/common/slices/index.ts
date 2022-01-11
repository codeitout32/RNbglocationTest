import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./news.slice";

const reducers = combineReducers({
  news: newsReducer,
});
export default reducers;
