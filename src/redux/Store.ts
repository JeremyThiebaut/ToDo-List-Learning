import { configureStore } from "@reduxjs/toolkit";
import todos from "./Features/TodoTab";
import language from "./Features/Language";

export const store = configureStore({
    reducer: {
        todos: todos,
        language: language,
    },
});

export default store;