import React from "react";
import { Link, Outlet } from "react-router-dom";
import "@/styles/Layout.scss";
import Title from "@/components/Title";
import Language from "../components/Language";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "@/store/actions/action";
import UserMenu from "../components/UserMenu";

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="navbar">
        <div className="title_app">
          <Link to="/">
            <Title title="Todo App" />
          </Link>
        </div>
        <div className="menu__right">
          <Language />
          <UserMenu />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
