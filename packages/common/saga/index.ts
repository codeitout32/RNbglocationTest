import { fork, all, spawn } from "redux-saga/effects";
import { newsSaga } from "./news.saga";
import { dropsSaga } from "./drops.saga";

export function* rootSaga() {
  yield all([spawn(newsSaga), spawn(dropsSaga)]);
}
