import { configureStore } from "@reduxjs/toolkit";
import Reducer from "@/store/reducer";
import UserReducer from "@/store/reducer/userReducer";

export const store = configureStore({
  reducer: {
    Reducer,
    UserReducer,
  },
});

export default store;
