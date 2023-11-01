import "@/styles/Home.scss";
import { Check, NotePencil, Trash, X } from "phosphor-react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/Features/TodoTab";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../redux/Features/TodoTab";
import React from "react";
import { Form } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: any) => state.todos);
  const [editTodoId, setEditTodoId] = React.useState<string>("");
  const [errorAddMessage, setErrorAddMessage] = React.useState<string>("");
  const [errorEditMessage, setErrorEditMessage] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo = e.currentTarget.todo.value;
    const messageError = validateTodo(todo);

    if (messageError) {
      setErrorAddMessage(messageError);
      return;
    }

    if (todo) {
      dispatch(
        addTodo({
          id: uuidv4(),
          description: todo,
          completed: false,
        })
      );
      e.currentTarget.todo.value = "";
      setErrorAddMessage("");
    } else {
      return;
    }
  };

  const editTodos = (id: string) => {
    setEditTodoId(id);
  };

  const handleEditTodo = (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();

    const todo = e.currentTarget.todo.value;
    const messageError = validateTodo(todo);

    if (messageError) {
      setErrorEditMessage(messageError);
      return;
    }

    if (todo) {
      dispatch(
        editTodo({
          id: id,
          description: todo,
        })
      );
      setEditTodoId("");
      setErrorEditMessage("");
    } else {
      return;
    }
  };

  const validateTodo = (todo: string) => {
    if (todo.length < 5) {
      return "Todo must be at least 5 characters long";
    } else {
      return null;
    }
  };

  return (
    <div className="home">
      <h1 className="title">Todo List</h1>

      <div className="todoList">
        {todos.length > 0 ? (
          todos.map((todo: Todo) => (
            <div className="todo" key={todo.id}>
              {editTodoId === todo.id ? (
                <div>
                <form onSubmit={(e) => handleEditTodo(e, todo.id)}>
                  <input type="text" name='todo' defaultValue={todo.description}/>
                  <div>
                    <button type="submit"><Check /></button>
                    <button onClick={() => setEditTodoId("")}><X /></button>
                  </div>
                </form>
                {errorEditMessage && <div className="error">{errorEditMessage}</div>}
                </div>
                
              ) : (
                <>
                  <div className="todo_description">{todo.description}</div>
                  <div className="icons">
                    <div
                      className="remove"
                      onClick={() =>
                        todo.id && dispatch(deleteTodo(todo.id.toString()))
                      }
                    >
                      <Trash />
                    </div>
                    <div className="edit" onClick={() => editTodos(todo.id)}>
                      <NotePencil />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <div className="todo">No todos</div>
        )}
      </div>

      <div className="todo-add">
        <form onSubmit={handleSubmit}>
          <input
            className="input-add"
            type="text"
            placeholder="Add a todo"
            name="todo"
          />
          <button type="submit">Add</button>
        </form>
        {errorAddMessage && <div className="error">{errorAddMessage}</div>}
      </div>
    </div>
  );
}
