import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Trash, NotePencil, Check, X } from "phosphor-react";
import "@/styles/Home.scss";
import { StateProps } from "@/store/reducer";
import actionTypes from "@/store/action";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const todo = useSelector((state: StateProps) => state.todo);
  const [editTodoId, setEditTodoId] = React.useState<string>("");
  const [errorEditMessages, setErrorEditMessages] = React.useState<string>("");
  const [errorAddMessages, setErrorAddMessages] = React.useState<string>("");

  const validateTodo = (todo: string) => {
    if (todo.length < 5) {
      return "Todo must be at least 5 characters long";
    }
    return null;
  };

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

  const removeTodo = (id: string) => {
    dispatch({
      type: actionTypes.REMOVE_TODO,
      payload: {
        id,
      },
    });
  };

  const editTodo = (id: string) => {
    setEditTodoId(id);
    setErrorAddMessages("");
    setErrorEditMessages("");
  };

  const stopEditTodo = () => {
    setEditTodoId("");
  };

  const handleEditTodo = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const valeurSaisie = e.currentTarget.todo.value;
    const messageErreur = validateTodo(valeurSaisie);

    if (messageErreur) {
      setErrorEditMessages(messageErreur);
      return;
    }

    const updateTodo: StateProps = {
      id,
      description: valeurSaisie,
    };

    dispatch({
      type: actionTypes.UPDATE_TODO,
      payload: {
        updateTodo,
      },
    });

    stopEditTodo();
    setErrorEditMessages("");
  };

  return (
    <div className="home">
      <h1 className="title">ToDo List</h1>
      <div className="todo">
        {todo.length > 0 ? (
          todo?.map((todo: StateProps) => (
            <div className="todo__list" key={todo.id}>
              {editTodoId === todo.id ? (
                <div className="todo__edit__container">
                  <form
                    className={`todo__edit__form ${
                      errorEditMessages ? "error" : ""
                    }`}
                    onSubmit={(e) => {
                      handleEditTodo(e, todo.id);
                    }}
                  >
                    <input
                      type="text"
                      name="todo"
                      defaultValue={todo.description}
                    />
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
                  {errorEditMessages && (
                    <div className="todo__error">{errorEditMessages}</div>
                  )}
                </div>
              ) : (
                <>
                  <div className="todo__description">{todo.description}</div>
                  <div className="todo__buttons">
                    <div
                      className="todo__delete"
                      onClick={() => removeTodo(todo.id)}
                    >
                      <Trash />
                    </div>
                    <div
                      className="todo__edit"
                      onClick={() => editTodo(todo.id)}
                    >
                      <NotePencil />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <div className="todo__list">
            <div className="todo__description">No todos</div>
          </div>
        )}
      </div>

      <div className="todo__add">
        <form
          className={`todo__form ${errorAddMessages ? "error" : ""}`}
          onSubmit={handleSubmit}
        >
          <input type="text" name="todo" placeholder={t("add_todo")} />
          <button type="submit">{t("add")}</button>
        </form>
        {errorAddMessages && (
          <div className="todo__error">{errorAddMessages}</div>
        )}
      </div>
    </div>
  );
};

export default Home;
