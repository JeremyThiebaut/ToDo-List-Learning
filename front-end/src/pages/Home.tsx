import { useSelector } from "react-redux";
import "@/styles/Home.scss";
import { StateProps } from "@/store/reducer";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

const Home = () => {
  const todo = useSelector((state: StateProps) => state.todo);

  return (
    <div className="home">
      <h1 className="title">ToDo List</h1>
      <div className="todo">
        {todo.length > 0 ? (
          todo?.map((todo: StateProps) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <div className="todo__list">
            <div className="todo__description">No todos</div>
          </div>
        )}
      </div>

      <div className="todo__add">
        <TodoForm />
      </div>
    </div>
  );
};

export default Home;
