import React from "react";
import { User } from "phosphor-react";
import "@/styles/components/UserMenu.scss";

const UserMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      className="menu__user"
    >
      <User />
      <div className={`dropdownMenu ${isDropdownOpen ? "open" : ""}`}>
        <div className="dropdown__item">Profile</div>
        <div className="dropdown__item">Logout</div>
      </div>
    </div>
  );
};

export default UserMenu;
