import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./news.slice";
import dropsReducer from "./drops.slice";

const reducers = combineReducers({
  news: newsReducer,
  drops: dropsReducer,
});
export default reducers;
