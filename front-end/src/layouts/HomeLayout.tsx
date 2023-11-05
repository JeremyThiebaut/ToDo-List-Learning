import React from "react";
import { Outlet } from "react-router-dom";
import "@/styles/HomeLayout.scss";
import Title from "@/components/Title";
import Language from "../components/Language";
import { useDispatch } from "react-redux";
import fetchAllUser from "@/store/actions/action";

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="toggleLang">
        <div className="title_app">
          <Title title="Todo App" />
        </div>
        <div className="toggle">
          <Language />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
