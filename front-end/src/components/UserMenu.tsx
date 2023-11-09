import React from "react";
import { User, UserCircle } from "phosphor-react";
import "@/styles/components/UserMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@/redux/store";
import { Link } from "react-router-dom";
import { fetchLogout } from "@/store/actions/action";

const UserMenu = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const { isLogged } = useSelector((state: StateProps) => state.UserReducer);

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <div
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      className="menu__user"
    >
      {isLogged ? (
        <>
          <UserCircle />
          <div className={`dropdownMenu ${isDropdownOpen ? "open" : ""}`}>
            <div className="dropdown__item">Profile</div>
            <div className="dropdown__item" onClick={handleLogout}>
              Logout
            </div>
          </div>
        </>
      ) : (
        <>
          <User />
          <div className={`dropdownMenu ${isDropdownOpen ? "open" : ""}`}>
            <Link to="/login" className="dropdown__item">
              Login
            </Link>
            <Link to="/register" className="dropdown__item">
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
