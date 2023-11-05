import { Dispatch } from "redux";
import {
  getAllUsers,
  getAllUsersError,
  getAllUsersSuccess,
} from "@/store/reducer/userReducer";

const fetchAllUsers = () => {
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

export default fetchAllUsers;
