import { configureStore } from "@reduxjs/toolkit";
import todos from "./Features/TodoTab";

export const store = configureStore({
    reducer: {
        todos: todos,
    },
});

export default store;