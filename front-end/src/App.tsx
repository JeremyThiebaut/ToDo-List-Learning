import React from "react";
import Router from "./routes";
import { useDispatch } from "react-redux";
import { fetchUserLogged } from "@/store/actions/action";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUserLogged());
  }, [dispatch]);

  return <Router />;
};

export default App;
