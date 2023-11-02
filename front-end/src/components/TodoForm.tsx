import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { StateProps } from "@/store/reducer";
import { useDispatch } from "react-redux";
import actionTypes from "@/store/action";
import ErrorMessage from "@/components/ErrorMessage";
import { validateTodo } from "@/utils/ValidateTodo";

const TodoForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState<string>("");
  const [errorAddMessages, setErrorAddMessages] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valeurSaisie = e.currentTarget.todo.value;
    const messageErreur = validateTodo(valeurSaisie);

    if (messageErreur) {
      setErrorAddMessages(messageErreur);
      return;
    }

    const newTodo: StateProps = {
      id: uuidv4(),
      description: valeurSaisie,
      isDone: false,
    };

    dispatch({
      type: actionTypes.ADD_TODO,
      payload: {
        newTodo,
      },
    });

    e.currentTarget.todo.value = "";
    setErrorAddMessages("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`todo__form ${errorAddMessages ? "error" : ""}`}
      >
        <input
          type="text"
          placeholder={t("add_todo")}
          onChange={(e) => setInputValue(e.target.value)}
          name="todo"
        />
        <button type="submit">{t("add")}</button>
      </form>
      {errorAddMessages && <ErrorMessage message={errorAddMessages} />}
    </>
  );
};

export default TodoForm;
