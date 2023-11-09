import { Middleware, configureStore } from "@reduxjs/toolkit";
import Reducer from "@/store/reducer";
import UserReducer from "@/store/reducer/userReducer";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("applicationState", JSON.stringify(store.getState()));
  return result;
};

const persistedState = localStorage.getItem("applicationState")
  ? JSON.parse(localStorage.getItem("applicationState") || "")
  : {};

export const store = configureStore({
  reducer: {
    Reducer,
    UserReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
