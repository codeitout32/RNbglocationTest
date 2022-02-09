import { fork, all, spawn } from "redux-saga/effects";
import { newsSaga } from "./news.saga";
import { dropsSaga } from "./drops.saga";
import { guidesSaga } from "./guides.saga";
import { advertSaga } from "./advert.saga";
import { servicesSaga } from "./services.saga";

export function* rootSaga() {
  yield all([
    spawn(newsSaga),
    spawn(dropsSaga),
    spawn(guidesSaga),
    spawn(advertSaga),
    spawn(servicesSaga),
  ]);
}
