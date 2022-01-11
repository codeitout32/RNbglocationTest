import { put, takeEvery, all } from "redux-saga/effects";
import { routes } from "../config";
import {
  fetchNewsError,
  fetchNewsStart,
  fetchNewsSuccess,
} from "../slices/news.slice";

import commonService from "../services/common.service";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchNewsSaga(action) {
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
    yield put(fetchNewsSuccess(res));
  } catch (error) {
    yield put(fetchNewsError(error));
    handleError(error);
  }
}

export function* newsSaga() {
  yield takeEvery(fetchNewsStart, fetchNewsSaga);
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
