import { Link, Outlet } from "react-router-dom";
import "@/styles/Layout.scss";
import Title from "@/components/Title";
import Language from "../components/Language";
import { useSelector } from "react-redux";
import UserMenu from "../components/UserMenu";

export default function Home() {
  const { user, isLogged } = useSelector((state: any) => state.UserReducer);
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
          {isLogged && <div className="user__name">{user.username}</div>}
          <UserMenu />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
