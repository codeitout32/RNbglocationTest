// import { useMemo } from "react";
import React from "react";
import logger from "redux-logger";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";


import rootReducer from "../slices";

import { rootSaga } from "../saga";
import storage from "./storage";

let store: any;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: storage,
  timeout: null,
  blacklist: ['appBar']
};
// console.log("hello react native from store", View);

function initStore() {
  const middleware: any[] = [sagaMiddleware as SagaMiddleware];
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // if (process.env.NODE_ENV === "development" || __DEV__) {
  //   console.log("development mode");
  //   middleware.push(logger);
  //   return configureStore({
  //     reducer: persistedReducer,
  //     middleware: [...middleware, logger],
  //     devTools: true,
  //     initialState,
  //   });
  // }

  let devTools = false;
  if (process.env.NODE_ENV === "development" || __DEV__) {
    middleware.push(logger as any);
    devTools = true;
  }
  // middleware.push(logger); //remove this on devlopment
  console.log("production mode");
  return configureStore({
    reducer: persistedReducer,
    middleware: [...middleware],
    devTools,
  });
}

// export const initializeStore = (preloadedState: AppState) => {
//   let _store = store ?? initStore(preloadedState);

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     // Reset the current store
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === "undefined") return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   _store.sagaTask = sagaMiddleware.run(rootSaga);
//   _store.persistor = persistStore(_store);

//   return _store;
// };

// export function useStore(initialState: AppState) {
//   return React.useMemo(() => initializeStore(initialState), [initialState]);
// }

export const initializeStore = () => {
  let _store = store ?? initStore();

  _store.sagaTask = sagaMiddleware.run(rootSaga);
  _store.persistor = persistStore(_store);

  return _store;
};

export const appStore = initializeStore();

export type AppState = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
