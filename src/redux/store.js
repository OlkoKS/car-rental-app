import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slice";

import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const appReducer = combineReducers({
  cars: persistReducer(persistConfig, carsReducer),
});

export const store = configureStore({
  reducer: appReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
