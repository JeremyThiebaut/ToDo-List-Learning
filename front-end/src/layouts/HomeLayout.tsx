import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>TodoList</h1>
      <nav>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/list">List</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
