import { useSelector } from "react-redux";
import "@/styles/Home.scss";
import { StateProps } from "@/store/reducer";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

const Home = () => {
  const todo = useSelector((state: StateProps) => state.todo);

  return (
    <div className="home">
      {todo.length > 0 && (
        <div className="todo">
          {todo?.map((todo: StateProps) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
      <div className={`todo__add ${todo.length > 0 && "space"}`}>
        <TodoForm />
      </div>
    </div>
  );
};

export default Home;
