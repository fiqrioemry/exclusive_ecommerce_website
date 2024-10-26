import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const NavMenuElement = ({ user, handleNavMenu, openMenu }) => {
  const location = useLocation();

  const navMenuBtn = (menuPath) =>
    `${
      location.pathname === menuPath ? "text-tertiary" : ""
    } md:px-2 lg:px-4  hover:text-tertiary transition-all duration-150`;

  const navMenuName = [
    { name: "Home", path: "/", visible: true },
    { name: "About", path: "/about", visible: true },
    { name: "Contact", path: "/contact", visible: true },
    { name: "Signin", path: "/signin", visible: user.length === 0 }, // Show Signin only if user array is empty
  ];

  const handleMobileNavMenu = () => {
    if (window.innerWidth < 768) {
      handleNavMenu();
    }
  };

  return (
    <div
      className={`${
        openMenu ? "right-0" : "-right-full"
      } w-full md:w-auto h-full md:h-auto fixed md:static top-0 md:top-auto bg-white z-30 transition-all duration-300`}
    >
      <div className="block md:hidden text-black py-6 text-end px-8">
        <button onClick={handleMobileNavMenu}>
          <MdOutlineClose className="text-4xl" />
        </button>
      </div>
      <nav className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 text-2xl md:text-sm ">
        {navMenuName.map((menu, index) => {
          if (!menu.visible) return null;

          return (
            <Link
              className={navMenuBtn(menu.path)}
              to={menu.path}
              key={index}
              onClick={handleMobileNavMenu}
            >
              {menu.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavMenuElement;
