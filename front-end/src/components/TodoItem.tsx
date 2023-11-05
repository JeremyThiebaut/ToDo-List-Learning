import React from "react";
import { StateProps } from "@/store/reducer";
import { useDispatch } from "react-redux";
import { Check, NotePencil, Trash, X } from "phosphor-react";
import ErrorMessage from "@/components/ErrorMessage";
import validateTodo from "@/utils/ValidateTodo";
import { useTranslation } from "react-i18next";
import { updateTodo, removeTodo, toggleTodo } from "../store/reducer";

interface TodoItemProps {
  todo: StateProps;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [editTodoId, setEditTodoId] = React.useState<string>("");
  const [errorEditMessages, setErrorEditMessages] = React.useState<string>("");

  const editTodo = (id: string) => {
    setEditTodoId(id);
    setErrorEditMessages("");
  };

  const stopEditTodo = () => {
    setEditTodoId("");
  };

  const handleEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valeurSaisie = e.currentTarget.todo.value;
    const messageErreur = validateTodo(valeurSaisie, t("to_short"));

    if (messageErreur) {
      setErrorEditMessages(messageErreur);
      return;
    }

    dispatch(
      updateTodo({
        id: todo.id,
        description: valeurSaisie,
      })
    );

    stopEditTodo();
    setErrorEditMessages("");
  };

  const remove = (id: string) => {
    dispatch(
      removeTodo({
        id,
      })
    );
  };

  return (
    <div className="todo__list" key={todo.id}>
      {editTodoId ? (
        <div className="todo__edit__container">
          <form
            className={`todo__edit__form ${errorEditMessages ? "error" : ""}`}
            onSubmit={(e) => {
              handleEditTodo(e);
            }}
          >
            <input type="text" name="todo" defaultValue={todo.description} />
            <div className="todo__button">
              <button type="submit">
                <Check />
              </button>
              <button
                type="button"
                onClick={stopEditTodo}
                className="todo__cancel"
              >
                <X />
              </button>
            </div>
          </form>
          {errorEditMessages && <ErrorMessage message={errorEditMessages} />}
        </div>
      ) : (
        <>
          <div className={`todo__description ${todo.isDone && "done"}`}>
            <div className="todo__text">{todo.description}</div>
            <input
              type="checkbox"
              onChange={() => {
                dispatch(
                  toggleTodo({
                    id: todo.id,
                  })
                );
              }}
              className="todo__checkbox"
            />
          </div>
          <div className="todo__buttons">
            <div className="todo__delete" onClick={() => remove(todo.id)}>
              <Trash />
            </div>
            <div className="todo__edit" onClick={() => editTodo(todo.id)}>
              <NotePencil />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
