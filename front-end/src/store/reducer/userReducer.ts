import { createSlice } from "@reduxjs/toolkit";

export interface UserProps {
  user: {
    id: string;
    username: string;
    email: string;
  }[];
  loading: boolean;
  isLogged: boolean;
  error: string;
  loginError: string;
  registerError: string;
}

const initialState: UserProps = {
  user: [],
  loading: false,
  isLogged: false,
  error: "",
  registerError: "",
  loginError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
      state.isLogged = true;
      state.loginError = "";
    },
    loginError: (state, action) => {
      state.user = [];
      state.loginError = action.payload.message;
      state.loading = false;
    },
    loginAuthError: (state) => {
      state.user = [];
      state.loading = false;
    },
    logout: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.user = [];
      state.loading = false;
      state.isLogged = false;
      state.error = "";
    },
    logoutError: (state, action) => {
      state.error = action.payload.message;
      state.loading = false;
    },
    register: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
      state.isLogged = true;
      state.registerError = "";
    },
    registerError: (state, action) => {
      state.user = [];
      state.registerError = action.payload.message;
      state.loading = false;
    },
  },
});

export const {
  login,
  loginSuccess,
  loginError,
  loginAuthError,
  logout,
  logoutSuccess,
  logoutError,
  register,
  registerSuccess,
  registerError,
} = userSlice.actions;
export default userSlice.reducer;
