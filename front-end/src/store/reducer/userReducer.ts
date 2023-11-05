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
}

const initialState: UserProps = {
  user: [],
  loading: false,
  isLogged: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload.user.data.users[0];
      state.loading = false;
      state.error = "";
    },
    getUserError: (state, action) => {
      state.user = [];
      state.error = action.payload.error;
      state.loading = false;
    },
    getAllUsers: (state) => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.user = action.payload.data.users;
      state.loading = false;
      state.error = "";
    },
    getAllUsersError: (state, action) => {
      state.user = [];
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const {
  getUser,
  getUserSuccess,
  getUserError,
  getAllUsers,
  getAllUsersSuccess,
  getAllUsersError,
} = userSlice.actions;
export default userSlice.reducer;
