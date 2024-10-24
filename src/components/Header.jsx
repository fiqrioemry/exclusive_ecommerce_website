import { BsCart3 } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { MdOutlineMenu, MdLogout, MdHome } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import CartElement from "../elements/header/CartElement";
import NavMenuElement from "../elements/header/NavMenuElement";
import SearchInputElement from "../elements/header/SearchInputElement";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    cartOpen: false,
    profileOpen: false,
    user: "",
  });

  const { cartOpen, profileOpen, user } = state;
  const { cart } = useSelector((state) => state.cart);

  const toggleState = (key) => {
    setState((prevState) => ({
      ...prevState,
      cartOpen: key === "cart" ? !prevState.cartOpen : false,
      profileOpen: key === "profile" ? !prevState.profileOpen : false,
    }));
  };

  const closeModals = () => {
    setState((prevState) => ({
      ...prevState,
      cartOpen: false,
      profileOpen: false,
    }));
  };

  const handleLogout = async () => {
    Cookies.remove("token");
    Cookies.remove("user");

    // Close profile modal on logout
    setState((prevState) => ({
      ...prevState,
      profileOpen: false,
    }));

    navigate("/signin");
  };

  useEffect(() => {
    const loggedInUser = Cookies.get("user");
    setState((prevState) => ({ ...prevState, user: loggedInUser }));
  }, []);

  return (
    <header className="bg-white fixed top-0 w-full z-10 px-4 border-b">
      {/* Overlay when cart or profile is open */}
      {(cartOpen || profileOpen) && (
        <div
          onClick={closeModals}
          className="hidden md:block fixed top-0 bottom-0 right-0 left-0 bg-secondary/50 z-10"
        ></div>
      )}

      <CartElement cartOpen={cartOpen} handleCart={() => toggleState("cart")} />

      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between py-4 max-h-[70px]">
          {/* Logo */}
          <div className="lg:block hidden text-xl font-semibold tracking-[2px]">
            Exclusive
          </div>

          {/* Search bar */}
          <SearchInputElement />

          {/* Navigation */}
          <div className="flex flex-row justify-between gap-x-4 pl-4">
            <NavMenuElement />

            {/* Buttons (Cart, Profile, Menu) */}
            <div className="flex flex-row justify-between items-center gap-x-3">
              {/* Cart button */}
              <button className="relative" onClick={() => toggleState("cart")}>
                <BsCart3 className="text-lg lg:text-xl" />
                <div
                  className={`${
                    cart.length ? "flex" : "hidden"
                  } items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-[12px] absolute -top-3 -right-3`}
                >
                  {cart.length}
                </div>
              </button>

              {/* Profile button */}
              {user && (
                <div className="relative flex items-center">
                  <button
                    onClick={() => toggleState("profile")}
                    className="px-2 text-lg"
                  >
                    <FaRegUserCircle />
                  </button>
                  {profileOpen && (
                    <div className="absolute border top-8 right-0 bg-white shadow-xl rounded-md px-2 py-2 space-y-2 z-20">
                      <div className="w-full min-w-[160px] space-y-2 flex flex-col justify-center">
                        <div className="text-lg font-medium">
                          Welcome: emilys
                        </div>
                        <button className="flex items-center gap-x-2 py-2 px-2 rounded-md hover:bg-gray-300/50 w-full">
                          <MdHome className="text-2xl" />
                          Profile
                        </button>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-x-2 py-2 px-2 rounded-md hover:bg-gray-300/50 w-full"
                        >
                          <MdLogout className="text-2xl" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Menu button */}
              <button className="block md:hidden text-lg">
                <MdOutlineMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
