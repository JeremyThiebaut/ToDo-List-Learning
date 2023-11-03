import { useDispatch } from "react-redux";
import actionTypes from "@/store/action";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch({
      type: actionTypes.CHANGE_LANGUAGE,
    });
  };
  return <div onClick={toggleLanguage}>{t("change_language")}</div>;
};

export default Language;
