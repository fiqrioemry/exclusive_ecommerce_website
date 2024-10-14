import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdFavorite, MdOutlineMenu } from "react-icons/md";
import SearchInput from "../elements/SearchInput";

const Header = () => {
  return (
    <header className="fixed w-full py-4 border-b border-gray-200 ">
      <div className="container mx-auto flex justify-between items-center mb-3 lg:mb-0">
        {/* website logo */}
        <div className="logo ">
          <h1 className="text-xl lg:text-2xl font-primary font-semibold tracking-[5px]">
            Exclusive
          </h1>
        </div>

        {/* menu list */}
        <nav className="hidden lg:flex items-center justify-between  md:gap-x-3 lg:gap-x-6 max-w-[400px] text-md ">
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
        <div className="flex justify-around items-center max-w-[600px] gap-x-4 lg:gap-x-6 bg">
          {/* search input */}
          <div className="hidden md:flex">
            <SearchInput />
          </div>

          {/* favorite & cart */}
          <div className="flex items-center justify-between gap-x-4">
            <button>
              <MdFavorite className="text-lg lg:text-xl" />
            </button>
            <button>
              <BsCart3 className="text-lg lg:text-xl" />
            </button>
            <button>
              <MdOutlineMenu className="block md:hidden text-lg lg:text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center w-full bg-red-500 md:hidden">
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
