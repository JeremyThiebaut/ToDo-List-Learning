import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  interface State {
    value: string;
    name: string;
  }

  const state = useSelector((state: State) => state);

  const handleClick = () => {
    dispatch({
      type: "CHANGE_VALUE",
      payload: { value: "value", name: "New name" },
    });
  };

  return (
    <>
      <h1>Redux</h1>
      <h2>{state.value}</h2>
      <h2>{state.name}</h2>
      <button onClick={handleClick}>Change name</button>
    </>
  );
}
