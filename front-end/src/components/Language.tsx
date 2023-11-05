import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../store/reducer";

const Language = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(changeLanguage());
  };
  return <div onClick={toggleLanguage}>{t("change_language")}</div>;
};

export default Language;
