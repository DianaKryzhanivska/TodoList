import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "accessToken", "isLoggedIn"],
};

const todosPersistConfig = {
  key: "todos",
  storage,
};

const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  todos: persistReducer(todosPersistConfig, todosReducer),
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
