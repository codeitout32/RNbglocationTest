import { put, takeEvery, all } from "redux-saga/effects";
import { routes } from "../config";
import * as AdvertSlice from "../slices/advert.slice";

import commonService from "../services/common.service";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchMultipleAdvertSaga(action) {
  const params = {
    method: "get",
    route: `${routes.advert}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };

  try {
    const res = yield commonService(params);
    yield put(AdvertSlice.fetchFeaturedAdvertStart({ is_featured: 1 }));
    yield put(AdvertSlice.fetchAdvertSuccess(res));
  } catch (error) {
    yield put(AdvertSlice.fetchAdvertError(error));
    handleError(error);
  }
}
function* fetchRelatedAdvertSaga(action) {
  const searchparams = new URLSearchParams(action.payload).toString();
  const params = {
    method: "get",
    route: `${routes.advert}?${searchparams}`,
    headerCred: {
      autherization: "myAuthToken",
    },
  };

  try {
    const res = yield commonService(params);
    yield put(AdvertSlice.fetchRelatedAdvertSuccess(res));
  } catch (error) {
    yield put(AdvertSlice.fetchRelatedAdvertError(error));
    handleError(error);
  }
}
function* fetchAdvertiseSaga(action) {
  const searchparams = new URLSearchParams(action.payload).toString();
  const params = {
    method: "get",
    route: routes.advert,
    headerCred: {
      autherization: "myAuthToken",
    },
  };

  try {
    const res = yield commonService(params);
    yield put(AdvertSlice.fetchAdvertSuccess(res));
  } catch (error) {
    yield put(AdvertSlice.fetchAdvertError(error));
    handleError(error);
  }
}
function* fetchSingleAdvertSaga(action) {
  const params = {
    method: "get",
    route: `${routes.advert}/${action.payload.id}`,
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
    yield put(AdvertSlice.fetchRelatedAdvertStart(relatedObject));
    yield put(AdvertSlice.fetchSingleAdvertSuccess(res));
  } catch (error) {
    yield put(AdvertSlice.fetchSingleAdvertError(error));
    handleError(error);
  }
}

export function* advertSaga() {
  yield takeEvery(AdvertSlice.fetchAdvertStart, fetchAdvertiseSaga);
  // yield takeEvery(AdvertSlice.fetchSingleAdvertStart, fetchSingleAdvertSaga);
  // yield takeEvery(AdvertSlice.fetchRelatedAdvertStart, fetchRelatedAdvertSaga);
  // yield takeEvery(AdvertSlice.fetchFeaturedAdvertStart, fetchFeaturedAdvertSaga);
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
