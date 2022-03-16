import { put, takeEvery } from 'redux-saga/effects';
import { routes } from '../config';

import * as NewsSlice from '../slices/news.slice';
import commonService from '../services/common.service';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* fetchNewsSaga(action: any) {
  console.log('called news saga');
  const searchparams = new URLSearchParams(action.payload).toString();
  const params = {
    method: 'get',
    route: `${routes.news}?${searchparams}`,
    headerCred: {
      autherization: 'myAuthToken'
    }
  };
  try {
    const res = yield commonService(params);
    res.rows = res.rows.map((news: Object) => ({ ...news, isRead: false }));
    yield put(NewsSlice.fetchNewsSuccess({ res }));
  } catch (error) {
    console.log('~ error', error);
    yield put(NewsSlice.fetchNewsError(error));
  }
}

function* fetchNewNewsSaga(action) {
  console.log('called new news saga');
  const searchparams = new URLSearchParams(action.payload).toString();
  const params = {
    method: 'get',
    route: `${routes.news}?${searchparams}`,
    headerCred: {
      autherization: 'myAuthToken'
    }
  };
  try {
    const res = yield commonService(params);
    res.rows = res.rows.map((news: Object) => ({ ...news, isRead: false }));
    yield put(NewsSlice.fetchNewNewsSuccess({ res }));
  } catch (error) {
    console.log('~ error', error);
    yield put(NewsSlice.fetchNewNewsError(error));
  }
}

export function* newsSaga() {
  yield takeEvery(NewsSlice.fetchNewsStart, fetchNewsSaga);
  yield takeEvery(NewsSlice.fetchNewNewsStart, fetchNewNewsSaga);
}
