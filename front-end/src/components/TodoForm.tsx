import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { StateProps } from "@/store/reducer";
import { useDispatch } from "react-redux";
import actionTypes from "@/store/action";
import ErrorMessage from "@/components/ErrorMessage";
import validateTodo from "@/utils/ValidateTodo";
import { Smiley } from "phosphor-react";
import EmojiPicker from "@/components/EmojiPicker";

const TodoForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState<string>("");
  const [openPicker, setOpenPicker] = React.useState<boolean>(false);
  const [errorAddMessages, setErrorAddMessages] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenPicker(false);
    const valeurSaisie = e.currentTarget.todo.value;
    const messageErreur = validateTodo(valeurSaisie, t("to_short"));

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

    setInputValue("");
    setErrorAddMessages("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`todo__form ${errorAddMessages ? "error" : ""}`}
      >
        <div className="input-wrapper">
          <input
            type="text"
            placeholder={t("add_todo")}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            name="todo"
          />
          <EmojiPicker
            onSelect={(emoji: string) =>
              setInputValue((prevValue) => prevValue + emoji)
            }
            openPicker={openPicker}
          />
          <Smiley
            size={24}
            className="emoji-button"
            onClick={() => setOpenPicker((emoji) => !emoji)}
          />
        </div>
        <button type="submit">{t("add")}</button>
      </form>
      {errorAddMessages && <ErrorMessage message={errorAddMessages} />}
    </>
  );
};

export default TodoForm;
