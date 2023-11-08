import { Dispatch } from "redux";
import {
  getAllUsers,
  getAllUsersError,
  getAllUsersSuccess,
  login,
  loginError,
  loginSuccess,
} from "@/store/reducer/userReducer";

export const fetchAllUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getAllUsers());

    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      dispatch(getAllUsersSuccess(data));
    } catch (error) {
      dispatch(getAllUsersError(error));
    }
  };
};

export const fetchLogin = (
  username: string,
  email: string,
  password: string
) => {
  console.log(username, email, password);
  return async (dispatch: Dispatch) => {
    dispatch(login());

    try {
      const response = await fetch("http://localhost:3200/users/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("oui", data);
      if (data.statusCode === 404) {
        dispatch(loginError(data));
      } else dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginError(error));
    }
  };
};
