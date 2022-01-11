import { fork, all, spawn } from "redux-saga/effects";
import { newsSaga } from "./news.saga";

export function* rootSaga() {
  yield all([spawn(newsSaga)]);
}
