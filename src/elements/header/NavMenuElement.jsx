import React from "react";
import { Link } from "react-router-dom";

const NavMenuElement = () => {
  const navMenuBtn =
    "md:px-2 lg:px-4 text-sm hover:text-tertiary transition-all duration-150";
  const navMenuName = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Signup",
      path: "/signup",
    },
  ];
  return (
    <nav className="hidden md:flex flex-row">
      {navMenuName.map((menu, index) => {
        return (
          <Link className={navMenuBtn} to={menu.path} key={index}>
            {menu.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenuElement;
