import { routes } from "../config";
import * as AdvertsSlice from "../slices/adverts.slice";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";

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
    yield put(AdvertsSlice.fetchAdvertSuccess(res));
  } catch (error) {
    yield put(AdvertsSlice.fetchAdvertError(error));
    // handleError(error);
  }
}
function* fetchAdvertiseSaga(action) {
  console.log("hello from advert saga");
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
    yield put(AdvertsSlice.fetchAdvertSuccess(res));
  } catch (error) {
    yield put(AdvertsSlice.fetchAdvertError(error));
    // handleError(error);
  }
}
function* updateAdvertClickedSaga(action) {
  console.log("hello from advert saga");
  const searchparams = new URLSearchParams(action.payload).toString();
  const params = {
    method: "post",
    route: routes.adclick,
    headerCred: {
      autherization: "myAuthToken",
    },
    data: action.payload,
  };

  try {
    const res = yield commonService(params);
    yield put(AdvertsSlice.updateAdvertClickedSuccess(res));
  } catch (error) {
    yield put(AdvertsSlice.updateAdvertClickedError(error));
    // handleError(error);
  }
}

export function* advertsSaga() {
  yield takeLatest(AdvertsSlice.fetchAdvertStart, fetchAdvertiseSaga);

  yield takeEvery(
    AdvertsSlice.updateAdvertClickedStart,
    updateAdvertClickedSaga
  );
  // yield takeEvery(AdvertSlice.fetchRelatedAdvertStart, fetchRelatedAdvertSaga);
  // yield takeEvery(AdvertSlice.fetchFeaturedAdvertStart, fetchFeaturedAdvertSaga);
}
