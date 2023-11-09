import express from "express";
import {
  getUserLogged,
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/user.controller";

const userRoutes = express.Router();

userRoutes.route("/").get(getUserLogged);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/logout").get(logoutUser);
userRoutes.route("/register").post(registerUser);

export default userRoutes;
