import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavMenuElement = ({ user }) => {
  const location = useLocation();

  // Adjust the class based on the current location
  const navMenuBtn = (menuPath) =>
    `${
      location.pathname === menuPath ? "text-tertiary" : ""
    } md:px-2 lg:px-4 text-sm hover:text-tertiary transition-all duration-150`;

  const navMenuName = [
    {
      name: "Home",
      path: "/",
      visible: true,
    },
    {
      name: "About",
      path: "/about",
      visible: true,
    },
    {
      name: "Contact",
      path: "/contact",
      visible: true,
    },
    {
      name: "Signin",
      path: "/signin",
      visible: user.length === 0, // Show Signin only if user array is empty
    },
  ];

  return (
    <nav className="hidden md:flex flex-row">
      {navMenuName.map((menu, index) => {
        // Only render the Signin link if it is marked as visible
        if (!menu.visible) return null;

        return (
          <Link className={navMenuBtn(menu.path)} to={menu.path} key={index}>
            {menu.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenuElement;
