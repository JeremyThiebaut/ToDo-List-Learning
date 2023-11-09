import { Dispatch } from "redux";
import {
  login,
  loginError,
  loginSuccess,
  loginAuthError,
  logout,
  logoutError,
  logoutSuccess,
  register,
  registerError,
  registerSuccess,
} from "@/store/reducer/userReducer";

export const fetchUserLogged = () => {
  return async (dispatch: Dispatch) => {
    dispatch(login());

    try {
      const response = await fetch("http://localhost:3000/users/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.statusCode === 404) {
        dispatch(loginAuthError(data));
      } else dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginError(error));
    }
  };
};

export const fetchLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(login());

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.statusCode === 404) {
        dispatch(loginError(data));
      } else dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginError(error));
    }
  };
};

export const registerUser = (
  username: string,
  email: string,
  password: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(register());

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.statusCode === 404) {
        dispatch(registerError(data));
      } else dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(registerError(error));
    }
  };
};

export const fetchLogout = () => {
  return async (dispatch: Dispatch) => {
    dispatch(logout());

    try {
      const response = await fetch("http://localhost:3000/users/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.statusCode === 404) {
        dispatch(logoutError(data));
      } else dispatch(logoutSuccess(data));
    } catch (error) {
      dispatch(logoutError(error));
    }
  };
};
