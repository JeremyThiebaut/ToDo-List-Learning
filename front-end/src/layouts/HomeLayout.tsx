import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "@/store/reducer";
import actionTypes from "@/store/action";

export default function Home() {
  const dispatch = useDispatch();
  const language = useSelector((state: StateProps) => state.language);

  const toggleLanguage = () => {
    dispatch({
      type: actionTypes.CHANGE_LANGUAGE,
    });
  };

  return (
    <div className="container">
      <div className="toggleLang">
        <button onClick={toggleLanguage}>
          {language === "en" ? "fr" : "en"}
        </button>
      </div>
      <Outlet />
    </div>
  );
}
