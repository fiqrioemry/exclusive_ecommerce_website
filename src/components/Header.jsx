import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdFavorite, MdOutlineMenu } from "react-icons/md";
import SearchInput from "../elements/SearchInput";
import MiniCartElement from "../elements/MiniCartElement";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10 ">
      <MiniCartElement />
      <section className="relative py-4 border-b-2">
        {/* navigation bar mobile  */}
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center gap-x-4 mb-3 lg:mb-0">
            {/* website logo */}
            <div className="hidden md:flex logo">
              <h1 className="text-xl lg:text-2xl font-primary font-semibold tracking-[5px]">
                Exclusive
              </h1>
            </div>

            {/* menu list */}
            <nav className="hidden lg:flex items-center justify-between md:gap-x-3 lg:gap-x-6 max-w-[400px] text-md ">
              <button>
                <Link to="/">Home</Link>
              </button>
              <button>
                <Link to="/contact">Contact</Link>
              </button>
              <button>
                <Link to="/about">About</Link>
              </button>
              <button>
                <Link to="/signup">Sign Up</Link>
              </button>
            </nav>

            {/* search input and cart */}
            <div className="flex justify-around w-full lg:w-auto items-center  gap-x-4 lg:gap-x-6">
              {/* search input */}
              <div className="w-full">
                <SearchInput />
              </div>

              {/* favorite & cart */}
              <div className="flex items-center justify-between gap-x-4 bg-red-500">
                <button>
                  <MdFavorite className="text-lg lg:text-xl" />
                </button>
                <button>
                  <BsCart3 className="text-lg lg:text-xl" />
                </button>
                <button>
                  <MdOutlineMenu className="block lg:hidden text-lg lg:text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
