import { put, takeEvery, all } from "redux-saga/effects";
import { routes } from "../config";
import * as DropsSlice from "../slices/drops.slice";

import commonService from "../services/common.service";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchMultipleDropsSaga(action) {
  console.log("fetch started");

  const params = {
    method: "get",
    route: `${routes.drops}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };

  try {
    const res = yield commonService(params);
    yield put(DropsSlice.fetchDropsSuccess(res));
  } catch (error) {
    yield put(DropsSlice.fetchDropsError(error));
    handleError(error);
  }
}
function* fetchRelatedDropsSaga(action) {
  console.log("fetch related started");
  const searchparams = new URLSearchParams(action.payload).toString();
  console.log("search params", searchparams);
  const params = {
    method: "get",
    route: `${routes.drops}?${searchparams}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };

  try {
    const res = yield commonService(params);
    yield put(DropsSlice.fetchRelatedDropsSuccess(res));
  } catch (error) {
    yield put(DropsSlice.fetchRelatedDropsError(error));
    handleError(error);
  }
}
function* fetchSingleDropsSaga(action) {
  console.log("fetch Single drops started", action.payload);

  const params = {
    method: "get",
    route: `${routes.drops}/${action.payload.id}`,
    headerCred: {
      autherization: "",
    },
  };

  try {
    const res = yield commonService(params);
    const relatedObject = { category_id: res.category_id, row_per_page: 6 };
    yield put(DropsSlice.fetchRelatedDropsStart(relatedObject));
    yield put(DropsSlice.fetchSingleDropsSuccess(res));
  } catch (error) {
    yield put(DropsSlice.fetchSingleDropsError(error));
    handleError(error);
  }
}

export function* dropsSaga() {
  yield takeEvery(DropsSlice.fetchDropsStart, fetchMultipleDropsSaga);
  yield takeEvery(DropsSlice.fetchSingleDropsStart, fetchSingleDropsSaga);
  yield takeEvery(DropsSlice.fetchRelatedDropsStart, fetchRelatedDropsSaga);
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
