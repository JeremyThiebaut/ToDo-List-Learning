import { useSelector } from "react-redux";
import "@/styles/HomePage.scss";
import { StateProps } from "@/store/reducer";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

const HomePage = () => {
  const { todo } = useSelector((state: StateProps) => state.Reducer);

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

export default HomePage;
