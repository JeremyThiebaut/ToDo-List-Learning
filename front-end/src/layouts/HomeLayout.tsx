import { Outlet } from "react-router-dom";
import "@/styles/HomeLayout.scss";
import Title from "@/components/Title";
import Language from "../components/Language";

export default function Home() {
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
