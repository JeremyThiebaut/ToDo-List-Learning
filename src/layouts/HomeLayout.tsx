import { Outlet } from "react-router-dom";
import {changeLanguage} from "../redux/Features/Language";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const {language} = useSelector((state: any) => state.language);

  return (
    <div>
      <div className="button-content">
        {language === "fr" ? (
          <button onClick={() => dispatch(changeLanguage("en"))}>
            Changer en anglais
          </button>
        ) : (
          <button onClick={() => dispatch(changeLanguage("fr"))}>
            Changer en français
          </button>
        )}
      </div>

      <span>Vous êtes sur un site {language}</span>
      <Outlet />
    </div>
  )
}
