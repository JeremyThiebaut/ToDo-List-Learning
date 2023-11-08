import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../store/reducer";
import "@/styles/components/Language.scss";

const Language = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(changeLanguage());
  };
  return (
    <div className="toggle">
      <div onClick={toggleLanguage}>{t("change_language")}</div>
    </div>
  );
};

export default Language;
