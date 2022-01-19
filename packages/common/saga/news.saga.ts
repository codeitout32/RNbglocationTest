import { put, takeEvery, all } from "redux-saga/effects";
import { routes } from "../config";
import * as NewsSlice from "../slices/news.slice";

import commonService from "../services/common.service";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchMultipleNewsSaga(action) {
  console.log("fetch started");

  const params = {
    method: "get",
    route: `${routes.news}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };

  try {
    const res = yield commonService(params);
    yield put(NewsSlice.fetchFeaturedNewsStart({ is_featured: 1 }));
    yield put(NewsSlice.fetchNewsSuccess(res));
  } catch (error) {
    yield put(NewsSlice.fetchNewsError(error));
    handleError(error);
  }
}
function* fetchRelatedNewsSaga(action) {
  console.log("fetch related started");
  const searchparams = new URLSearchParams(action.payload).toString();
  console.log("search params", searchparams);
  const params = {
    method: "get",
    route: `${routes.news}?${searchparams}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };

  try {
    const res = yield commonService(params);
    yield put(NewsSlice.fetchRelatedNewsSuccess(res));
  } catch (error) {
    yield put(NewsSlice.fetchRelatedNewsError(error));
    handleError(error);
  }
}
function* fetchFeaturedNewsSaga(action) {
  console.log("fetch featured started");
  const searchparams = new URLSearchParams(action.payload).toString();
  console.log("search params", searchparams);
  const params = {
    method: "get",
    route: `${routes.news}?${searchparams}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };

  try {
    const res = yield commonService(params);
    yield put(NewsSlice.fetchFeaturedNewsSuccess(res));
  } catch (error) {
    yield put(NewsSlice.fetchFeaturedNewsError(error));
    handleError(error);
  }
}
function* fetchSingleNewsSaga(action) {
  console.log("fetch Single news started", action.payload);

  const params = {
    method: "get",
    route: `${routes.news}/${action.payload.id}`,
    headerCred: {
      autherization: "",
    },
  };

  try {
    const res = yield commonService(params);
    const relatedObject = {
      category_id: res.current.category_id,
      row_per_page: 6,
    };
    yield put(NewsSlice.fetchRelatedNewsStart(relatedObject));
    yield put(NewsSlice.fetchSingleNewsSuccess(res));
  } catch (error) {
    yield put(NewsSlice.fetchSingleNewsError(error));
    handleError(error);
  }
}

export function* newsSaga() {
  yield takeEvery(NewsSlice.fetchNewsStart, fetchMultipleNewsSaga);
  yield takeEvery(NewsSlice.fetchSingleNewsStart, fetchSingleNewsSaga);
  yield takeEvery(NewsSlice.fetchRelatedNewsStart, fetchRelatedNewsSaga);
  yield takeEvery(NewsSlice.fetchFeaturedNewsStart, fetchFeaturedNewsSaga);
}

//
//
// axios error handling
function handleError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("error data", error.response.data);
    console.log("error status", error.response.status);
    console.log("error header", error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("error request", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error message", error.message);
  }
  console.log("error config", error.config);
}
