import { createSlice } from "@reduxjs/toolkit";

export interface StateProps {
  todo: {
    id: string;
    description: string;
    isDone: boolean;
  }[];
  language: string;
}

const initialState: StateProps = {
  todo: [],
  language: "fr",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload.newTodo);
      state.todo = [...state.todo, action.payload];
    },
    removeTodo: (state, action) => {
      state.todo = [
        ...state.todo.filter((todo) => todo.id !== action.payload.id),
      ];
    },
    updateTodo: (state, action) => {
      state.todo = [
        ...state.todo.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                description: action.payload.description,
                isDone: action.payload.isDone,
              }
            : todo
        ),
      ];
    },
    toggleTodo: (state, action) => {
      state.todo = [
        ...state.todo.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isDone: !todo.isDone }
            : todo
        ),
      ];
    },
    changeLanguage: (state) => {
      state.language = state.language === "fr" ? "en" : "fr";
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo, changeLanguage } =
  todoSlice.actions;
export default todoSlice.reducer;
