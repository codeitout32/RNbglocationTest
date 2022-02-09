import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./news.slice";
import dropsReducer from "./drops.slice";
import guidesReducer from "./guides.slice";
import advertReducer from "./advert.slice";
import serviceReducer from "./services.slice";

const reducers = combineReducers({
  news: newsReducer,
  drops: dropsReducer,
  guides: guidesReducer,
  advert: advertReducer,
  services: serviceReducer,
});
export default reducers;
