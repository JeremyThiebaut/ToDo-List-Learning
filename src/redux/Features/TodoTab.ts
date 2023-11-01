import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
    id?: string;
    description: string;
    completed?: boolean;
}

export interface TodoState {
    todos: Todo[];
}   

const initialState: TodoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        toggleComplete: (state, action: PayloadAction<String>) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload);
            state.todos[index].completed = !state.todos[index].completed;
        },
        deleteTodo: (state, action: PayloadAction<String>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        editTodo: (state, action: PayloadAction<any>) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            state.todos[index].description = action.payload.description;
        },
    },
});

export const {addTodo, toggleComplete, deleteTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;