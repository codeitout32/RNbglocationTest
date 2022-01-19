import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./news.slice";
import dropsReducer from "./drops.slice";
import guidesReducer from "./guides.slice";

const reducers = combineReducers({
  news: newsReducer,
  drops: dropsReducer,
  guides: guidesReducer,
});
export default reducers;
