import { put, takeEvery } from "redux-saga/effects";
import { routes } from "../config";

import * as NewsSlice from "../slices/news.slice";
import commonService from "../services/common.service";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchNewsSaga(action: any) {
  const searchparams = new URLSearchParams(action.payload).toString();
  const params = {
    method: "get",
    route: `${routes.news}?${searchparams}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };
  try {
    const res = yield commonService(params);
    res.rows = res.rows.map((news: Object) => ({ ...news, isRead: false }));
    yield put(NewsSlice.fetchNewsSuccess({ res }));
  } catch (error) {
    console.log("~ error", error);
    yield put(NewsSlice.fetchNewsError(error));
  }
}

function* fetchSingleNewsSaga(action) {
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
    yield put(NewsSlice.fetchSingleNewsSuccess(res));
  } catch (error) {
    yield put(NewsSlice.fetchSingleNewsError(error));
    handleError(error);
  }
}

function* fetchNewNewsSaga(action) {
  console.log("fetchNewNewsSaga", action);
  const searchparams = new URLSearchParams(action.payload).toString();
  const params = {
    method: "get",
    route: `${routes.news}?${searchparams}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };
  try {
    const res = yield commonService(params);
    res.rows = res.rows.map((news: Object) => ({ ...news, isRead: false }));
    yield put(NewsSlice.fetchNewNewsSuccess({ res }));
  } catch (error) {
    console.log("~ error", error);
    yield put(NewsSlice.fetchNewNewsError(error));
  }
}

function* fetchCategoryNewsSaga(action) {
  const searchparams = new URLSearchParams(action.payload).toString();
  const params = {
    method: "get",
    route: `${routes.news}?${searchparams}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };
  try {
    const res = yield commonService(params);
    res.rows = res.rows.map((news: Object) => ({ ...news, isRead: false }));

    yield put(NewsSlice.fetchCategoryNewsSuccess({ res }));
  } catch (error) {
    console.log("~ error", error);
    yield put(NewsSlice.fetchCategoryNewsError(error));
  }
}

export function* newsSaga() {
  yield takeEvery(NewsSlice.fetchNewsStart, fetchNewsSaga);
  yield takeEvery(NewsSlice.fetchNewNewsStart, fetchNewNewsSaga);
  yield takeEvery(NewsSlice.fetchSingleNewsStart, fetchSingleNewsSaga);
  yield takeEvery(NewsSlice.fetchCategoryNewsStart, fetchCategoryNewsSaga);
}

//
//
// axios error handling
function handleError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
  } else {
    // Something happened in setting up the request that triggered an Error
  }
}
