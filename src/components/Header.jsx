import { BsCart3 } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { MdOutlineMenu, MdLogout, MdHome } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import CartElement from "../elements/header/CartElement";
import NavMenuElement from "../elements/header/NavMenuElement";
import SearchInputElement from "../elements/header/SearchInputElement";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState("");
  const { cart } = useSelector((state) => state.cart);

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  useEffect(() => {
    setUser(Cookies.get("user"));
  });
  return (
    <header className="bg-white fixed top-0 w-full z-10 px-4 border-b">
      {cartOpen && (
        <div
          onClick={handleCart}
          className="hidden md:block fixed top-0 bottom-0 right-0 left-0 bg-secondary/50 z-10 transition-all duration-300"
        ></div>
      )}
      <CartElement cartOpen={cartOpen} handleCart={handleCart} />
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between py-4 max-h-[70px]">
          {/* website Logo */}
          <div className="lg:block hidden text-xl font-semibold tracking-[2px]">
            Exclusive
          </div>

          {/* search panel */}
          <SearchInputElement />

          {/* navigation bar */}
          <div className="flex flex-row justify-between gap-x-4 pl-4">
            {/* nav menu */}
            <NavMenuElement />

            {/* nav button */}
            <div className="flex flex-row justify-between items-center gap-x-3">
              {/* cart btn */}
              <button className="relative" onClick={handleCart}>
                <BsCart3 className="text-lg lg:text-xl" />
                <div
                  className={`${
                    cart ? "flex" : "hidden"
                  } items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-[12px] absolute -top-3 -right-3`}
                >
                  {cart.length}
                </div>
              </button>

              {/* user btn */}
              {user && (
                <div className="relative flex items-center">
                  <button className="px-2 text-lg">
                    <FaRegUserCircle />
                  </button>
                  <div className="absolute border top-8 right-0 bg-white shadow-xl rounded-md px-2 py-2 space-y-2">
                    <div className="w-full min-w-[160px] space-y-2 flex flex-col justify-center">
                      <div className="text-lg font-medium">
                        Welcome : Emilys
                      </div>
                      <button className="flex items-center gap-x-2 py-2 px-2 rounded-md hover:bg-gray-300/50 w-full">
                        <MdHome className="text-2xl" />
                        Profile
                      </button>
                      <button className="flex items-center gap-x-2 py-2 px-2 rounded-md hover:bg-gray-300/50 w-full">
                        <MdLogout className="text-2xl" />
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* toggle btn */}
              <button className="block md:hidden text-lg ">
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
