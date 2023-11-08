import React from "react";
import { User, UserCircle } from "phosphor-react";
import "@/styles/components/UserMenu.scss";
import { useSelector } from "react-redux";
import { StateProps } from "@/redux/store";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const { isLogged } = useSelector((state: StateProps) => state.UserReducer);
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
            <div className="dropdown__item">Logout</div>
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
