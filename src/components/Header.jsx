import React from "react";
import { Link } from "react-router-dom";
import { BsCart3, BsSearch } from "react-icons/bs";
import { MdFavorite, MdOutlineMenu } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed w-full py-4 border-b border-gray-200 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* website logo */}
        <div className="logo lg:w-[30%]">
          <h1 className="text-2xl font-primary font-semibold tracking-[5px]">
            Exclusive
          </h1>
        </div>

        {/* menu list */}
        <nav className="hidden lg:flex items-center justify-between  md:gap-x-3 lg:gap-x-6 max-w-[400px]">
          <button>
            <Link>Home</Link>
          </button>
          <button>
            <Link>Contact</Link>
          </button>
          <button>
            <Link>About</Link>
          </button>
          <button>
            <Link>Sign Up</Link>
          </button>
        </nav>
        {/* search input and cart */}
        <div className="flex justify-around items-center max-w-[600px] gap-x-4 lg:gap-x-6 bg">
          {/* search input */}
          <div className="">
            <form className="relative flex items-center min-w-[225px]">
              <input
                type="search"
                className="block outline-none w-full py-2 px-2  text-sm bg-[#F5F5F5] text-gray-900 border border-gray-300 rounded-md "
                placeholder="What are you looking ?"
                required
              />
              <BsSearch className="absolute right-3 " />
            </form>
          </div>

          {/* favorite & cart */}
          <div className="flex items-center justify-between gap-x-4">
            <MdFavorite className="w-5 h-5 md:w-6 md:h-6" />
            <BsCart3 className="w-5 h-5 md:w-6 md:h-6" />
            <MdOutlineMenu className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
